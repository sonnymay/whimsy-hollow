import Phaser from 'phaser';
import { getLevelById, getNextLevel, mailGarden, markSceneComplete } from '../data/levels.js';
import { createPillButton } from '../ui/Button.js';
import { setBackdrop } from '../ui/backdrop.js';
import { theme } from '../ui/theme.js';

const UI_FONT = theme.font;

export class WinScene extends Phaser.Scene {
  constructor() {
    super('WinScene');
    this.level = mailGarden;
  }

  init(data = {}) {
    this.level = getLevelById(data.levelId);
  }

  preload() {
    this.load.image(this.level.background.key, this.level.background.path);
  }

  create() {
    const { width, height } = this.scale;
    const nextLevel = getNextLevel(this.level.id);
    markSceneComplete(this.level.id);

    setBackdrop(this.level.background.path);
    this.add.image(width / 2, height / 2, this.level.background.key).setDisplaySize(width, height);
    this.add.rectangle(0, 0, width, height, 0x17130f, 0.46).setOrigin(0);
    this.add.rectangle(width / 2, height / 2, 620, 420, 0x172820, 0.78)
      .setStrokeStyle(3, 0xf0d27d, 0.74);
    this.add.circle(width / 2, 200, 138, 0xf8d77d, 0.18);

    this.add.text(width / 2, 168, 'All Found!', {
      fontFamily: UI_FONT,
      fontSize: '62px',
      color: '#fff4cf',
      stroke: '#473222',
      strokeThickness: 7
    }).setOrigin(0.5);

    this.add.text(width / 2, 258, nextLevel ? `Next: ${nextLevel.title}` : 'Great job!', {
      fontFamily: UI_FONT,
      fontSize: '28px',
      color: '#d8ead7'
    }).setOrigin(0.5);

    const bonusCount = this.loadBonusCount();
    this.add.text(width / 2, 318, `${this.getBonusLabel()} ${bonusCount}/${this.level.bonusEnvelopes.length}`, {
      fontFamily: UI_FONT,
      fontSize: '22px',
      color: '#ffe1a0'
    }).setOrigin(0.5);

    if (nextLevel) {
      this.time.delayedCall(900, () => this.startNextLevel(nextLevel));
      return;
    }

    createPillButton(this, {
      x: width / 2 - 200, y: 432,
      width: 160, height: 60,
      label: 'My Finds', fontSize: 22, radius: 30,
      onClick: () => this.scene.start('DeskScene', { levelId: this.level.id })
    });

    createPillButton(this, {
      x: width / 2, y: 432,
      width: 160, height: 60,
      label: 'Again', fontSize: 22, radius: 30,
      onClick: () => {
        window.localStorage.removeItem(this.level.saveKey);
        window.localStorage.removeItem(this.level.bonusSaveKey);
        this.scene.start('GameScene', { levelId: this.level.id });
      }
    });

    createPillButton(this, {
      x: width / 2 + 200, y: 432,
      width: 160, height: 60,
      label: 'Home', fontSize: 22, radius: 30,
      onClick: () => this.scene.start('MenuScene')
    });
  }

  startNextLevel(nextLevel) {
    window.localStorage.removeItem(nextLevel.saveKey);
    window.localStorage.removeItem(nextLevel.bonusSaveKey);
    this.scene.start('LoadingScene', {
      targetScene: 'GameScene',
      targetData: { levelId: nextLevel.id },
      message: `Opening ${nextLevel.title}...`
    });
  }

  createButton(x, y, label, onClick) {
    const leftCap = this.add.circle(x - 83, y, 33, 0xffd86f, 0.98)
      .setStrokeStyle(3, 0x583a20);
    const rightCap = this.add.circle(x + 83, y, 33, 0xffd86f, 0.98)
      .setStrokeStyle(3, 0x583a20);
    const bg = this.add.rectangle(x, y, 166, 66, 0xffd86f, 0.98)
      .setStrokeStyle(3, 0x583a20)
      .setInteractive({ useHandCursor: true });
    const text = this.add.text(x, y, label, {
      fontFamily: UI_FONT,
      fontSize: '29px',
      color: '#2d271d'
    }).setOrigin(0.5);

    const setFill = (color) => {
      leftCap.setFillStyle(color, 0.98);
      rightCap.setFillStyle(color, 0.98);
      bg.setFillStyle(color, 0.98);
    };

    bg.on('pointerover', () => setFill(0xffee9f));
    bg.on('pointerout', () => setFill(0xffd86f));
    bg.on('pointerdown', onClick);

    return { bg, text };
  }

  loadBonusCount() {
    try {
      const value = window.localStorage.getItem(this.level.bonusSaveKey);
      const parsed = value ? JSON.parse(value) : [];
      return Array.isArray(parsed) ? parsed.length : 0;
    } catch {
      return 0;
    }
  }

  getBonusLabel() {
    return this.level.bonusLabel ?? 'Notes';
  }
}
