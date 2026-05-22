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

const COINS_KEY = 'whimsy-hollow:coins';
const REPUTATION_KEY = 'whimsy-hollow:reputation';
const OWNED_FURNITURE_KEY = 'whimsy-hollow:owned-furniture';
const PLACED_FURNITURE_KEY = 'whimsy-hollow:placed-furniture';

export function loadCoins() {
  const val = window.localStorage.getItem(COINS_KEY);
  if (val == null) return 100; // starting coins
  const parsed = parseInt(val, 10);
  return Number.isNaN(parsed) ? 100 : parsed;
}

export function saveCoins(coins) {
  window.localStorage.setItem(COINS_KEY, String(coins));
}

export function addCoins(amount) {
  const current = loadCoins();
  saveCoins(current + amount);
}

export function loadReputation() {
  const val = window.localStorage.getItem(REPUTATION_KEY);
  if (val == null) return 0; // starting reputation
  const parsed = parseInt(val, 10);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function saveReputation(rep) {
  window.localStorage.setItem(REPUTATION_KEY, String(rep));
}

export function addReputation(amount) {
  const current = loadReputation();
  saveReputation(current + amount);
}

export function loadOwnedFurniture() {
  const val = window.localStorage.getItem(OWNED_FURNITURE_KEY);
  return safeParseArray(val);
}

export function saveOwnedFurniture(list) {
  window.localStorage.setItem(OWNED_FURNITURE_KEY, JSON.stringify(list));
}

export function addOwnedFurniture(id) {
  const owned = loadOwnedFurniture();
  if (!owned.includes(id)) {
    owned.push(id);
    saveOwnedFurniture(owned);
  }
}

export function loadPlacedFurniture() {
  const val = window.localStorage.getItem(PLACED_FURNITURE_KEY);
  try {
    const parsed = val ? JSON.parse(val) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function savePlacedFurniture(list) {
  window.localStorage.setItem(PLACED_FURNITURE_KEY, JSON.stringify(list));
}

const HIGH_CONTRAST_KEY = 'whimsy-hollow:high-contrast';
const KEYS_POINTER_KEY = 'whimsy-hollow:keys-pointer';
const COLORBLIND_KEY = 'whimsy-hollow:colorblind';

export function loadHighContrast() {
  return window.localStorage.getItem(HIGH_CONTRAST_KEY) === '1';
}

export function saveHighContrast(on) {
  window.localStorage.setItem(HIGH_CONTRAST_KEY, on ? '1' : '0');
}

export function loadKeysPointer() {
  return window.localStorage.getItem(KEYS_POINTER_KEY) === '1';
}

export function saveKeysPointer(on) {
  window.localStorage.setItem(KEYS_POINTER_KEY, on ? '1' : '0');
}

export function loadColorblind() {
  return window.localStorage.getItem(COLORBLIND_KEY) || 'none';
}

export function saveColorblind(mode) {
  window.localStorage.setItem(COLORBLIND_KEY, mode);
}

