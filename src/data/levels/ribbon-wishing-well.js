export const ribbonWishingWell = {
  id: 'ribbon-wishing-well',
  title: 'Ribbon Wishing Well',
  saveKey: 'whimsy-hollow:ribbon-wishing-well',
  bonusSaveKey: 'whimsy-hollow:ribbon-wishing-well:bonus',
  bonusLabel: 'Golden Coins',
  bonusFoundText: 'Golden coin!',
  background: {
    key: 'ribbonWishingWellBackground',
    path: 'assets/backgrounds/ribbon_wishing_well.webp'
  },
  objects: [
    {
      id: 'floral-wish-ribbon',
      name: 'Wish Ribbon',
      requester: 'Nora Wellwish',
      clue: 'A floral wish ribbon hangs from the left garden trellis.',
      key: 'object-ribbon-wishing-well-floral-wish-ribbon',
      asset: 'assets/objects/ribbon_wishing_well_floral_wish_ribbon.png',
      x: 375,
      y: 205,
      scale: 0.17
    },
    {
      id: 'tiny-wooden-bucket',
      name: 'Wooden Bucket',
      requester: 'Nora Wellwish',
      clue: 'A tiny wooden bucket dangles inside the wishing well.',
      key: 'object-ribbon-wishing-well-tiny-wooden-bucket',
      asset: 'assets/objects/ribbon_wishing_well_tiny_wooden_bucket.png',
      x: 765,
      y: 335,
      scale: 0.17
    },
    {
      id: 'brass-coin-dish',
      name: 'Coin Dish',
      requester: 'Nora Wellwish',
      clue: 'A brass coin dish gleams on the stone well ledge.',
      key: 'object-ribbon-wishing-well-brass-coin-dish',
      asset: 'assets/objects/ribbon_wishing_well_brass_coin_dish.png',
      x: 690,
      y: 390,
      scale: 0.18
    },
    {
      id: 'mossy-heart-stone',
      name: 'Heart Stone',
      requester: 'Nora Wellwish',
      clue: 'A mossy heart stone rests near the painted pebbles.',
      key: 'object-ribbon-wishing-well-mossy-heart-stone',
      asset: 'assets/objects/ribbon_wishing_well_mossy_heart_stone.png',
      x: 235,
      y: 640,
      scale: 0.18
    },
    {
      id: 'blue-watering-pail',
      name: 'Watering Pail',
      requester: 'Nora Wellwish',
      clue: 'A blue watering pail sits low by the well stones.',
      key: 'object-ribbon-wishing-well-blue-watering-pail',
      asset: 'assets/objects/ribbon_wishing_well_blue_watering_pail.png',
      x: 815,
      y: 640,
      scale: 0.18
    },
    {
      id: 'rope-knot',
      name: 'Rope Knot',
      requester: 'Nora Wellwish',
      clue: 'A small rope knot is tucked beside the right well post.',
      key: 'object-ribbon-wishing-well-rope-knot',
      asset: 'assets/objects/ribbon_wishing_well_rope_knot.png',
      x: 1060,
      y: 455,
      scale: 0.17
    },
    {
      id: 'painted-daisy-pebble',
      name: 'Daisy Pebble',
      requester: 'Nora Wellwish',
      clue: 'A painted daisy pebble hides on the left stone path.',
      key: 'object-ribbon-wishing-well-painted-daisy-pebble',
      asset: 'assets/objects/ribbon_wishing_well_painted_daisy_pebble.png',
      x: 205,
      y: 610,
      scale: 0.18
    },
    {
      id: 'folded-garden-glove',
      name: 'Garden Glove',
      requester: 'Nora Wellwish',
      clue: 'A folded garden glove waits near the flower crate.',
      key: 'object-ribbon-wishing-well-folded-garden-glove',
      asset: 'assets/objects/ribbon_wishing_well_folded_garden_glove.png',
      x: 1030,
      y: 620,
      scale: 0.17
    },
    {
      id: 'glass-wish-jar',
      name: 'Wish Jar',
      requester: 'Nora Wellwish',
      clue: 'A corked wish jar sparkles on the well ledge.',
      key: 'object-ribbon-wishing-well-glass-wish-jar',
      asset: 'assets/objects/ribbon_wishing_well_glass_wish_jar.png',
      x: 850,
      y: 390,
      scale: 0.17
    },
    {
      id: 'clay-flower-pot',
      name: 'Clay Flower Pot',
      requester: 'Nora Wellwish',
      clue: 'A little clay flower pot sits on the left shelf.',
      key: 'object-ribbon-wishing-well-clay-flower-pot',
      asset: 'assets/objects/ribbon_wishing_well_clay_flower_pot.png',
      x: 360,
      y: 425,
      scale: 0.18
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-coin-1',
      name: 'Golden Coin',
      key: 'bonus-ribbon-wishing-well-coin-1',
      asset: 'assets/bonus/ribbon_wishing_well_golden_coin_01.png',
      x: 260,
      y: 170,
      scale: 0.12
    },
    {
      id: 'golden-coin-2',
      name: 'Golden Coin',
      key: 'bonus-ribbon-wishing-well-coin-2',
      asset: 'assets/bonus/ribbon_wishing_well_golden_coin_02.png',
      x: 665,
      y: 180,
      scale: 0.12
    },
    {
      id: 'golden-coin-3',
      name: 'Golden Coin',
      key: 'bonus-ribbon-wishing-well-coin-3',
      asset: 'assets/bonus/ribbon_wishing_well_golden_coin_03.png',
      x: 1120,
      y: 175,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'ribbon-well-coin-plink',
      x: 690,
      y: 390,
      label: 'Plink!'
    },
    {
      id: 'ribbon-well-ribbon-flutter',
      x: 380,
      y: 205,
      label: 'Flutter!'
    },
    {
      id: 'ribbon-well-lantern-glow',
      x: 1180,
      y: 610,
      label: 'Glow!'
    }
  ],
  previousLevelId: 'cottage-key-rack-entryway'
};
