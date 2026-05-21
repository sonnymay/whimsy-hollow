/**
 * Centralized localStorage access for Whimsy Hollow.
 * Avoids scattered key strings and silent JSON.parse explosions.
 */

const MUTE_KEY = 'whimsy-hollow:muted';
const ONBOARDED_KEY = 'whimsy-hollow:onboarded';
const MUSIC_ENABLED_KEY = 'whimsy-hollow:music-enabled';
const MUSIC_VOLUME_KEY = 'whimsy-hollow:music-volume';
const AMBIENT_VOLUME_KEY = 'whimsy-hollow:ambient-volume';

const DEFAULT_MUSIC_VOLUME = 0.45;
const DEFAULT_AMBIENT_VOLUME = 0.25;

function safeParseArray(raw) {
  try {
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function loadFoundIds(level) {
  return new Set(safeParseArray(window.localStorage.getItem(level.saveKey)));
}

export function saveFoundIds(level, set) {
  window.localStorage.setItem(level.saveKey, JSON.stringify([...set]));
}

export function loadBonusIds(level) {
  return new Set(safeParseArray(window.localStorage.getItem(level.bonusSaveKey)));
}

export function saveBonusIds(level, set) {
  window.localStorage.setItem(level.bonusSaveKey, JSON.stringify([...set]));
}

export function clearLevelProgress(level) {
  window.localStorage.removeItem(level.saveKey);
  window.localStorage.removeItem(level.bonusSaveKey);
}

export function loadMuted() {
  return window.localStorage.getItem(MUTE_KEY) === '1';
}

export function saveMuted(muted) {
  if (muted) {
    window.localStorage.setItem(MUTE_KEY, '1');
  } else {
    window.localStorage.removeItem(MUTE_KEY);
  }
}

export function loadMusicEnabled() {
  return window.localStorage.getItem(MUSIC_ENABLED_KEY) !== '0';
}

export function saveMusicEnabled(enabled) {
  window.localStorage.setItem(MUSIC_ENABLED_KEY, enabled ? '1' : '0');
}

function loadFloat(key, fallback) {
  const raw = window.localStorage.getItem(key);
  if (raw == null) return fallback;
  const n = parseFloat(raw);
  return Number.isFinite(n) ? Math.min(1, Math.max(0, n)) : fallback;
}

export function loadMusicVolume() {
  return loadFloat(MUSIC_VOLUME_KEY, DEFAULT_MUSIC_VOLUME);
}

export function saveMusicVolume(volume) {
  window.localStorage.setItem(MUSIC_VOLUME_KEY, String(volume));
}

export function loadAmbientVolume() {
  return loadFloat(AMBIENT_VOLUME_KEY, DEFAULT_AMBIENT_VOLUME);
}

export function saveAmbientVolume(volume) {
  window.localStorage.setItem(AMBIENT_VOLUME_KEY, String(volume));
}

export function loadOnboarded() {
  return window.localStorage.getItem(ONBOARDED_KEY) === '1';
}

export function saveOnboarded() {
  window.localStorage.setItem(ONBOARDED_KEY, '1');
}
