import Phaser from 'phaser';

/**
 * Ambient particle layer for hidden-object scenes.
 *
 * Picks a "mood" from the level id (snow, firefly, petal, dust) and spawns
 * a slow stream of soft motes that drift across the screen. Cosmetic only —
 * particles never intercept input and live below the HUD layer.
 *
 * Usage:
 *   import { startAmbientParticles } from '../ui/AmbientParticles.js';
 *   startAmbientParticles(this, this.level.id); // inside GameScene.create()
 */

const MOODS = [
  {
    match: /(snow|cabin-loft|winter)/i,
    color: 0xffffff,
    alpha: 0.7,
    sizeMin: 2,
    sizeMax: 4,
    driftX: 8,
    driftY: 28,
    spawnEveryMs: 360,
    glyph: null
  },
  {
    match: /(firefly|lantern|candle|moonlit|starlight|twilight)/i,
    color: 0xffe7a3,
    alpha: 0.85,
    sizeMin: 2,
    sizeMax: 3,
    driftX: 22,
    driftY: -14,
    spawnEveryMs: 520,
    glow: true
  },
  {
    match: /(spring|meadow|bellflower|sunflower|florist|petal|garden|dandelion)/i,
    color: 0xffd1dc,
    alpha: 0.7,
    sizeMin: 3,
    sizeMax: 5,
    driftX: 24,
    driftY: 20,
    spawnEveryMs: 700
  },
  {
    match: /(rain|terrarium|misty|cloud)/i,
    color: 0xc7e9ff,
    alpha: 0.55,
    sizeMin: 1.5,
    sizeMax: 2.5,
    driftX: -6,
    driftY: 40,
    spawnEveryMs: 240
  }
];

const DEFAULT_MOOD = {
  color: 0xfff4d6,
  alpha: 0.32,
  sizeMin: 1,
  sizeMax: 2.5,
  driftX: 10,
  driftY: -6,
  spawnEveryMs: 900
};

function pickMood(levelId) {
  for (const mood of MOODS) {
    if (mood.match.test(levelId)) return mood;
  }
  return DEFAULT_MOOD;
}

export function startAmbientParticles(scene, levelId) {
  const mood = pickMood(levelId);
  const { width, height } = scene.scale;

  const layer = scene.add.container(0, 0).setDepth(3.5);
  if (typeof scene.addToWorld === 'function') {
    scene.addToWorld(layer);
  }

  const spawn = () => {
    if (!scene.scene || !scene.scene.isActive() || !layer || !layer.scene) return;
    const size = Phaser.Math.FloatBetween(mood.sizeMin, mood.sizeMax);
    const x = Phaser.Math.Between(-40, width + 40);
    const y = mood.driftY > 0
      ? Phaser.Math.Between(-30, 60)
      : Phaser.Math.Between(height - 80, height + 30);

    const dot = scene.add.circle(x, y, size, mood.color, mood.alpha);
    if (mood.glow) {
      dot.setBlendMode(Phaser.BlendModes.ADD);
    }
    layer.add(dot);

    const lifeMs = Phaser.Math.Between(7000, 13000);
    const endX = x + mood.driftX * (lifeMs / 1000);
    const endY = y + mood.driftY * (lifeMs / 1000);

    scene.tweens.add({
      targets: dot,
      x: endX,
      y: endY,
      alpha: 0,
      duration: lifeMs,
      ease: 'Sine.easeInOut',
      onComplete: () => dot.destroy()
    });

    // Soft horizontal sway for petal/firefly
    if (mood.glyph || mood.glow || mood.driftY <= 0) {
      scene.tweens.add({
        targets: dot,
        scale: 1.4,
        yoyo: true,
        repeat: -1,
        duration: 1400 + Math.random() * 800,
        ease: 'Sine.easeInOut'
      });
    }
  };

  // Seed a few so the screen isn't empty at first paint
  for (let i = 0; i < 6; i += 1) {
    scene.time.delayedCall(i * 80, spawn);
  }

  const timer = scene.time.addEvent({
    delay: mood.spawnEveryMs,
    loop: true,
    callback: spawn
  });

  const cleanup = () => {
    try { timer.remove(); } catch (_) { /* timer may already be gone */ }
    try {
      if (layer && layer.scene && !layer.destroyed) layer.destroy();
    } catch (_) { /* layer may already be torn down */ }
  };
  scene.events.once('shutdown', cleanup);
  scene.events.once('destroy', cleanup);

  return layer;
}
