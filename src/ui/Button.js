import Phaser from 'phaser';
import { theme, hex } from './theme.js';

/**
 * Soft cream pill button used everywhere.
 * Returns { container, setLabel, setEnabled, setVisible, setTint }.
 *
 * opts: { x, y, width, height, label, fontSize, radius, onClick,
 *         color, hoverColor, textColor, depth, icon }
 */
export function createPillButton(scene, opts) {
  const {
    x,
    y,
    width = theme.size.smallButton.w,
    height = theme.size.smallButton.h,
    label = '',
    fontSize = theme.size.smallButton.font,
    radius = Math.min(height / 2, theme.size.smallButton.radius),
    onClick = () => {},
    color = theme.color.cream,
    hoverColor = theme.color.creamHover,
    textColor = theme.color.text,
    depth = 20,
    icon = null
  } = opts;

  const container = scene.add.container(x, y).setDepth(depth);
  const disabledColor = theme.color.muted;

  const shadow = scene.add.graphics();
  shadow.fillStyle(theme.color.shadow, 0.22);
  shadow.fillRoundedRect(-width / 2, -height / 2 + 5, width, height, radius);

  const bg = scene.add.graphics();
  const drawBg = (fillColor) => {
    bg.clear();
    bg.fillStyle(fillColor, 1);
    bg.fillRoundedRect(-width / 2, -height / 2, width, height, radius);
    bg.lineStyle(2, theme.color.outline, 0.5);
    bg.strokeRoundedRect(-width / 2, -height / 2, width, height, radius);
  };
  drawBg(color);

  const text = scene.add.text(icon ? 10 : 0, 0, label, {
    fontFamily: theme.font,
    fontSize: `${fontSize}px`,
    color: hex(textColor)
  }).setOrigin(0.5);

  let iconObj = null;
  if (icon) {
    iconObj = scene.add.text(-width / 2 + 22, 0, icon, {
      fontFamily: theme.font,
      fontSize: `${fontSize + 2}px`,
      color: hex(textColor)
    }).setOrigin(0.5);
  }

  const hit = scene.add.zone(0, 0, width, height)
    .setOrigin(0.5)
    .setInteractive({ useHandCursor: true });

  container.add([shadow, bg, text]);
  if (iconObj) container.add(iconObj);
  container.add(hit);

  let enabled = true;
  let currentColor = color;

  hit.on('pointerover', () => {
    if (enabled) {
      drawBg(hoverColor);
      scene.tweens.add({ targets: container, scale: 1.04, duration: 120, ease: 'Sine.easeOut' });
    }
  });
  hit.on('pointerout', () => {
    drawBg(enabled ? currentColor : disabledColor);
    scene.tweens.add({ targets: container, scale: 1, duration: 140, ease: 'Sine.easeOut' });
  });
  hit.on('pointerdown', () => {
    if (!enabled) return;
    scene.tweens.add({
      targets: container, scale: 0.96, duration: 80, yoyo: true, ease: 'Sine.easeOut'
    });
    if (scene.cache && scene.cache.audio && scene.cache.audio.exists('clickSfx')) {
      scene.sound.play('clickSfx', { volume: 0.25 });
    }
    onClick();
  });

  return {
    container,
    setLabel(newLabel) { text.setText(newLabel); },
    setEnabled(on) {
      enabled = on;
      drawBg(on ? currentColor : disabledColor);
      text.setAlpha(on ? 1 : 0.6);
      if (iconObj) iconObj.setAlpha(on ? 1 : 0.6);
      if (on) hit.setInteractive({ useHandCursor: true });
      else hit.disableInteractive();
    },
    setVisible(v) { container.setVisible(v); },
    setColor(newColor, newHover) {
      currentColor = newColor;
      drawBg(enabled ? newColor : disabledColor);
      if (newHover) {
        // store via closure: simplest is to redraw on hover, so update hoverColor variable
      }
    },
    destroy() { container.destroy(); }
  };
}

/**
 * Soft status pill — non-interactive label, same visual family as button.
 * Returns { container, setText }.
 */
export function createStatusPill(scene, opts) {
  const {
    x, y,
    width = theme.size.hudPill.w,
    height = theme.size.hudPill.h,
    label = '',
    fontSize = theme.size.hudPill.font,
    radius = height / 2,
    color = theme.color.cream,
    textColor = theme.color.text,
    depth = 20
  } = opts;

  const container = scene.add.container(x, y).setDepth(depth);

  const shadow = scene.add.graphics();
  shadow.fillStyle(theme.color.shadow, 0.18);
  shadow.fillRoundedRect(-width / 2, -height / 2 + 4, width, height, radius);

  const bg = scene.add.graphics();
  bg.fillStyle(color, 0.94);
  bg.fillRoundedRect(-width / 2, -height / 2, width, height, radius);
  bg.lineStyle(2, theme.color.outline, 0.4);
  bg.strokeRoundedRect(-width / 2, -height / 2, width, height, radius);

  const text = scene.add.text(0, 0, label, {
    fontFamily: theme.font,
    fontSize: `${fontSize}px`,
    color: hex(textColor)
  }).setOrigin(0.5);

  container.add([shadow, bg, text]);

  return {
    container,
    setText(newText) { text.setText(newText); }
  };
}
