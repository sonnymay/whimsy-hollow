import Phaser from 'phaser';
import { mailGarden } from '../data/levels.js';

const HINT_COOLDOWN_MS = 8000;
const HINT_DURATION_MS = 2000;

export class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
    this.level = mailGarden;
    this.foundIds = new Set();
    this.objectSprites = new Map();
    this.checklistItems = new Map();
    this.hintReady = true;
  }

  preload() {
    this.load.image(this.level.background.key, this.level.background.path);

    for (const object of this.level.objects) {
      this.load.image(object.key, object.asset);
    }

    this.load.audio('foundChime', 'assets/sounds/found.wav');
  }

  create() {
    this.foundIds = this.loadProgress();
    this.objectSprites = new Map();
    this.checklistItems = new Map();
    this.hintReady = true;

    this.add.image(640, 360, this.level.background.key);
    this.add.rectangle(640, 360, 1280, 720, 0x1f332f, 0.1);

    this.createObjects();
    this.createHud();
    this.updateHud();

    if (this.foundIds.size >= this.level.objects.length) {
      this.time.delayedCall(250, () => this.scene.start('WinScene'));
    }
  }

  createObjects() {
    for (const object of this.level.objects) {
      const sprite = this.add.image(object.x, object.y, object.key)
        .setScale(object.scale)
        .setDepth(5)
        .setInteractive({ useHandCursor: true });

      sprite.setData('objectId', object.id);
      sprite.setData('objectName', object.name);

      if (this.foundIds.has(object.id)) {
        sprite.setVisible(false);
        sprite.disableInteractive();
      }

      sprite.on('pointerover', () => {
        if (!this.foundIds.has(object.id)) {
          sprite.setTint(0xfff1a6);
        }
      });

      sprite.on('pointerout', () => {
        if (!this.foundIds.has(object.id)) {
          sprite.clearTint();
        }
      });

      sprite.on('pointerdown', () => this.findObject(object));
      this.objectSprites.set(object.id, sprite);
    }
  }

  createHud() {
    this.add.rectangle(1114, 360, 284, 672, 0x243a33, 0.88)
      .setStrokeStyle(3, 0xf7d88a)
      .setDepth(20);

    this.add.text(1114, 58, 'Mail Garden Finds', {
      fontFamily: 'Georgia, serif',
      fontSize: '24px',
      color: '#fff6d5',
      align: 'center'
    }).setOrigin(0.5).setDepth(21);

    this.countText = this.add.text(1114, 94, '0/10', {
      fontFamily: 'Georgia, serif',
      fontSize: '28px',
      color: '#aee6c8',
      align: 'center'
    }).setOrigin(0.5).setDepth(21);

    this.level.objects.forEach((object, index) => {
      const y = 145 + index * 38;
      const mark = this.add.text(994, y, '○', {
        fontFamily: 'Georgia, serif',
        fontSize: '24px',
        color: '#f5d07d'
      }).setOrigin(0.5).setDepth(21);

      const label = this.add.text(1022, y, object.name, {
        fontFamily: 'Georgia, serif',
        fontSize: '20px',
        color: '#f7eed5'
      }).setOrigin(0, 0.5).setDepth(21);

      this.checklistItems.set(object.id, { mark, label });
    });

    this.hintButtonBg = this.add.rectangle(1114, 604, 218, 56, 0xf0c968, 1)
      .setStrokeStyle(3, 0x4f3a24)
      .setInteractive({ useHandCursor: true })
      .setDepth(21);

    this.hintButtonText = this.add.text(1114, 604, 'Hint', {
      fontFamily: 'Georgia, serif',
      fontSize: '26px',
      color: '#2d271d'
    }).setOrigin(0.5).setDepth(22);

    this.hintButtonBg.on('pointerover', () => {
      if (this.hintReady) {
        this.hintButtonBg.setFillStyle(0xffdd83);
      }
    });
    this.hintButtonBg.on('pointerout', () => {
      this.hintButtonBg.setFillStyle(this.hintReady ? 0xf0c968 : 0x7b786c);
    });
    this.hintButtonBg.on('pointerdown', () => this.showHint());

    const menuButton = this.add.text(1114, 666, 'Menu', {
      fontFamily: 'Georgia, serif',
      fontSize: '20px',
      color: '#dbeee1',
      backgroundColor: '#36544b',
      padding: { left: 18, right: 18, top: 8, bottom: 8 }
    }).setOrigin(0.5).setInteractive({ useHandCursor: true }).setDepth(21);

    menuButton.on('pointerdown', () => this.scene.start('MenuScene'));
  }

  findObject(object) {
    if (this.foundIds.has(object.id)) {
      return;
    }

    const sprite = this.objectSprites.get(object.id);
    this.foundIds.add(object.id);
    this.saveProgress();
    this.playFoundFeedback(sprite);
    sprite.disableInteractive();

    this.tweens.add({
      targets: sprite,
      alpha: 0,
      scale: sprite.scale * 1.24,
      duration: 260,
      ease: 'Sine.easeOut',
      onComplete: () => sprite.setVisible(false)
    });

    this.updateHud();

    if (this.foundIds.size >= this.level.objects.length) {
      this.time.delayedCall(700, () => this.scene.start('WinScene'));
    }
  }

  playFoundFeedback(sprite) {
    if (this.sound.get('foundChime') || this.cache.audio.exists('foundChime')) {
      this.sound.play('foundChime', { volume: 0.38 });
    }

    for (let i = 0; i < 14; i += 1) {
      const angle = (Math.PI * 2 * i) / 14;
      const sparkle = this.add.star(sprite.x, sprite.y, 5, 4, 11, 0xfff0a8, 1)
        .setDepth(30)
        .setBlendMode(Phaser.BlendModes.ADD);

      this.tweens.add({
        targets: sparkle,
        x: sprite.x + Math.cos(angle) * Phaser.Math.Between(34, 72),
        y: sprite.y + Math.sin(angle) * Phaser.Math.Between(34, 72),
        alpha: 0,
        scale: 0.2,
        duration: 520,
        ease: 'Cubic.easeOut',
        onComplete: () => sparkle.destroy()
      });
    }
  }

  showHint() {
    if (!this.hintReady) {
      return;
    }

    const remaining = this.level.objects.filter((object) => !this.foundIds.has(object.id));
    if (remaining.length === 0) {
      return;
    }

    const object = remaining[0];
    const sprite = this.objectSprites.get(object.id);
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
    this.hintButtonBg.setFillStyle(0x7b786c);
    this.hintButtonText.setText('Hint cooling');

    this.time.delayedCall(HINT_COOLDOWN_MS, () => {
      this.hintReady = true;
      this.hintButtonBg.setInteractive({ useHandCursor: true });
      this.hintButtonBg.setFillStyle(0xf0c968);
      this.hintButtonText.setText('Hint');
    });
  }

  updateHud() {
    this.countText.setText(`${this.foundIds.size}/${this.level.objects.length}`);

    for (const object of this.level.objects) {
      const item = this.checklistItems.get(object.id);
      const found = this.foundIds.has(object.id);
      item.mark.setText(found ? '✓' : '○');
      item.mark.setColor(found ? '#aee6c8' : '#f5d07d');
      item.label.setColor(found ? '#91bea9' : '#f7eed5');
      item.label.setAlpha(found ? 0.7 : 1);
    }
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
}
