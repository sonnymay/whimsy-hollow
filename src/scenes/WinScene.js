import Phaser from 'phaser';
import { mailGarden } from '../data/levels.js';

const UI_FONT = '"Trebuchet MS", "Comic Sans MS", Arial, sans-serif';

export class WinScene extends Phaser.Scene {
  constructor() {
    super('WinScene');
  }

  preload() {
    this.load.image(mailGarden.background.key, mailGarden.background.path);
  }

  create() {
    const { width, height } = this.scale;

    this.add.image(width / 2, height / 2, mailGarden.background.key);
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

    this.add.text(width / 2, 258, 'Great job!', {
      fontFamily: UI_FONT,
      fontSize: '28px',
      color: '#d8ead7'
    }).setOrigin(0.5);

    const bonusCount = this.loadBonusCount();
    this.add.text(width / 2, 318, `Notes ${bonusCount}/3`, {
      fontFamily: UI_FONT,
      fontSize: '22px',
      color: '#ffe1a0'
    }).setOrigin(0.5);

    this.createButton(width / 2 - 240, 412, 'My Finds', () => {
      this.scene.start('DeskScene');
    });

    this.createButton(width / 2, 412, 'Again', () => {
      window.localStorage.removeItem(mailGarden.saveKey);
      window.localStorage.removeItem('whimsy-hollow:mail-garden:bonus');
      this.scene.start('GameScene', { levelId: 'mail-garden' });
    });

    this.createButton(width / 2 + 240, 412, 'Home', () => {
      this.scene.start('MenuScene');
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
      const value = window.localStorage.getItem('whimsy-hollow:mail-garden:bonus');
      const parsed = value ? JSON.parse(value) : [];
      return Array.isArray(parsed) ? parsed.length : 0;
    } catch {
      return 0;
    }
  }
}
