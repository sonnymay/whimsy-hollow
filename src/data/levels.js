/**
 * Level registry. Each scene lives in its own file under src/data/levels/.
 * Add a new scene = drop a new file, import it here, append to the levels array.
 */
import { mailGarden } from './levels/mail-garden.js';
import { restaurantKitchen } from './levels/restaurant-kitchen.js';
import { whimsyLivingRoom } from './levels/whimsy-living-room.js';
import { cozyDreamBedroom } from './levels/cozy-dream-bedroom.js';
import { twilightTeaGarden } from './levels/twilight-tea-garden.js';
import { forestBookshop } from './levels/forest-bookshop.js';
import { snowyCabinLoft } from './levels/snowy-cabin-loft.js';
import { seasideLighthouse } from './levels/seaside-lighthouse.js';
import { springMeadowPicnic } from './levels/spring-meadow-picnic.js';
import { autumnAppleOrchard } from './levels/autumn-apple-orchard.js';
import { starlightGreenhouse } from './levels/starlight-greenhouse.js';
import { moonlitToyAttic } from './levels/moonlit-toy-attic.js';
import { cloudberryTreehouse } from './levels/cloudberry-treehouse.js';
import { cozyQuiltWorkshop } from './levels/cozy-quilt-workshop.js';
import { sleepyTrainCar } from './levels/sleepy-train-car.js';
import { sunbeamPotteryStudio } from './levels/sunbeam-pottery-studio.js';
import { candlelitMusicParlor } from './levels/candlelit-music-parlor.js';
import { rainyArtAtelier } from './levels/rainy-art-atelier.js';
import { morningClockmakerNook } from './levels/morning-clockmaker-nook.js';
import { willowPondBoathouse } from './levels/willow-pond-boathouse.js';
import { breezyKiteWorkshop } from './levels/breezy-kite-workshop.js';

export {
  mailGarden,
  restaurantKitchen,
  whimsyLivingRoom,
  cozyDreamBedroom,
  twilightTeaGarden,
  forestBookshop,
  snowyCabinLoft,
  seasideLighthouse,
  springMeadowPicnic,
  autumnAppleOrchard,
  starlightGreenhouse,
  moonlitToyAttic,
  cloudberryTreehouse,
  cozyQuiltWorkshop,
  sleepyTrainCar,
  sunbeamPotteryStudio,
  candlelitMusicParlor,
  rainyArtAtelier,
  morningClockmakerNook,
  willowPondBoathouse,
  breezyKiteWorkshop
};

export const levels = [
  mailGarden,
  restaurantKitchen,
  whimsyLivingRoom,
  cozyDreamBedroom,
  twilightTeaGarden,
  forestBookshop,
  snowyCabinLoft,
  seasideLighthouse,
  springMeadowPicnic,
  autumnAppleOrchard,
  starlightGreenhouse,
  moonlitToyAttic,
  cloudberryTreehouse,
  cozyQuiltWorkshop,
  sleepyTrainCar,
  sunbeamPotteryStudio,
  candlelitMusicParlor,
  rainyArtAtelier,
  morningClockmakerNook,
  willowPondBoathouse,
  breezyKiteWorkshop
];

export const COMPLETED_SCENES_KEY = 'whimsy-hollow:completed-scenes';

export function getLevelById(levelId) {
  return levels.find((level) => level.id === levelId) ?? mailGarden;
}

export function getNextLevel(levelId) {
  const index = levels.findIndex((level) => level.id === levelId);
  return index >= 0 ? levels[index + 1] : null;
}

export function loadCompletedSceneIds() {
  try {
    const value = globalThis.localStorage?.getItem(COMPLETED_SCENES_KEY);
    const parsed = value ? JSON.parse(value) : [];
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

export function markSceneComplete(levelId) {
  const completed = loadCompletedSceneIds();
  completed.add(levelId);
  globalThis.localStorage?.setItem(COMPLETED_SCENES_KEY, JSON.stringify([...completed]));
}

export function getFirstUnfinishedLevel() {
  const completed = loadCompletedSceneIds();
  return levels.find((level) => !completed.has(level.id)) ?? null;
}

export function getCompletedSceneCount() {
  const completed = loadCompletedSceneIds();
  return levels.filter((level) => completed.has(level.id)).length;
}
