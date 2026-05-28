import { theme } from './theme.js';

/**
 * Draw a soft cream card with consistent shadow + outline at (x, y) centered.
 * Returns the container so callers can add children and set depth.
 *
 * Use for any modal/panel that should feel like the same UI family:
 * pause menu, settings, intro/outro, win screen, etc.
 */
export function createCard(scene, opts) {
  const {
    x,
    y,
    width,
    height,
    radius = theme.radius.card,
    fill = theme.color.cream,
    fillAlpha = 0.97,
    border = theme.color.outline,
    borderAlpha = 0.45,
    depth = 20
  } = opts;

  const container = scene.add.container(x, y).setDepth(depth);

  const shadow = scene.add.graphics();
  shadow.fillStyle(theme.shadow.color, theme.shadow.alpha);
  shadow.fillRoundedRect(-width / 2, -height / 2 + theme.shadow.offsetY, width, height, radius);

  const bg = scene.add.graphics();
  bg.fillStyle(fill, fillAlpha);
  bg.fillRoundedRect(-width / 2, -height / 2, width, height, radius);
  bg.lineStyle(2.5, border, borderAlpha);
  bg.strokeRoundedRect(-width / 2, -height / 2, width, height, radius);

  container.add([shadow, bg]);
  return container;
}
