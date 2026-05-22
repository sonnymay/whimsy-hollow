export const mistyHerbPantry = {
  id: 'misty-herb-pantry',
  title: 'Misty Herb Pantry',
  saveKey: 'whimsy-hollow:misty-herb-pantry',
  bonusSaveKey: 'whimsy-hollow:misty-herb-pantry:bonus',
  bonusLabel: 'Leaves',
  bonusFoundText: 'Leaf!',
  background: {
    key: 'mistyHerbPantryBackground',
    path: 'assets/backgrounds/misty_herb_pantry.png'
  },
  objects: [
    {
      id: 'stone-mortar-pestle',
      name: 'Mortar',
      requester: 'Hazel Herbwise',
      clue: 'A stone mortar waits on the herb worktable.',
      key: 'object-misty-herb-pantry-mortar-pestle',
      asset: 'assets/objects/misty_herb_pantry_mortar_pestle.png',
      x: 1010,
      y: 540,
      scale: 0.18
    },
    {
      id: 'blue-herb-jar',
      name: 'Herb Jar',
      requester: 'Hazel Herbwise',
      clue: 'A blue ceramic jar rests on the wooden shelf.',
      key: 'object-misty-herb-pantry-blue-herb-jar',
      asset: 'assets/objects/misty_herb_pantry_blue_herb_jar.png',
      x: 450,
      y: 245,
      scale: 0.18
    },
    {
      id: 'lavender-bundle',
      name: 'Lavender',
      requester: 'Hazel Herbwise',
      clue: 'A tied lavender bundle hangs near the left wall.',
      key: 'object-misty-herb-pantry-lavender-bundle',
      asset: 'assets/objects/misty_herb_pantry_lavender_bundle.png',
      x: 225,
      y: 380,
      scale: 0.16
    },
    {
      id: 'tiny-copper-kettle',
      name: 'Copper Kettle',
      requester: 'Hazel Herbwise',
      clue: 'A copper kettle glows near the misty window.',
      key: 'object-misty-herb-pantry-copper-kettle',
      asset: 'assets/objects/misty_herb_pantry_copper_kettle.png',
      x: 1070,
      y: 455,
      scale: 0.18
    },
    {
      id: 'wooden-honey-spoon',
      name: 'Honey Spoon',
      requester: 'Hazel Herbwise',
      clue: 'A wooden honey spoon lies beside the small bowls.',
      key: 'object-misty-herb-pantry-honey-spoon',
      asset: 'assets/objects/misty_herb_pantry_honey_spoon.png',
      x: 830,
      y: 400,
      scale: 0.18
    },
    {
      id: 'linen-sachet-pouch',
      name: 'Sachet Pouch',
      requester: 'Hazel Herbwise',
      clue: 'A linen sachet pouch hides among the folded cloths.',
      key: 'object-misty-herb-pantry-linen-sachet',
      asset: 'assets/objects/misty_herb_pantry_linen_sachet.png',
      x: 342,
      y: 590,
      scale: 0.18
    },
    {
      id: 'glass-seed-bottle',
      name: 'Seed Bottle',
      requester: 'Hazel Herbwise',
      clue: 'A corked seed bottle stands between pantry jars.',
      key: 'object-misty-herb-pantry-seed-bottle',
      asset: 'assets/objects/misty_herb_pantry_seed_bottle.png',
      x: 592,
      y: 330,
      scale: 0.18
    },
    {
      id: 'rosemary-sprig',
      name: 'Rosemary',
      requester: 'Hazel Herbwise',
      clue: 'A rosemary sprig stretches along the lower counter.',
      key: 'object-misty-herb-pantry-rosemary-sprig',
      asset: 'assets/objects/misty_herb_pantry_rosemary_sprig.png',
      x: 920,
      y: 620,
      scale: 0.18
    },
    {
      id: 'woven-herb-basket',
      name: 'Herb Basket',
      requester: 'Hazel Herbwise',
      clue: 'A little woven basket sits below the pantry shelves.',
      key: 'object-misty-herb-pantry-herb-basket',
      asset: 'assets/objects/misty_herb_pantry_herb_basket.png',
      x: 520,
      y: 520,
      scale: 0.17
    },
    {
      id: 'brass-tea-strainer',
      name: 'Tea Strainer',
      requester: 'Hazel Herbwise',
      clue: 'A brass tea strainer hangs near the right-side shelf.',
      key: 'object-misty-herb-pantry-tea-strainer',
      asset: 'assets/objects/misty_herb_pantry_tea_strainer.png',
      x: 1120,
      y: 270,
      scale: 0.17
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-leaf-1',
      name: 'Golden Leaf',
      key: 'bonus-misty-herb-pantry-leaf-1',
      asset: 'assets/bonus/misty_herb_pantry_golden_leaf_01.png',
      x: 655,
      y: 190,
      scale: 0.12
    },
    {
      id: 'golden-leaf-2',
      name: 'Golden Leaf',
      key: 'bonus-misty-herb-pantry-leaf-2',
      asset: 'assets/bonus/misty_herb_pantry_golden_leaf_02.png',
      x: 310,
      y: 255,
      scale: 0.12
    },
    {
      id: 'golden-leaf-3',
      name: 'Golden Leaf',
      key: 'bonus-misty-herb-pantry-leaf-3',
      asset: 'assets/bonus/misty_herb_pantry_golden_leaf_03.png',
      x: 1148,
      y: 600,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'herb-window-mist',
      x: 774,
      y: 188,
      label: 'Misty!'
    },
    {
      id: 'herb-kettle-steam',
      x: 1030,
      y: 405,
      label: 'Steam!'
    },
    {
      id: 'herb-shelf-scent',
      x: 430,
      y: 305,
      label: 'Fresh!'
    }
  ],
  previousLevelId: 'sunny-gift-wrap-nook'
};
