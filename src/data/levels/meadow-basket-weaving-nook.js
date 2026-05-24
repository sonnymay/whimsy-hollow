export const meadowBasketWeavingNook = {
  id: 'meadow-basket-weaving-nook',
  title: 'Meadow Basket Weaving Nook',
  saveKey: 'whimsy-hollow:meadow-basket-weaving-nook',
  bonusSaveKey: 'whimsy-hollow:meadow-basket-weaving-nook:bonus',
  bonusLabel: 'Wicker Hearts',
  bonusFoundText: 'Wicker heart!',
  background: {
    key: 'meadowBasketWeavingNookBackground',
    path: 'assets/backgrounds/meadow_basket_weaving_nook.webp'
  },
  objects: [
    {
      id: 'half-woven-basket',
      name: 'Half-woven Basket',
      requester: 'Mabel Reedwise',
      clue: 'A half-woven basket sits on the center workbench.',
      key: 'object-meadow-basket-weaving-nook-half-woven-basket',
      asset: 'assets/objects/meadow_basket_weaving_nook_half_woven_basket.png',
      x: 650,
      y: 385,
      scale: 0.17
    },
    {
      id: 'willow-reed-bundle',
      name: 'Willow Reeds',
      requester: 'Mabel Reedwise',
      clue: 'A ribbon-tied bundle of willow reeds leans beside the left shelves.',
      key: 'object-meadow-basket-weaving-nook-willow-reed-bundle',
      asset: 'assets/objects/meadow_basket_weaving_nook_willow_reed_bundle.png',
      x: 560,
      y: 235,
      scale: 0.16
    },
    {
      id: 'wooden-weaving-shuttle',
      name: 'Weaving Shuttle',
      requester: 'Mabel Reedwise',
      clue: 'A wooden weaving shuttle rests near the soaking basin.',
      key: 'object-meadow-basket-weaving-nook-wooden-weaving-shuttle',
      asset: 'assets/objects/meadow_basket_weaving_nook_wooden_weaving_shuttle.png',
      x: 975,
      y: 470,
      scale: 0.16
    },
    {
      id: 'brass-awl',
      name: 'Brass Awl',
      requester: 'Mabel Reedwise',
      clue: 'A brass awl lies on the front edge of the weaving table.',
      key: 'object-meadow-basket-weaving-nook-brass-awl',
      asset: 'assets/objects/meadow_basket_weaving_nook_brass_awl.png',
      x: 840,
      y: 520,
      scale: 0.16
    },
    {
      id: 'jute-cord-spool',
      name: 'Jute Cord',
      requester: 'Mabel Reedwise',
      clue: 'A spool of jute cord is tucked on the left shelf.',
      key: 'object-meadow-basket-weaving-nook-jute-cord-spool',
      asset: 'assets/objects/meadow_basket_weaving_nook_jute_cord_spool.png',
      x: 315,
      y: 445,
      scale: 0.16
    },
    {
      id: 'pressed-daisy-cloth',
      name: 'Daisy Cloth',
      requester: 'Mabel Reedwise',
      clue: 'A pressed daisy cloth square rests on the small stool.',
      key: 'object-meadow-basket-weaving-nook-pressed-daisy-cloth',
      asset: 'assets/objects/meadow_basket_weaving_nook_pressed_daisy_cloth.png',
      x: 235,
      y: 615,
      scale: 0.17
    },
    {
      id: 'tiny-wooden-peg',
      name: 'Wooden Peg',
      requester: 'Mabel Reedwise',
      clue: 'A tiny wooden peg is clipped to the lower workbench rail.',
      key: 'object-meadow-basket-weaving-nook-tiny-wooden-peg',
      asset: 'assets/objects/meadow_basket_weaving_nook_tiny_wooden_peg.png',
      x: 575,
      y: 525,
      scale: 0.15
    },
    {
      id: 'blue-reed-cup',
      name: 'Blue Reed Cup',
      requester: 'Mabel Reedwise',
      clue: 'A blue ceramic cup holds spare reeds near the left bench corner.',
      key: 'object-meadow-basket-weaving-nook-blue-reed-cup',
      asset: 'assets/objects/meadow_basket_weaving_nook_blue_reed_cup.png',
      x: 395,
      y: 405,
      scale: 0.16
    },
    {
      id: 'raffia-braid-coil',
      name: 'Raffia Coil',
      requester: 'Mabel Reedwise',
      clue: 'A raffia braid coil sits near the sunny right window.',
      key: 'object-meadow-basket-weaving-nook-raffia-braid-coil',
      asset: 'assets/objects/meadow_basket_weaving_nook_raffia_braid_coil.png',
      x: 1140,
      y: 620,
      scale: 0.16
    },
    {
      id: 'meadow-pincushion',
      name: 'Meadow Pincushion',
      requester: 'Mabel Reedwise',
      clue: 'A meadow flower pincushion hides in the basket below the left shelf.',
      key: 'object-meadow-basket-weaving-nook-meadow-pincushion',
      asset: 'assets/objects/meadow_basket_weaving_nook_meadow_pincushion.png',
      x: 330,
      y: 535,
      scale: 0.16
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-wicker-heart-1',
      name: 'Golden Wicker Heart',
      key: 'bonus-meadow-basket-weaving-nook-wicker-heart-1',
      asset: 'assets/bonus/meadow_basket_weaving_nook_golden_wicker_heart_01.png',
      x: 235,
      y: 155,
      scale: 0.1
    },
    {
      id: 'golden-wicker-heart-2',
      name: 'Golden Wicker Heart',
      key: 'bonus-meadow-basket-weaving-nook-wicker-heart-2',
      asset: 'assets/bonus/meadow_basket_weaving_nook_golden_wicker_heart_02.png',
      x: 710,
      y: 160,
      scale: 0.1
    },
    {
      id: 'golden-wicker-heart-3',
      name: 'Golden Wicker Heart',
      key: 'bonus-meadow-basket-weaving-nook-wicker-heart-3',
      asset: 'assets/bonus/meadow_basket_weaving_nook_golden_wicker_heart_03.png',
      x: 1160,
      y: 165,
      scale: 0.1
    }
  ],
  surprises: [
    {
      id: 'meadow-basket-weaving-nook-weave',
      x: 650,
      y: 385,
      label: 'Weave!'
    },
    {
      id: 'meadow-basket-weaving-nook-snip',
      x: 840,
      y: 520,
      label: 'Snip!'
    },
    {
      id: 'meadow-basket-weaving-nook-rustle',
      x: 560,
      y: 235,
      label: 'Rustle!'
    }
  ],
  previousLevelId: 'mushroom-lantern-workshop'
};
