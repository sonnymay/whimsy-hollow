export const rainyUmbrellaRepairStand = {
  id: 'rainy-umbrella-repair-stand',
  title: 'Rainy Umbrella Repair Stand',
  saveKey: 'whimsy-hollow:rainy-umbrella-repair-stand',
  bonusSaveKey: 'whimsy-hollow:rainy-umbrella-repair-stand:bonus',
  bonusLabel: 'Golden Raindrops',
  bonusFoundText: 'Golden raindrop!',
  background: {
    key: 'rainyUmbrellaRepairStandBackground',
    path: 'assets/backgrounds/rainy_umbrella_repair_stand.webp'
  },
  objects: [
    {
      id: 'brass-umbrella-handle',
      name: 'Umbrella Handle',
      requester: 'Mabel Mist',
      clue: 'A brass umbrella handle leans in the left umbrella stand.',
      key: 'object-rainy-umbrella-repair-stand-umbrella-handle',
      asset: 'assets/objects/rainy_umbrella_repair_stand_brass_umbrella_handle.png',
      x: 235,
      y: 500,
      scale: 0.18
    },
    {
      id: 'waxed-thread-spool',
      name: 'Thread Spool',
      requester: 'Mabel Mist',
      clue: 'A waxed thread spool sits on the repair counter.',
      key: 'object-rainy-umbrella-repair-stand-thread-spool',
      asset: 'assets/objects/rainy_umbrella_repair_stand_waxed_thread_spool.png',
      x: 635,
      y: 395,
      scale: 0.18
    },
    {
      id: 'blue-oilcloth-patch',
      name: 'Oilcloth Patch',
      requester: 'Mabel Mist',
      clue: 'A blue oilcloth patch lies with the colorful fabric squares.',
      key: 'object-rainy-umbrella-repair-stand-oilcloth-patch',
      asset: 'assets/objects/rainy_umbrella_repair_stand_blue_oilcloth_patch.png',
      x: 955,
      y: 475,
      scale: 0.18
    },
    {
      id: 'tiny-repair-needle-case',
      name: 'Needle Case',
      requester: 'Mabel Mist',
      clue: 'A tiny needle case is tucked near the lamp-lit tools.',
      key: 'object-rainy-umbrella-repair-stand-needle-case',
      asset: 'assets/objects/rainy_umbrella_repair_stand_repair_needle_case.png',
      x: 1110,
      y: 260,
      scale: 0.17
    },
    {
      id: 'wooden-umbrella-rib',
      name: 'Umbrella Rib',
      requester: 'Mabel Mist',
      clue: 'A wooden umbrella rib rests beside the right tool cup.',
      key: 'object-rainy-umbrella-repair-stand-umbrella-rib',
      asset: 'assets/objects/rainy_umbrella_repair_stand_wooden_umbrella_rib.png',
      x: 1160,
      y: 525,
      scale: 0.18
    },
    {
      id: 'ceramic-raindrop-charm',
      name: 'Raindrop Charm',
      requester: 'Mabel Mist',
      clue: 'A blue raindrop charm hangs near the rain-streaked window.',
      key: 'object-rainy-umbrella-repair-stand-raindrop-charm',
      asset: 'assets/objects/rainy_umbrella_repair_stand_ceramic_raindrop_charm.png',
      x: 420,
      y: 265,
      scale: 0.17
    },
    {
      id: 'small-copper-thimble',
      name: 'Copper Thimble',
      requester: 'Mabel Mist',
      clue: 'A copper thimble glows on the little stool.',
      key: 'object-rainy-umbrella-repair-stand-copper-thimble',
      asset: 'assets/objects/rainy_umbrella_repair_stand_copper_thimble.png',
      x: 500,
      y: 610,
      scale: 0.17
    },
    {
      id: 'floral-umbrella-sleeve',
      name: 'Umbrella Sleeve',
      requester: 'Mabel Mist',
      clue: 'A floral umbrella sleeve is folded in the left fabric basket.',
      key: 'object-rainy-umbrella-repair-stand-umbrella-sleeve',
      asset: 'assets/objects/rainy_umbrella_repair_stand_floral_umbrella_sleeve.png',
      x: 315,
      y: 620,
      scale: 0.18
    },
    {
      id: 'waterproofing-wax-bottle',
      name: 'Wax Bottle',
      requester: 'Mabel Mist',
      clue: 'A waterproofing wax bottle waits beside the thread box.',
      key: 'object-rainy-umbrella-repair-stand-wax-bottle',
      asset: 'assets/objects/rainy_umbrella_repair_stand_waterproofing_wax_bottle.png',
      x: 760,
      y: 365,
      scale: 0.18
    },
    {
      id: 'silver-seam-scissors',
      name: 'Seam Scissors',
      requester: 'Mabel Mist',
      clue: 'Silver seam scissors rest near the center of the counter.',
      key: 'object-rainy-umbrella-repair-stand-seam-scissors',
      asset: 'assets/objects/rainy_umbrella_repair_stand_silver_seam_scissors.png',
      x: 720,
      y: 505,
      scale: 0.18
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-raindrop-1',
      name: 'Golden Raindrop',
      key: 'bonus-rainy-umbrella-repair-stand-raindrop-1',
      asset: 'assets/bonus/rainy_umbrella_repair_stand_golden_raindrop_01.png',
      x: 245,
      y: 185,
      scale: 0.12
    },
    {
      id: 'golden-raindrop-2',
      name: 'Golden Raindrop',
      key: 'bonus-rainy-umbrella-repair-stand-raindrop-2',
      asset: 'assets/bonus/rainy_umbrella_repair_stand_golden_raindrop_02.png',
      x: 685,
      y: 155,
      scale: 0.12
    },
    {
      id: 'golden-raindrop-3',
      name: 'Golden Raindrop',
      key: 'bonus-rainy-umbrella-repair-stand-raindrop-3',
      asset: 'assets/bonus/rainy_umbrella_repair_stand_golden_raindrop_03.png',
      x: 1160,
      y: 180,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'rainy-window-patter',
      x: 360,
      y: 210,
      label: 'Patter!'
    },
    {
      id: 'umbrella-handle-click',
      x: 1080,
      y: 505,
      label: 'Click!'
    },
    {
      id: 'umbrella-lamp-glow',
      x: 1180,
      y: 255,
      label: 'Glow!'
    }
  ],
  previousLevelId: 'teacup-bonsai-bench'
};
