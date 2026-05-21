import Phaser from 'phaser';
import { mailGarden } from '../data/levels.js';

const BONUS_SAVE_KEY = 'whimsy-hollow:mail-garden:bonus';
const UI_FONT = '"Trebuchet MS", "Comic Sans MS", Arial, sans-serif';

export class DeskScene extends Phaser.Scene {
  constructor() {
    super('DeskScene');
  }

  preload() {
    for (const object of mailGarden.objects) {
      this.load.image(object.key, object.asset);
    }
  }

  create() {
    const { width, height } = this.scale;
    const foundIds = this.loadIds(mailGarden.saveKey);
    const bonusIds = this.loadIds(BONUS_SAVE_KEY);

    this.add.rectangle(0, 0, width, height, 0x2c241b).setOrigin(0);
    this.add.rectangle(width / 2, 0, width, height, 0x4d725b, 0.2).setOrigin(0.5, 0);
    this.add.circle(1060, 128, 260, 0xf6d27a, 0.09);
    this.add.circle(230, 620, 220, 0x8fc8b0, 0.08);

    this.createButton(116, 64, 'Back', () => this.scene.start('GameScene'));

    this.add.text(width / 2, 72, 'Sticker Book', {
      fontFamily: UI_FONT,
      fontSize: '58px',
      color: '#fff0c8',
      stroke: '#2b2018',
      strokeThickness: 8
    }).setOrigin(0.5);

    this.add.text(width / 2, 126, 'Your cute finds live here.', {
      fontFamily: UI_FONT,
      fontSize: '23px',
      color: '#e8dcc1'
    }).setOrigin(0.5);

    this.drawDesk(foundIds, bonusIds);
    this.drawProgress(foundIds, bonusIds);

    this.createButton(width / 2 - 220, 654, 'Play', () => this.scene.start('GameScene'));
    this.createButton(width / 2, 654, 'Again', () => {
      window.localStorage.removeItem(mailGarden.saveKey);
      window.localStorage.removeItem(BONUS_SAVE_KEY);
      this.scene.start('GameScene');
    });
    this.createButton(width / 2 + 220, 654, 'Home', () => this.scene.start('MenuScene'));
  }

  drawDesk(foundIds, bonusIds) {
    this.add.rectangle(640, 430, 946, 336, 0xffefc8, 1)
      .setStrokeStyle(6, 0x6a4323);
    this.add.rectangle(640, 430, 18, 336, 0xd59a58, 1);
    this.add.rectangle(405, 430, 434, 300, 0xfff8dc, 1)
      .setStrokeStyle(2, 0xe2bd77, 0.75);
    this.add.rectangle(875, 430, 434, 300, 0xfff8dc, 1)
      .setStrokeStyle(2, 0xe2bd77, 0.75);

    mailGarden.objects.forEach((object, index) => {
      const column = index % 5;
      const row = Math.floor(index / 5);
      const x = 286 + column * 136;
      const y = 350 + row * 136;
      const found = foundIds.has(object.id);

      this.add.circle(x, y, 52, found ? 0xffd1dc : 0xe5d7bd, found ? 0.42 : 0.2)
        .setStrokeStyle(3, found ? 0xff9fbd : 0xbfa27a, found ? 0.9 : 0.55);
      const sprite = this.add.image(x, y, object.key)
        .setScale(found ? object.scale * 1.15 : object.scale)
        .setAlpha(found ? 1 : 0.18)
        .setTint(found ? 0xffffff : 0x1a1a1a);

      if (found) {
        this.tweens.add({
          targets: sprite,
          y: y - 4,
          duration: 1200 + index * 80,
          ease: 'Sine.easeInOut',
          yoyo: true,
          repeat: -1
        });
      }

      this.add.text(x, y + 68, found ? 'Sticker!' : 'Soon', {
        fontFamily: UI_FONT,
        fontSize: '15px',
        color: found ? '#fff0c8' : '#8e7c64'
      }).setOrigin(0.5);
    });

    this.add.rectangle(1048, 430, 156, 214, 0x1f3028, 0.72)
      .setStrokeStyle(2, 0xe4c46e, 0.65);
    this.add.text(1048, 342, 'Notes', {
      fontFamily: UI_FONT,
      fontSize: '20px',
      color: '#fff0c8'
    }).setOrigin(0.5);

    mailGarden.bonusEnvelopes.forEach((note, index) => {
      const y = 386 + index * 56;
      const found = bonusIds.has(note.id);
      this.add.rectangle(1048, y, 92, 34, found ? 0xf7df9a : 0x554430, found ? 0.9 : 0.45)
        .setStrokeStyle(1, found ? 0x72552a : 0x8c7654, 0.8)
        .setRotation(index % 2 === 0 ? -0.05 : 0.04);
      this.add.text(1048, y, found ? note.clue : '???', {
        fontFamily: UI_FONT,
        fontSize: '13px',
        color: found ? '#4a321c' : '#b7a98f'
      }).setOrigin(0.5);
    });
  }

  drawProgress(foundIds, bonusIds) {
    const text = `Stickers ${foundIds.size}/${mailGarden.objects.length}     Notes ${bonusIds.size}/${mailGarden.bonusEnvelopes.length}`;
    this.add.rectangle(640, 178, 760, 46, 0x18251f, 0.62)
      .setStrokeStyle(2, 0xe4c46e, 0.54);
    this.add.text(640, 178, text, {
      fontFamily: UI_FONT,
      fontSize: '21px',
      color: '#ffe1a0'
    }).setOrigin(0.5);
  }

  createButton(x, y, label, onClick) {
    const leftCap = this.add.circle(x - 66, y, 29, 0xffd86f, 0.98)
      .setStrokeStyle(3, 0x583a20);
    const rightCap = this.add.circle(x + 66, y, 29, 0xffd86f, 0.98)
      .setStrokeStyle(3, 0x583a20);
    const bg = this.add.rectangle(x, y, 132, 58, 0xffd86f, 0.98)
      .setStrokeStyle(3, 0x583a20)
      .setInteractive({ useHandCursor: true });
    const text = this.add.text(x, y, label, {
      fontFamily: UI_FONT,
      fontSize: '22px',
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

  loadIds(key) {
    try {
      const value = window.localStorage.getItem(key);
      const parsed = value ? JSON.parse(value) : [];
      return new Set(Array.isArray(parsed) ? parsed : []);
    } catch {
      return new Set();
    }
  }
}
