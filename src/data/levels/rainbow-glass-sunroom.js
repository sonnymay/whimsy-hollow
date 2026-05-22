export const rainbowGlassSunroom = {
  id: 'rainbow-glass-sunroom',
  title: 'Rainbow Glass Sunroom',
  saveKey: 'whimsy-hollow:rainbow-glass-sunroom',
  bonusSaveKey: 'whimsy-hollow:rainbow-glass-sunroom:bonus',
  bonusLabel: 'Prisms',
  bonusFoundText: 'Prism!',
  background: {
    key: 'rainbowGlassSunroomBackground',
    path: 'assets/backgrounds/rainbow_glass_sunroom.png'
  },
  objects: [
    {
      id: 'rainbow-sun-catcher',
      name: 'Rainbow Sun Catcher',
      requester: 'Clara Sunbeam',
      clue: 'A rainbow sun catcher hangs in the bright window.',
      key: 'object-rainbow-glass-sunroom-sun-catcher',
      asset: 'assets/objects/rainbow_glass_sunroom_sun_catcher.png',
      x: 500,
      y: 210,
      scale: 0.22
    },
    {
      id: 'blue-bird-charm',
      name: 'Blue Bird Charm',
      requester: 'Clara Sunbeam',
      clue: 'A blue glass charm waits near the right window.',
      key: 'object-rainbow-glass-sunroom-blue-bird-charm',
      asset: 'assets/objects/rainbow_glass_sunroom_blue_bird_charm.png',
      x: 950,
      y: 240,
      scale: 0.22
    },
    {
      id: 'heart-glass-ornament',
      name: 'Heart Ornament',
      requester: 'Clara Sunbeam',
      clue: 'A heart ornament shines above the flower jars.',
      key: 'object-rainbow-glass-sunroom-heart-ornament',
      asset: 'assets/objects/rainbow_glass_sunroom_heart_ornament.png',
      x: 1120,
      y: 370,
      scale: 0.22
    },
    {
      id: 'rounded-glass-pebble',
      name: 'Glass Pebble',
      requester: 'Clara Sunbeam',
      clue: 'A rounded glass pebble rests on the craft table.',
      key: 'object-rainbow-glass-sunroom-glass-pebble',
      asset: 'assets/objects/rainbow_glass_sunroom_glass_pebble.png',
      x: 640,
      y: 560,
      scale: 0.22
    },
    {
      id: 'tiny-ribbon-spool',
      name: 'Ribbon Spool',
      requester: 'Clara Sunbeam',
      clue: 'A tiny ribbon spool sits near the table edge.',
      key: 'object-rainbow-glass-sunroom-ribbon-spool',
      asset: 'assets/objects/rainbow_glass_sunroom_ribbon_spool.png',
      x: 1085,
      y: 610,
      scale: 0.22
    },
    {
      id: 'wooden-bead-tray',
      name: 'Bead Tray',
      requester: 'Clara Sunbeam',
      clue: 'A wooden bead tray is set among the craft supplies.',
      key: 'object-rainbow-glass-sunroom-bead-tray',
      asset: 'assets/objects/rainbow_glass_sunroom_bead_tray.png',
      x: 760,
      y: 620,
      scale: 0.22
    },
    {
      id: 'brass-hanging-hook',
      name: 'Hanging Hook',
      requester: 'Clara Sunbeam',
      clue: 'A brass hanging hook waits near the window beams.',
      key: 'object-rainbow-glass-sunroom-hanging-hook',
      asset: 'assets/objects/rainbow_glass_sunroom_hanging_hook.png',
      x: 885,
      y: 155,
      scale: 0.2
    },
    {
      id: 'flower-glass-tile',
      name: 'Flower Glass Tile',
      requester: 'Clara Sunbeam',
      clue: 'A flower glass tile leans by the left cabinet.',
      key: 'object-rainbow-glass-sunroom-flower-tile',
      asset: 'assets/objects/rainbow_glass_sunroom_flower_tile.png',
      x: 340,
      y: 470,
      scale: 0.22
    },
    {
      id: 'soft-polishing-cloth',
      name: 'Polishing Cloth',
      requester: 'Clara Sunbeam',
      clue: 'A soft polishing cloth is folded on the side table.',
      key: 'object-rainbow-glass-sunroom-polishing-cloth',
      asset: 'assets/objects/rainbow_glass_sunroom_polishing_cloth.png',
      x: 965,
      y: 505,
      scale: 0.22
    },
    {
      id: 'small-prism-bottle',
      name: 'Prism Bottle',
      requester: 'Clara Sunbeam',
      clue: 'A small prism bottle sparkles near the flower vase.',
      key: 'object-rainbow-glass-sunroom-prism-bottle',
      asset: 'assets/objects/rainbow_glass_sunroom_prism_bottle.png',
      x: 1180,
      y: 560,
      scale: 0.22
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-prism-1',
      name: 'Golden Prism',
      key: 'bonus-rainbow-glass-sunroom-prism-1',
      asset: 'assets/bonus/rainbow_glass_sunroom_golden_prism_01.png',
      x: 310,
      y: 245,
      scale: 0.16
    },
    {
      id: 'golden-prism-2',
      name: 'Golden Prism',
      key: 'bonus-rainbow-glass-sunroom-prism-2',
      asset: 'assets/bonus/rainbow_glass_sunroom_golden_prism_02.png',
      x: 720,
      y: 340,
      scale: 0.16
    },
    {
      id: 'golden-prism-3',
      name: 'Golden Prism',
      key: 'bonus-rainbow-glass-sunroom-prism-3',
      asset: 'assets/bonus/rainbow_glass_sunroom_golden_prism_03.png',
      x: 1125,
      y: 165,
      scale: 0.17
    }
  ],
  surprises: [
    {
      id: 'glass-sunroom-window-rainbow',
      x: 1040,
      y: 180,
      label: 'Shine!'
    },
    {
      id: 'glass-sunroom-prism-glow',
      x: 760,
      y: 420,
      label: 'Glow!'
    },
    {
      id: 'glass-sunroom-charm-tinkle',
      x: 510,
      y: 240,
      label: 'Tinkle!'
    }
  ],
  previousLevelId: 'puppet-theater-alcove'
};
