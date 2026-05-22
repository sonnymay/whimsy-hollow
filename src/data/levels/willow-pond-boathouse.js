export const willowPondBoathouse = {
  id: 'willow-pond-boathouse',
  title: 'Willow Pond Boathouse',
  saveKey: 'whimsy-hollow:willow-pond-boathouse',
  bonusSaveKey: 'whimsy-hollow:willow-pond-boathouse:bonus',
  bonusLabel: 'Dewdrops',
  bonusFoundText: 'Dewdrop!',
  background: {
    key: 'willowPondBoathouseBackground',
    path: 'assets/backgrounds/willow_pond_boathouse.webp'
  },
  objects: [
    {
      id: 'tiny-wooden-oar',
      name: 'Wooden Oar',
      requester: 'Willow Wren',
      clue: 'A tiny wooden oar rests near the boathouse wall.',
      key: 'object-willow-pond-boathouse-wooden-oar',
      asset: 'assets/objects/willow_pond_boathouse_wooden_oar.png',
      x: 932,
      y: 382,
      scale: 0.18
    },
    {
      id: 'blue-glass-float',
      name: 'Glass Float',
      requester: 'Willow Wren',
      clue: 'A blue glass float hangs near the rope and lantern.',
      key: 'object-willow-pond-boathouse-blue-glass-float',
      asset: 'assets/objects/willow_pond_boathouse_blue_glass_float.png',
      x: 286,
      y: 160,
      scale: 0.2
    },
    {
      id: 'folded-gingham-blanket',
      name: 'Blanket',
      requester: 'Willow Wren',
      clue: 'A folded blanket waits on the right-hand cupboard.',
      key: 'object-willow-pond-boathouse-gingham-blanket',
      asset: 'assets/objects/willow_pond_boathouse_gingham_blanket.png',
      x: 1084,
      y: 500,
      scale: 0.18
    },
    {
      id: 'lily-pad-coaster',
      name: 'Lily Coaster',
      requester: 'Willow Wren',
      clue: 'A lily pad coaster hides near the open pond view.',
      key: 'object-willow-pond-boathouse-lily-pad-coaster',
      asset: 'assets/objects/willow_pond_boathouse_lily_pad_coaster.png',
      x: 662,
      y: 274,
      scale: 0.2
    },
    {
      id: 'brass-lantern-charm',
      name: 'Lantern',
      requester: 'Willow Wren',
      clue: 'A brass lantern glows beside the cozy bench.',
      key: 'object-willow-pond-boathouse-brass-lantern',
      asset: 'assets/objects/willow_pond_boathouse_brass_lantern.png',
      x: 196,
      y: 552,
      scale: 0.18
    },
    {
      id: 'willow-leaf-bookmark',
      name: 'Bookmark',
      requester: 'Willow Wren',
      clue: 'A willow bookmark lies where the sunlight touches wood.',
      key: 'object-willow-pond-boathouse-willow-bookmark',
      asset: 'assets/objects/willow_pond_boathouse_willow_bookmark.png',
      x: 496,
      y: 622,
      scale: 0.18
    },
    {
      id: 'rope-knot',
      name: 'Rope Knot',
      requester: 'Willow Wren',
      clue: 'A rope knot curls near the low bucket.',
      key: 'object-willow-pond-boathouse-rope-knot',
      asset: 'assets/objects/willow_pond_boathouse_rope_knot.png',
      x: 872,
      y: 596,
      scale: 0.22
    },
    {
      id: 'little-paper-sailboat',
      name: 'Sailboat',
      requester: 'Willow Wren',
      clue: 'A paper sailboat sits on the high shelf.',
      key: 'object-willow-pond-boathouse-paper-sailboat',
      asset: 'assets/objects/willow_pond_boathouse_paper_sailboat.png',
      x: 1142,
      y: 260,
      scale: 0.18
    },
    {
      id: 'painted-pebble',
      name: 'Pebble',
      requester: 'Willow Wren',
      clue: 'A painted pebble waits in the blanket basket.',
      key: 'object-willow-pond-boathouse-painted-pebble',
      asset: 'assets/objects/willow_pond_boathouse_painted_pebble.png',
      x: 248,
      y: 650,
      scale: 0.2
    },
    {
      id: 'flower-thermos',
      name: 'Thermos',
      requester: 'Willow Wren',
      clue: 'A flower thermos stands near the right flowers.',
      key: 'object-willow-pond-boathouse-flower-thermos',
      asset: 'assets/objects/willow_pond_boathouse_flower_thermos.png',
      x: 1032,
      y: 638,
      scale: 0.18
    }
  ],
  bonusEnvelopes: [
    {
      id: 'dewdrop-1',
      name: 'Crystal Dewdrop',
      key: 'bonus-willow-pond-boathouse-dewdrop-1',
      asset: 'assets/bonus/willow_pond_boathouse_dewdrop_01.png',
      x: 556,
      y: 182,
      scale: 0.16
    },
    {
      id: 'dewdrop-2',
      name: 'Crystal Dewdrop',
      key: 'bonus-willow-pond-boathouse-dewdrop-2',
      asset: 'assets/bonus/willow_pond_boathouse_dewdrop_02.png',
      x: 768,
      y: 230,
      scale: 0.16
    },
    {
      id: 'dewdrop-3',
      name: 'Crystal Dewdrop',
      key: 'bonus-willow-pond-boathouse-dewdrop-3',
      asset: 'assets/bonus/willow_pond_boathouse_dewdrop_03.png',
      x: 1186,
      y: 478,
      scale: 0.16
    }
  ],
  surprises: [
    {
      id: 'boathouse-pond-shimmer',
      x: 668,
      y: 242,
      label: 'Shimmer!'
    },
    {
      id: 'boathouse-lantern-glow',
      x: 194,
      y: 520,
      label: 'Glow!'
    },
    {
      id: 'boathouse-willow-breeze',
      x: 562,
      y: 148,
      label: 'Swish!'
    }
  ],
  previousLevelId: 'morning-clockmaker-nook'
};
