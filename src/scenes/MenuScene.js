import Phaser from 'phaser';
import { mailGarden } from '../data/levels.js';

const UI_FONT = '"Arial Rounded MT Bold", "Trebuchet MS", "Comic Sans MS", Arial, sans-serif';
const MASCOT_KEY = 'mailBirdMascot';
const MASCOT_PATH = 'assets/characters/mail_bird_mascot.png';

export class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  preload() {
    this.load.image(mailGarden.background.key, mailGarden.background.path);
    this.load.image(MASCOT_KEY, MASCOT_PATH);
  }

  create() {
    const { width, height } = this.scale;

    this.add.image(width / 2, height / 2, mailGarden.background.key);
    this.add.rectangle(0, 0, width, height, 0xfff2cf, 0.34).setOrigin(0).setBlendMode(Phaser.BlendModes.SCREEN);
    this.add.rectangle(width / 2, height / 2, width, height, 0x77c7a0, 0.18);
    this.add.rectangle(width / 2, 0, width, 210, 0x7eb58a, 0.44).setOrigin(0.5, 0);
    this.add.rectangle(width / 2, height, width, 160, 0x6aa9c8, 0.36).setOrigin(0.5, 1);
    this.add.circle(248, 210, 118, 0xffd1dc, 0.24);
    this.add.circle(1056, 190, 138, 0xffec8a, 0.2);
    this.add.circle(1020, 592, 156, 0x9de3ff, 0.18);
    this.drawMascot(width / 2 - 430, 426, 1.55);

    this.add.text(width / 2, 116, 'Cute Search', {
      fontFamily: UI_FONT,
      fontSize: '22px',
      color: '#f0d68e',
      letterSpacing: 2
    }).setOrigin(0.5);

    this.add.text(width / 2, 184, 'Whimsy Hollow', {
      fontFamily: UI_FONT,
      fontSize: '78px',
      color: '#fff2c7',
      stroke: '#2b2018',
      strokeThickness: 10
    }).setOrigin(0.5);

    this.add.text(width / 2, 304, 'Tap tiny treasures. No timer.', {
      fontFamily: UI_FONT,
      fontSize: '27px',
      color: '#f2ead0',
      stroke: '#1b2a22',
      strokeThickness: 4
    }).setOrigin(0.5);

    this.add.text(width / 2, 382, 'Mail Garden', {
      fontFamily: UI_FONT,
      fontSize: '34px',
      color: '#ffe09a',
      stroke: '#342515',
      strokeThickness: 5
    }).setOrigin(0.5);

    this.createButton(width / 2, 500, 'Play', 'search', () => {
      window.localStorage.removeItem(mailGarden.saveKey);
      window.localStorage.removeItem('whimsy-hollow:mail-garden:bonus');
      this.scene.start('GameScene', { levelId: 'mail-garden' });
    }, 240, 36);

    this.add.text(width / 2, 650, 'Big buttons. Picture clues. Cozy pace.', {
      fontFamily: UI_FONT,
      fontSize: '23px',
      color: '#eadfc0',
      stroke: '#16251e',
      strokeThickness: 4
    }).setOrigin(0.5);
  }

  createButton(x, y, label, icon, onClick, width = 268, fontSize = 28) {
    const shadowLeft = this.add.circle(x - width / 2 + 38, y + 9, 40, 0x3d2a1d, 0.34);
    const shadowRight = this.add.circle(x + width / 2 - 38, y + 9, 40, 0x3d2a1d, 0.34);
    const shadow = this.add.rectangle(x, y + 9, width - 76, 80, 0x3d2a1d, 0.34);
    const leftCap = this.add.circle(x - width / 2 + 38, y, 38, 0xffd86f, 0.98)
      .setStrokeStyle(4, 0x6a4323);
    const rightCap = this.add.circle(x + width / 2 - 38, y, 38, 0xffd86f, 0.98)
      .setStrokeStyle(4, 0x6a4323);
    const buttonBg = this.add.rectangle(x, y, width - 76, 76, 0xffd86f, 0.98)
      .setStrokeStyle(4, 0x6a4323)
      .setInteractive({ useHandCursor: true });
    this.drawButtonIcon(x - width / 2 + 48, y, icon);
    this.add.text(x + 16, y, label, {
      fontFamily: UI_FONT,
      fontSize: `${fontSize}px`,
      color: '#35291d'
    }).setOrigin(0.5);

    const setFill = (color) => {
      leftCap.setFillStyle(color, 0.98);
      rightCap.setFillStyle(color, 0.98);
      buttonBg.setFillStyle(color, 0.98);
    };

    buttonBg.on('pointerover', () => setFill(0xffee9f));
    buttonBg.on('pointerout', () => setFill(0xffd86f));
    buttonBg.on('pointerdown', onClick);

    this.tweens.add({
      targets: [leftCap, rightCap, buttonBg],
      y: y - 4,
      duration: 900,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }

  drawButtonIcon(x, y, icon) {
    if (icon === 'search') {
      this.add.circle(x - 3, y - 3, 11, 0xfff8dc, 1).setStrokeStyle(4, 0x35291d);
      this.add.rectangle(x + 10, y + 11, 18, 5, 0x35291d, 1).setRotation(0.75);
      return;
    }

    if (icon === 'book') {
      this.add.rectangle(x, y, 27, 26, 0xff9fbd, 1).setStrokeStyle(3, 0x35291d);
      this.add.line(x, y, 0, -12, 0, 12, 0x35291d, 1).setLineWidth(3);
      return;
    }

    this.add.star(x, y, 5, 7, 16, 0xffffff, 1).setStrokeStyle(3, 0x35291d);
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
