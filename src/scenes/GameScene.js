import Phaser from 'phaser';
import { getLevelById, getNextLevel, mailGarden, markSceneComplete, levels } from '../data/levels.js';
import {
  clearLevelProgress,
  loadBonusIds,
  loadFoundIds,
  loadMuted,
  loadOnboarded,
  saveBonusIds,
  saveFoundIds,
  saveMuted,
  saveOnboarded
} from '../data/storage.js';
import { createPillButton, createStatusPill } from '../ui/Button.js';
import { setBackdrop } from '../ui/backdrop.js';
import { theme } from '../ui/theme.js';
import { playMusicForLevel, queueMusic } from '../audio/music.js';

const HINT_COOLDOWN_MS = 30000;
const HINT_DURATION_MS = 3600;
const NEAR_MISS_SNAP_RADIUS = 30;
const HUD_DEPTH = 20;
const UI_FONT = theme.font;
const MASCOT_KEY = 'mailBirdMascot';
const MASCOT_PATH = 'assets/characters/mail_bird_mascot.png';

export class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
    this.level = mailGarden;
    this.foundIds = new Set();
    this.objectSprites = new Map();
    this.checklistItems = new Map();
    this.bonusItems = new Map();
    this.foundBonusIds = new Set();
    this.hintReady = true;
    this.listOpen = false;
    this.listPanel = null;
    this.activeObjects = mailGarden.objects;
    this.isDaily = false;
    this.lastMissAt = 0;
    this.mainCompleteNoticeShown = false;
    this.finishButton = null;
  }

  init(data = {}) {
    this.level = getLevelById(data.levelId);
    this.isDaily = Boolean(data.daily);
    const baseObjects = this.isDaily ? this.level.objects.slice(0, 3) : this.level.objects;
    this.activeObjects = baseObjects.map((obj) => {
      if (!Array.isArray(obj.spawns) || obj.spawns.length === 0) return obj;
      const slot = obj.spawns[Math.floor(Math.random() * obj.spawns.length)];
      return { ...obj, x: slot.x ?? obj.x, y: slot.y ?? obj.y, scale: slot.scale ?? obj.scale };
    });
  }

  preload() {
    this.load.image(this.level.background.key, this.level.background.path);

    for (const object of this.level.objects) {
      this.load.image(object.key, object.asset);
    }

    for (const bonus of this.level.bonusEnvelopes) {
      if (bonus.key && bonus.asset) {
        this.load.image(bonus.key, bonus.asset);
      }
    }

    if (this.level.interactives) {
      for (const interactive of this.level.interactives) {
        if (interactive.key && interactive.asset) {
          this.load.image(interactive.key, interactive.asset);
        }
      }
    }

    this.load.image(MASCOT_KEY, MASCOT_PATH);
    this.load.audio('foundChime', 'assets/sounds/found.wav');
    this.load.audio('clickSfx', 'assets/sounds/click.mp3');
    this.load.audio('wrongSfx', 'assets/sounds/wrong.mp3');
    this.load.audio('hintSfx', 'assets/sounds/hint.mp3');
    this.load.audio('winSfx', 'assets/sounds/win.mp3');
    this.load.audio('coverOpenSfx', 'assets/sounds/cover_open.mp3');
    this.load.audio('bonusSfx', 'assets/sounds/bonus.mp3');
    queueMusic(this, this.level.id);

    if (this.level.foreground) {
      this.load.image(`fg-${this.level.id}`, this.level.foreground);
    }
  }

  create() {
    this.muted = loadMuted();
    this.sound.mute = this.muted;
    this.foundIds = this.loadProgress();
    this.objectSprites = new Map();
    this.checklistItems = new Map();
    this.bonusItems = new Map();
    this.foundBonusIds = this.loadBonusProgress();
    this.openedInteractives = new Set();
    this.hintReady = true;
    // Closed by default — the top HUD owns the screen until the player
    // explicitly opens the List, at which point HUD and List swap places.
    this.listOpen = false;
    this.listPanel = null;
    this.lastMissAt = 0;
    this.mainCompleteNoticeShown = false;

    setBackdrop(this.level.background.path);
    playMusicForLevel(this, this.level.id);
    this.add.image(640, 360, this.level.background.key).setDisplaySize(1280, 720);
    this.add.rectangle(640, 360, 1280, 720, 0xfff8dc, 0.05).setBlendMode(Phaser.BlendModes.SCREEN);
    this.add.rectangle(640, 20, 1280, 40, 0x315642, 0.14);
    this.add.rectangle(640, 700, 1280, 40, 0x315642, 0.14);

    this.createObjects();
    this.createInteractives();
    this.createBonusEnvelopes();
    this.createSceneSurprises();
    this.createMissTapZone();

    // Optional foreground occlusion layer drawn above objects but below HUD.
    if (this.level.foreground && this.textures.exists(`fg-${this.level.id}`)) {
      this.add.image(640, 360, `fg-${this.level.id}`).setDisplaySize(1280, 720).setDepth(8);
    }

    this.createHud();
    this.createGuide();
    this.updateHud();
    this.sayGuide('Find these');

    // Handle ESC key to pause
    this.input.keyboard.on('keydown-ESC', () => {
      this.openPause();
    });

    this.checkCompletionState(250);

    // Dual-camera setup so the HUD stays anchored while the painted scene
    // can zoom and pan. Classification happens once after all create logic.
    this.setupCameras();

    // Wire scene-level pan + wheel handlers (no-op until zoomed).
    this.input.on('pointermove', this.handleScenePan, this);
    this.input.on('wheel', this.handleSceneWheel, this);

    // First-run tutorial — only on the very first scene the player opens,
    // and only once per profile/device.
    if (this.level.id === 'mail-garden' && !loadOnboarded()) {
      this.time.delayedCall(700, () => this.runFirstRunTutorial());
    }

    this.initDevMode();
  }

  setupCameras() {
    this.worldLayer = this.add.layer();
    this.hudLayer = this.add.layer();

    // Anything already in the scene before this point gets sorted into the
    // right layer. Layers themselves are excluded from the snapshot.
    const snapshot = this.children.list.slice().filter(
      (c) => c !== this.worldLayer && c !== this.hudLayer
    );
    for (const child of snapshot) {
      if (child.getData && child.getData('hud')) {
        this.hudLayer.add(child);
      } else {
        this.worldLayer.add(child);
      }
    }

    // Main camera renders the world layer (zoomable). UI camera renders the
    // HUD layer at a fixed 1× zoom, on top.
    this.cameras.main.ignore(this.hudLayer);
    this.uiCam = this.cameras.add(0, 0, 1280, 720);
    this.uiCam.ignore(this.worldLayer);

    this.zoomLevel = 1;
    this.zoomed = false;
  }

  // Convenience: route dynamic runtime objects to the correct layer so they
  // continue to be classified correctly after the cameras are configured.
  addToHud(obj) {
    if (this.hudLayer) this.hudLayer.add(obj);
    return obj;
  }

  addToWorld(obj) {
    if (this.worldLayer) this.worldLayer.add(obj);
    return obj;
  }

  /**
   * Set the main camera's zoom, anchoring it on the given scene coords so
   * what was at (anchorX, anchorY) on screen stays at the same screen point.
   * Updates this.zoomed + button label, clamps pan within scene bounds.
   */
  applyZoom(newZoom, anchorWorldX, anchorWorldY) {
    if (!this.cameras || !this.cameras.main) return;
    const cam = this.cameras.main;
    const clamped = Phaser.Math.Clamp(newZoom, 1, 3);

    // Anchor: keep the world point (anchorWorldX, anchorWorldY) at its
    // current screen position after the zoom change.
    // Convert world point → screen point under the OLD camera:
    const screenX = (anchorWorldX - cam.scrollX) * cam.zoom;
    const screenY = (anchorWorldY - cam.scrollY) * cam.zoom;

    cam.setZoom(clamped);

    // Now solve scroll so (anchorWorldX - newScroll) * newZoom == screenX
    cam.scrollX = anchorWorldX - screenX / clamped;
    cam.scrollY = anchorWorldY - screenY / clamped;
    this.clampCameraScroll();

    this.zoomLevel = clamped;
    this.zoomed = clamped > 1.0001;
    if (this.zoomButton) {
      this.zoomButton.setLabel(this.zoomed ? '🔎' : '🔍');
    }
  }

  clampCameraScroll() {
    const cam = this.cameras.main;
    const viewW = cam.width / cam.zoom;
    const viewH = cam.height / cam.zoom;
    cam.scrollX = Phaser.Math.Clamp(cam.scrollX, 0, Math.max(0, 1280 - viewW));
    cam.scrollY = Phaser.Math.Clamp(cam.scrollY, 0, Math.max(0, 720 - viewH));
  }

  handleSceneWheel(pointer, _gameObjects, _dx, dy) {
    if (!this.cameras || !this.cameras.main) return;
    
    if (this.isDevMode && this.hoveredDevObject) {
      const scaleDelta = dy > 0 ? -0.002 : 0.002;
      const type = this.hoveredDevObject.getData('type');
      if (type === 'surprise') {
        this.hoveredDevObject.width = Math.max(10, this.hoveredDevObject.width + (dy > 0 ? -5 : 5));
        this.hoveredDevObject.height = Math.max(10, this.hoveredDevObject.height + (dy > 0 ? -5 : 5));
        this.hoveredDevObject.input.hitArea.width = this.hoveredDevObject.width;
        this.hoveredDevObject.input.hitArea.height = this.hoveredDevObject.height;
      } else if (this.hoveredDevObject.list && this.hoveredDevObject.list[1]) {
        const sprite = this.hoveredDevObject.list[1];
        const newScale = Math.max(0.005, Math.min(2.0, sprite.scale + scaleDelta));
        sprite.setScale(newScale);
        const hitWidth = Math.max(34, sprite.displayWidth);
        const hitHeight = Math.max(28, sprite.displayHeight);
        this.hoveredDevObject.input.hitArea.setTo(-hitWidth / 2, -hitHeight / 2, hitWidth, hitHeight);
      } else {
        const newScale = Math.max(0.005, Math.min(2.0, this.hoveredDevObject.scale + scaleDelta));
        this.hoveredDevObject.setScale(newScale);
        
        const shadow = this.hoveredDevObject.getData('shadow');
        if (shadow) {
          shadow.displayWidth = Math.max(22, this.hoveredDevObject.displayWidth * 0.62);
          shadow.displayHeight = Math.max(10, this.hoveredDevObject.displayHeight * 0.18);
          shadow.y = this.hoveredDevObject.y + Math.max(8, this.hoveredDevObject.displayHeight * 0.22);
        }
      }
      this.updateDevPanelInfo(this.hoveredDevObject);
      return;
    }

    const cam = this.cameras.main;
    // Convert pointer screen position → current world position
    const pointerObj = this.input.activePointer;
    const worldX = pointerObj.x / cam.zoom + cam.scrollX;
    const worldY = pointerObj.y / cam.zoom + cam.scrollY;
    // Scroll up (dy < 0) zooms in. Step size proportional to current zoom
    // so it feels smooth at any level.
    const step = 0.12 * cam.zoom;
    const targetZoom = cam.zoom + (dy < 0 ? step : -step);
    this.applyZoom(targetZoom, worldX, worldY);
  }

  handleScenePan(pointer) {
    if (this.isDevMode) return;
    if (!this.zoomed || !pointer.isDown) return;
    const cam = this.cameras.main;
    const dx = pointer.x - pointer.prevPosition.x;
    const dy = pointer.y - pointer.prevPosition.y;
    cam.scrollX -= dx / cam.zoom;
    cam.scrollY -= dy / cam.zoom;
    this.clampCameraScroll();
  }

  runFirstRunTutorial() {
    if (!this.activeObjects.length) return;
    const target = this.activeObjects.find((o) => !this.foundIds.has(o.id)) ?? this.activeObjects[0];
    const sprite = this.objectSprites.get(target.id);
    if (!sprite) return;

    // Soft dim overlay (non-interactive — clicks pass through to the scene)
    const overlay = this.add.rectangle(640, 360, 1280, 720, 0x14110b, 0.34).setDepth(30);

    // Speech bubble near the target — wider to fit the List hint.
    const bubbleX = Math.min(Math.max(sprite.x + 100, 260), 1020);
    const bubbleY = Math.max(sprite.y - 130, 190);
    const bubbleW = 340;
    const bubbleH = 108;
    const bubble = this.add.graphics().setDepth(31);
    bubble.fillStyle(0xfff7e3, 0.97);
    bubble.fillRoundedRect(bubbleX - bubbleW / 2, bubbleY - bubbleH / 2, bubbleW, bubbleH, 18);
    bubble.lineStyle(2, 0xc9a96e, 0.5);
    bubble.strokeRoundedRect(bubbleX - bubbleW / 2, bubbleY - bubbleH / 2, bubbleW, bubbleH, 18);

    const tip = this.add.text(bubbleX, bubbleY,
      'Tap the glowing item to find it!\n\nTap the List button up top\nto see what to look for.',
      { fontFamily: UI_FONT, fontSize: '15px', color: '#4a3a26', align: 'center' }
    ).setOrigin(0.5).setDepth(32);

    // Pulsing ring on the target
    const ring = this.add.ellipse(sprite.x, sprite.y, 100, 76)
      .setStrokeStyle(4, 0xfff0a8, 1)
      .setDepth(31);
    this.tweens.add({
      targets: ring, scale: 1.18, alpha: 0.4,
      yoyo: true, repeat: -1, duration: 700, ease: 'Sine.easeInOut'
    });

    // Skip link
    const skip = this.add.text(1220, 36, 'Skip', {
      fontFamily: UI_FONT, fontSize: '16px', color: '#fff4d6', stroke: '#1a1410', strokeThickness: 3
    }).setOrigin(1, 0.5).setDepth(33).setInteractive({ useHandCursor: true });

    const tutorialPieces = [overlay, bubble, tip, ring, skip];
    // Route to HUD layer so they aren't double-rendered (and aren't zoomed)
    // since they're created after setupCameras().
    for (const piece of tutorialPieces) this.addToHud(piece);
    const cleanup = () => {
      saveOnboarded();
      for (const piece of tutorialPieces) piece.destroy();
      this.input.off('pointerdown', firstClickCleanup);
    };

    // First pointerdown anywhere closes the tutorial. The click also reaches
    // whatever's underneath (an object's click zone, the miss-tap zone, etc.)
    // because the overlay is non-interactive.
    const firstClickCleanup = () => cleanup();
    this.input.once('pointerdown', firstClickCleanup);
    skip.on('pointerdown', () => { cleanup(); });
  }

  createObjects() {
    for (const object of this.activeObjects) {
      const glow = this.add.ellipse(object.x, object.y, 70, 54, 0xfff0a8, 0)
        .setDepth(4.5)
        .setBlendMode(Phaser.BlendModes.ADD)
        .setVisible(false);
      const sprite = this.add.image(object.x, object.y, object.key)
        .setScale(object.scale)
        .setDepth(5)
        .setAlpha(0.82)
        .setTint(0xd9cdb0);
      const shadow = this.add.ellipse(
        object.x + 2,
        object.y + Math.max(8, sprite.displayHeight * 0.22),
        Math.max(22, sprite.displayWidth * 0.62),
        Math.max(10, sprite.displayHeight * 0.18),
        0x2b1c12,
        0.24
      ).setDepth(4).setScale(1, 0.72);
      const hitWidth = Math.max(56, sprite.displayWidth * 1.5);
      const hitHeight = Math.max(44, sprite.displayHeight * 1.5);
      const clickZone = this.add.zone(object.x, object.y, hitWidth, hitHeight)
        .setInteractive()
        .setDepth(7);

      sprite.setData('objectId', object.id);
      sprite.setData('objectName', object.name);
      sprite.setData('shadow', shadow);
      sprite.setData('clickZone', clickZone);

      const isHidden = object.hiddenUnder && !this.openedInteractives.has(object.hiddenUnder);

      if (this.foundIds.has(object.id) || isHidden) {
        glow.setVisible(false);
        shadow.setVisible(false);
        sprite.setVisible(false);
        clickZone.setVisible(false);
        clickZone.disableInteractive();
      }

      clickZone.on('pointerdown', () => this.findObject(object));
      sprite.setData('glow', glow);
      this.objectSprites.set(object.id, sprite);
    }
  }

  createInteractives() {
    this.interactiveSprites = new Map();
    if (!this.level.interactives) return;

    for (const interactive of this.level.interactives) {
      const hiddenObjects = this.activeObjects.filter(obj => obj.hiddenUnder === interactive.id);
      const allFound = hiddenObjects.length > 0 && hiddenObjects.every(obj => this.foundIds.has(obj.id));

      const startOpen = allFound || this.openedInteractives.has(interactive.id);
      
      let currentX = interactive.x;
      let currentY = interactive.y;
      if (startOpen) {
        this.openedInteractives.add(interactive.id);
        if (interactive.type === 'slide-x') {
          currentX += interactive.slideDistance;
        } else if (interactive.type === 'slide-y') {
          currentY += interactive.slideDistance;
        }
      }

      const sprite = this.add.image(currentX, currentY, interactive.key)
        .setScale(interactive.scale)
        .setDepth(6)
        .setInteractive({ useHandCursor: true });

      sprite.setData('id', interactive.id);
      sprite.setData('config', interactive);
      sprite.setData('isOpen', startOpen);

      sprite.on('pointerdown', () => this.handleInteractiveTap(sprite));

      this.interactiveSprites.set(interactive.id, sprite);
    }
  }

  handleInteractiveTap(sprite) {
    const isOpen = sprite.getData('isOpen');
    if (isOpen) {
      this.closeInteractiveCover(sprite);
    } else {
      this.openInteractiveCover(sprite);
    }
  }

  openInteractiveCover(sprite, callback) {
    const config = sprite.getData('config');
    const isOpen = sprite.getData('isOpen');

    if (isOpen) {
      if (callback) callback();
      return;
    }

    sprite.setData('isOpen', true);
    this.openedInteractives.add(config.id);

    if (config.soundEffect && this.cache.audio.exists(config.soundEffect)) {
      this.sound.play(config.soundEffect, { volume: 0.5 });
    } else if (this.cache.audio.exists('coverOpenSfx')) {
      this.sound.play('coverOpenSfx', { volume: 0.35 });
    } else if (this.cache.audio.exists('foundChime')) {
      this.sound.play('foundChime', { volume: 0.3, detune: -600 });
    }

    this.tweens.add({
      targets: sprite,
      scaleX: config.scale * 1.15,
      scaleY: config.scale * 0.85,
      duration: 80,
      yoyo: true,
      ease: 'Quad.easeOut',
      onComplete: () => {
        let targetX = config.x;
        let targetY = config.y;
        if (config.type === 'slide-x') {
          targetX += config.slideDistance;
        } else if (config.type === 'slide-y') {
          targetY += config.slideDistance;
        }

        this.tweens.add({
          targets: sprite,
          x: targetX,
          y: targetY,
          scaleX: config.scale,
          scaleY: config.scale,
          duration: 400,
          ease: 'Back.easeOut',
          onComplete: () => {
            this.activeObjects.forEach(obj => {
              if (obj.hiddenUnder === config.id && !this.foundIds.has(obj.id)) {
                const objSprite = this.objectSprites.get(obj.id);
                if (objSprite) {
                  objSprite.setVisible(true);
                  const shadow = objSprite.getData('shadow');
                  if (shadow) shadow.setVisible(true);
                  const clickZone = objSprite.getData('clickZone');
                  if (clickZone) {
                    clickZone.setVisible(true);
                    clickZone.setInteractive();
                  }

                  objSprite.setScale(0);
                  this.tweens.add({
                    targets: objSprite,
                    scale: obj.scale,
                    duration: 300,
                    ease: 'Back.easeOut'
                  });

                  this.playSoftSparkle(objSprite.x, objSprite.y, 8, 0xfff0a8);
                }
              }
            });

            if (callback) callback();
          }
        });
      }
    });
  }

  closeInteractiveCover(sprite) {
    const config = sprite.getData('config');
    sprite.setData('isOpen', false);
    this.openedInteractives.delete(config.id);

    if (config.soundEffect && this.cache.audio.exists(config.soundEffect)) {
      this.sound.play(config.soundEffect, { volume: 0.5, detune: 200 });
    } else if (this.cache.audio.exists('coverOpenSfx')) {
      this.sound.play('coverOpenSfx', { volume: 0.25, detune: 200 });
    } else if (this.cache.audio.exists('foundChime')) {
      this.sound.play('foundChime', { volume: 0.2, detune: -400 });
    }

    const targetX = config.x;
    const targetY = config.y;

    this.tweens.add({
      targets: sprite,
      x: targetX,
      y: targetY,
      duration: 350,
      ease: 'Back.easeOut',
      onComplete: () => {
        this.activeObjects.forEach(obj => {
          if (obj.hiddenUnder === config.id && !this.foundIds.has(obj.id)) {
            const objSprite = this.objectSprites.get(obj.id);
            if (objSprite) {
              objSprite.setVisible(false);
              const glow = objSprite.getData('glow');
              if (glow) glow.setVisible(false);
              const shadow = objSprite.getData('shadow');
              if (shadow) shadow.setVisible(false);
              const clickZone = objSprite.getData('clickZone');
              if (clickZone) {
                clickZone.setVisible(false);
                clickZone.disableInteractive();
              }
            }
          }
        });
      }
    });
  }

  createHud() {
    // Left: single calm count pill
    this.countPill = createStatusPill(this, {
      x: 90,
      y: theme.hud.y,
      width: 110,
      height: 48,
      label: `0 / ${this.activeObjects.length}`,
      fontSize: 22,
      depth: HUD_DEPTH
    });

    this.createChecklistPanel();

    // Right cluster: same-style icon buttons, evenly spaced.
    // Zoom is mouse-wheel-only — no button needed in the HUD.
    const btnW = 96;
    const btnH = 48;
    const muteW = 56;
    const pauseW = 56;
    const gap = 12;
    const rightEdge = 1280 - 22;
    const homeX = rightEdge - btnW / 2;
    const pauseX = homeX - btnW / 2 - gap - pauseW / 2;
    const helpX = pauseX - pauseW / 2 - gap - btnW / 2;
    const listX = helpX - btnW - gap;
    const muteX = listX - btnW / 2 - gap - muteW / 2;

    this.muteButton = createPillButton(this, {
      x: muteX, y: theme.hud.y,
      width: muteW, height: btnH,
      label: this.muted ? '🔇' : '🔊', fontSize: 20,
      onClick: () => this.toggleMute(),
      depth: HUD_DEPTH
    });

    this.listButton = createPillButton(this, {
      x: listX, y: theme.hud.y,
      width: btnW, height: btnH,
      label: 'List', fontSize: 18,
      onClick: () => this.toggleListPanel(),
      depth: HUD_DEPTH
    });

    this.hintButton = createPillButton(this, {
      x: helpX, y: theme.hud.y,
      width: btnW, height: btnH,
      label: 'Help', fontSize: 18,
      onClick: () => this.showHint(),
      color: theme.color.creamSoft,
      depth: HUD_DEPTH
    });

    this.pauseButton = createPillButton(this, {
      x: pauseX, y: theme.hud.y,
      width: pauseW, height: btnH,
      label: '⏸', fontSize: 18,
      onClick: () => this.openPause(),
      depth: HUD_DEPTH
    });

    this.homeButton = createPillButton(this, {
      x: homeX, y: theme.hud.y,
      width: btnW, height: btnH,
      label: 'Home', fontSize: 18,
      onClick: () => this.scene.start('MenuScene'),
      depth: HUD_DEPTH
    });

    // HUD elements that hide while the List panel is open. The List button
    // sits behind the panel visually, so it joins the hideable set; the
    // panel's own × button is the close affordance.
    this.hudHideable = [this.countPill, this.muteButton, this.listButton, this.hintButton, this.pauseButton, this.homeButton];
    this.applyListVisibility();

    // Centered, only when complete — soft cream, not red
    this.finishButton = createPillButton(this, {
      x: 640, y: 670,
      width: 220, height: 64,
      label: 'Finished', fontSize: 26,
      onClick: () => {
        if (this.areMainObjectsComplete()) this.finishLevel();
      },
      color: theme.color.leaf,
      hoverColor: 0xd8fadf,
      depth: HUD_DEPTH + 2
    });
    this.finishButton.setVisible(false);

    // Tag every HUD container so the dual-camera setup at the end of create()
    // can render them with a separate non-zoomed camera.
    const hudContainers = [
      this.countPill.container, this.muteButton.container, this.listButton.container,
      this.hintButton.container, this.pauseButton.container,
      this.homeButton.container, this.listPanel, this.finishButton.container
    ];
    for (const c of hudContainers) {
      if (c && c.setData) c.setData('hud', true);
    }
  }

  applyListVisibility() {
    const showHud = !this.listOpen;
    if (!this.hudHideable) return;
    for (const el of this.hudHideable) {
      if (!el) continue;
      if (typeof el.setVisible === 'function') {
        el.setVisible(showHud);
      } else if (el.container && typeof el.container.setVisible === 'function') {
        el.container.setVisible(showHud);
      }
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    this.sound.mute = this.muted;
    saveMuted(this.muted);
    this.muteButton.setLabel(this.muted ? '🔇' : '🔊');
  }

  updateRemainingPulse() {
    // Intentionally disabled — pulsing remaining objects telegraphs their
    // location, which contradicts the "hidden objects should be subtle"
    // direction. Help button still provides a deliberate, opt-in hint.
  }

  createChecklistPanel() {
    // Horizontal strip docked near the top, centered. Sits below the top HUD
    // (HUD ends ~y=68) and above the painted scene's hidden objects
    // (objects sit at y >= ~200 in current scenes).
    const cardW = 76;
    const cardH = 76;
    const cardGap = 6;
    const itemCount = this.activeObjects.length;
    const itemsWidth = itemCount * cardW + (itemCount - 1) * cardGap;
    const headerH = 26;
    const footerInsetY = 4;
    const horizontalPadding = 16;

    const panelW = itemsWidth + horizontalPadding * 2;
    const panelH = headerH + cardH + 14;
    const panelCenterX = 640;
    // Dock flush at the top — replaces the HUD's screen space while open.
    const panelCenterY = 8 + panelH / 2;

    this.listPanel = this.add.container(panelCenterX, panelCenterY)
      .setDepth(HUD_DEPTH + 6)
      .setVisible(this.listOpen);

    // Drop shadow
    const shadow = this.add.graphics();
    shadow.fillStyle(0x2b1c12, 0.18);
    shadow.fillRoundedRect(-panelW / 2 + 3, -panelH / 2 + 5, panelW, panelH, 22);

    // Panel body — soft cream
    const bgGfx = this.add.graphics();
    bgGfx.fillStyle(0xfff7e3, 0.95);
    bgGfx.fillRoundedRect(-panelW / 2, -panelH / 2, panelW, panelH, 22);
    bgGfx.lineStyle(1, 0xc9a96e, 0.32);
    bgGfx.strokeRoundedRect(-panelW / 2, -panelH / 2, panelW, panelH, 22);
    this.listPanel.add([shadow, bgGfx]);

    // Header: title centered (with live count), bonus count to the left,
    // footer links to the right.
    const headerY = -panelH / 2 + 14;
    this.listTitleText = this.add.text(0, headerY, `Find these · 0/${this.activeObjects.length}`, {
      fontFamily: UI_FONT, fontSize: '13px', color: '#4a3a26'
    }).setOrigin(0.5);
    const title = this.listTitleText;

    this.bonusListText = this.add.text(
      -panelW / 2 + horizontalPadding, headerY,
      `${this.getBonusLabel()} 0/${this.level.bonusEnvelopes.length}`,
      { fontFamily: UI_FONT, fontSize: '11px', color: '#9a8568' }
    ).setOrigin(0, 0.5);

    // Close button — labeled pill, primary way out of the panel
    const closeW = 78;
    const closeH = 30;
    const closeRightX = panelW / 2 - horizontalPadding;
    const closeCenterX = closeRightX - closeW / 2;

    const closeShadow = this.add.graphics();
    closeShadow.fillStyle(0x2b1c12, 0.22);
    closeShadow.fillRoundedRect(closeCenterX - closeW / 2, headerY - closeH / 2 + 3, closeW, closeH, 15);

    const closeBg = this.add.graphics();
    const drawCloseBg = (color) => {
      closeBg.clear();
      closeBg.fillStyle(color, 1);
      closeBg.fillRoundedRect(closeCenterX - closeW / 2, headerY - closeH / 2, closeW, closeH, 15);
      closeBg.lineStyle(1.5, 0xc9a96e, 0.55);
      closeBg.strokeRoundedRect(closeCenterX - closeW / 2, headerY - closeH / 2, closeW, closeH, 15);
    };
    drawCloseBg(0xfff0d4);

    const closeLabel = this.add.text(closeCenterX, headerY, '✕  Close', {
      fontFamily: UI_FONT, fontSize: '14px', color: '#4a3a26'
    }).setOrigin(0.5);

    const closeHit = this.add.zone(closeCenterX, headerY, closeW, closeH + 6)
      .setInteractive({ useHandCursor: true });
    closeHit.on('pointerover', () => drawCloseBg(0xffe7a3));
    closeHit.on('pointerout', () => drawCloseBg(0xfff0d4));
    closeHit.on('pointerdown', () => this.toggleListPanel());

    // Place Finds/Reset to the LEFT of the close pill
    const finksRightX = closeCenterX - closeW / 2 - 10;
    const findsLink = this.add.text(finksRightX, headerY, 'Finds', {
      fontFamily: UI_FONT, fontSize: '12px', color: '#9a8568'
    }).setOrigin(1, 0.5).setInteractive({ useHandCursor: true });
    findsLink.on('pointerover', () => findsLink.setColor('#4a3a26'));
    findsLink.on('pointerout', () => findsLink.setColor('#9a8568'));
    findsLink.on('pointerdown', () => this.scene.start('DeskScene', { levelId: this.level.id }));

    const resetLink = this.add.text(finksRightX - 50, headerY, 'Reset', {
      fontFamily: UI_FONT, fontSize: '12px', color: '#9a8568'
    }).setOrigin(1, 0.5).setInteractive({ useHandCursor: true });
    resetLink.on('pointerover', () => resetLink.setColor('#4a3a26'));
    resetLink.on('pointerout', () => resetLink.setColor('#9a8568'));
    resetLink.on('pointerdown', () => this.restartCase());

    const headerDivider = this.add.graphics();
    headerDivider.lineStyle(1, 0xd9b673, 0.32);
    headerDivider.lineBetween(
      -panelW / 2 + 18, -panelH / 2 + headerH,
      panelW / 2 - 18, -panelH / 2 + headerH
    );

    this.listPanel.add([title, this.bonusListText, findsLink, resetLink, closeShadow, closeBg, closeLabel, closeHit, headerDivider]);

    // Row of vertical mini-cards (thumb on top, name below)
    const cardsTopY = -panelH / 2 + headerH + footerInsetY;
    const startX = -itemsWidth / 2 + cardW / 2;

    this.activeObjects.forEach((object, index) => {
      const x = startX + index * (cardW + cardGap);
      const yCenter = cardsTopY + cardH / 2;

      // Card body (graphics — redrawn on found state)
      const card = this.add.graphics();
      this.drawCard(card, cardW, cardH, x, yCenter, false);
      card.setData('cardX', x);
      card.setData('cardY', yCenter);

      // Thumbnail centered, slightly above middle
      const thumb = this.add.image(x, yCenter - 12, object.key).setDisplaySize(40, 40);

      // Name centered below thumb
      const shortName = this.shortenObjectName(object.name);
      const label = this.add.text(x, yCenter + 22, shortName, {
        fontFamily: UI_FONT, fontSize: '10px', color: '#4a3a26',
        align: 'center', wordWrap: { width: cardW - 8, useAdvancedWrap: true }
      }).setOrigin(0.5);

      // Check badge — top-right corner of card, hidden until found
      const mark = this.add.container(x + cardW / 2 - 10, yCenter - cardH / 2 + 10).setVisible(false);
      const badgeBg = this.add.circle(0, 0, 9, 0x7eb58a, 1).setStrokeStyle(1.5, 0xffffff, 0.85);
      const badgeCheck = this.add.text(0, 0, '✓', {
        fontFamily: UI_FONT, fontSize: '11px', color: '#ffffff'
      }).setOrigin(0.5);
      mark.add([badgeBg, badgeCheck]);

      this.listPanel.add([card, thumb, label, mark]);
      this.checklistItems.set(object.id, { card, mark, label, thumb });
    });

    // Cache card dims for later redraws
    this.checklistCardW = cardW;
    this.checklistCardH = cardH;
  }

  drawCard(graphics, w, h, x, y, found) {
    graphics.clear();
    graphics.fillStyle(found ? 0xe8efd6 : 0xfff0d4, found ? 0.7 : 0.85);
    graphics.fillRoundedRect(x - w / 2, y - h / 2, w, h, 12);
  }

  shortenObjectName(name) {
    // Drop common descriptive prefixes for cleaner card labels.
    const dropPrefixes = [
      'Magical', 'Glowing', 'Whimsy', 'Cozy', 'Sleepy', 'Tiny',
      'Dream', 'Lost', 'Soft', 'Lovely'
    ];
    let cleaned = name;
    for (const word of dropPrefixes) {
      cleaned = cleaned.replace(new RegExp(`^${word}\\s+`, 'i'), '');
    }
    // Names like "Porcelain Teacup" → "Teacup"; "Moon Coin" → "Moon Coin".
    if (cleaned.length > 12 && cleaned.includes(' ')) {
      const words = cleaned.split(' ');
      cleaned = words[words.length - 1];
    }
    return cleaned;
  }

  toggleListPanel() {
    this.listOpen = !this.listOpen;
    this.listPanel.setVisible(this.listOpen);
    // When the list is open, hide the rest of the top HUD so the top of
    // the screen isn't doubled-up. List button itself stays so the player
    // can always close. The list's title now carries the live count.
    this.applyListVisibility();
  }

  createBonusEnvelopes() {
    for (const envelope of this.level.bonusEnvelopes) {
      const container = this.add.container(envelope.x, envelope.y).setDepth(6);
      let hoverTarget;
      let usesSpriteBonus = false;
      let hitWidth = 32;
      let hitHeight = 24;

      if (envelope.key) {
        const shadow = this.add.ellipse(0, 16, 42, 10, 0x2b1c12, 0.22);
        const sprite = this.add.image(0, 0, envelope.key)
          .setScale(envelope.scale ?? 0.06)
          .setAlpha(0.96);
        hitWidth = Math.max(34, sprite.displayWidth);
        hitHeight = Math.max(28, sprite.displayHeight);
        hoverTarget = sprite;
        usesSpriteBonus = true;
        container.add([shadow, sprite]);
      } else {
        const paper = this.add.rectangle(0, 0, 28, 18, 0xf7df9a, 0.72)
          .setStrokeStyle(1, 0x72552a, 0.7)
          .setRotation(-0.12);
        const flap = this.add.triangle(0, 0, -13, -7, 0, 3, 13, -7, 0xe8c975, 0.62)
          .setRotation(-0.12);
        hoverTarget = paper;
        container.add([paper, flap]);
      }

      container.setInteractive(new Phaser.Geom.Rectangle(-hitWidth / 2, -hitHeight / 2, hitWidth, hitHeight), Phaser.Geom.Rectangle.Contains);
      container.setData('bonusId', envelope.id);

      if (this.foundBonusIds.has(envelope.id)) {
        container.setVisible(false);
        container.disableInteractive();
      }

      container.on('pointerdown', () => this.findBonusEnvelope(envelope, container));
      this.bonusItems.set(envelope.id, container);
    }
  }

  findBonusEnvelope(envelope, container) {
    if (this.isDevMode) return;
    if (this.foundBonusIds.has(envelope.id)) {
      return;
    }

    this.foundBonusIds.add(envelope.id);
    this.saveBonusProgress();
    if (this.cache.audio.exists('bonusSfx')) {
      this.sound.play('bonusSfx', { volume: 0.35 });
    }
    container.disableInteractive();
    this.showFoundToast(this.getBonusFoundText());
    this.sayGuide(this.getBonusFoundText());
    this.playSoftSparkle(container.x, container.y, 8);

    this.tweens.add({
      targets: container,
      y: container.y - 24,
      alpha: 0,
      scale: 1.25,
      duration: 320,
      ease: 'Sine.easeOut',
      onComplete: () => container.setVisible(false)
    });

    this.updateHud();
    this.checkCompletionState(650);
  }

  createSceneSurprises() {
    this.surpriseZones = [];
    if (!this.level.surprises) return;
    for (const surprise of this.level.surprises) {
      const w = surprise.width ?? 82;
      const h = surprise.height ?? 72;
      const zone = this.add.zone(surprise.x, surprise.y, w, h)
        .setInteractive({ useHandCursor: true })
        .setDepth(4);
      zone.setData('surpriseId', surprise.id);
      zone.setData('surpriseConfig', surprise);
      zone.on('pointerdown', () => this.playSceneSurprise(surprise));
      this.surpriseZones.push(zone);
    }
  }

  createMissTapZone() {
    this.add.zone(640, 390, 1280, 620)
      .setInteractive()
      .setDepth(1)
      .on('pointerdown', (pointer) => this.handleMissTap(pointer));
  }

  handleMissTap(pointer) {
    if (this.isDevMode) return;
    const now = this.time.now;
    if (now - this.lastMissAt < 700 || this.listOpen) {
      return;
    }

    const snappedObject = this.findNearbyObject(pointer.x, pointer.y);
    if (snappedObject) {
      this.findObject(snappedObject);
      return;
    }

    this.lastMissAt = now;
    this.sayGuide('Look!');
    this.playMissFeedback(pointer.x, pointer.y);
  }

  playSceneSurprise(surprise) {
    if (this.isDevMode) return;
    this.showFoundToast(surprise.label);
    this.sayGuide('Nice!');
    this.playSoftSparkle(surprise.x, surprise.y, 6);
  }

  findObject(object) {
    if (this.isDevMode) return;
    if (this.foundIds.has(object.id)) {
      return;
    }

    const sprite = this.objectSprites.get(object.id);
    const glow = sprite.getData('glow');
    const shadow = sprite.getData('shadow');
    const clickZone = sprite.getData('clickZone');
    this.foundIds.add(object.id);
    this.saveProgress();
    this.playFoundFeedback(sprite);
    this.showFoundToast(`${object.name}!`);
    this.sayGuide(this.getFoundActiveCount() >= this.activeObjects.length ? 'All done!' : 'Nice!');
    if (clickZone) {
      clickZone.disableInteractive();
      clickZone.setVisible(false);
    }

    this.tweens.add({
      targets: shadow,
      alpha: 0,
      duration: 220,
      ease: 'Sine.easeOut',
      onComplete: () => shadow.setVisible(false)
    });

    this.tweens.add({
      targets: sprite,
      alpha: 0,
      scale: sprite.scale * 1.24,
      duration: 260,
      ease: 'Sine.easeOut',
      onComplete: () => {
        sprite.setVisible(false);
        if (glow) {
          glow.setVisible(false);
        }
      }
    });

    this.updateHud();
    this.checkCompletionState(550);
  }

  checkCompletionState() {
    if (!this.areMainObjectsComplete()) {
      return;
    }

    this.enterBonusSearchMode();
  }

  areMainObjectsComplete() {
    return this.getFoundActiveCount() >= this.activeObjects.length;
  }

  enterBonusSearchMode() {
    if (this.mainCompleteNoticeShown) {
      return;
    }

    this.mainCompleteNoticeShown = true;
    if (this.cache.audio.exists('winSfx')) {
      this.sound.play('winSfx', { volume: 0.35 });
    }
    if (this.finishButton) {
      this.finishButton.setVisible(true);
    }
    this.showFoundToast('Finished!');
    this.sayGuide('All done!');
  }

  finishLevel() {
    markSceneComplete(this.level.id);
    const nextLevel = getNextLevel(this.level.id);
    if (nextLevel) {
      window.localStorage.removeItem(nextLevel.saveKey);
      window.localStorage.removeItem(nextLevel.bonusSaveKey);
      this.scene.start('LoadingScene', {
        targetScene: 'GameScene',
        targetData: { levelId: nextLevel.id },
        message: `Opening ${nextLevel.title}...`
      });
      return;
    }

    this.scene.start('WinScene', { levelId: this.level.id });
  }

  openPause() {
    this.sound.pauseAll();
    this.scene.pause('GameScene');
    this.scene.launch('PauseScene', { from: 'GameScene' });
  }

  // In-game mascot was disabled because it occluded the scene's lower-left
  // corner. These are safe no-ops — callers don't need to be changed.
  createGuide() {}
  sayGuide() {}
  guideHopTo() {}


  playFoundFeedback(sprite) {
    if (this.sound.get('foundChime') || this.cache.audio.exists('foundChime')) {
      this.sound.play('foundChime', { volume: 0.45, detune: 120 });
    }

    const sparkleCount = 10;
    for (let i = 0; i < sparkleCount; i += 1) {
      const angle = (Math.PI * 2 * i) / sparkleCount;
      const sparkle = this.add.star(sprite.x, sprite.y, 5, 4, 12, 0xfff0a8, 1)
        .setDepth(30)
        .setBlendMode(Phaser.BlendModes.ADD);
      this.addToWorld(sparkle);

      this.tweens.add({
        targets: sparkle,
        x: sprite.x + Math.cos(angle) * Phaser.Math.Between(34, 72),
        y: sprite.y + Math.sin(angle) * Phaser.Math.Between(34, 72),
        alpha: 0,
        scale: 0.2,
        duration: 560,
        ease: 'Cubic.easeOut',
        onComplete: () => sparkle.destroy()
      });
    }

    for (let i = 0; i < 3; i += 1) {
      const heart = this.add.text(sprite.x, sprite.y, '♥', {
        fontFamily: UI_FONT,
        fontSize: `${Phaser.Math.Between(18, 28)}px`,
        color: Phaser.Math.RND.pick(['#ffd1dc', '#fff0a8', '#bdf3d3'])
      }).setOrigin(0.5).setDepth(31);
      this.addToWorld(heart);

      this.tweens.add({
        targets: heart,
        x: sprite.x + Phaser.Math.Between(-58, 58),
        y: sprite.y + Phaser.Math.Between(-72, -28),
        alpha: 0,
        scale: 1.4,
        duration: 650,
        ease: 'Sine.easeOut',
        onComplete: () => heart.destroy()
      });
    }
  }

  playSoftSparkle(x, y, count, color = 0xffe7a3) {
    for (let i = 0; i < count; i += 1) {
      const sparkle = this.add.circle(x, y, Phaser.Math.Between(3, 6), color, 0.9)
        .setDepth(32)
        .setBlendMode(Phaser.BlendModes.ADD);
      this.addToWorld(sparkle);

      this.tweens.add({
        targets: sparkle,
        x: x + Phaser.Math.Between(-34, 34),
        y: y + Phaser.Math.Between(-28, 20),
        alpha: 0,
        scale: 0.3,
        duration: 420,
        ease: 'Sine.easeOut',
        onComplete: () => sparkle.destroy()
      });
    }
  }

  playMissFeedback(x, y) {
    if (this.cache.audio.exists('wrongSfx')) {
      this.sound.play('wrongSfx', { volume: 0.25 });
    } else if (this.sound.get('foundChime') || this.cache.audio.exists('foundChime')) {
      this.sound.play('foundChime', { volume: 0.16, detune: -900 });
    }

    const ripple = this.add.circle(x, y, 16)
      .setStrokeStyle(4, 0xbfe8ff, 0.95)
      .setDepth(33);
    const dot = this.add.circle(x, y, 5, 0xbfe8ff, 0.72)
      .setDepth(33);
    this.addToWorld(ripple);
    this.addToWorld(dot);

    this.tweens.add({
      targets: ripple,
      radius: 42,
      alpha: 0,
      duration: 420,
      ease: 'Sine.easeOut',
      onComplete: () => ripple.destroy()
    });

    this.tweens.add({
      targets: dot,
      alpha: 0,
      scale: 0.35,
      duration: 260,
      ease: 'Sine.easeOut',
      onComplete: () => dot.destroy()
    });
  }

  showFoundToast(name) {
    if (this.toast) {
      this.toast.destroy();
    }

    const toast = this.add.container(720, 622).setDepth(40).setAlpha(0);
    const bg = this.add.rectangle(0, 0, 440, 54, 0x1b2a22, 0.84)
      .setStrokeStyle(2, 0xf0d27d, 0.68);
    const text = this.add.text(0, 0, name, {
      fontFamily: UI_FONT,
      fontSize: '20px',
      color: '#fff0c8',
      align: 'center',
      wordWrap: { width: 400, useAdvancedWrap: true }
    }).setOrigin(0.5);
    toast.add([bg, text]);
    this.toast = toast;
    this.addToHud(toast);

    this.tweens.add({
      targets: toast,
      alpha: 1,
      y: 604,
      duration: 160,
      ease: 'Sine.easeOut',
      yoyo: true,
      hold: 850,
      onComplete: () => toast.destroy()
    });
  }

  showHint() {
    if (!this.hintReady) {
      return;
    }

    if (this.cache.audio.exists('hintSfx')) {
      this.sound.play('hintSfx', { volume: 0.3 });
    }

    const remaining = this.activeObjects.filter((object) => !this.foundIds.has(object.id));
    if (remaining.length === 0) {
      this.showBonusHint();
      return;
    }

    const object = remaining[0];
    const sprite = this.objectSprites.get(object.id);

    if (object.hiddenUnder && !this.openedInteractives.has(object.hiddenUnder)) {
      const coverSprite = this.interactiveSprites.get(object.hiddenUnder);
      if (coverSprite) {
        this.openInteractiveCover(coverSprite, () => {
          this.highlightHintedObject(object, sprite);
        });
        this.startHintCooldown();
        return;
      }
    }

    this.highlightHintedObject(object, sprite);
    this.startHintCooldown();
  }

  highlightHintedObject(object, sprite) {
    const glow = sprite.getData('glow');
    this.showFoundToast('Look!');
    this.sayGuide('Look!');
    this.guideHopTo(sprite);
    this.playHintBeam(sprite);
    if (glow) {
      glow.setVisible(true).setAlpha(0.62).setScale(1.25);
      this.tweens.add({
        targets: glow,
        alpha: 0.14,
        scale: 1.85,
        yoyo: true,
        repeat: 6,
        duration: 360,
        ease: 'Sine.easeInOut',
        onComplete: () => glow.setVisible(false)
      });
    }
    const ring = this.add.ellipse(sprite.x, sprite.y, Math.max(86, sprite.displayWidth + 48), Math.max(68, sprite.displayHeight + 38))
      .setStrokeStyle(7, 0xffef8a, 1)
      .setDepth(25);
    this.addToWorld(ring);

    sprite.setTint(0xfff0a4);
    this.tweens.add({
      targets: ring,
      scale: 1.34,
      alpha: 0.18,
      yoyo: true,
      repeat: 6,
      duration: 360,
      ease: 'Sine.easeInOut'
    });

    this.time.delayedCall(HINT_DURATION_MS, () => {
      ring.destroy();
      if (!this.foundIds.has(object.id)) {
        sprite.clearTint();
      }
    });
  }

  playHintBeam(sprite) {
    const quadrantX = sprite.x < 640 ? 320 : 960;
    const quadrantY = sprite.y < 360 ? 210 : 530;
    const beam = this.add.ellipse(quadrantX, quadrantY, 430, 250, 0xffef8a, 0.12)
      .setDepth(3)
      .setBlendMode(Phaser.BlendModes.ADD);
    const arrow = this.add.triangle(sprite.x, sprite.y - 82, -18, 22, 18, 22, 0, -20, 0xffef8a, 0.95)
      .setDepth(34);
    this.addToWorld(beam);
    this.addToWorld(arrow);

    this.tweens.add({
      targets: beam,
      alpha: 0.02,
      scale: 1.18,
      yoyo: true,
      repeat: 4,
      duration: 420,
      ease: 'Sine.easeInOut',
      onComplete: () => beam.destroy()
    });

    this.tweens.add({
      targets: arrow,
      y: arrow.y - 18,
      alpha: 0,
      yoyo: true,
      repeat: 2,
      duration: 500,
      ease: 'Sine.easeInOut',
      onComplete: () => arrow.destroy()
    });

    for (let i = 0; i < 18; i += 1) {
      this.time.delayedCall(i * 70, () => {
        this.playSoftSparkle(sprite.x + Phaser.Math.Between(-42, 42), sprite.y + Phaser.Math.Between(-34, 34), 1, 0xffef8a);
      });
    }
  }

  showBonusHint() {
    const remainingBonus = this.level.bonusEnvelopes.filter((bonus) => !this.foundBonusIds.has(bonus.id));
    if (remainingBonus.length === 0) {
      return;
    }

    const bonus = remainingBonus[0];
    const container = this.bonusItems.get(bonus.id);
    if (!container) {
      return;
    }

    if (bonus.hiddenUnder && !this.openedInteractives.has(bonus.hiddenUnder)) {
      const coverSprite = this.interactiveSprites.get(bonus.hiddenUnder);
      if (coverSprite) {
        this.openInteractiveCover(coverSprite, () => {
          this.highlightBonusHint(bonus, container);
        });
        this.startHintCooldown();
        return;
      }
    }

    this.highlightBonusHint(bonus, container);
    this.startHintCooldown();
  }

  highlightBonusHint(bonus, container) {
    this.showFoundToast('Look!');
    this.sayGuide('Look!');
    this.playHintBeam(container);
    this.playSoftSparkle(container.x, container.y, 18, 0x9de3ff);
  }

  findNearbyObject(x, y) {
    let bestObject = null;
    let bestDistance = NEAR_MISS_SNAP_RADIUS;

    for (const object of this.activeObjects) {
      if (this.foundIds.has(object.id)) {
        continue;
      }
      const distance = Phaser.Math.Distance.Between(x, y, object.x, object.y);
      if (distance <= bestDistance) {
        bestObject = object;
        bestDistance = distance;
      }
    }

    return bestObject;
  }

  startHintCooldown() {
    this.hintReady = false;
    this.hintButton.setEnabled(false);

    this.time.delayedCall(HINT_COOLDOWN_MS, () => {
      this.hintReady = true;
      this.hintButton.setEnabled(true);
    });
  }

  updateHud() {
    const found = this.getFoundActiveCount();
    const total = this.activeObjects.length;
    this.countPill.setText(`${found} / ${total}`);
    if (this.listTitleText) {
      this.listTitleText.setText(`Find these · ${found}/${total}`);
    }
    if (this.bonusListText) {
      this.bonusListText.setText(`${this.getBonusLabel()} ${this.foundBonusIds.size}/${this.level.bonusEnvelopes.length}`);
    }

    for (const object of this.activeObjects) {
      const item = this.checklistItems.get(object.id);
      if (!item) continue;
      const found = this.foundIds.has(object.id);

      // Green check badge only when found
      item.mark.setVisible(found);

      // Name fade when found
      item.label.setColor(found ? '#8a9d8e' : '#4a3a26');
      item.label.setAlpha(found ? 0.65 : 1);

      // Thumb desaturate + fade when found
      item.thumb.setAlpha(found ? 0.4 : 1);
      if (found) item.thumb.setTint(0xa8b0a4); else item.thumb.clearTint();

      // Redraw card background with the right state color
      const cardX = item.card.getData('cardX');
      const cardY = item.card.getData('cardY');
      if (cardX != null && cardY != null) {
        this.drawCard(item.card, this.checklistCardW, this.checklistCardH, cardX, cardY, found);
      }
    }

    this.updateRemainingPulse();
  }

  getFoundActiveCount() {
    return this.activeObjects.filter((object) => this.foundIds.has(object.id)).length;
  }

  getBonusLabel() {
    return this.level.bonusLabel ?? 'Notes';
  }

  getBonusFoundText() {
    return this.level.bonusFoundText ?? 'Note!';
  }

  restartCase() {
    clearLevelProgress(this.level);
    this.scene.restart({ daily: this.isDaily, levelId: this.level.id });
  }

  loadProgress() { return loadFoundIds(this.level); }
  saveProgress() { saveFoundIds(this.level, this.foundIds); }
  loadBonusProgress() { return loadBonusIds(this.level); }
  saveBonusProgress() { saveBonusIds(this.level, this.foundBonusIds); }

  initDevMode() {
    this.isDevMode = false;
    this.hoveredDevObject = null;
    this.selectedDevObject = null;
    this.devGraphics = this.add.graphics().setDepth(15);
    this.devGridGfx = this.add.graphics().setDepth(2);
    this.showDevGrid = false;

    // Keyboard events
    this.input.keyboard.on('keydown-D', (event) => {
      this.toggleDevMode();
    });

    // Arrow keys nudge
    this.input.keyboard.on('keydown-UP', (event) => {
      if (this.isDevMode && this.hoveredDevObject) {
        event.preventDefault();
        this.nudgeDevObject(0, event.shiftKey ? -5 : -1);
      }
    });
    this.input.keyboard.on('keydown-DOWN', (event) => {
      if (this.isDevMode && this.hoveredDevObject) {
        event.preventDefault();
        this.nudgeDevObject(0, event.shiftKey ? 5 : 1);
      }
    });
    this.input.keyboard.on('keydown-LEFT', (event) => {
      if (this.isDevMode && this.hoveredDevObject) {
        event.preventDefault();
        this.nudgeDevObject(event.shiftKey ? -5 : -1, 0);
      }
    });
    this.input.keyboard.on('keydown-RIGHT', (event) => {
      if (this.isDevMode && this.hoveredDevObject) {
        event.preventDefault();
        this.nudgeDevObject(event.shiftKey ? 5 : 1, 0);
      }
    });

    // Scale keys [ and ]
    this.input.keyboard.on('keydown-OPEN_BRACKET', (event) => {
      if (this.isDevMode && this.hoveredDevObject) {
        this.scaleDevObject(-0.01);
      }
    });
    this.input.keyboard.on('keydown-CLOSED_BRACKET', (event) => {
      if (this.isDevMode && this.hoveredDevObject) {
        this.scaleDevObject(0.01);
      }
    });

    // Drag-and-drop setup for Phaser
    this.input.on('dragstart', (pointer, gameObject) => {
      if (!this.isDevMode) return;
      this.hoveredDevObject = gameObject;
      this.selectedDevObject = gameObject;
      this.updateDevPanelInfo(gameObject);
    });

    this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
      if (!this.isDevMode) return;
      
      const type = gameObject.getData('type');
      if (type === 'surprise') {
        gameObject.x = Math.round(dragX);
        gameObject.y = Math.round(dragY);
      } else if (gameObject.list && gameObject.list[1]) {
        // Container
        gameObject.x = Math.round(dragX);
        gameObject.y = Math.round(dragY);
      } else {
        // Regular sprite
        gameObject.x = Math.round(dragX);
        gameObject.y = Math.round(dragY);
        const clickZone = gameObject.getData('clickZone');
        if (clickZone) {
          clickZone.x = gameObject.x;
          clickZone.y = gameObject.y;
        }
        this.syncObjectGraphics(gameObject);
      }
      this.updateDevPanelInfo(gameObject);
      this.drawDevHighlights();
    });

    this.input.on('dragend', (pointer, gameObject) => {
      if (!this.isDevMode) return;
      this.updateDevPanelInfo(gameObject);
      this.drawDevHighlights();
    });

    // Check if session storage indicates starting in dev mode
    const startInDevMode = window.sessionStorage.getItem('whimsy-hollow:dev-mode') === 'true';
    if (startInDevMode) {
      this.time.delayedCall(100, () => {
        this.toggleDevMode();
      });
    }
  }

  toggleDevMode() {
    this.isDevMode = !this.isDevMode;
    this.hoveredDevObject = null;
    this.selectedDevObject = null;

    if (this.isDevMode) {
      this.showFoundToast("Editor Mode Active");
      
      // Make all object sprites visible, interactive, and draggable
      this.objectSprites.forEach((sprite, id) => {
        sprite.setVisible(true);
        sprite.setInteractive({ useHandCursor: true });
        this.input.setDraggable(sprite, true);
        sprite.setData('type', 'sprite');
        
        // Hide standard click zone
        const clickZone = sprite.getData('clickZone');
        if (clickZone) {
          clickZone.disableInteractive();
          clickZone.setVisible(false);
        }

        // Show shadow
        const shadow = sprite.getData('shadow');
        if (shadow) shadow.setVisible(true);

        // Hover events
        sprite.on('pointerover', () => {
          if (this.isDevMode) {
            this.hoveredDevObject = sprite;
            this.updateDevPanelInfo(sprite);
            this.drawDevHighlights();
          }
        });
        sprite.on('pointerout', () => {
          if (this.isDevMode && this.hoveredDevObject === sprite) {
            this.hoveredDevObject = null;
            this.drawDevHighlights();
          }
        });
      });

      // Make bonus containers visible and draggable
      this.bonusItems.forEach((container, id) => {
        container.setVisible(true);
        container.setInteractive();
        this.input.setDraggable(container, true);
        container.setData('type', 'bonus');
        
        container.on('pointerover', () => {
          if (this.isDevMode) {
            this.hoveredDevObject = container;
            this.updateDevPanelInfo(container);
            this.drawDevHighlights();
          }
        });
        container.on('pointerout', () => {
          if (this.isDevMode && this.hoveredDevObject === container) {
            this.hoveredDevObject = null;
            this.drawDevHighlights();
          }
        });
      });

      // Make surprise zones visible (debug rectangle) and draggable
      if (this.surpriseZones) {
        this.surpriseZones.forEach((zone) => {
          zone.setVisible(true);
          zone.setInteractive();
          this.input.setDraggable(zone, true);
          zone.setData('type', 'surprise');
          
          zone.on('pointerover', () => {
            if (this.isDevMode) {
              this.hoveredDevObject = zone;
              this.updateDevPanelInfo(zone);
              this.drawDevHighlights();
            }
          });
          zone.on('pointerout', () => {
            if (this.isDevMode && this.hoveredDevObject === zone) {
              this.hoveredDevObject = null;
              this.drawDevHighlights();
            }
          });
        });
      }

      this.createDevPanelDOM();
      this.drawDevGrid();
      this.drawDevHighlights();
    } else {
      this.showFoundToast("Editor Mode Disabled");
      
      // Clear storage dev mode toggle
      window.sessionStorage.removeItem('whimsy-hollow:dev-mode');

      // Cleanup drag & interactive states
      this.objectSprites.forEach((sprite, id) => {
        const found = this.foundIds.has(id);
        const object = this.activeObjects.find(o => o.id === id);
        const isHidden = object.hiddenUnder && !this.openedInteractives.has(object.hiddenUnder);
        sprite.setVisible(!found && !isHidden);
        
        sprite.disableInteractive();
        this.input.setDraggable(sprite, false);
        sprite.off('pointerover');
        sprite.off('pointerout');

        // Restore standard click zone
        const clickZone = sprite.getData('clickZone');
        if (clickZone && !found && !isHidden) {
          clickZone.setInteractive();
          clickZone.setVisible(true);
        }

        // Restore shadow visibility
        const shadow = sprite.getData('shadow');
        if (shadow) shadow.setVisible(!found && !isHidden);
      });

      this.bonusItems.forEach((container, id) => {
        const found = this.foundBonusIds.has(id);
        container.setVisible(!found);
        if (found) {
          container.disableInteractive();
        } else {
          container.setInteractive();
        }
        this.input.setDraggable(container, false);
        container.off('pointerover');
        container.off('pointerout');
      });

      if (this.surpriseZones) {
        this.surpriseZones.forEach((zone) => {
          zone.setInteractive();
          this.input.setDraggable(zone, false);
          zone.off('pointerover');
          zone.off('pointerout');
        });
      }

      // Remove DOM panel & clean graphics
      if (this.devPanelEl) {
        this.devPanelEl.remove();
        this.devPanelEl = null;
      }
      this.devGraphics.clear();
      this.devGridGfx.clear();
    }
  }

  drawDevHighlights() {
    this.devGraphics.clear();
    if (!this.isDevMode) return;

    // Draw borders around all surprise zones first so the user can see them
    if (this.surpriseZones) {
      this.surpriseZones.forEach((zone) => {
        const isHovered = this.hoveredDevObject === zone;
        this.devGraphics.lineStyle(2, isHovered ? 0xff0000 : 0xffa500, 0.7);
        this.devGraphics.strokeRect(zone.x - zone.width / 2, zone.y - zone.height / 2, zone.width, zone.height);
      });
    }

    // Highlight hovered object
    if (this.hoveredDevObject) {
      const obj = this.hoveredDevObject;
      const type = obj.getData('type');
      this.devGraphics.lineStyle(3, 0x00ff00, 1.0);
      
      if (type === 'surprise') {
        this.devGraphics.strokeRect(obj.x - obj.width / 2 - 4, obj.y - obj.height / 2 - 4, obj.width + 8, obj.height + 8);
      } else if (type === 'bonus') {
        const width = 64;
        const height = 48;
        this.devGraphics.strokeRect(obj.x - width / 2, obj.y - height / 2, width, height);
      } else {
        const bounds = obj.getBounds();
        this.devGraphics.strokeRect(bounds.x - 4, bounds.y - 4, bounds.width + 8, bounds.height + 8);
      }
    }
  }

  drawDevGrid() {
    this.devGridGfx.clear();
    if (!this.isDevMode || !this.showDevGrid) return;

    this.devGridGfx.lineStyle(1, 0x999999, 0.25);
    
    for (let y = 0; y < 720; y += 50) {
      this.devGridGfx.lineBetween(0, y, 1280, y);
    }
    
    for (let x = 0; x < 1280; x += 50) {
      this.devGridGfx.lineBetween(x, 0, x, 720);
    }
  }

  createDevPanelDOM() {
    if (this.devPanelEl) this.devPanelEl.remove();

    const el = document.createElement('div');
    el.className = 'dev-editor-panel';
    el.style.cssText = `
      position: absolute;
      top: 16px;
      left: 16px;
      z-index: 10000;
      width: 320px;
      background: rgba(30, 41, 35, 0.85);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(201, 169, 110, 0.4);
      border-radius: 14px;
      color: #fff4d6;
      padding: 16px;
      font-family: system-ui, -apple-system, sans-serif;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
      pointer-events: auto;
    `;

    const levelOptions = levels.map(l => 
      `<option value="${l.id}" ${l.id === this.level.id ? 'selected' : ''}>${l.title.replace('Whimsy Hollow ', '')}</option>`
    ).join('');

    el.innerHTML = `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px; border-bottom:1px solid rgba(201, 169, 110, 0.2); padding-bottom:8px;">
        <span style="font-size:16px; font-weight:bold; color:#f0d27d;">Hollow Level Editor</span>
        <button id="dev-close-btn" style="background:none; border:none; color:#c9a96e; cursor:pointer; font-size:16px;">✕</button>
      </div>

      <div style="margin-bottom:12px;">
        <div style="font-size:12px; color:#eadfc0; margin-bottom:4px;">Level Select</div>
        <select id="dev-level-select" style="background:rgba(0,0,0,0.4); border:1px solid rgba(201, 169, 110, 0.3); border-radius:6px; color:#ffffff; padding:6px; font-size:13px; width:100%; cursor:pointer;">
          ${levelOptions}
        </select>
      </div>

      <div style="margin-bottom:12px;">
        <div style="font-size:12px; color:#eadfc0; margin-bottom:4px;">Selected Object</div>
        <div id="dev-obj-name" style="font-size:14px; font-weight:bold; color:#ffffff; min-height:18px;">None (Hover/Click to select)</div>
      </div>

      <div style="margin-bottom:12px; display:flex; gap:8px;">
        <div style="flex:1;">
          <div style="font-size:11px; color:#eadfc0;">X Coords</div>
          <input type="number" id="dev-obj-x" style="background:rgba(0,0,0,0.3); border:1px solid rgba(201, 169, 110, 0.3); border-radius:6px; color:#ffffff; padding:6px; font-size:13px; width:90%;" disabled />
        </div>
        <div style="flex:1;">
          <div style="font-size:11px; color:#eadfc0;">Y Coords</div>
          <input type="number" id="dev-obj-y" style="background:rgba(0,0,0,0.3); border:1px solid rgba(201, 169, 110, 0.3); border-radius:6px; color:#ffffff; padding:6px; font-size:13px; width:90%;" disabled />
        </div>
        <div style="flex:1;">
          <div style="font-size:11px; color:#eadfc0;">Scale</div>
          <input type="number" step="0.01" id="dev-obj-scale" style="background:rgba(0,0,0,0.3); border:1px solid rgba(201, 169, 110, 0.3); border-radius:6px; color:#ffffff; padding:6px; font-size:13px; width:90%;" disabled />
        </div>
      </div>

      <div style="margin-bottom:12px; display:flex; align-items:center; gap:8px;">
        <input type="checkbox" id="dev-grid-chk" style="cursor:pointer;" ${this.showDevGrid ? 'checked' : ''} />
        <label for="dev-grid-chk" style="font-size:13px; color:#eadfc0; cursor:pointer; user-select:none;">Show Layout Grid (50px)</label>
      </div>

      <div style="display:flex; flex-direction:column; gap:8px;">
        <button id="dev-copy-btn" style="background:#315642; border:1px solid #c9a96e; border-radius:8px; color:#fff4d6; padding:8px; font-size:13px; cursor:pointer; transition:all 0.2s;">📋 Copy Level JS Code</button>
        <button id="dev-view-btn" style="background:rgba(201, 169, 110, 0.1); border:1px solid #c9a96e; border-radius:8px; color:#fff4d6; padding:8px; font-size:13px; cursor:pointer; transition:all 0.2s;">🔍 View Code Modal</button>
      </div>

      <div style="background:rgba(0,0,0,0.25); border-radius:8px; padding:10px; font-size:11px; line-height:1.4; margin-top:12px; border:1px solid rgba(201, 169, 110, 0.1);">
        <span style="color:#f0d27d; font-weight:bold;">Controls:</span><br/>
        • <b style="color:#ffffff;">Drag</b> items with mouse.<br/>
        • Hover + <b style="color:#ffffff;">Scroll Wheel</b> / <b style="color:#ffffff;">[ ]</b> keys to scale.<br/>
        • Hover + <b style="color:#ffffff;">Arrow Keys</b> to nudge 1px (+Shift for 5px).<br/>
        • Press <b style="color:#ffffff;">D</b> to toggle Editor Mode.
      </div>
    `;

    document.body.appendChild(el);
    this.devPanelEl = el;

    document.getElementById('dev-close-btn').addEventListener('click', () => this.toggleDevMode());
    
    document.getElementById('dev-level-select').addEventListener('change', (e) => {
      window.sessionStorage.setItem('whimsy-hollow:dev-mode', 'true');
      this.scene.start('GameScene', { levelId: e.target.value });
    });

    const gridChk = document.getElementById('dev-grid-chk');
    gridChk.addEventListener('change', (e) => {
      this.showDevGrid = e.target.checked;
      this.drawDevGrid();
    });

    document.getElementById('dev-copy-btn').addEventListener('click', () => {
      const code = this.generateLevelJS();
      navigator.clipboard.writeText(code).then(() => {
        this.showFoundToast("Copied to Clipboard!");
      }).catch(err => {
        alert("Clipboard error. Use View Code Modal instead.");
      });
    });

    document.getElementById('dev-view-btn').addEventListener('click', () => {
      const code = this.generateLevelJS();
      this.showDevCodeModal(code);
    });

    const xIn = document.getElementById('dev-obj-x');
    const yIn = document.getElementById('dev-obj-y');
    const scIn = document.getElementById('dev-obj-scale');

    const updateObjFromInputs = () => {
      const obj = this.hoveredDevObject || this.selectedDevObject;
      if (!obj) return;
      const type = obj.getData('type');
      
      const newX = parseInt(xIn.value, 10);
      const newY = parseInt(yIn.value, 10);
      const newScale = parseFloat(scIn.value);

      if (!isNaN(newX)) {
        obj.x = newX;
        if (type === 'sprite') {
          const cz = obj.getData('clickZone');
          if (cz) cz.x = newX;
        }
      }
      if (!isNaN(newY)) {
        obj.y = newY;
        if (type === 'sprite') {
          const cz = obj.getData('clickZone');
          if (cz) cz.y = newY;
        }
      }
      if (!isNaN(newScale)) {
        if (type === 'surprise') {
          // Surprises don't scale
        } else if (obj.list && obj.list[1]) {
          const sprite = obj.list[1];
          sprite.setScale(newScale);
          const hitWidth = Math.max(34, sprite.displayWidth);
          const hitHeight = Math.max(28, sprite.displayHeight);
          obj.input.hitArea.setTo(-hitWidth / 2, -hitHeight / 2, hitWidth, hitHeight);
        } else {
          obj.setScale(newScale);
        }
      }

      this.syncObjectGraphics(obj);
      this.drawDevHighlights();
    };

    xIn.addEventListener('change', updateObjFromInputs);
    yIn.addEventListener('change', updateObjFromInputs);
    scIn.addEventListener('change', updateObjFromInputs);
  }

  updateDevPanelInfo(gameObject) {
    if (!this.isDevMode || !this.devPanelEl) return;

    const nameEl = document.getElementById('dev-obj-name');
    const xIn = document.getElementById('dev-obj-x');
    const yIn = document.getElementById('dev-obj-y');
    const scIn = document.getElementById('dev-obj-scale');

    if (!gameObject) {
      nameEl.innerText = "None (Hover/Click to select)";
      xIn.value = ""; xIn.disabled = true;
      yIn.value = ""; yIn.disabled = true;
      scIn.value = ""; scIn.disabled = true;
      return;
    }

    const type = gameObject.getData('type');
    let name = "Unknown";
    let scale = 1.0;

    if (type === 'sprite') {
      name = gameObject.getData('objectName') || gameObject.getData('objectId');
      scale = gameObject.scale;
    } else if (type === 'bonus') {
      name = `Bonus Envelope: ${gameObject.getData('bonusId')}`;
      if (gameObject.list && gameObject.list[1]) {
        scale = gameObject.list[1].scale;
      }
    } else if (type === 'surprise') {
      name = `Surprise Zone: ${gameObject.getData('surpriseId')}`;
      scale = 1.0;
    }

    nameEl.innerText = `${name} (${type})`;
    
    xIn.disabled = false;
    xIn.value = Math.round(gameObject.x);
    
    yIn.disabled = false;
    yIn.value = Math.round(gameObject.y);

    if (type === 'surprise') {
      scIn.disabled = true;
      scIn.value = "";
    } else {
      scIn.disabled = false;
      scIn.value = scale.toFixed(3);
    }
  }

  nudgeDevObject(dx, dy) {
    const obj = this.hoveredDevObject || this.selectedDevObject;
    if (!obj) return;
    
    const type = obj.getData('type');
    obj.x += dx;
    obj.y += dy;
    
    if (type === 'sprite') {
      const clickZone = obj.getData('clickZone');
      if (clickZone) {
        clickZone.x = obj.x;
        clickZone.y = obj.y;
      }
    }
    
    this.syncObjectGraphics(obj);
    this.updateDevPanelInfo(obj);
    this.drawDevHighlights();
  }

  scaleDevObject(scaleDelta) {
    const obj = this.hoveredDevObject || this.selectedDevObject;
    if (!obj) return;
    
    const type = obj.getData('type');
    if (type === 'surprise') return;

    if (obj.list && obj.list[1]) {
      const sprite = obj.list[1];
      const newScale = Math.max(0.005, Math.min(2.0, sprite.scale + scaleDelta));
      sprite.setScale(newScale);
      const hitWidth = Math.max(34, sprite.displayWidth);
      const hitHeight = Math.max(28, sprite.displayHeight);
      obj.input.hitArea.setTo(-hitWidth / 2, -hitHeight / 2, hitWidth, hitHeight);
    } else {
      const newScale = Math.max(0.005, Math.min(2.0, obj.scale + scaleDelta));
      obj.setScale(newScale);
    }
    
    this.syncObjectGraphics(obj);
    this.updateDevPanelInfo(obj);
    this.drawDevHighlights();
  }

  syncObjectGraphics(gameObject) {
    const type = gameObject.getData('type');
    if (type !== 'sprite') return;

    const shadow = gameObject.getData('shadow');
    const glow = gameObject.getData('glow');

    if (shadow) {
      shadow.x = gameObject.x + 2;
      shadow.y = gameObject.y + Math.max(8, gameObject.displayHeight * 0.22);
      shadow.displayWidth = Math.max(22, gameObject.displayWidth * 0.62);
      shadow.displayHeight = Math.max(10, gameObject.displayHeight * 0.18);
    }

    if (glow) {
      glow.x = gameObject.x;
      glow.y = gameObject.y;
    }
  }

  generateLevelJS() {
    const varName = this.level.id.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    
    const serializedObjects = this.level.objects.map(obj => {
      const sprite = this.objectSprites.get(obj.id);
      const x = sprite ? Math.round(sprite.x) : obj.x;
      const y = sprite ? Math.round(sprite.y) : obj.y;
      const scale = sprite ? parseFloat(sprite.scale.toFixed(3)) : obj.scale;
      
      const parts = [];
      parts.push(`    {`);
      parts.push(`      id: '${obj.id}',`);
      parts.push(`      name: '${obj.name.replace(/'/g, "\\'")}',`);
      if (obj.requester) parts.push(`      requester: '${obj.requester.replace(/'/g, "\\'")}',`);
      if (obj.clue) parts.push(`      clue: '${obj.clue.replace(/'/g, "\\'")}',`);
      parts.push(`      key: '${obj.key}',`);
      parts.push(`      asset: '${obj.asset}',`);
      parts.push(`      x: ${x},`);
      parts.push(`      y: ${y},`);
      parts.push(`      scale: ${scale}`);
      parts.push(`    }`);
      return parts.join('\n');
    }).join(',\n');

    const serializedBonusEnvelopes = this.level.bonusEnvelopes.map(bonus => {
      const container = this.bonusItems.get(bonus.id);
      const x = container ? Math.round(container.x) : bonus.x;
      const y = container ? Math.round(container.y) : bonus.y;
      
      const parts = [];
      parts.push(`    {`);
      parts.push(`      id: '${bonus.id}',`);
      parts.push(`      x: ${x},`);
      parts.push(`      y: ${y}`);
      if (bonus.key) parts.push(`,      key: '${bonus.key}'`);
      if (bonus.asset) parts.push(`,      asset: '${bonus.asset}'`);
      if (bonus.key) {
        let envelopeScale = bonus.scale ?? 0.06;
        if (container && container.list && container.list[1]) {
          envelopeScale = parseFloat(container.list[1].scale.toFixed(3));
        }
        parts.push(`,      scale: ${envelopeScale}`);
      }
      if (bonus.clue) parts.push(`,      clue: '${bonus.clue.replace(/'/g, "\\'")}'`);
      parts.push(`    }`);
      return parts.join('\n');
    }).join(',\n');

    const serializedSurprises = this.level.surprises.map(surprise => {
      let x = surprise.x;
      let y = surprise.y;
      if (this.surpriseZones) {
        const zone = this.surpriseZones.find(z => z.getData('surpriseId') === surprise.id);
        if (zone) {
          x = Math.round(zone.x);
          y = Math.round(zone.y);
        }
      }
      
      const parts = [];
      parts.push(`    {`);
      parts.push(`      id: '${surprise.id}',`);
      parts.push(`      x: ${x},`);
      parts.push(`      y: ${y},`);
      if (surprise.width) parts.push(`      width: ${surprise.width},`);
      if (surprise.height) parts.push(`      height: ${surprise.height},`);
      parts.push(`      label: '${surprise.label.replace(/'/g, "\\'")}'`);
      parts.push(`    }`);
      return parts.join('\n');
    }).join(',\n');

    const foregroundLine = this.level.foreground ? `\n  foreground: '${this.level.foreground}',` : '';

    return `export const ${varName} = {
  id: '${this.level.id}',
  title: '${this.level.title.replace(/'/g, "\\'")}',
  saveKey: '${this.level.saveKey}',
  bonusSaveKey: '${this.level.bonusSaveKey}',
  bonusLabel: '${this.level.bonusLabel ? this.level.bonusLabel.replace(/'/g, "\\'") : ''}',
  bonusFoundText: '${this.level.bonusFoundText ? this.level.bonusFoundText.replace(/'/g, "\\'") : ''}',
  background: {
    key: '${this.level.background.key}',
    path: '${this.level.background.path}'
  },${foregroundLine}
  objects: [
${serializedObjects}
  ],
  bonusEnvelopes: [
${serializedBonusEnvelopes}
  ],
  surprises: [
${serializedSurprises}
  ]
};
`;
  }

  showDevCodeModal(code) {
    const existing = document.getElementById('dev-code-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'dev-code-modal';
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: rgba(10, 15, 12, 0.8);
      backdrop-filter: blur(8px);
      z-index: 11000;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: system-ui, -apple-system, sans-serif;
    `;

    modal.innerHTML = `
      <div style="background: #1e2923; border: 1px solid #c9a96e; border-radius: 16px; width: 680px; max-width: 90vw; padding: 24px; box-shadow: 0 20px 50px rgba(0,0,0,0.6); display:flex; flex-direction:column; gap:16px;">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h3 style="margin:0; color:#f0d27d; font-size:18px;">Level JavaScript Configuration</h3>
          <button id="modal-close-btn" style="background:none; border:none; color:#c9a96e; cursor:pointer; font-size:20px;">✕</button>
        </div>
        <p style="margin:0; font-size:13px; color:#eadfc0;">Copy this code and replace the entire content of <code style="color:#ffffff; background:rgba(0,0,0,0.3); padding:2px 6px; border-radius:4px;">src/data/levels/${this.level.id}.js</code></p>
        
        <textarea readonly style="width:100%; height:400px; background:rgba(0,0,0,0.4); color:#a2fca2; font-family:Courier, monospace; font-size:12px; padding:12px; border:1px solid rgba(201, 169, 110, 0.3); border-radius:8px; resize:none; box-sizing:border-box;">${code}</textarea>
        
        <div style="display:flex; gap:12px; justify-content:flex-end;">
          <button id="modal-copy-btn" style="background:#315642; border:1px solid #c9a96e; border-radius:8px; color:#fff4d6; padding:10px 20px; font-size:14px; cursor:pointer;">Copy Code</button>
          <button id="modal-done-btn" style="background:none; border:1px solid rgba(201, 169, 110, 0.4); border-radius:8px; color:#c9a96e; padding:10px 20px; font-size:14px; cursor:pointer;">Close</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const close = () => modal.remove();
    document.getElementById('modal-close-btn').addEventListener('click', close);
    document.getElementById('modal-done-btn').addEventListener('click', close);
    
    document.getElementById('modal-copy-btn').addEventListener('click', () => {
      navigator.clipboard.writeText(code).then(() => {
        const btn = document.getElementById('modal-copy-btn');
        btn.innerText = "✓ Copied!";
        btn.style.background = "#28a745";
        setTimeout(() => {
          btn.innerText = "Copy Code";
          btn.style.background = "#315642";
        }, 1500);
      });
    });
  }
}
