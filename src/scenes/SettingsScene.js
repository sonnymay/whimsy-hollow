import Phaser from 'phaser';
import { createPillButton } from '../ui/Button.js';
import { createCard } from '../ui/Card.js';
import { theme, hex } from '../ui/theme.js';
import {
  loadMuted, saveMuted,
  loadMusicEnabled, saveMusicEnabled,
  loadMusicVolume, saveMusicVolume,
  loadAmbientVolume, saveAmbientVolume,
  loadHighContrast, saveHighContrast,
  loadKeysPointer, saveKeysPointer,
  loadColorblind, saveColorblind,
  loadReducedMotion, saveReducedMotion,
  loadActiveSlot,
  saveActiveSlot,
  getMaxSaveSlots
} from '../data/storage.js';
import { refreshMusicSettings } from '../audio/music.js';

const UI_FONT = theme.font;

export class SettingsScene extends Phaser.Scene {
  constructor() {
    super('SettingsScene');
  }

  init(data = {}) {
    this.returnTo = data.returnTo || null;
  }

  create() {
    const { width, height } = this.scale;

    // Soft cream wash over whatever was behind (the menu).
    this.add.rectangle(0, 0, width, height, 0x2b2018, 0.6).setOrigin(0);

    const cardW = 720;
    const cardH = 700;
    createCard(this, {
      x: width / 2,
      y: height / 2,
      width: cardW,
      height: cardH,
      radius: theme.radius.cardLarge,
      depth: 5
    });

    this.add.text(width / 2, height / 2 - cardH / 2 + 48, 'Settings', {
      fontFamily: UI_FONT,
      fontSize: '42px',
      color: hex(theme.color.text)
    }).setOrigin(0.5);

    const divider = this.add.graphics();
    divider.lineStyle(1, theme.color.outline, 0.22);
    divider.lineBetween(
      width / 2 - cardW / 2 + 80, height / 2 - cardH / 2 + 88,
      width / 2 + cardW / 2 - 80, height / 2 - cardH / 2 + 88
    );

    let y = height / 2 - 250;
    this.addCycleRow(width / 2, y, 'Save slot', () => String(loadActiveSlot() + 1), ['1', '2', '3'], {
      '1': 'Slot 1',
      '2': 'Slot 2',
      '3': 'Slot 3'
    }, (label) => {
      saveActiveSlot(parseInt(label, 10) - 1);
    });

    y += 55;
    this.addToggleRow(width / 2, y, 'Sounds', () => !loadMuted(), (on) => {
      saveMuted(!on);
      this.sound.mute = !on;
    });

    y += 55;
    this.addToggleRow(width / 2, y, 'Music', loadMusicEnabled, (on) => {
      saveMusicEnabled(on);
      refreshMusicSettings(this);
    });

    y += 50;
    this.addSliderRow(width / 2, y, 'Music volume', loadMusicVolume, (v) => {
      saveMusicVolume(v);
      refreshMusicSettings(this);
    });

    y += 50;
    this.addSliderRow(width / 2, y, 'Ambient volume', loadAmbientVolume, (v) => {
      saveAmbientVolume(v);
      refreshMusicSettings(this);
    });

    y += 50;
    this.addToggleRow(width / 2, y, 'High-Contrast Outlines', loadHighContrast, (on) => {
      saveHighContrast(on);
    });

    y += 55;
    this.addToggleRow(width / 2, y, 'Keyboard Pointer', loadKeysPointer, (on) => {
      saveKeysPointer(on);
    });

    y += 55;
    this.addToggleRow(width / 2, y, 'Reduced Motion', loadReducedMotion, (on) => {
      saveReducedMotion(on);
    });

    y += 55;
    const colorblindOptions = ['none', 'protanopia', 'deuteranopia', 'tritanopia'];
    const displayNames = {
      none: 'None',
      protanopia: 'Protanopia',
      deuteranopia: 'Deuteranopia',
      tritanopia: 'Tritanopia'
    };
    this.addCycleRow(width / 2, y, 'Colorblind Filter', loadColorblind, colorblindOptions, displayNames, (mode) => {
      saveColorblind(mode);
    });

    // About
    this.add.text(width / 2, height / 2 + cardH / 2 - 116,
      'Whimsy Hollow v1.0.0 • A cozy hidden-object game\nNo timer. Just tiny treasures.',
      {
        fontFamily: UI_FONT,
        fontSize: '17px',
        color: hex(theme.color.textSoft),
        align: 'center'
      }
    ).setOrigin(0.5);

    createPillButton(this, {
      x: width / 2, y: height / 2 + cardH / 2 - 52,
      width: 200, height: 60,
      label: 'Done', fontSize: 24, radius: 30,
      onClick: () => {
        if (this.returnTo) {
          this.scene.start('PauseScene', { from: this.returnTo });
        } else {
          this.scene.start('MenuScene');
        }
      }
    });
  }

  addToggleRow(centerX, y, label, getValue, onChange) {
    const labelX = centerX - 220;
    this.add.text(labelX, y, label, {
      fontFamily: UI_FONT, fontSize: '22px', color: hex(theme.color.text)
    }).setOrigin(0, 0.5);

    const trackX = centerX + 140;
    const track = this.add.graphics();
    const knob = this.add.circle(0, y, 18, theme.color.cream).setStrokeStyle(2, theme.color.outline);

    const render = () => {
      const on = getValue();
      track.clear();
      track.fillStyle(on ? theme.color.leaf : theme.color.muted, 1);
      track.fillRoundedRect(trackX - 36, y - 16, 72, 32, 16);
      track.lineStyle(2, theme.color.outline, 0.4);
      track.strokeRoundedRect(trackX - 36, y - 16, 72, 32, 16);
      knob.x = trackX + (on ? 18 : -18);
    };
    render();

    const hit = this.add.zone(trackX, y, 110, 50).setInteractive({ useHandCursor: true });
    hit.on('pointerdown', () => {
      onChange(!getValue());
      render();
    });
  }

  addSliderRow(centerX, y, label, getValue, onChange) {
    const labelX = centerX - 220;
    this.add.text(labelX, y, label, {
      fontFamily: UI_FONT, fontSize: '18px', color: hex(theme.color.textSoft)
    }).setOrigin(0, 0.5);

    const trackX = centerX + 80;
    const trackW = 200;
    const track = this.add.rectangle(trackX, y, trackW, 8, theme.color.muted, 1)
      .setStrokeStyle(1, theme.color.outline, 0.3);
    const fill = this.add.rectangle(trackX - trackW / 2, y, 0, 8, theme.color.leaf, 1).setOrigin(0, 0.5);
    const knob = this.add.circle(0, y, 12, theme.color.cream).setStrokeStyle(2, theme.color.outline);

    const render = () => {
      const v = Math.min(1, Math.max(0, getValue()));
      fill.width = trackW * v;
      knob.x = trackX - trackW / 2 + trackW * v;
    };
    render();

    const hit = this.add.zone(trackX, y, trackW + 30, 36).setInteractive({ useHandCursor: true });
    const updateFromPointer = (pointer) => {
      const localX = pointer.x - (trackX - trackW / 2);
      const v = Math.min(1, Math.max(0, localX / trackW));
      onChange(v);
      render();
    };
    hit.on('pointerdown', (pointer) => {
      updateFromPointer(pointer);
      this.input.on('pointermove', updateFromPointer);
      this.input.once('pointerup', () => this.input.off('pointermove', updateFromPointer));
    });
  }

  addCycleRow(centerX, y, label, getValue, options, displayNames, onChange) {
    const labelX = centerX - 220;
    this.add.text(labelX, y, label, {
      fontFamily: UI_FONT, fontSize: '22px', color: hex(theme.color.text)
    }).setOrigin(0, 0.5);

    const btnX = centerX + 140;
    const currentVal = getValue();
    const btn = createPillButton(this, {
      x: btnX,
      y: y,
      width: 160,
      height: 36,
      label: displayNames[currentVal] || currentVal,
      fontSize: 16,
      radius: 18,
      onClick: () => {
        const current = getValue();
        const currentIndex = options.indexOf(current);
        const nextIndex = (currentIndex + 1) % options.length;
        const nextValue = options[nextIndex];
        onChange(nextValue);
        btn.setLabel(displayNames[nextValue] || nextValue);
      }
    });
  }
}
