/**
 * Tiny music + ambient layer manager. Survives scene changes by living
 * on a global registry attached to the Phaser game.
 *
 * Usage:
 *   queueMusic(scene, levelId);            // preloads, returns nothing
 *   await playMusicForLevel(scene, levelId);
 *   stopMusic(scene);
 */
import { menuMusic, musicByLevel } from '../data/music.js';
import { loadMusicEnabled, loadMusicVolume, loadAmbientVolume } from '../data/storage.js';

const STATE_KEY = '__whimsy_music__';

function getState(scene) {
  const game = scene.game;
  if (!game[STATE_KEY]) {
    game[STATE_KEY] = {
      currentLevelId: null,
      musicSound: null,
      ambientSound: null
    };
  }
  return game[STATE_KEY];
}

function tracksFor(levelId) {
  if (levelId === '__menu__') return { music: menuMusic, ambient: null };
  return musicByLevel[levelId] ?? { music: null, ambient: null };
}

/**
 * Add audio files to the scene's load queue if they exist on disk.
 * The Loader silently fails on 404, so missing files = silent layer.
 */
export function queueMusic(scene, levelId) {
  const { music, ambient } = tracksFor(levelId);
  if (music && !scene.cache.audio.exists(music.key)) {
    scene.load.audio(music.key, music.path);
  }
  if (ambient && !scene.cache.audio.exists(ambient.key)) {
    scene.load.audio(ambient.key, ambient.path);
  }
}

function fadeOutAndStop(scene, sound, ms = 600) {
  if (!sound || !sound.isPlaying) return;
  scene.tweens.add({
    targets: sound,
    volume: 0,
    duration: ms,
    onComplete: () => { try { sound.stop(); } catch {} }
  });
}

function startTrack(scene, key, targetVolume) {
  if (!scene.cache.audio.exists(key)) return null;
  const sound = scene.sound.add(key, { loop: true, volume: 0 });
  sound.play();
  scene.tweens.add({
    targets: sound,
    volume: targetVolume,
    duration: 800
  });
  return sound;
}

export function playMusicForLevel(scene, levelId) {
  const state = getState(scene);
  const enabled = loadMusicEnabled();
  const musicVol = loadMusicVolume();
  const ambVol = loadAmbientVolume();

  const { music, ambient } = tracksFor(levelId);
  const newMusicKey = music?.key ?? null;
  const newAmbientKey = ambient?.key ?? null;
  const currentMusicKey = state.musicSound?.key ?? null;
  const currentAmbientKey = state.ambientSound?.key ?? null;
  state.currentLevelId = levelId;

  if (!enabled) {
    fadeOutAndStop(scene, state.musicSound);
    fadeOutAndStop(scene, state.ambientSound);
    state.musicSound = null;
    state.ambientSound = null;
    return;
  }

  // Music: keep playing seamlessly if it's the same track key.
  if (newMusicKey !== currentMusicKey) {
    fadeOutAndStop(scene, state.musicSound);
    state.musicSound = music ? startTrack(scene, music.key, musicVol) : null;
  } else if (state.musicSound) {
    state.musicSound.setVolume(musicVol);
  }

  // Ambient: same.
  if (newAmbientKey !== currentAmbientKey) {
    fadeOutAndStop(scene, state.ambientSound);
    state.ambientSound = ambient ? startTrack(scene, ambient.key, ambVol) : null;
  } else if (state.ambientSound) {
    state.ambientSound.setVolume(ambVol);
  }
}

export function stopMusic(scene) {
  const state = getState(scene);
  fadeOutAndStop(scene, state.musicSound);
  fadeOutAndStop(scene, state.ambientSound);
  state.musicSound = null;
  state.ambientSound = null;
  state.currentLevelId = null;
}

export function refreshMusicSettings(scene) {
  const state = getState(scene);
  const enabled = loadMusicEnabled();
  if (!enabled) {
    stopMusic(scene);
    return;
  }
  if (state.musicSound) state.musicSound.setVolume(loadMusicVolume());
  if (state.ambientSound) state.ambientSound.setVolume(loadAmbientVolume());
  if (!state.musicSound && state.currentLevelId) {
    playMusicForLevel(scene, state.currentLevelId);
  }
}
