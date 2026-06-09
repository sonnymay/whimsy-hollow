export const cozyDreamBedroom = {
  id: 'cozy-dream-bedroom',
  tier: 'hero',
  caseId: 'case-4-bedroom',
  title: 'Cozy Dream Bedroom',
  saveKey: 'whimsy-hollow:cozy-dream-bedroom',
  bonusSaveKey: 'whimsy-hollow:cozy-dream-bedroom:bonus',
  bonusLabel: 'Moths',
  bonusFoundText: 'Moth!',
  background: {
    key: 'cozyDreamBedroomBackground',
    path: 'assets/backgrounds/scene_cozy_dream_bedroom_bg.webp'
  },
  objects: [
    {
      id: 'sleepy-teddy-bear',
      name: 'Teddy',
      requester: 'Bedtime helper',
      clue: 'A teddy waits near the bed.',
      key: 'object-sleepy-teddy-bear',
      asset: 'assets/objects/obj_sleepy_teddy_bear.png',
      x: 930,
      y: 468,
      scale: 0.062
    },
    {
      id: 'moon-pillow',
      name: 'Moon Pillow',
      requester: 'Bedtime helper',
      clue: 'A moon pillow rests on the bed.',
      key: 'object-moon-pillow',
      asset: 'assets/objects/obj_moon_pillow.png',
      x: 475,
      y: 352,
      scale: 0.06
    },
    {
      id: 'pink-slippers',
      name: 'Slippers',
      requester: 'Bedtime helper',
      clue: 'Pink slippers sit by the bed.',
      key: 'object-pink-slippers',
      asset: 'assets/objects/obj_pink_slippers.png',
      x: 214,
      y: 592,
      scale: 0.06
    },
    {
      id: 'toy-star',
      name: 'Star',
      requester: 'Bedtime helper',
      clue: 'A toy star hides on the rug.',
      key: 'object-toy-star',
      asset: 'assets/objects/obj_toy_star.png',
      x: 438,
      y: 628,
      scale: 0.052
    },
    {
      id: 'bedtime-book',
      name: 'Book',
      requester: 'Bedtime helper',
      clue: 'A bedtime book sits near the lamp.',
      key: 'object-bedtime-book',
      asset: 'assets/objects/obj_bedtime_book.png',
      x: 192,
      y: 394,
      scale: 0.056
    },
    {
      id: 'tiny-alarm-clock',
      name: 'Clock',
      requester: 'Bedtime helper',
      clue: 'A tiny clock waits on the nightstand.',
      key: 'object-tiny-alarm-clock',
      asset: 'assets/objects/obj_tiny_alarm_clock.png',
      x: 246,
      y: 426,
      scale: 0.052,
      hiddenUnder: 'cover-nightstand-drawer'
    },
    {
      id: 'hair-ribbon',
      name: 'Ribbon',
      requester: 'Bedtime helper',
      clue: 'A ribbon rests by the pillows.',
      key: 'object-hair-ribbon',
      asset: 'assets/objects/obj_hair_ribbon.png',
      x: 358,
      y: 336,
      scale: 0.052
    },
    {
      id: 'soft-feather',
      name: 'Feather',
      requester: 'Bedtime helper',
      clue: 'A soft feather lies on the blanket.',
      key: 'object-soft-feather',
      asset: 'assets/objects/obj_soft_feather.png',
      x: 592,
      y: 484,
      scale: 0.064,
      hiddenUnder: 'cover-blanket-fold'
    },
    {
      id: 'dream-crystal',
      name: 'Crystal',
      requester: 'Bedtime helper',
      clue: 'A crystal shines on the windowsill.',
      key: 'object-dream-crystal',
      asset: 'assets/objects/obj_dream_crystal.png',
      x: 1014,
      y: 348,
      scale: 0.05
    },
    {
      id: 'sleepy-cat',
      name: 'Cat',
      requester: 'Bedtime helper',
      clue: 'A sleepy cat curls near the rug.',
      key: 'object-sleepy-cat',
      asset: 'assets/objects/obj_sleepy_cat.png',
      x: 884,
      y: 590,
      scale: 0.06
    }
  ],
  optionalObjectives: [],
  jujus: [
    {
      id: 'juju-teddy',
      key: 'juju-bedroom-teddy',
      asset: 'assets/objects/obj_sleepy_teddy_bear.png',
      x: 880,
      y: 500,
      scale: 0.05,
      puzzleClue: 'Soft and brown — a hug waits by the quilt.',
      linkedObjectId: 'sleepy-teddy-bear'
    },
    {
      id: 'juju-crystal',
      key: 'juju-bedroom-crystal',
      asset: 'assets/objects/obj_dream_crystal.png',
      x: 980,
      y: 320,
      scale: 0.045,
      puzzleClue: 'Glints on the moonlit windowsill.',
      linkedObjectId: 'dream-crystal'
    },
    {
      id: 'juju-cat',
      key: 'juju-bedroom-cat',
      asset: 'assets/objects/obj_sleepy_cat.png',
      x: 820,
      y: 600,
      scale: 0.05,
      puzzleClue: 'Purrs on the floor where slippers should be.',
      linkedObjectId: 'sleepy-cat'
    }
  ],
  bonusEnvelopes: [
    {
      id: 'dream-moth-lamp',
      x: 178,
      y: 280,
      clue: 'Lamp moth',
      key: 'bonus-dream-moth-01',
      asset: 'assets/bonus/bonus_dream_moth_01.png',
      scale: 0.04
    },
    {
      id: 'dream-moth-curtain',
      x: 438,
      y: 196,
      clue: 'Curtain moth',
      key: 'bonus-dream-moth-02',
      asset: 'assets/bonus/bonus_dream_moth_02.png',
      scale: 0.04
    },
    {
      id: 'dream-moth-window',
      x: 1032,
      y: 188,
      clue: 'Moon moth',
      key: 'bonus-dream-moth-03',
      asset: 'assets/bonus/bonus_dream_moth_03.png',
      scale: 0.04
    }
  ],
  sceneProps: [
    { id: 'prop-lamp', x: 176, y: 346, w: 48, h: 48, label: 'Nice!', sfx: 'clickSfx' },
    { id: 'prop-curtain', x: 430, y: 170, w: 48, h: 48, label: 'Look!', sfx: 'clickSfx' },
    { id: 'prop-chest', x: 990, y: 462, w: 56, h: 48, label: 'Nice!', sfx: 'clickSfx' },
    { id: 'prop-window', x: 1032, y: 210, w: 48, h: 48, label: 'Look!', sfx: 'clickSfx' }
  ],
  interactives: [
    {
      id: 'cover-nightstand-drawer',
      type: 'slide-y',
      slideDistance: 58,
      x: 246,
      y: 428,
      scale: 1,
      key: 'cover-bedroom-nightstand',
      cover: { style: 'drawer', w: 120, h: 80, fill: 0x8a6a52, accent: 0xa98a6c }
    },
    {
      id: 'cover-blanket-fold',
      type: 'slide-x',
      slideDistance: 112,
      x: 592,
      y: 484,
      scale: 1,
      key: 'cover-bedroom-blanket',
      cover: { style: 'cloth', w: 132, h: 96, fill: 0x8fb0c9, accent: 0x6f90a9 }
    }
  ],
  subScenes: { main: {} },
  previousLevelId: 'whimsy-living-room'
};

