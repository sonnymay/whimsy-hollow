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

const menuMusicTrack = {
  key: 'music-menu',
  path: 'assets/music/menu.mp3'
};

const cozyMusic = {
  key: 'music-cozy',
  path: 'assets/music/cozy.mp3'
};

const natureMusic = {
  key: 'music-nature',
  path: 'assets/music/nature.mp3'
};

const dreamyMusic = {
  key: 'music-dreamy',
  path: 'assets/music/dreamy.mp3'
};

export const musicByLevel = {
  'mail-garden': { music: natureMusic },
  'restaurant-kitchen': { music: cozyMusic },
  'whimsy-living-room': { music: cozyMusic },
  'cozy-dream-bedroom': { music: dreamyMusic },
  'twilight-tea-garden': { music: natureMusic },
  'forest-bookshop': { music: dreamyMusic },
  'snowy-cabin-loft': { music: dreamyMusic },
  'seaside-lighthouse': { music: natureMusic },
  'spring-meadow-picnic': { music: natureMusic },
  'autumn-apple-orchard': { music: natureMusic },
  'starlight-greenhouse': { music: dreamyMusic },
  'moonlit-toy-attic': { music: dreamyMusic },
  'cloudberry-treehouse': { music: cozyMusic },
  'cozy-quilt-workshop': { music: cozyMusic },
  'sleepy-train-car': { music: cozyMusic },
  'sunbeam-pottery-studio': { music: cozyMusic },
  'candlelit-music-parlor': { music: cozyMusic },
  'rainy-art-atelier': { music: cozyMusic },
  'morning-clockmaker-nook': { music: cozyMusic },
  'willow-pond-boathouse': { music: natureMusic },
  'breezy-kite-workshop': { music: natureMusic },
  'lavender-laundry-room': { music: cozyMusic },
  'cozy-map-room': { music: cozyMusic },
  'sunny-gift-wrap-nook': { music: cozyMusic },
  'misty-herb-pantry': { music: cozyMusic },
  'sunny-puzzle-parlor': { music: cozyMusic },
  'moonlit-origami-alcove': { music: dreamyMusic },
  'cozy-cobbler-nook': { music: cozyMusic },
  'starlight-observatory-nook': { music: dreamyMusic },
  'honey-candle-workshop': { music: cozyMusic },
  'morning-birdwatching-porch': { music: natureMusic },
  'sunlit-seed-library': { music: natureMusic },
  'painted-pebble-patio': { music: natureMusic },
  'puppet-theater-alcove': { music: cozyMusic },
  'rainbow-glass-sunroom': { music: cozyMusic },
  'rainy-boot-mudroom': { music: cozyMusic },
  'cozy-aquarium-corner': { music: cozyMusic },
  'cozy-mineral-cabinet': { music: cozyMusic },
  'cozy-stamp-desk': { music: cozyMusic },
  'sunny-wardrobe-nook': { music: cozyMusic },
  'cozy-bath-nook': { music: cozyMusic }
};

export const menuMusic = menuMusicTrack;
