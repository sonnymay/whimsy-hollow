import {
  loadLevelState,
  saveLevelState,
  loadJujuCollectedIds,
  saveJujuCollectedIds,
  loadOptionalIds,
  saveOptionalIds,
  loadReducedMotion
} from '../data/storage.js';
import { theme } from '../ui/theme.js';

const UI_FONT = theme.font;

export function isHeroLevel(level) {
  return level?.tier === 'hero';
}

/**
 * Hero-level systems: Juju, optional objectives, props, sub-scenes, state flags.
 */
export class HeroLevelController {
  constructor(scene) {
    this.scene = scene;
    this.level = scene.level;
    this.levelState = loadLevelState(this.level);
    this.jujuCollected = loadJujuCollectedIds(this.level);
    this.foundOptionalIds = loadOptionalIds(this.level);
    this.jujuCharges = 0;
    this.jujuSprites = new Map();
    this.optionalSprites = new Map();
    this.activeSubScene = this.levelState.activeSubScene || 'main';
    this.subSceneButtons = [];
  }

  persistState() {
    saveLevelState(this.level, {
      ...this.levelState,
      activeSubScene: this.activeSubScene
    });
  }

  hasFlag(flag) {
    return Boolean(this.levelState[flag]);
  }

  setFlag(flag, value = true) {
    this.levelState[flag] = value;
    this.persistState();
    this.scene.onHeroFlagChanged?.(flag, value);
  }

  preload() {
    const { load } = this.scene;

    for (const juju of this.level.jujus ?? []) {
      if (juju.key && juju.asset) {
        load.image(juju.key, juju.asset);
      }
    }

    for (const opt of this.level.optionalObjectives ?? []) {
      if (opt.key && opt.asset) {
        load.image(opt.key, opt.asset);
      }
    }

    for (const sub of Object.values(this.level.subScenes ?? {})) {
      if (sub?.background?.key && sub?.background?.path) {
        load.image(sub.background.key, sub.background.path);
      }
    }
  }

  setup() {
    this.scene.foundOptionalIds = this.foundOptionalIds;
    this.createSceneProps();
    this.createJujus();
    this.createOptionalObjectives();
    this.createSubSceneNav();
    this.updateJujuHud();
    this.applySubSceneCamera(false);
  }

  shouldShowJuju(juju) {
    if (this.jujuCollected.has(juju.id)) return false;
    if (juju.revealAfter && !this.hasFlag(juju.revealAfter)) return false;
    if (juju.subScene && juju.subScene !== this.activeSubScene) return false;
    return true;
  }

  createJujus() {
    for (const juju of this.level.jujus ?? []) {
      if (this.jujuSprites.has(juju.id)) continue;
      if (!this.shouldShowJuju(juju)) continue;

      const container = this.scene.add.container(juju.x, juju.y).setDepth(6.5);
      this.scene.addToWorld(container);

      let sprite;
      if (juju.key && this.scene.textures.exists(juju.key)) {
        sprite = this.scene.add.image(0, 0, juju.key).setScale(juju.scale ?? 0.35);
        sprite.setTint(0xaaaaaa);
      } else {
        sprite = this.scene.add.ellipse(0, 0, 36, 28, 0x9e9e9e, 0.85);
      }

      container.add(sprite);

      if (juju.wobble !== false && !loadReducedMotion()) {
        this.scene.tweens.add({
          targets: container,
          scaleX: 1.06,
          scaleY: 0.94,
          duration: 480,
          yoyo: true,
          repeat: -1,
          ease: 'Sine.easeInOut'
        });
        this.scene.tweens.add({
          targets: container,
          angle: 2,
          duration: 620,
          yoyo: true,
          repeat: -1,
          ease: 'Sine.easeInOut'
        });
      }

      const hit = this.scene.add.zone(0, 0, 44, 44).setInteractive({ useHandCursor: true });
      container.add(hit);
      hit.on('pointerdown', (pointer, lx, ly, event) => {
        event.stopPropagation();
        this.collectJuju(juju, container);
      });

      container.setData('jujuId', juju.id);
      this.jujuSprites.set(juju.id, container);
    }
  }

  collectJuju(juju, container) {
    if (this.jujuCollected.has(juju.id)) return;

    this.jujuCollected.add(juju.id);
    saveJujuCollectedIds(this.level, this.jujuCollected);
    this.jujuCharges += 1;
    this.updateJujuHud();

    if (this.scene.cache.audio.exists('bonusSfx')) {
      this.scene.sound.play('bonusSfx', { volume: 0.4, detune: 300 });
    }

    this.scene.playSoftSparkle?.(container.x, container.y, 10, 0xb0bec5);
    container.destroy();
    this.jujuSprites.delete(juju.id);

    this.scene.showFoundToast?.('Spirit found!');
  }

  updateJujuHud() {
    if (this.scene.ghostButton) {
      this.scene.ghostButton.setLabel(`✨ ${this.jujuCharges}`);
    }
  }

  spendJujuForObject(object) {
    if (this.jujuCharges <= 0) {
      if (this.scene.cache.audio.exists('wrongSfx')) {
        this.scene.sound.play('wrongSfx', { volume: 0.35 });
      }
      this.scene.showFoundToast?.('Find grey spirits first');
      return false;
    }

    const juju = (this.level.jujus ?? []).find(
      (j) => j.linkedObjectId === object.id && this.jujuCollected.has(j.id)
    );
    if (!juju?.puzzleClue) {
      this.scene.showFoundToast?.('No spirit clue for this one');
      return false;
    }

    this.jujuCharges -= 1;
    this.updateJujuHud();
    this.scene.showJujuRiddleBubble?.(juju.puzzleClue);
    if (this.scene.cache.audio.exists('hintSfx')) {
      this.scene.sound.play('hintSfx', { volume: 0.35 });
    }
    return true;
  }

  onJujuButtonPressed() {
    this.scene.showFoundToast?.('Tap a list item — spend ✨ for a spirit riddle');
  }

  createOptionalObjectives() {
    for (const opt of this.level.optionalObjectives ?? []) {
      if (this.foundOptionalIds.has(opt.id)) continue;
      if (opt.subScene && opt.subScene !== this.activeSubScene) continue;
      if (opt.requiresFlag && !this.hasFlag(opt.requiresFlag)) continue;

      const shadow = this.scene.add.ellipse(opt.x, opt.y + 14, 42, 10, 0x2b1c12, 0.2);
      const sprite = this.scene.add.image(opt.x, opt.y, opt.key)
        .setScale(opt.scale ?? 0.4)
        .setDepth(6.2);
      this.scene.addToWorld(shadow);
      this.scene.addToWorld(sprite);

      const hitW = Math.max(36, sprite.displayWidth);
      const hitH = Math.max(32, sprite.displayHeight);
      const zone = this.scene.add.zone(opt.x, opt.y, hitW, hitH)
        .setDepth(6.3)
        .setInteractive({ useHandCursor: true });
      this.scene.addToWorld(zone);

      zone.on('pointerdown', (pointer, lx, ly, event) => {
        event.stopPropagation();
        this.findOptional(opt, sprite, shadow, zone);
      });

      this.optionalSprites.set(opt.id, { sprite, shadow, zone });
    }
  }

  findOptional(opt, sprite, shadow, zone) {
    this.foundOptionalIds.add(opt.id);
    saveOptionalIds(this.level, this.foundOptionalIds);
    this.scene.foundOptionalIds = this.foundOptionalIds;

    if (this.scene.cache.audio.exists('bonusSfx')) {
      this.scene.sound.play('bonusSfx', { volume: 0.45 });
    }

    this.scene.playSoftSparkle?.(opt.x, opt.y, 14, 0xffd86f);
    this.scene.showFoundToast?.(opt.foundText ?? 'Extra found!');
    sprite.destroy();
    shadow.destroy();
    zone.destroy();
    this.optionalSprites.delete(opt.id);
    this.scene.updateHud?.();
    this.scene.refreshOptionalList?.();
  }

  createSceneProps() {
    for (const prop of this.level.sceneProps ?? []) {
      if (prop.subScene && prop.subScene !== this.activeSubScene) continue;

      const zone = this.scene.add.zone(prop.x, prop.y, prop.w ?? 48, prop.h ?? 48)
        .setDepth(5.5)
        .setInteractive({ useHandCursor: true });
      this.scene.addToWorld(zone);

      zone.on('pointerdown', (pointer, lx, ly, event) => {
        event.stopPropagation();
        const label = prop.label ?? '…';
        this.scene.showFoundToast?.(label);
        if (prop.sfx && this.scene.cache.audio.exists(prop.sfx)) {
          this.scene.sound.play(prop.sfx, { volume: 0.3 });
        } else if (this.scene.cache.audio.exists('clickSfx')) {
          this.scene.sound.play('clickSfx', { volume: 0.25, detune: 200 });
        }
        if (!loadReducedMotion()) {
          this.scene.tweens.add({
            targets: zone,
            scaleX: 1.15,
            scaleY: 0.9,
            yoyo: true,
            duration: 120,
            ease: 'Quad.easeOut'
          });
        }
      });
    }
  }

  createSubSceneNav() {
    const subs = this.level.subScenes;
    if (!subs) return;

    for (const [id, config] of Object.entries(subs)) {
      if (id === 'main' || !config.enterHotspot) continue;
      if (id === this.activeSubScene) continue;

      const h = config.enterHotspot;
      const btn = this.scene.add.text(h.x, h.y, h.label ?? 'Go', {
        fontFamily: UI_FONT,
        fontSize: '16px',
        color: '#fff4d6',
        backgroundColor: '#315642',
        padding: { x: 10, y: 6 }
      }).setOrigin(0.5).setDepth(12).setInteractive({ useHandCursor: true });
      this.scene.addToHud(btn);

      btn.on('pointerdown', () => this.enterSubScene(id));
      this.subSceneButtons.push(btn);
    }

    if (this.activeSubScene !== 'main') {
      const exitBtn = this.scene.add.text(1180, 120, '← Back', {
        fontFamily: UI_FONT,
        fontSize: '16px',
        color: '#fff4d6',
        backgroundColor: '#315642',
        padding: { x: 10, y: 6 }
      }).setOrigin(1, 0.5).setDepth(12).setInteractive({ useHandCursor: true });
      this.scene.addToHud(exitBtn);
      exitBtn.on('pointerdown', () => this.enterSubScene('main'));
      this.subSceneButtons.push(exitBtn);
    }
  }

  enterSubScene(id) {
    this.activeSubScene = id;
    this.levelState.activeSubScene = id;
    this.persistState();

    this.subSceneButtons.forEach((b) => b.destroy());
    this.subSceneButtons = [];
    this.optionalSprites.forEach(({ sprite, shadow, zone }) => {
      sprite.destroy();
      shadow.destroy();
      zone.destroy();
    });
    this.optionalSprites.clear();

    const bgKey = this.level.background.key;
    const sub = this.level.subScenes?.[id];
    if (sub?.background?.key && this.scene.textures.exists(sub.background.key)) {
      if (this.scene.bgImage) {
        this.scene.bgImage.setTexture(sub.background.key);
      }
    } else if (id === 'main' && this.scene.bgImage) {
      this.scene.bgImage.setTexture(bgKey);
    }

    this.applySubSceneCamera(true);
    this.createOptionalObjectives();
    this.createSubSceneNav();
    this.scene.showFoundToast?.(id === 'main' ? 'Back outside' : 'New area');
  }

  applySubSceneCamera(animate) {
    const sub = this.level.subScenes?.[this.activeSubScene];
    const cam = this.scene.cameras?.main;
    if (!cam || !sub?.camera) return;

    const { scrollX = 0, scrollY = 0, zoom = 1.15 } = sub.camera;
    this.scene.cameraTargetScrollX = scrollX;
    this.scene.cameraTargetScrollY = scrollY;
    this.scene.cameraTargetZoom = zoom;
    if (!animate) {
      cam.setScroll(scrollX, scrollY);
      cam.setZoom(zoom);
    }
  }

  handleInteractiveOpened(config) {
    if (config.setsFlag) {
      this.setFlag(config.setsFlag, true);
    }
    if (config.revealsJujuId) {
      const juju = (this.level.jujus ?? []).find((j) => j.id === config.revealsJujuId);
      if (juju && !this.jujuSprites.has(juju.id) && this.shouldShowJuju(juju)) {
        this.createJujus();
      }
    }
    if (config.opensSubScene) {
      this.enterSubScene(config.opensSubScene);
    }
  }

  objectVisible(object) {
    if (object.requiresFlag && !this.hasFlag(object.requiresFlag)) return false;
    if (object.hiddenUntilFlag && !this.hasFlag(object.hiddenUntilFlag)) return false;
    if (object.subScene && object.subScene !== this.activeSubScene) return false;
    return true;
  }

  getOptionalCount() {
    return (this.level.optionalObjectives ?? []).length;
  }

  getOptionalFoundCount() {
    return this.foundOptionalIds.size;
  }

  allOptionalFound() {
    const total = this.getOptionalCount();
    return total > 0 && this.foundOptionalIds.size >= total;
  }
}
