export const cloudberryTreehouse = {
  id: 'cloudberry-treehouse',
  title: 'Cloudberry Treehouse',
  saveKey: 'whimsy-hollow:cloudberry-treehouse',
  bonusSaveKey: 'whimsy-hollow:cloudberry-treehouse:bonus',
  bonusLabel: 'Berries',
  bonusFoundText: 'Berry!',
  background: {
    key: 'cloudberryTreehouseBackground',
    path: 'assets/backgrounds/cloudberry_treehouse.webp'
  },
  objects: [
    {
      id: 'cloudberry-jam-jar',
      name: 'Jam',
      requester: 'Treehouse Tilly',
      clue: 'A jam jar glows near the leafy shelves.',
      key: 'object-cloudberry-treehouse-jam-jar',
      asset: 'assets/objects/cloudberry_treehouse_jam_jar.png',
      x: 846,
      y: 282,
      scale: 0.14
    },
    {
      id: 'tiny-bird-whistle',
      name: 'Whistle',
      requester: 'Treehouse Tilly',
      clue: 'A bird whistle rests by the window nook.',
      key: 'object-cloudberry-treehouse-bird-whistle',
      asset: 'assets/objects/cloudberry_treehouse_bird_whistle.png',
      x: 1022,
      y: 204,
      scale: 0.14
    },
    {
      id: 'leaf-notebook',
      name: 'Notebook',
      requester: 'Treehouse Tilly',
      clue: 'A leaf notebook waits on the desk.',
      key: 'object-cloudberry-treehouse-leaf-notebook',
      asset: 'assets/objects/cloudberry_treehouse_leaf_notebook.png',
      x: 1032,
      y: 454,
      scale: 0.13
    },
    {
      id: 'acorn-button',
      name: 'Acorn',
      requester: 'Treehouse Tilly',
      clue: 'An acorn button hangs near the wall.',
      key: 'object-cloudberry-treehouse-acorn-button',
      asset: 'assets/objects/cloudberry_treehouse_acorn_button.png',
      x: 1190,
      y: 184,
      scale: 0.14
    },
    {
      id: 'woven-berry-basket',
      name: 'Basket',
      requester: 'Treehouse Tilly',
      clue: 'A berry basket sits near the balcony.',
      key: 'object-cloudberry-treehouse-berry-basket',
      asset: 'assets/objects/cloudberry_treehouse_berry_basket.png',
      x: 268,
      y: 590,
      scale: 0.13
    },
    {
      id: 'brass-pocket-compass',
      name: 'Compass',
      requester: 'Treehouse Tilly',
      clue: 'A brass compass rests by the trunk drawers.',
      key: 'object-cloudberry-treehouse-brass-compass',
      asset: 'assets/objects/cloudberry_treehouse_brass_compass.png',
      x: 690,
      y: 488,
      scale: 0.13
    },
    {
      id: 'small-blue-kite',
      name: 'Kite',
      requester: 'Treehouse Tilly',
      clue: 'A blue kite leans near the writing desk.',
      key: 'object-cloudberry-treehouse-blue-kite',
      asset: 'assets/objects/cloudberry_treehouse_blue_kite.png',
      x: 1122,
      y: 596,
      scale: 0.12
    },
    {
      id: 'wooden-toy-squirrel',
      name: 'Squirrel',
      requester: 'Treehouse Tilly',
      clue: 'A wooden squirrel hides near the berries.',
      key: 'object-cloudberry-treehouse-toy-squirrel',
      asset: 'assets/objects/cloudberry_treehouse_toy_squirrel.png',
      x: 1170,
      y: 656,
      scale: 0.13
    },
    {
      id: 'golden-honey-spoon',
      name: 'Spoon',
      requester: 'Treehouse Tilly',
      clue: 'A honey spoon rests by the low table.',
      key: 'object-cloudberry-treehouse-honey-spoon',
      asset: 'assets/objects/cloudberry_treehouse_honey_spoon.png',
      x: 396,
      y: 430,
      scale: 0.13
    },
    {
      id: 'green-handkerchief',
      name: 'Cloth',
      requester: 'Treehouse Tilly',
      clue: 'A green handkerchief is folded on the rug.',
      key: 'object-cloudberry-treehouse-green-handkerchief',
      asset: 'assets/objects/cloudberry_treehouse_green_handkerchief.png',
      x: 612,
      y: 614,
      scale: 0.13
    }
  ],
  bonusEnvelopes: [
    {
      id: 'cloudberry-1',
      name: 'Cloudberry',
      key: 'bonus-cloudberry-1',
      asset: 'assets/bonus/cloudberry_treehouse_berry_01.png',
      x: 360,
      y: 246,
      scale: 0.11
    },
    {
      id: 'cloudberry-2',
      name: 'Cloudberry',
      key: 'bonus-cloudberry-2',
      asset: 'assets/bonus/cloudberry_treehouse_berry_02.png',
      x: 796,
      y: 176,
      scale: 0.11
    },
    {
      id: 'cloudberry-3',
      name: 'Cloudberry',
      key: 'bonus-cloudberry-3',
      asset: 'assets/bonus/cloudberry_treehouse_berry_03.png',
      x: 1180,
      y: 388,
      scale: 0.11
    }
  ],
  surprises: [
    {
      id: 'treehouse-lantern',
      x: 1022,
      y: 392,
      label: 'Glow!'
    },
    {
      id: 'treehouse-window-breeze',
      x: 426,
      y: 236,
      label: 'Breeze!'
    },
    {
      id: 'treehouse-acorn-wall',
      x: 1210,
      y: 174,
      label: 'Tap!'
    }
  ],
  previousLevelId: 'moonlit-toy-attic'
};
