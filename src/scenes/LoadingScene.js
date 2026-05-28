import Phaser from 'phaser';
import { getLevelById } from '../data/levels.js';
import { theme } from '../ui/theme.js';

const UI_FONT = theme.font;
const MASCOT_KEY = 'mailBirdMascot';
const MASCOT_PATH = 'assets/characters/mail_bird_mascot.png';

export class LoadingScene extends Phaser.Scene {
  constructor() {
    super('LoadingScene');
    this.targetScene = 'MenuScene';
    this.targetData = {};
    this.message = 'Packing tiny treasures...';
  }

  init(data = {}) {
    this.targetScene = data.targetScene ?? 'MenuScene';
    this.targetData = data.targetData ?? {};
    this.message = data.message ?? 'Packing tiny treasures...';
    this.handedOff = false;
    // Safety net: if the loader ever stalls (a file that never completes or
    // errors), create() is never called and the player would be stuck on the
    // loading screen forever. Force the handoff after a hard ceiling so the
    // loader can never trap the player.
    this.loadWatchdog = window.setTimeout(() => {
      console.warn('[whimsy-hollow] LoadingScene watchdog forcing handoff to', this.targetScene);
      this.handoff();
    }, 8000);
  }

  handoff() {
    if (this.handedOff) return;
    this.handedOff = true;
    if (this.loadWatchdog) {
      window.clearTimeout(this.loadWatchdog);
      this.loadWatchdog = null;
    }
    this.scene.start(this.targetScene, this.targetData);
  }

  preload() {
    this.load.on('loaderror', (file) => {
      console.error('[whimsy-hollow] asset failed to load:', file?.key, file?.src);
    });

    if (!this.textures.exists(MASCOT_KEY)) {
      this.load.image(MASCOT_KEY, MASCOT_PATH);
    }

    // If the next stop is a level, preload its assets here so GameScene
    // transitions instantly instead of showing the canvas backgroundColor
    // for a second while it loads textures.
    if (this.targetScene === 'GameScene' && this.targetData?.levelId) {
      const level = getLevelById(this.targetData.levelId);
      if (level) {
        if (!this.textures.exists(level.background.key)) {
          this.load.image(level.background.key, level.background.path);
        }
        for (const obj of level.objects ?? []) {
          if (obj.key && obj.asset && !this.textures.exists(obj.key)) {
            this.load.image(obj.key, obj.asset);
          }
        }
        for (const bonus of level.bonusEnvelopes ?? []) {
          if (bonus.key && bonus.asset && !this.textures.exists(bonus.key)) {
            this.load.image(bonus.key, bonus.asset);
          }
        }
        for (const inter of level.interactives ?? []) {
          if (inter.key && inter.asset && !this.textures.exists(inter.key)) {
            this.load.image(inter.key, inter.asset);
          }
        }
        if (level.foreground) {
          const fgKey = `fg-${level.id}`;
          if (!this.textures.exists(fgKey)) {
            this.load.image(fgKey, level.foreground);
          }
        }
      }
    }
  }

  create() {
    const { width, height } = this.scale;

    this.add.rectangle(0, 0, width, height, 0x2b4c3a).setOrigin(0);
    this.add.rectangle(0, 0, width, height, 0xfff2cf, 0.18).setOrigin(0).setBlendMode(Phaser.BlendModes.SCREEN);
    this.add.circle(270, 170, 160, 0xffd1dc, 0.16);
    this.add.circle(1010, 150, 190, 0xffec8a, 0.14);
    this.add.circle(910, 620, 240, 0x9de3ff, 0.12);

    const mascot = this.add.image(width / 2, height / 2 - 66, MASCOT_KEY)
      .setDisplaySize(190, 190);
    this.add.ellipse(width / 2, height / 2 + 42, 148, 26, 0x1a231d, 0.25);

    this.add.text(width / 2, height / 2 + 104, this.message, {
      fontFamily: UI_FONT,
      fontSize: '34px',
      color: '#fff2c7',
      stroke: '#2b2018',
      strokeThickness: 6
    }).setOrigin(0.5);

    const dots = this.add.text(width / 2, height / 2 + 154, '', {
      fontFamily: UI_FONT,
      fontSize: '38px',
      color: '#ffe09a',
      stroke: '#2b2018',
      strokeThickness: 4
    }).setOrigin(0.5);

    this.tweens.add({
      targets: mascot,
      y: mascot.y - 12,
      duration: 650,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });

    this.time.addEvent({
      delay: 220,
      repeat: 5,
      callback: () => {
        dots.setText('.'.repeat((dots.text.length % 3) + 1));
      }
    });

    // Reaching create() means Phaser's loader already finished, so all level
    // textures are in the cache. Keep a short cosmetic delay for continuity,
    // then hand off. handoff() is idempotent and also clears the watchdog.
    this.events.once('shutdown', () => {
      if (this.loadWatchdog) {
        window.clearTimeout(this.loadWatchdog);
        this.loadWatchdog = null;
      }
    });
    this.time.delayedCall(700, () => this.handoff());
  }
}
