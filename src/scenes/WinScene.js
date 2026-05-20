import Phaser from 'phaser';
import { mailGarden } from '../data/levels.js';

export class WinScene extends Phaser.Scene {
  constructor() {
    super('WinScene');
  }

  create() {
    const { width, height } = this.scale;

    this.add.rectangle(0, 0, width, height, 0x233a34).setOrigin(0);
    this.add.circle(width / 2, 210, 150, 0xf8d77d, 0.2);

    this.add.text(width / 2, 160, 'Garden Sorted!', {
      fontFamily: 'Georgia, serif',
      fontSize: '62px',
      color: '#fff4cf',
      stroke: '#473222',
      strokeThickness: 7
    }).setOrigin(0.5);

    this.add.text(width / 2, 252, 'Every tiny magical parcel found its way home.', {
      fontFamily: 'Georgia, serif',
      fontSize: '28px',
      color: '#d8ead7'
    }).setOrigin(0.5);

    this.createButton(width / 2 - 150, 412, 'Replay', () => {
      window.localStorage.removeItem(mailGarden.saveKey);
      this.scene.start('GameScene', { levelId: 'mail-garden' });
    });

    this.createButton(width / 2 + 150, 412, 'Menu', () => {
      this.scene.start('MenuScene');
    });
  }

  createButton(x, y, label, onClick) {
    const bg = this.add.rectangle(x, y, 226, 66, 0xf0c968, 1)
      .setStrokeStyle(3, 0x4f3a24)
      .setInteractive({ useHandCursor: true });
    const text = this.add.text(x, y, label, {
      fontFamily: 'Georgia, serif',
      fontSize: '29px',
      color: '#2d271d'
    }).setOrigin(0.5);

    bg.on('pointerover', () => bg.setFillStyle(0xffdd83));
    bg.on('pointerout', () => bg.setFillStyle(0xf0c968));
    bg.on('pointerdown', onClick);

    return { bg, text };
  }
}
