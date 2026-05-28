/**
 * Centralized localStorage access for Whimsy Hollow.
 * Avoids scattered key strings and silent JSON.parse explosions.
 */

const SLOT_KEY = 'whimsy-hollow:active-slot';
const MAX_SLOTS = 3;

function slotPrefix() {
  const slot = loadActiveSlot();
  return slot === 0 ? '' : `:slot${slot}`;
}

function scopedKey(base) {
  return `whimsy-hollow${slotPrefix()}:${base}`;
}

export function loadActiveSlot() {
  const raw = window.localStorage.getItem(SLOT_KEY);
  const n = raw == null ? 0 : parseInt(raw, 10);
  return Number.isFinite(n) && n >= 0 && n < MAX_SLOTS ? n : 0;
}

export function saveActiveSlot(index) {
  const clamped = Math.max(0, Math.min(MAX_SLOTS - 1, index));
  window.localStorage.setItem(SLOT_KEY, String(clamped));
}

export function getMaxSaveSlots() {
  return MAX_SLOTS;
}

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

function levelKey(level, suffix) {
  return `${level.saveKey}${suffix}${slotPrefix()}`;
}

export function loadFoundIds(level) {
  return new Set(safeParseArray(window.localStorage.getItem(levelKey(level, ''))));
}

export function saveFoundIds(level, set) {
  window.localStorage.setItem(levelKey(level, ''), JSON.stringify([...set]));
}

export function loadBonusIds(level) {
  const key = level.bonusSaveKey ? `${level.bonusSaveKey}${slotPrefix()}` : null;
  return new Set(safeParseArray(key ? window.localStorage.getItem(key) : '[]'));
}

export function saveBonusIds(level, set) {
  if (!level.bonusSaveKey) return;
  window.localStorage.setItem(`${level.bonusSaveKey}${slotPrefix()}`, JSON.stringify([...set]));
}

export function loadOptionalIds(level) {
  return new Set(safeParseArray(window.localStorage.getItem(levelKey(level, ':optional'))));
}

export function saveOptionalIds(level, set) {
  window.localStorage.setItem(levelKey(level, ':optional'), JSON.stringify([...set]));
}

export function loadJujuCollectedIds(level) {
  return new Set(safeParseArray(window.localStorage.getItem(levelKey(level, ':juju-collected'))));
}

export function saveJujuCollectedIds(level, set) {
  window.localStorage.setItem(levelKey(level, ':juju-collected'), JSON.stringify([...set]));
}

export function loadLevelState(level) {
  try {
    const raw = window.localStorage.getItem(levelKey(level, ':state'));
    const parsed = raw ? JSON.parse(raw) : {};
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

export function saveLevelState(level, state) {
  window.localStorage.setItem(levelKey(level, ':state'), JSON.stringify(state));
}

export function clearLevelProgress(level) {
  window.localStorage.removeItem(levelKey(level, ''));
  if (level.bonusSaveKey) {
    window.localStorage.removeItem(`${level.bonusSaveKey}${slotPrefix()}`);
  }
  window.localStorage.removeItem(levelKey(level, ':optional'));
  window.localStorage.removeItem(levelKey(level, ':juju-collected'));
  window.localStorage.removeItem(levelKey(level, ':state'));
}

/** Slot-scoped campaign / economy keys */
function slotScoped(base) {
  return scopedKey(base);
}

export function loadCoins() {
  const val = window.localStorage.getItem(slotScoped('coins'));
  if (val == null) return 100;
  const parsed = parseInt(val, 10);
  return Number.isNaN(parsed) ? 100 : parsed;
}

export function saveCoins(coins) {
  window.localStorage.setItem(slotScoped('coins'), String(coins));
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

const HUB_UNLOCKS_KEY = 'hub-unlocks';

export function addCoins(amount) {
  const current = loadCoins();
  saveCoins(current + amount);
}

export function loadReputation() {
  const val = window.localStorage.getItem(slotScoped('reputation'));
  if (val == null) return 0;
  const parsed = parseInt(val, 10);
  return Number.isNaN(parsed) ? 0 : parsed;
}

export function saveReputation(rep) {
  window.localStorage.setItem(slotScoped('reputation'), String(rep));
}

export function addReputation(amount) {
  const current = loadReputation();
  saveReputation(current + amount);
}

export function loadOwnedFurniture() {
  const val = window.localStorage.getItem(slotScoped('owned-furniture'));
  return safeParseArray(val);
}

export function saveOwnedFurniture(list) {
  window.localStorage.setItem(slotScoped('owned-furniture'), JSON.stringify(list));
}

export function addOwnedFurniture(id) {
  const owned = loadOwnedFurniture();
  if (!owned.includes(id)) {
    owned.push(id);
    saveOwnedFurniture(owned);
  }
}

export function loadHubUnlocks() {
  return new Set(safeParseArray(window.localStorage.getItem(slotScoped(HUB_UNLOCKS_KEY))));
}

export function saveHubUnlocks(set) {
  window.localStorage.setItem(slotScoped(HUB_UNLOCKS_KEY), JSON.stringify([...set]));
}

export function addHubUnlock(id) {
  const u = loadHubUnlocks();
  u.add(id);
  saveHubUnlocks(u);
}

export function loadPlacedFurniture() {
  const val = window.localStorage.getItem(slotScoped('placed-furniture'));
  try {
    const parsed = val ? JSON.parse(val) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function savePlacedFurniture(list) {
  window.localStorage.setItem(slotScoped('placed-furniture'), JSON.stringify(list));
}

const ONBOARDING_CASE_KEY = 'onboarding-case-1';

export function loadCaseOnboardingDone() {
  return window.localStorage.getItem(slotScoped(ONBOARDING_CASE_KEY)) === '1';
}

export function saveCaseOnboardingDone() {
  window.localStorage.setItem(slotScoped(ONBOARDING_CASE_KEY), '1');
}

const COMPLETED_CASES_KEY = 'completed-cases';
const COMPLETED_SCENES_KEY = 'completed-scenes';

export function loadCompletedCaseIds() {
  return new Set(safeParseArray(window.localStorage.getItem(slotScoped(COMPLETED_CASES_KEY))));
}

export function markCaseComplete(caseId) {
  const done = loadCompletedCaseIds();
  done.add(caseId);
  window.localStorage.setItem(slotScoped(COMPLETED_CASES_KEY), JSON.stringify([...done]));
}

export function loadCompletedSceneIds() {
  return new Set(safeParseArray(window.localStorage.getItem(slotScoped(COMPLETED_SCENES_KEY))));
}

export function markSceneComplete(levelId) {
  const completed = loadCompletedSceneIds();
  completed.add(levelId);
  window.localStorage.setItem(slotScoped(COMPLETED_SCENES_KEY), JSON.stringify([...completed]));
}

const HIGH_CONTRAST_KEY = 'whimsy-hollow:high-contrast';
const KEYS_POINTER_KEY = 'whimsy-hollow:keys-pointer';
const COLORBLIND_KEY = 'whimsy-hollow:colorblind';
const REDUCED_MOTION_KEY = 'whimsy-hollow:reduced-motion';

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

export function loadReducedMotion() {
  return window.localStorage.getItem(REDUCED_MOTION_KEY) === '1';
}

export function saveReducedMotion(on) {
  window.localStorage.setItem(REDUCED_MOTION_KEY, on ? '1' : '0');
}

