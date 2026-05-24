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
import { lavenderLaundryRoom } from './levels/lavender-laundry-room.js';
import { cozyMapRoom } from './levels/cozy-map-room.js';
import { sunnyGiftWrapNook } from './levels/sunny-gift-wrap-nook.js';
import { mistyHerbPantry } from './levels/misty-herb-pantry.js';
import { sunnyPuzzleParlor } from './levels/sunny-puzzle-parlor.js';
import { moonlitOrigamiAlcove } from './levels/moonlit-origami-alcove.js';
import { cozyCobblerNook } from './levels/cozy-cobbler-nook.js';
import { starlightObservatoryNook } from './levels/starlight-observatory-nook.js';
import { honeyCandleWorkshop } from './levels/honey-candle-workshop.js';
import { morningBirdwatchingPorch } from './levels/morning-birdwatching-porch.js';
import { sunlitSeedLibrary } from './levels/sunlit-seed-library.js';
import { paintedPebblePatio } from './levels/painted-pebble-patio.js';
import { puppetTheaterAlcove } from './levels/puppet-theater-alcove.js';
import { rainbowGlassSunroom } from './levels/rainbow-glass-sunroom.js';
import { rainyBootMudroom } from './levels/rainy-boot-mudroom.js';
import { cozyAquariumCorner } from './levels/cozy-aquarium-corner.js';
import { cozyMineralCabinet } from './levels/cozy-mineral-cabinet.js';
import { cozyStampDesk } from './levels/cozy-stamp-desk.js';
import { sunnyWardrobeNook } from './levels/sunny-wardrobe-nook.js';
import { cozyBathNook } from './levels/cozy-bath-nook.js';
import { sunlitPhotoCorner } from './levels/sunlit-photo-corner.js';
import { sunnyBeadStudio } from './levels/sunny-bead-studio.js';
import { cozyDollhouseWorkshop } from './levels/cozy-dollhouse-workshop.js';
import { moonbeamBakeryShelf } from './levels/moonbeam-bakery-shelf.js';
import { bellflowerFloristCart } from './levels/bellflower-florist-cart.js';
import { sugarplumCandyCounter } from './levels/sugarplum-candy-counter.js';
import { buttonTinCraftDesk } from './levels/button-tin-craft-desk.js';
import { sunlitMarbleRunPlayroom } from './levels/sunlit-marble-run-playroom.js';
import { fireflyCandleWindow } from './levels/firefly-candle-window.js';
import { rainyTerrariumTable } from './levels/rainy-terrarium-table.js';
import { lanternPaperConservatory } from './levels/lantern-paper-conservatory.js';
import { seashellCraftNook } from './levels/seashell-craft-nook.js';
import { cloudLoomWeavingNook } from './levels/cloud-loom-weaving-nook.js';
import { sunflowerPressingTable } from './levels/sunflower-pressing-table.js';
import { blueberryJamPantryWindow } from './levels/blueberry-jam-pantry-window.js';
import { mapleCocoaBreakfastNook } from './levels/maple-cocoa-breakfast-nook.js';
import { dandelionWindChimePorch } from './levels/dandelion-wind-chime-porch.js';
import { teacupBonsaiBench } from './levels/teacup-bonsai-bench.js';
import { rainyUmbrellaRepairStand } from './levels/rainy-umbrella-repair-stand.js';
import { cranberryGarlandHearth } from './levels/cranberry-garland-hearth.js';
import { littleLibraryReturnCart } from './levels/little-library-return-cart.js';
import { cottageKeyRackEntryway } from './levels/cottage-key-rack-entryway.js';
import { ribbonWishingWell } from './levels/ribbon-wishing-well.js';
import { pastelBirdhousePaintingBench } from './levels/pastel-birdhouse-painting-bench.js';
import { lavenderSoapStampSink } from './levels/lavender-soap-stamp-sink.js';
import { cozyYarnDyeingCorner } from './levels/cozy-yarn-dyeing-corner.js';
import { mushroomLanternWorkshop } from './levels/mushroom-lantern-workshop.js';
import { meadowBasketWeavingNook } from './levels/meadow-basket-weaving-nook.js';
import { cloverCharmTinkeringTray } from './levels/clover-charm-tinkering-tray.js';
import { hummingbirdFeederPaintShelf } from './levels/hummingbird-feeder-paint-shelf.js';
import { cozySockDarningBasket } from './levels/cozy-sock-darning-basket.js';
import { copperWeatherVaneWorkbench } from './levels/copper-weather-vane-workbench.js';
import { snowglobePackingTable } from './levels/snowglobe-packing-table.js';
import { goldenAcornSortingTray } from './levels/golden-acorn-sorting-tray.js';
import { feltStarMobileWorkbench } from './levels/felt-star-mobile-workbench.js';
import { woodenWhistleCarvingBench } from './levels/wooden-whistle-carving-bench.js';
import { storybookMaskMakingTable } from './levels/storybook-mask-making-table.js';
import { rainstickBeadFillingTable } from './levels/rainstick-bead-filling-table.js';
import { cinnamonPomanderWindowTable } from './levels/cinnamon-pomander-window-table.js';

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
  breezyKiteWorkshop,
  lavenderLaundryRoom,
  cozyMapRoom,
  sunnyGiftWrapNook,
  mistyHerbPantry,
  sunnyPuzzleParlor,
  moonlitOrigamiAlcove,
  cozyCobblerNook,
  starlightObservatoryNook,
  honeyCandleWorkshop,
  morningBirdwatchingPorch,
  sunlitSeedLibrary,
  paintedPebblePatio,
  puppetTheaterAlcove,
  rainbowGlassSunroom,
  rainyBootMudroom,
  cozyAquariumCorner,
  cozyMineralCabinet,
  cozyStampDesk,
  sunnyWardrobeNook,
  cozyBathNook,
  sunlitPhotoCorner,
  sunnyBeadStudio,
  cozyDollhouseWorkshop,
  moonbeamBakeryShelf,
  bellflowerFloristCart,
  sugarplumCandyCounter,
  buttonTinCraftDesk,
  sunlitMarbleRunPlayroom,
  fireflyCandleWindow,
  rainyTerrariumTable,
  lanternPaperConservatory,
  seashellCraftNook,
  cloudLoomWeavingNook,
  sunflowerPressingTable,
  blueberryJamPantryWindow,
  mapleCocoaBreakfastNook,
  dandelionWindChimePorch,
  teacupBonsaiBench,
  rainyUmbrellaRepairStand,
  cranberryGarlandHearth,
  littleLibraryReturnCart,
  cottageKeyRackEntryway,
  ribbonWishingWell,
  pastelBirdhousePaintingBench,
  lavenderSoapStampSink,
  cozyYarnDyeingCorner,
  mushroomLanternWorkshop,
  meadowBasketWeavingNook,
  cloverCharmTinkeringTray,
  hummingbirdFeederPaintShelf,
  cozySockDarningBasket,
  copperWeatherVaneWorkbench,
  snowglobePackingTable,
  goldenAcornSortingTray,
  feltStarMobileWorkbench,
  woodenWhistleCarvingBench,
  storybookMaskMakingTable,
  rainstickBeadFillingTable,
  cinnamonPomanderWindowTable
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
  breezyKiteWorkshop,
  lavenderLaundryRoom,
  cozyMapRoom,
  sunnyGiftWrapNook,
  mistyHerbPantry,
  sunnyPuzzleParlor,
  moonlitOrigamiAlcove,
  cozyCobblerNook,
  starlightObservatoryNook,
  honeyCandleWorkshop,
  morningBirdwatchingPorch,
  sunlitSeedLibrary,
  paintedPebblePatio,
  puppetTheaterAlcove,
  rainbowGlassSunroom,
  rainyBootMudroom,
  cozyAquariumCorner,
  cozyMineralCabinet,
  cozyStampDesk,
  sunnyWardrobeNook,
  cozyBathNook,
  sunlitPhotoCorner,
  sunnyBeadStudio,
  cozyDollhouseWorkshop,
  moonbeamBakeryShelf,
  bellflowerFloristCart,
  sugarplumCandyCounter,
  buttonTinCraftDesk,
  sunlitMarbleRunPlayroom,
  fireflyCandleWindow,
  rainyTerrariumTable,
  lanternPaperConservatory,
  seashellCraftNook,
  cloudLoomWeavingNook,
  sunflowerPressingTable,
  blueberryJamPantryWindow,
  mapleCocoaBreakfastNook,
  dandelionWindChimePorch,
  teacupBonsaiBench,
  rainyUmbrellaRepairStand,
  cranberryGarlandHearth,
  littleLibraryReturnCart,
  cottageKeyRackEntryway,
  ribbonWishingWell,
  pastelBirdhousePaintingBench,
  lavenderSoapStampSink,
  cozyYarnDyeingCorner,
  mushroomLanternWorkshop,
  meadowBasketWeavingNook,
  cloverCharmTinkeringTray,
  hummingbirdFeederPaintShelf,
  cozySockDarningBasket,
  copperWeatherVaneWorkbench,
  snowglobePackingTable,
  goldenAcornSortingTray,
  feltStarMobileWorkbench,
  woodenWhistleCarvingBench,
  storybookMaskMakingTable,
  rainstickBeadFillingTable,
  cinnamonPomanderWindowTable
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
