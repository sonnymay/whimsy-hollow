/**
 * Background music + ambient layers per level.
 *
 * Today: one shared loop is used everywhere (musicforgame.mp3).
 * To diversify per scene, drop more files into public/assets/music/ and
 * point each level at its own `music: { key, path }`.
 *
 * Ambient layers (birds, fire, crickets, etc.) are optional. Add a
 * `ambient: { key, path }` entry per level when you have the files.
 *
 * Recommended format: 96-128kbps OGG or MP3, seamless loop, < 1 MB.
 */

const sharedMusic = {
  key: 'music-shared',
  path: 'assets/music/musicforgame.mp3'
};

export const musicByLevel = {
  'mail-garden': { music: sharedMusic },
  'restaurant-kitchen': { music: sharedMusic },
  'whimsy-living-room': { music: sharedMusic },
  'cozy-dream-bedroom': { music: sharedMusic },
  'twilight-tea-garden': { music: sharedMusic },
  'forest-bookshop': { music: sharedMusic },
  'snowy-cabin-loft': { music: sharedMusic },
  'seaside-lighthouse': { music: sharedMusic },
  'spring-meadow-picnic': { music: sharedMusic }
};

export const menuMusic = sharedMusic;
