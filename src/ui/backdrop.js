/**
 * Sets the blurred painterly backdrop behind the Phaser canvas.
 * Used to fill the side bars on wide windows without cropping or
 * stretching the in-canvas art.
 *
 * @param {string} imagePath  Path relative to the public/ root (no leading slash).
 */
export function setBackdrop(imagePath) {
  if (typeof document === 'undefined') return;
  const el = document.getElementById('backdrop');
  if (!el) return;
  el.style.backgroundImage = `url("${imagePath}")`;
}
