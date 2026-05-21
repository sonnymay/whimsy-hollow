import Phaser from 'phaser';
import { mailGarden } from '../data/levels.js';

const HINT_COOLDOWN_MS = 8000;
const HINT_DURATION_MS = 2000;
const HUD_DEPTH = 20;
const BONUS_SAVE_KEY = 'whimsy-hollow:mail-garden:bonus';
const UI_FONT = '"Arial Rounded MT Bold", "Trebuchet MS", "Comic Sans MS", Arial, sans-serif';
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
  }

  init(data = {}) {
    this.isDaily = Boolean(data.daily);
    this.activeObjects = this.isDaily ? this.level.objects.slice(0, 3) : this.level.objects;
  }

  preload() {
    this.load.image(this.level.background.key, this.level.background.path);

    for (const object of this.level.objects) {
      this.load.image(object.key, object.asset);
    }

    this.load.image(MASCOT_KEY, MASCOT_PATH);
    this.load.audio('foundChime', 'assets/sounds/found.wav');
  }

  create() {
    this.foundIds = this.loadProgress();
    this.objectSprites = new Map();
    this.checklistItems = new Map();
    this.bonusItems = new Map();
    this.foundBonusIds = this.loadBonusProgress();
    this.hintReady = true;
    this.listOpen = false;
    this.listPanel = null;
    this.lastMissAt = 0;

    this.add.image(640, 360, this.level.background.key);
    this.add.rectangle(640, 360, 1280, 720, 0xfff8dc, 0.05).setBlendMode(Phaser.BlendModes.SCREEN);
    this.add.rectangle(640, 20, 1280, 40, 0x315642, 0.14);
    this.add.rectangle(640, 700, 1280, 40, 0x315642, 0.14);

    this.createObjects();
    this.createBonusEnvelopes();
    this.createSceneSurprises();
    this.createMissTapZone();
    this.createHud();
    this.createGuide();
    this.updateHud();
    this.sayGuide(this.isDaily ? '3 things!' : 'Tap Pictures');

    if (this.getFoundActiveCount() >= this.activeObjects.length) {
      this.time.delayedCall(250, () => this.scene.start('WinScene'));
    }
  }

  createObjects() {
    for (const object of this.activeObjects) {
      const glow = this.add.ellipse(object.x, object.y, 70, 54, 0xfff0a8, 0)
        .setDepth(4)
        .setBlendMode(Phaser.BlendModes.ADD)
        .setVisible(false);
      const sprite = this.add.image(object.x, object.y, object.key)
        .setScale(object.scale)
        .setDepth(5)
        .setAlpha(0.96)
        .setInteractive({ useHandCursor: true });

      sprite.setData('objectId', object.id);
      sprite.setData('objectName', object.name);

      if (this.foundIds.has(object.id)) {
        glow.setVisible(false);
        sprite.setVisible(false);
        sprite.disableInteractive();
      }

      sprite.on('pointerover', () => {
        if (!this.foundIds.has(object.id)) {
          sprite.setTint(0xffed9a);
          this.tweens.add({
            targets: sprite,
            scale: object.scale * 1.08,
            duration: 110,
            ease: 'Sine.easeOut'
          });
        }
      });

      sprite.on('pointerout', () => {
        if (!this.foundIds.has(object.id)) {
          sprite.clearTint();
          this.tweens.add({
            targets: sprite,
            scale: object.scale,
            duration: 130,
            ease: 'Sine.easeOut'
          });
        }
      });

      sprite.on('pointerdown', () => this.findObject(object));
      sprite.setData('glow', glow);
      this.objectSprites.set(object.id, sprite);
    }
  }

  createHud() {
    this.createStatusChip(160, 54, 188, this.isDaily ? 'Find 3' : 'Find 10', 0xff9fbd, 0x6a2d45, 19);
    this.countText = this.createStatusChip(350, 54, 108, '0/10', 0xbdf3d3, 0x315642, 21);
    this.bonusText = this.createStatusChip(492, 54, 142, 'Notes 0/3', 0x9de3ff, 0x31506a, 17);

    this.createChecklistPanel();
    this.createHudButton(650, 54, 116, 'Pictures', () => this.toggleListPanel(), false, 18);

    const hintButton = this.createHudButton(782, 54, 98, 'Help', () => this.showHint(), true, 20);
    this.hintButton = hintButton;
    this.hintButtonBg = hintButton.bg;
    this.hintButtonText = hintButton.text;

    this.createHudButton(910, 54, 112, 'Again', () => this.restartCase(), false, 20);
    this.createHudButton(1036, 54, 98, 'Found', () => this.scene.start('DeskScene'), false, 18);
    this.createHudButton(1150, 54, 98, 'Home', () => this.scene.start('MenuScene'), false, 20);
  }

  createStatusChip(x, y, width, label, color, textColor, fontSize) {
    this.add.circle(x - width / 2 + 24, y + 6, 25, 0x3d2a1d, 0.24).setDepth(HUD_DEPTH);
    this.add.circle(x + width / 2 - 24, y + 6, 25, 0x3d2a1d, 0.24).setDepth(HUD_DEPTH);
    this.add.rectangle(x, y + 6, width - 48, 50, 0x3d2a1d, 0.24).setDepth(HUD_DEPTH);
    this.add.circle(x - width / 2 + 24, y, 27, 0x583a20, 1).setDepth(HUD_DEPTH + 1);
    this.add.circle(x + width / 2 - 24, y, 27, 0x583a20, 1).setDepth(HUD_DEPTH + 1);
    this.add.rectangle(x, y, width - 48, 54, 0x583a20, 1).setDepth(HUD_DEPTH + 1);
    this.add.rectangle(x, y, width - 52, 48, color, 0.98).setDepth(HUD_DEPTH + 2);
    this.add.circle(x - width / 2 + 24, y, 24, color, 0.98).setDepth(HUD_DEPTH + 3);
    this.add.circle(x + width / 2 - 24, y, 24, color, 0.98).setDepth(HUD_DEPTH + 3);
    return this.add.text(x, y, label, {
      fontFamily: UI_FONT,
      fontSize: `${fontSize}px`,
      color: `#${textColor.toString(16).padStart(6, '0')}`
    }).setOrigin(0.5).setDepth(HUD_DEPTH + 4);
  }

  createHudButton(x, y, width, label, onClick, isHint = false, fontSize = 22) {
    const color = isHint ? 0x92d9ff : 0xffd86f;
    const hoverColor = isHint ? 0xb5e8ff : 0xffe793;
    const disabledColor = 0x8f9a92;
    const shadowLeft = this.add.circle(x - width / 2 + 24, y + 6, 25, 0x3d2a1d, 0.34).setDepth(HUD_DEPTH + 1);
    const shadowRight = this.add.circle(x + width / 2 - 24, y + 6, 25, 0x3d2a1d, 0.34).setDepth(HUD_DEPTH + 1);
    const shadow = this.add.rectangle(x, y + 6, width - 48, 50, 0x3d2a1d, 0.34).setDepth(HUD_DEPTH + 1);
    this.add.circle(x - width / 2 + 24, y, 27, 0x583a20, 1).setDepth(HUD_DEPTH + 2);
    this.add.circle(x + width / 2 - 24, y, 27, 0x583a20, 1).setDepth(HUD_DEPTH + 2);
    this.add.rectangle(x, y, width - 48, 54, 0x583a20, 1).setDepth(HUD_DEPTH + 2);
    const bg = this.add.rectangle(x, y, width - 52, 48, color, 0.96)
      .setInteractive({ useHandCursor: true })
      .setDepth(HUD_DEPTH + 3);
    const leftCap = this.add.circle(x - width / 2 + 24, y, 24, color, 0.96).setDepth(HUD_DEPTH + 4);
    const rightCap = this.add.circle(x + width / 2 - 24, y, 24, color, 0.96).setDepth(HUD_DEPTH + 4);

    const text = this.add.text(x, y, label, {
      fontFamily: UI_FONT,
      fontSize: `${fontSize}px`,
      color: '#2d271d'
    }).setOrigin(0.5).setDepth(HUD_DEPTH + 5);

    const setButtonColor = (fill) => {
      bg.setFillStyle(fill, 0.96);
      leftCap.setFillStyle(fill, 0.96);
      rightCap.setFillStyle(fill, 0.96);
    };

    bg.on('pointerover', () => {
      if (!isHint || this.hintReady) {
        setButtonColor(hoverColor);
      }
    });
    bg.on('pointerout', () => {
      setButtonColor(isHint && !this.hintReady ? disabledColor : color);
    });
    bg.on('pointerdown', onClick);

    return { bg, text, setButtonColor, color, disabledColor, shadow, shadowLeft, shadowRight };
  }

  createChecklistPanel() {
    this.listPanel = this.add.container(122, 386).setDepth(HUD_DEPTH + 6).setVisible(false);
    const bg = this.add.rectangle(0, 0, 224, 564, 0x14241f, 0.88)
      .setStrokeStyle(2, 0xe4c46e, 0.72);
    this.listPanel.add(bg);

    const title = this.add.text(0, -258, 'Find these', {
      fontFamily: UI_FONT,
      fontSize: '22px',
      color: '#fff0c8',
      stroke: '#15231d',
      strokeThickness: 3
    }).setOrigin(0.5).setDepth(HUD_DEPTH + 7);
    this.listPanel.add(title);

    this.activeObjects.forEach((object, index) => {
      const column = index % 2;
      const row = Math.floor(index / 2);
      const x = -52 + column * 104;
      const y = -202 + row * 96;
      const card = this.add.rectangle(x, y, 92, 82, 0xf7df9a, 0.16)
        .setStrokeStyle(2, 0xe4c46e, 0.42)
        .setDepth(HUD_DEPTH + 7);
      const thumb = this.add.image(x, y - 4, object.key)
        .setDisplaySize(52, 52)
        .setDepth(HUD_DEPTH + 8);
      const mark = this.add.text(x - 34, y - 28, '○', {
        fontFamily: UI_FONT,
        fontSize: '18px',
        color: '#f0d27d'
      }).setOrigin(0.5).setDepth(HUD_DEPTH + 7);
      const label = this.add.text(x, y + 31, object.name.replace('Magical ', '').replace('Glowing ', ''), {
        fontFamily: UI_FONT,
        fontSize: '11px',
        color: '#f8edd0',
        align: 'center',
        wordWrap: { width: 82, useAdvancedWrap: true }
      }).setOrigin(0.5).setDepth(HUD_DEPTH + 7);

      this.listPanel.add([card, thumb, mark, label]);
      this.checklistItems.set(object.id, { card, mark, label, thumb });
    });
  }

  toggleListPanel() {
    this.listOpen = !this.listOpen;
    this.listPanel.setVisible(this.listOpen);
    if (this.guide) {
      this.guide.setVisible(!this.listOpen);
    }
  }

  createBonusEnvelopes() {
    for (const envelope of this.level.bonusEnvelopes) {
      const container = this.add.container(envelope.x, envelope.y).setDepth(6);
      const paper = this.add.rectangle(0, 0, 28, 18, 0xf7df9a, 0.72)
        .setStrokeStyle(1, 0x72552a, 0.7)
        .setRotation(-0.12);
      const flap = this.add.triangle(0, 0, -13, -7, 0, 3, 13, -7, 0xe8c975, 0.62)
        .setRotation(-0.12);
      container.add([paper, flap]);
      container.setInteractive(new Phaser.Geom.Rectangle(-16, -12, 32, 24), Phaser.Geom.Rectangle.Contains);
      container.setData('bonusId', envelope.id);

      if (this.foundBonusIds.has(envelope.id)) {
        container.setVisible(false);
        container.disableInteractive();
      }

      container.on('pointerover', () => paper.setFillStyle(0xffefad, 0.95));
      container.on('pointerout', () => paper.setFillStyle(0xf7df9a, 0.72));
      container.on('pointerdown', () => this.findBonusEnvelope(envelope, container));
      this.bonusItems.set(envelope.id, container);
    }
  }

  findBonusEnvelope(envelope, container) {
    if (this.foundBonusIds.has(envelope.id)) {
      return;
    }

    this.foundBonusIds.add(envelope.id);
    this.saveBonusProgress();
    container.disableInteractive();
    this.showFoundToast('Note!');
    this.sayGuide('Note!');
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
  }

  createSceneSurprises() {
    for (const surprise of this.level.surprises) {
      const zone = this.add.zone(surprise.x, surprise.y, 82, 72)
        .setInteractive({ useHandCursor: true })
        .setDepth(4);
      zone.on('pointerdown', () => this.playSceneSurprise(surprise));
    }
  }

  createMissTapZone() {
    this.add.zone(640, 390, 1280, 620)
      .setInteractive()
      .setDepth(1)
      .on('pointerdown', (pointer) => this.handleMissTap(pointer));
  }

  handleMissTap(pointer) {
    const now = this.time.now;
    if (now - this.lastMissAt < 700 || this.listOpen) {
      return;
    }

    this.lastMissAt = now;
    this.sayGuide('Try again');
    this.playSoftSparkle(pointer.x, pointer.y, 3, 0xbfe8ff);
  }

  playSceneSurprise(surprise) {
    this.showFoundToast('Sparkle!');
    this.sayGuide('Cute!');
    this.playSoftSparkle(surprise.x, surprise.y, 6);
  }

  findObject(object) {
    if (this.foundIds.has(object.id)) {
      return;
    }

    const sprite = this.objectSprites.get(object.id);
    const glow = sprite.getData('glow');
    this.foundIds.add(object.id);
    this.saveProgress();
    this.playFoundFeedback(sprite);
    this.showFoundToast(`${object.name}!`);
    this.sayGuide(this.getFoundActiveCount() >= this.activeObjects.length ? 'All done!' : 'Yay!');
    sprite.disableInteractive();

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

    if (this.getFoundActiveCount() >= this.activeObjects.length) {
      this.time.delayedCall(700, () => this.scene.start('WinScene'));
    }
  }

  createGuide() {
    this.guide = this.add.container(92, 642).setDepth(HUD_DEPTH + 1);
    const shadow = this.add.ellipse(0, 31, 64, 15, 0x23170f, 0.22);
    const image = this.add.image(0, -8, MASCOT_KEY)
      .setDisplaySize(74, 74);
    const bubble = this.add.rectangle(116, -12, 136, 42, 0xfff8dc, 0.94)
      .setStrokeStyle(2, 0x72552a, 0.76);
    const tail = this.add.triangle(48, 0, 64, -6, 64, 10, 36, 22, 0xfff8dc, 0.94)
      .setStrokeStyle(2, 0x72552a, 0.76);
    this.guideText = this.add.text(116, -12, '', {
      fontFamily: UI_FONT,
      fontSize: '15px',
      color: '#35291d'
    }).setOrigin(0.5);
    this.guide.add([shadow, image, tail, bubble, this.guideText]);

    this.tweens.add({
      targets: this.guide,
      y: 636,
      duration: 1200,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }

  sayGuide(message) {
    if (!this.guideText) {
      return;
    }

    this.guideText.setText(message);
  }

  guideHopTo(sprite) {
    if (!this.guide || this.listOpen) {
      return;
    }

    const homeX = 92;
    const homeY = 642;
    const targetX = Phaser.Math.Clamp(sprite.x - 58, 74, 1180);
    const targetY = Phaser.Math.Clamp(sprite.y + 50, 118, 642);
    this.guide.setVisible(true);
    this.guide.setDepth(38);
    this.tweens.killTweensOf(this.guide);

    for (let i = 1; i < 6; i += 1) {
      const paw = this.add.circle(homeX + i * ((targetX - homeX) / 6), homeY + i * ((targetY - homeY) / 6), 5, 0xffd1dc, 0.76)
        .setDepth(37);
      this.tweens.add({
        targets: paw,
        alpha: 0,
        scale: 0.25,
        duration: 700 + i * 70,
        ease: 'Sine.easeOut',
        onComplete: () => paw.destroy()
      });
    }

    this.tweens.add({
      targets: this.guide,
      x: targetX,
      y: targetY,
      scale: 1.08,
      duration: 520,
      ease: 'Back.easeOut',
      onComplete: () => {
        this.playSoftSparkle(sprite.x, sprite.y, 7, 0xfff0a8);
        this.time.delayedCall(900, () => {
          this.tweens.add({
            targets: this.guide,
            x: homeX,
            y: homeY,
            scale: 1,
            duration: 520,
            ease: 'Sine.easeInOut',
            onComplete: () => {
              this.guide.setDepth(HUD_DEPTH + 1);
              this.tweens.add({
                targets: this.guide,
                y: 636,
                duration: 1200,
                yoyo: true,
                repeat: -1,
                ease: 'Sine.easeInOut'
              });
            }
          });
        });
      }
    });
  }

  playFoundFeedback(sprite) {
    if (this.sound.get('foundChime') || this.cache.audio.exists('foundChime')) {
      this.sound.play('foundChime', { volume: 0.7, detune: 120 });
    }

    for (let i = 0; i < 22; i += 1) {
      const angle = (Math.PI * 2 * i) / 22;
      const sparkle = this.add.star(sprite.x, sprite.y, 5, 4, 12, 0xfff0a8, 1)
        .setDepth(30)
        .setBlendMode(Phaser.BlendModes.ADD);

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

    for (let i = 0; i < 8; i += 1) {
      const heart = this.add.text(sprite.x, sprite.y, '♥', {
        fontFamily: UI_FONT,
        fontSize: `${Phaser.Math.Between(18, 28)}px`,
        color: Phaser.Math.RND.pick(['#ffd1dc', '#fff0a8', '#bdf3d3'])
      }).setOrigin(0.5).setDepth(31);

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

  showFoundToast(name) {
    if (this.toast) {
      this.toast.destroy();
    }

    const toast = this.add.container(640, 82).setDepth(40).setAlpha(0);
    const bg = this.add.rectangle(0, 0, 760, 58, 0x1b2a22, 0.84)
      .setStrokeStyle(2, 0xf0d27d, 0.68);
    const text = this.add.text(0, 0, name, {
      fontFamily: UI_FONT,
      fontSize: '20px',
      color: '#fff0c8',
      align: 'center',
      wordWrap: { width: 700, useAdvancedWrap: true }
    }).setOrigin(0.5);
    toast.add([bg, text]);
    this.toast = toast;

    this.tweens.add({
      targets: toast,
      alpha: 1,
      y: 72,
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

    const remaining = this.activeObjects.filter((object) => !this.foundIds.has(object.id));
    if (remaining.length === 0) {
      return;
    }

    const object = remaining[0];
    const sprite = this.objectSprites.get(object.id);
    const glow = sprite.getData('glow');
    this.showFoundToast('Look!');
    this.sayGuide('Look!');
    this.guideHopTo(sprite);
    if (glow) {
      glow.setVisible(true).setAlpha(0.34).setScale(1);
      this.tweens.add({
        targets: glow,
        alpha: 0.08,
        scale: 1.28,
        yoyo: true,
        repeat: 3,
        duration: 260,
        ease: 'Sine.easeInOut',
        onComplete: () => glow.setVisible(false)
      });
    }
    const ring = this.add.ellipse(sprite.x, sprite.y, sprite.displayWidth + 26, sprite.displayHeight + 22)
      .setStrokeStyle(5, 0xffef8a, 1)
      .setDepth(25);

    sprite.setTint(0xfff0a4);
    this.tweens.add({
      targets: ring,
      scale: 1.16,
      alpha: 0.25,
      yoyo: true,
      repeat: 3,
      duration: 250,
      ease: 'Sine.easeInOut'
    });

    this.time.delayedCall(HINT_DURATION_MS, () => {
      ring.destroy();
      if (!this.foundIds.has(object.id)) {
        sprite.clearTint();
      }
    });

    this.startHintCooldown();
  }

  startHintCooldown() {
    this.hintReady = false;
    this.hintButtonBg.disableInteractive();
    this.hintButtonBg.setFillStyle(this.hintButton.disabledColor, 0.96);
    this.hintButton.setButtonColor(this.hintButton.disabledColor);
    this.hintButtonText.setText('Wait');

    this.time.delayedCall(HINT_COOLDOWN_MS, () => {
      this.hintReady = true;
      this.hintButtonBg.setInteractive({ useHandCursor: true });
      this.hintButton.setButtonColor(this.hintButton.color);
      this.hintButtonText.setText('Help');
    });
  }

  updateHud() {
    this.countText.setText(`${this.getFoundActiveCount()}/${this.activeObjects.length}`);
    this.bonusText.setText(`Notes ${this.foundBonusIds.size}/${this.level.bonusEnvelopes.length}`);

    for (const object of this.activeObjects) {
      const item = this.checklistItems.get(object.id);
      const found = this.foundIds.has(object.id);
      item.mark.setText(found ? '✓' : '○');
      item.mark.setColor(found ? '#bdf3d3' : '#f0d27d');
      item.label.setColor(found ? '#a8c9b4' : '#f8edd0');
      item.label.setAlpha(found ? 0.68 : 1);
      item.thumb.setAlpha(found ? 0.38 : 1);
      item.card.setFillStyle(found ? 0x7eb58a : 0xf7df9a, found ? 0.18 : 0.15);
    }
  }

  getFoundActiveCount() {
    return this.activeObjects.filter((object) => this.foundIds.has(object.id)).length;
  }

  restartCase() {
    window.localStorage.removeItem(this.level.saveKey);
    window.localStorage.removeItem(BONUS_SAVE_KEY);
    this.scene.restart({ daily: this.isDaily });
  }

  loadProgress() {
    try {
      const value = window.localStorage.getItem(this.level.saveKey);
      const parsed = value ? JSON.parse(value) : [];
      return new Set(Array.isArray(parsed) ? parsed : []);
    } catch {
      return new Set();
    }
  }

  saveProgress() {
    window.localStorage.setItem(this.level.saveKey, JSON.stringify([...this.foundIds]));
  }

  loadBonusProgress() {
    try {
      const value = window.localStorage.getItem(BONUS_SAVE_KEY);
      const parsed = value ? JSON.parse(value) : [];
      return new Set(Array.isArray(parsed) ? parsed : []);
    } catch {
      return new Set();
    }
  }

  saveBonusProgress() {
    window.localStorage.setItem(BONUS_SAVE_KEY, JSON.stringify([...this.foundBonusIds]));
  }
}
