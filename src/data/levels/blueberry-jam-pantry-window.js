export const blueberryJamPantryWindow = {
  id: 'blueberry-jam-pantry-window',
  title: 'Blueberry Jam Pantry Window',
  saveKey: 'whimsy-hollow:blueberry-jam-pantry-window',
  bonusSaveKey: 'whimsy-hollow:blueberry-jam-pantry-window:bonus',
  bonusLabel: 'Blueberry Charms',
  bonusFoundText: 'Blueberry charm!',
  background: {
    key: 'blueberryJamPantryWindowBackground',
    path: 'assets/backgrounds/blueberry_jam_pantry_window.webp'
  },
  objects: [
    {
      id: 'blueberry-jam-jar',
      name: 'Jam Jar',
      requester: 'Berry Belle',
      clue: 'A blueberry jam jar waits beside the gingham cloth.',
      key: 'object-blueberry-jam-pantry-window-jam-jar',
      asset: 'assets/objects/blueberry_jam_pantry_window_jam_jar.png',
      x: 760,
      y: 420,
      scale: 0.19
    },
    {
      id: 'copper-preserving-funnel',
      name: 'Copper Funnel',
      requester: 'Berry Belle',
      clue: 'A copper funnel catches sunlight near the window scale.',
      key: 'object-blueberry-jam-pantry-window-copper-funnel',
      asset: 'assets/objects/blueberry_jam_pantry_window_copper_funnel.png',
      x: 595,
      y: 345,
      scale: 0.19
    },
    {
      id: 'gingham-jar-cover',
      name: 'Jar Cover',
      requester: 'Berry Belle',
      clue: 'A gingham jar cover is tucked on the crowded table.',
      key: 'object-blueberry-jam-pantry-window-jar-cover',
      asset: 'assets/objects/blueberry_jam_pantry_window_gingham_jar_cover.png',
      x: 940,
      y: 500,
      scale: 0.19
    },
    {
      id: 'wooden-tasting-spoon',
      name: 'Tasting Spoon',
      requester: 'Berry Belle',
      clue: 'A wooden tasting spoon stands in the left utensil cup.',
      key: 'object-blueberry-jam-pantry-window-tasting-spoon',
      asset: 'assets/objects/blueberry_jam_pantry_window_wooden_tasting_spoon.png',
      x: 245,
      y: 365,
      scale: 0.19
    },
    {
      id: 'tiny-berry-basket',
      name: 'Berry Basket',
      requester: 'Berry Belle',
      clue: 'A tiny berry basket sits low near the left pantry drawers.',
      key: 'object-blueberry-jam-pantry-window-berry-basket',
      asset: 'assets/objects/blueberry_jam_pantry_window_berry_basket.png',
      x: 335,
      y: 635,
      scale: 0.19
    },
    {
      id: 'lavender-twine-spool',
      name: 'Twine Spool',
      requester: 'Berry Belle',
      clue: 'A lavender twine spool rests beside the right-side jam jars.',
      key: 'object-blueberry-jam-pantry-window-twine-spool',
      asset: 'assets/objects/blueberry_jam_pantry_window_lavender_twine_spool.png',
      x: 1110,
      y: 520,
      scale: 0.19
    },
    {
      id: 'blueberry-recipe-card',
      name: 'Recipe Card',
      requester: 'Berry Belle',
      clue: 'A blueberry recipe card lies open on the worktable.',
      key: 'object-blueberry-jam-pantry-window-recipe-card',
      asset: 'assets/objects/blueberry_jam_pantry_window_recipe_card.png',
      x: 830,
      y: 560,
      scale: 0.19
    },
    {
      id: 'brass-jar-tongs',
      name: 'Jar Tongs',
      requester: 'Berry Belle',
      clue: 'Brass jar tongs hang near the shelf of dark jars.',
      key: 'object-blueberry-jam-pantry-window-jar-tongs',
      asset: 'assets/objects/blueberry_jam_pantry_window_brass_jar_tongs.png',
      x: 1060,
      y: 315,
      scale: 0.19
    },
    {
      id: 'ceramic-sugar-bowl',
      name: 'Sugar Bowl',
      requester: 'Berry Belle',
      clue: 'A ceramic sugar bowl sits near the front-left table corner.',
      key: 'object-blueberry-jam-pantry-window-sugar-bowl',
      asset: 'assets/objects/blueberry_jam_pantry_window_ceramic_sugar_bowl.png',
      x: 525,
      y: 605,
      scale: 0.19
    },
    {
      id: 'little-copper-ladle',
      name: 'Copper Ladle',
      requester: 'Berry Belle',
      clue: 'A little copper ladle rests below the table edge.',
      key: 'object-blueberry-jam-pantry-window-copper-ladle',
      asset: 'assets/objects/blueberry_jam_pantry_window_copper_ladle.png',
      x: 720,
      y: 650,
      scale: 0.2
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-blueberry-1',
      name: 'Golden Blueberry Charm',
      key: 'bonus-blueberry-jam-pantry-window-blueberry-1',
      asset: 'assets/bonus/blueberry_jam_pantry_window_golden_blueberry_01.png',
      x: 240,
      y: 210,
      scale: 0.12
    },
    {
      id: 'golden-blueberry-2',
      name: 'Golden Blueberry Charm',
      key: 'bonus-blueberry-jam-pantry-window-blueberry-2',
      asset: 'assets/bonus/blueberry_jam_pantry_window_golden_blueberry_02.png',
      x: 680,
      y: 150,
      scale: 0.12
    },
    {
      id: 'golden-blueberry-3',
      name: 'Golden Blueberry Charm',
      key: 'bonus-blueberry-jam-pantry-window-blueberry-3',
      asset: 'assets/bonus/blueberry_jam_pantry_window_golden_blueberry_03.png',
      x: 1140,
      y: 185,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'blueberry-window-sparkle',
      x: 430,
      y: 260,
      label: 'Sparkle!'
    },
    {
      id: 'blueberry-jam-plop',
      x: 785,
      y: 430,
      label: 'Plop!'
    },
    {
      id: 'blueberry-basket-rustle',
      x: 345,
      y: 610,
      label: 'Rustle!'
    }
  ],
  previousLevelId: 'sunflower-pressing-table'
};
