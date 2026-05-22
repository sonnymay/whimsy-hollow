import Phaser from 'phaser';
import { getCompletedSceneCount, getFirstUnfinishedLevel, levels, loadCompletedSceneIds } from '../data/levels.js';
import { createPillButton } from '../ui/Button.js';
import { setBackdrop } from '../ui/backdrop.js';
import { theme } from '../ui/theme.js';
import { playMusicForLevel, queueMusic } from '../audio/music.js';

const UI_FONT = theme.font;
const MASCOT_KEY = 'mailBirdMascot';
const MASCOT_PATH = 'assets/characters/mail_bird_mascot.png';

export class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  preload() {
    // Only the active "Play" scene's background is loaded eagerly. The
    // other levels load on demand inside GameScene.preload(), so the menu
    // boots in ~2 MB instead of ~24 MB.
    const nextScene = getFirstUnfinishedLevel() ?? levels[levels.length - 1];
    if (nextScene) {
      this.loadImageOnce(nextScene.background.key, nextScene.background.path);
    }

    // Lightweight preview sprite for the floating decorative card.
    if (nextScene?.id === 'restaurant-kitchen') {
      this.loadImageOnce('object-magic-recipe-card', 'assets/objects/magic_recipe_card.png');
    } else if (nextScene?.id === 'whimsy-living-room') {
      this.loadImageOnce('object-purple-teapot', 'assets/objects/obj_purple_teapot.png');
    } else if (nextScene?.id === 'cozy-dream-bedroom') {
      this.loadImageOnce('object-sleepy-cat', 'assets/objects/obj_sleepy_cat.png');
    } else if (nextScene?.id === 'forest-bookshop') {
      this.loadImageOnce('object-bookshop-hourglass', 'assets/objects/bookshop_hourglass.png');
    }

    this.load.image(MASCOT_KEY, MASCOT_PATH);
    queueMusic(this, '__menu__');
  }

  create() {
    const { width, height } = this.scale;
    const nextScene = getFirstUnfinishedLevel();
    const completedCount = getCompletedSceneCount();
    const allDone = !nextScene;
    const playScene = nextScene ?? levels[levels.length - 1];
    const sceneLabel = allDone ? 'All places found' : playScene.title.replace('Whimsy Hollow ', '');
    const footerLabel = allDone ? `Done ${levels.length}/${levels.length}. Play again anytime.` : `${completedCount}/${levels.length} places found`;

    setBackdrop(playScene.background.path);
    playMusicForLevel(this, '__menu__');

    // Top-right settings button
    createPillButton(this, {
      x: width - 70, y: 50,
      width: 60, height: 48,
      label: '⚙', fontSize: 22, radius: 24,
      onClick: () => this.scene.start('SettingsScene')
    });
    this.add.image(width / 2, height / 2, playScene.background.key).setDisplaySize(width, height);
    this.add.rectangle(0, 0, width, height, 0xfff2cf, 0.3).setOrigin(0).setBlendMode(Phaser.BlendModes.SCREEN);
    this.add.rectangle(width / 2, height / 2, width, height, 0x234235, 0.12);
    this.add.rectangle(width / 2, 0, width, 210, 0x7eb58a, 0.44).setOrigin(0.5, 0);
    this.add.rectangle(width / 2, height, width, 160, 0x6aa9c8, 0.36).setOrigin(0.5, 1);
    this.add.circle(248, 210, 118, 0xffd1dc, 0.24);
    this.add.circle(1056, 190, 138, 0xffec8a, 0.2);
    this.add.circle(1020, 592, 156, 0x9de3ff, 0.18);
    this.drawMascot(width / 2 - 280, 428, 1.3);

    this.add.text(width / 2, 168, 'Whimsy Hollow', {
      fontFamily: UI_FONT,
      fontSize: '78px',
      color: '#fff2c7',
      stroke: '#2b2018',
      strokeThickness: 10
    }).setOrigin(0.5);

    this.add.text(width / 2, 286, 'No timer. Just tiny treasures.', {
      fontFamily: UI_FONT,
      fontSize: '27px',
      color: '#f2ead0',
      stroke: '#1b2a22',
      strokeThickness: 4
    }).setOrigin(0.5);

    this.add.text(width / 2, 372, sceneLabel, {
      fontFamily: UI_FONT,
      fontSize: '34px',
      color: '#ffe09a',
      stroke: '#342515',
      strokeThickness: 5
    }).setOrigin(0.5);

    if (!allDone) {
      this.createMenuPreview(width / 2 + 170, 488, playScene.id);
    }

    if (allDone) {
      this.add.text(width / 2, 504, 'Pick a place ↓', {
        fontFamily: UI_FONT,
        fontSize: '30px',
        color: '#fff4d6',
        stroke: '#2b2018',
        strokeThickness: 5
      }).setOrigin(0.5);
    } else {
      createPillButton(this, {
        x: width / 2, y: 492,
        width: 260, height: 80,
        label: 'Play',
        fontSize: 32, radius: 40,
        onClick: () => {
          this.scene.start('LoadingScene', {
            targetScene: 'GameScene',
            targetData: { levelId: playScene.id },
            message: `Opening ${sceneLabel}...`
          });
        }
      });
    }

    this.createPlaceDots(width / 2, 596, playScene?.id);

    // Sticker Book entry — small, sits beneath the dots
    createPillButton(this, {
      x: width - 130, y: height - 50,
      width: 180, height: 46,
      label: '📒 Sticker Book', fontSize: 16, radius: 23,
      onClick: () => this.scene.start('DeskScene')
    });

    this.add.text(width / 2, 650, footerLabel, {
      fontFamily: UI_FONT,
      fontSize: '23px',
      color: '#eadfc0',
      stroke: '#16251e',
      strokeThickness: 4
    }).setOrigin(0.5);
  }

  createPlaceDots(centerX, y, nextId) {
    const completed = loadCompletedSceneIds();
    const maxRowW = 1160;
    const gap = levels.length > 10 ? 10 : 18;
    const dotW = Math.max(72, Math.min(110, Math.floor((maxRowW - (levels.length - 1) * gap) / levels.length)));
    const dotH = Math.max(52, Math.round(dotW * 0.64));
    const badgeFontSize = dotW < 90 ? 13 : 15;
    const totalW = levels.length * dotW + (levels.length - 1) * gap;
    const startX = centerX - totalW / 2 + dotW / 2;

    levels.forEach((level, i) => {
      const x = startX + i * (dotW + gap);
      const isDone = completed.has(level.id);
      const isNext = level.id === nextId;
      const frameColor = isNext ? 0xffd86f : (isDone ? 0xcabfa8 : 0xfff4d6);

      // Shadow
      const shadow = this.add.graphics();
      shadow.fillStyle(0x2b1c12, 0.28);
      shadow.fillRoundedRect(x - dotW / 2, y - dotH / 2 + 5, dotW, dotH, 14);

      // Cream backplate so the thumbnail reads well
      const back = this.add.graphics();
      back.fillStyle(0xfff4d6, 0.95);
      back.fillRoundedRect(x - dotW / 2, y - dotH / 2, dotW, dotH, 14);

      // Thumbnail — only if texture is already loaded; otherwise show name
      let thumb = null;
      if (this.textures.exists(level.background.key)) {
        thumb = this.add.image(x, y, level.background.key)
          .setDisplaySize(dotW - 10, dotH - 14);
        if (isDone) thumb.setTint(0xb8b0a0).setAlpha(0.7);
      } else {
        // Name fallback so we don't show a green "missing texture" rect
        const shortName = level.title.replace('Whimsy Hollow ', '');
        this.add.text(x, y, shortName, {
          fontFamily: UI_FONT,
          fontSize: `${Math.max(11, Math.min(14, Math.floor(dotW / 8)))}px`,
          color: '#4a3a26',
          align: 'center',
          wordWrap: { width: dotW - 14, useAdvancedWrap: true }
        }).setOrigin(0.5);
      }

      // Outline
      const frame = this.add.graphics();
      frame.lineStyle(isNext ? 4 : 3, frameColor, 0.95);
      frame.strokeRoundedRect(x - dotW / 2, y - dotH / 2, dotW, dotH, 14);

      // Status badge under the dot
      const badge = isDone ? '✓ Done' : (isNext ? '★ Next' : 'Tap');
      this.add.text(x, y + dotH / 2 + 16, badge, {
        fontFamily: UI_FONT,
        fontSize: `${badgeFontSize}px`,
        color: isDone ? '#bdf3d3' : (isNext ? '#ffe09a' : '#f2ead0'),
        stroke: '#2b2018',
        strokeThickness: 3
      }).setOrigin(0.5);

      // Click target
      const hit = this.add.zone(x, y, dotW, dotH + 32).setInteractive({ useHandCursor: true });
      hit.on('pointerover', () => { if (thumb) thumb.setDisplaySize(dotW - 4, dotH - 8); });
      hit.on('pointerout', () => { if (thumb) thumb.setDisplaySize(dotW - 10, dotH - 14); });
      hit.on('pointerdown', () => {
        // Only wipe progress for completed levels (replay). In-progress
        // levels resume where the player left off.
        if (completed.has(level.id)) {
          window.localStorage.removeItem(level.saveKey);
          window.localStorage.removeItem(level.bonusSaveKey);
        }
        this.scene.start('LoadingScene', {
          targetScene: 'GameScene',
          targetData: { levelId: level.id },
          message: `Opening ${level.title.replace('Whimsy Hollow ', '')}...`
        });
      });
    });
  }

  loadImageOnce(key, path) {
    if (!this.textures.exists(key)) {
      this.load.image(key, path);
    }
  }

  createMenuPreview(x, y, levelId) {
    if (!['restaurant-kitchen', 'whimsy-living-room', 'cozy-dream-bedroom', 'forest-bookshop'].includes(levelId)) {
      return;
    }

    const shadow = this.add.ellipse(x, y + 42, 54, 14, 0x2d1d12, 0.28);
    const textureKeyByLevel = {
      'restaurant-kitchen': 'object-magic-recipe-card',
      'whimsy-living-room': 'object-purple-teapot',
      'cozy-dream-bedroom': 'object-sleepy-cat',
      'forest-bookshop': 'object-bookshop-hourglass'
    };
    const textureKey = textureKeyByLevel[levelId];
    const card = this.add.image(x, y + 4, textureKey)
      .setScale(levelId === 'restaurant-kitchen' ? 0.11 : (levelId === 'forest-bookshop' ? 0.09 : 0.07))
      .setRotation(-0.08);

    this.tweens.add({
      targets: [shadow, card],
      y: '-=5',
      duration: 1100,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }

  drawMascot(x, y, scale) {
    const mascot = this.add.container(x, y).setScale(scale);
    const shadow = this.add.ellipse(0, 55, 118, 24, 0x3d2a1d, 0.22);
    const image = this.add.image(0, -8, MASCOT_KEY)
      .setDisplaySize(148, 148);
    const bubbleParts = [
      this.add.circle(-120, -106, 34, 0x4a321c, 0.22),
      this.add.circle(-24, -106, 34, 0x4a321c, 0.22),
      this.add.rectangle(-72, -106, 96, 68, 0x4a321c, 0.22),
      this.add.circle(-120, -114, 32, 0xfffbf1, 0.98).setStrokeStyle(5, 0xff9fbd),
      this.add.circle(-24, -114, 32, 0xfffbf1, 0.98).setStrokeStyle(5, 0xff9fbd),
      this.add.rectangle(-72, -114, 96, 64, 0xfffbf1, 0.98),
      this.add.triangle(-42, -82, -16, -84, -5, -54, -40, -82, 0xfffbf1, 0.98)
    ];
    const text = this.add.text(-72, -114, 'Hi!', {
      fontFamily: UI_FONT,
      fontSize: '34px',
      color: '#35291d'
    }).setOrigin(0.5);
    mascot.add([shadow, image, ...bubbleParts, text]);

    this.tweens.add({
      targets: mascot,
      y: y - 10,
      duration: 900,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }
}
