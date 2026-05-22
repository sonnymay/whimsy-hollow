export const whimsyLivingRoom = {
  id: 'whimsy-living-room',
  title: 'Whimsy Living Room',
  saveKey: 'whimsy-hollow:whimsy-living-room',
  bonusSaveKey: 'whimsy-hollow:whimsy-living-room:bonus',
  bonusLabel: 'Mice',
  bonusFoundText: 'Mouse!',
  background: {
    key: 'whimsyLivingRoomBackground',
    path: 'assets/backgrounds/scene_whimsy_livingroom_bg.webp'
  },
  objects: [
    {
      id: 'purple-teapot',
      name: 'Teapot',
      requester: 'Tea helper',
      clue: 'A purple teapot waits on the coffee table.',
      key: 'object-purple-teapot',
      asset: 'assets/objects/obj_purple_teapot.png',
      x: 520,
      y: 494,
      scale: 0.09
    },
    {
      id: 'blue-teacup',
      name: 'Teacup',
      requester: 'Tea helper',
      clue: 'A blue teacup sits near the teapot.',
      key: 'object-blue-teacup',
      asset: 'assets/objects/obj_blue_teacup.png',
      x: 472,
      y: 514,
      scale: 0.08
    },
    {
      id: 'gold-spectacles',
      name: 'Glasses',
      requester: 'Reader',
      clue: 'Gold glasses rest near the books.',
      key: 'object-gold-spectacles',
      asset: 'assets/objects/obj_gold_spectacles.png',
      x: 640,
      y: 526,
      scale: 0.1
    },
    {
      id: 'tiny-candle',
      name: 'Candle',
      requester: 'Lamp keeper',
      clue: 'A tiny candle glows on a side table.',
      key: 'object-tiny-candle',
      asset: 'assets/objects/obj_tiny_candle.png',
      x: 96,
      y: 474,
      scale: 0.07
    },
    {
      id: 'cozy-book',
      name: 'Book',
      requester: 'Story reader',
      clue: 'A cozy book sits on the coffee table.',
      key: 'object-cozy-book',
      asset: 'assets/objects/obj_cozy_book.png',
      x: 694,
      y: 488,
      scale: 0.08
    },
    {
      id: 'cozy-yarn-ball',
      name: 'Yarn',
      requester: 'Knitter',
      clue: 'A yarn ball rolled near the chair.',
      key: 'object-cozy-yarn-ball',
      asset: 'assets/objects/obj_cozy_yarn_ball.png',
      x: 1016,
      y: 610,
      scale: 0.075
    },
    {
      id: 'tiny-lantern',
      name: 'Lantern',
      requester: 'Night reader',
      clue: 'A tiny lantern glows by the mantel.',
      key: 'object-tiny-lantern',
      asset: 'assets/objects/obj_tiny_lantern.png',
      x: 894,
      y: 174,
      scale: 0.07
    },
    {
      id: 'moon-bookmark',
      name: 'Bookmark',
      requester: 'Bookmark keeper',
      clue: 'A moon bookmark hides on the shelf.',
      key: 'object-moon-bookmark',
      asset: 'assets/objects/obj_moon_bookmark.png',
      x: 456,
      y: 210,
      scale: 0.07
    },
    {
      id: 'star-key',
      name: 'Star Key',
      requester: 'Trunk keeper',
      clue: 'A star key rests near the old trunk.',
      key: 'object-star-key',
      asset: 'assets/objects/obj_star_key.png',
      x: 704,
      y: 594,
      scale: 0.075
    },
    {
      id: 'tiny-pocket-watch',
      name: 'Watch',
      requester: 'Clock helper',
      clue: 'A pocket watch waits by the armchair.',
      key: 'object-tiny-pocket-watch',
      asset: 'assets/objects/obj_tiny_pocket_watch.png',
      x: 1112,
      y: 488,
      scale: 0.07
    }
  ],
  bonusEnvelopes: [
    {
      id: 'sleepy-mouse-rug',
      x: 548,
      y: 628,
      clue: 'Rug mouse',
      key: 'bonus-sleepy-mouse-01',
      asset: 'assets/bonus/bonus_sleepy_mouse_01.png',
      scale: 0.055
    },
    {
      id: 'sleepy-mouse-basket',
      x: 92,
      y: 632,
      clue: 'Basket mouse',
      key: 'bonus-sleepy-mouse-02',
      asset: 'assets/bonus/bonus_sleepy_mouse_02.png',
      scale: 0.055
    },
    {
      id: 'sleepy-mouse-bookshelf',
      x: 858,
      y: 424,
      clue: 'Shelf mouse',
      key: 'bonus-sleepy-mouse-03',
      asset: 'assets/bonus/bonus_sleepy_mouse_03.png',
      scale: 0.052
    }
  ],
  surprises: [
    {
      id: 'fireplace-sparkle',
      x: 788,
      y: 348,
      label: 'Sparkle!'
    },
    {
      id: 'lamp-glow',
      x: 1136,
      y: 326,
      label: 'Glow!'
    },
    {
      id: 'bookshelf-wiggle',
      x: 458,
      y: 182,
      label: 'Wiggle!'
    },
    {
      id: 'plant-rustle',
      x: 1036,
      y: 172,
      label: 'Rustle!'
    }
  ],
  previousLevelId: 'restaurant-kitchen'
};

