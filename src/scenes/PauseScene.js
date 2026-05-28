import Phaser from 'phaser';
import { createPillButton } from '../ui/Button.js';
import { createCard } from '../ui/Card.js';
import { theme, hex } from '../ui/theme.js';

const UI_FONT = theme.font;

export class PauseScene extends Phaser.Scene {
  constructor() {
    super('PauseScene');
  }

  init(data = {}) {
    this.fromScene = data.from || 'GameScene';
  }

  create() {
    const { width, height } = this.scale;

    // Dark dimmed overlay
    this.add.rectangle(0, 0, width, height, 0x2b2018, 0.6).setOrigin(0);

    const cardW = 440;
    const cardH = 400;
    createCard(this, {
      x: width / 2,
      y: height / 2,
      width: cardW,
      height: cardH,
      radius: theme.radius.cardLarge,
      depth: 5
    });

    // Title
    this.add.text(width / 2, height / 2 - cardH / 2 + 60, 'Game Paused', {
      fontFamily: UI_FONT,
      fontSize: '34px',
      color: hex(theme.color.text)
    }).setOrigin(0.5);

    // Subtle divider for hierarchy
    const divider = this.add.graphics();
    divider.lineStyle(1, theme.color.outline, 0.25);
    divider.lineBetween(
      width / 2 - cardW / 2 + 60, height / 2 - cardH / 2 + 96,
      width / 2 + cardW / 2 - 60, height / 2 - cardH / 2 + 96
    );

    const btnW = 240;
    const btnH = 52;
    const gap = 20;
    let y = height / 2 - 30;

    // Resume button
    createPillButton(this, {
      x: width / 2, y,
      width: btnW, height: btnH,
      label: 'Resume', fontSize: 20,
      onClick: () => {
        this.sound.resumeAll();
        this.scene.resume(this.fromScene);
        this.scene.stop('PauseScene');
      }
    });

    // Settings button
    y += btnH + gap;
    createPillButton(this, {
      x: width / 2, y,
      width: btnW, height: btnH,
      label: 'Settings', fontSize: 20,
      onClick: () => {
        this.scene.stop('PauseScene');
        this.scene.start('SettingsScene', { returnTo: this.fromScene });
      }
    });

    // Home button
    y += btnH + gap;
    createPillButton(this, {
      x: width / 2, y,
      width: btnW, height: btnH,
      label: 'Home', fontSize: 20,
      onClick: () => {
        this.scene.stop('PauseScene');
        this.scene.stop(this.fromScene);
        this.scene.start('MenuScene');
      }
    });

    // Handle ESC key to resume as well
    this.input.keyboard.on('keydown-ESC', () => {
      this.sound.resumeAll();
      this.scene.resume(this.fromScene);
      this.scene.stop('PauseScene');
    });
  }
}
