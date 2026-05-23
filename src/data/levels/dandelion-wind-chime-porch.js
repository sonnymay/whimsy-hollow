export const dandelionWindChimePorch = {
  id: 'dandelion-wind-chime-porch',
  title: 'Dandelion Wind Chime Porch',
  saveKey: 'whimsy-hollow:dandelion-wind-chime-porch',
  bonusSaveKey: 'whimsy-hollow:dandelion-wind-chime-porch:bonus',
  bonusLabel: 'Golden Puffs',
  bonusFoundText: 'Golden puff!',
  background: {
    key: 'dandelionWindChimePorchBackground',
    path: 'assets/backgrounds/dandelion_wind_chime_porch.webp'
  },
  objects: [
    {
      id: 'dandelion-puff-jar',
      name: 'Puff Jar',
      requester: 'Willow Wren',
      clue: 'A jar of dandelion puffs waits in the middle of the porch table.',
      key: 'object-dandelion-wind-chime-porch-puff-jar',
      asset: 'assets/objects/dandelion_wind_chime_porch_dandelion_puff_jar.png',
      x: 520,
      y: 375,
      scale: 0.18
    },
    {
      id: 'brass-wind-chime',
      name: 'Wind Chime',
      requester: 'Willow Wren',
      clue: 'A little brass wind chime hangs near the left trellis.',
      key: 'object-dandelion-wind-chime-porch-wind-chime',
      asset: 'assets/objects/dandelion_wind_chime_porch_brass_wind_chime.png',
      x: 365,
      y: 190,
      scale: 0.18
    },
    {
      id: 'blue-ribbon-spool',
      name: 'Ribbon Spool',
      requester: 'Willow Wren',
      clue: 'A blue ribbon spool rests beside the bead bowls.',
      key: 'object-dandelion-wind-chime-porch-ribbon-spool',
      asset: 'assets/objects/dandelion_wind_chime_porch_blue_ribbon_spool.png',
      x: 845,
      y: 430,
      scale: 0.18
    },
    {
      id: 'ceramic-bird-charm',
      name: 'Bird Charm',
      requester: 'Willow Wren',
      clue: 'A ceramic bird charm is perched near the right shelf.',
      key: 'object-dandelion-wind-chime-porch-bird-charm',
      asset: 'assets/objects/dandelion_wind_chime_porch_ceramic_bird_charm.png',
      x: 1040,
      y: 265,
      scale: 0.18
    },
    {
      id: 'mini-watering-can',
      name: 'Watering Can',
      requester: 'Willow Wren',
      clue: 'A tiny watering can sits low near the porch plants.',
      key: 'object-dandelion-wind-chime-porch-watering-can',
      asset: 'assets/objects/dandelion_wind_chime_porch_mini_watering_can.png',
      x: 475,
      y: 625,
      scale: 0.18
    },
    {
      id: 'lace-doily',
      name: 'Lace Doily',
      requester: 'Willow Wren',
      clue: 'A lace doily drapes across the front of the worktable.',
      key: 'object-dandelion-wind-chime-porch-lace-doily',
      asset: 'assets/objects/dandelion_wind_chime_porch_lace_doily.png',
      x: 640,
      y: 505,
      scale: 0.17
    },
    {
      id: 'wooden-craft-mallet',
      name: 'Craft Mallet',
      requester: 'Willow Wren',
      clue: 'A wooden craft mallet lies near the table scissors.',
      key: 'object-dandelion-wind-chime-porch-craft-mallet',
      asset: 'assets/objects/dandelion_wind_chime_porch_wooden_craft_mallet.png',
      x: 765,
      y: 455,
      scale: 0.18
    },
    {
      id: 'dandelion-seed-packet',
      name: 'Seed Packet',
      requester: 'Willow Wren',
      clue: 'A dandelion seed packet is tucked by the left plant shelf.',
      key: 'object-dandelion-wind-chime-porch-seed-packet',
      asset: 'assets/objects/dandelion_wind_chime_porch_dandelion_seed_packet.png',
      x: 235,
      y: 405,
      scale: 0.18
    },
    {
      id: 'clay-bumblebee-charm',
      name: 'Bee Charm',
      requester: 'Willow Wren',
      clue: 'A clay bee charm buzzes among the craft bowls.',
      key: 'object-dandelion-wind-chime-porch-bee-charm',
      asset: 'assets/objects/dandelion_wind_chime_porch_clay_bumblebee_charm.png',
      x: 955,
      y: 500,
      scale: 0.17
    },
    {
      id: 'wicker-coaster',
      name: 'Wicker Coaster',
      requester: 'Willow Wren',
      clue: 'A wicker coaster is tucked near the right-hand basket.',
      key: 'object-dandelion-wind-chime-porch-wicker-coaster',
      asset: 'assets/objects/dandelion_wind_chime_porch_wicker_coaster.png',
      x: 1140,
      y: 435,
      scale: 0.17
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-dandelion-puff-1',
      name: 'Golden Dandelion Puff',
      key: 'bonus-dandelion-wind-chime-porch-puff-1',
      asset: 'assets/bonus/dandelion_wind_chime_porch_golden_puff_01.png',
      x: 230,
      y: 175,
      scale: 0.12
    },
    {
      id: 'golden-dandelion-puff-2',
      name: 'Golden Dandelion Puff',
      key: 'bonus-dandelion-wind-chime-porch-puff-2',
      asset: 'assets/bonus/dandelion_wind_chime_porch_golden_puff_02.png',
      x: 675,
      y: 150,
      scale: 0.12
    },
    {
      id: 'golden-dandelion-puff-3',
      name: 'Golden Dandelion Puff',
      key: 'bonus-dandelion-wind-chime-porch-puff-3',
      asset: 'assets/bonus/dandelion_wind_chime_porch_golden_puff_03.png',
      x: 1160,
      y: 185,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'dandelion-chime-jingle',
      x: 405,
      y: 205,
      label: 'Jingle!'
    },
    {
      id: 'dandelion-puff-float',
      x: 560,
      y: 375,
      label: 'Float!'
    },
    {
      id: 'dandelion-porch-sparkle',
      x: 1080,
      y: 250,
      label: 'Sparkle!'
    }
  ],
  previousLevelId: 'maple-cocoa-breakfast-nook'
};
