export const kaleidoscopeRepairDesk = {
  id: 'kaleidoscope-repair-desk',
  title: 'Kaleidoscope Repair Desk',
  saveKey: 'whimsy-hollow:kaleidoscope-repair-desk',
  bonusSaveKey: 'whimsy-hollow:kaleidoscope-repair-desk:bonus',
  bonusLabel: 'Prism Charms',
  bonusFoundText: 'Prism charm!',
  background: {
    key: 'kaleidoscopeRepairDeskBackground',
    path: 'assets/backgrounds/kaleidoscope_repair_desk.webp'
  },
  objects: [
    {
      id: 'painted-tube',
      name: 'Painted Kaleidoscope',
      requester: 'Iris Gleam',
      clue: 'The painted kaleidoscope tube rests on the velvet cloth.',
      key: 'object-kaleidoscope-painted-tube',
      asset: 'assets/objects/kaleidoscope_painted_tube.png',
      x: 625,
      y: 505,
      scale: 0.12
    },
    {
      id: 'glass-prism',
      name: 'Glass Prism',
      requester: 'Iris Gleam',
      clue: 'A triangular prism catches light near the window ledge.',
      key: 'object-kaleidoscope-glass-prism',
      asset: 'assets/objects/kaleidoscope_glass_prism.png',
      x: 290,
      y: 300,
      scale: 0.12
    },
    {
      id: 'brass-lens-ring',
      name: 'Brass Lens Ring',
      requester: 'Iris Gleam',
      clue: 'A brass lens ring lies just left of the bead tray.',
      key: 'object-kaleidoscope-brass-lens-ring',
      asset: 'assets/objects/kaleidoscope_brass_lens_ring.png',
      x: 540,
      y: 420,
      scale: 0.12
    },
    {
      id: 'tiny-screwdriver',
      name: 'Tiny Screwdriver',
      requester: 'Iris Gleam',
      clue: 'The tiny screwdriver points across the front of the desk.',
      key: 'object-kaleidoscope-tiny-screwdriver',
      asset: 'assets/objects/kaleidoscope_tiny_screwdriver.png',
      x: 760,
      y: 620,
      scale: 0.12
    },
    {
      id: 'velvet-cloth',
      name: 'Velvet Cloth',
      requester: 'Iris Gleam',
      clue: 'A soft velvet cloth is spread beneath the kaleidoscope.',
      key: 'object-kaleidoscope-velvet-cloth',
      asset: 'assets/objects/kaleidoscope_velvet_cloth.png',
      x: 670,
      y: 550,
      scale: 0.13
    },
    {
      id: 'bead-vial',
      name: 'Bead Vial',
      requester: 'Iris Gleam',
      clue: 'A little bead vial sits near the right-side jars.',
      key: 'object-kaleidoscope-bead-vial',
      asset: 'assets/objects/kaleidoscope_bead_vial.png',
      x: 1045,
      y: 430,
      scale: 0.12
    },
    {
      id: 'star-confetti',
      name: 'Star Confetti',
      requester: 'Iris Gleam',
      clue: 'A rainbow star piece sparkles near the middle-left papers.',
      key: 'object-kaleidoscope-star-confetti',
      asset: 'assets/objects/kaleidoscope_star_confetti.png',
      x: 470,
      y: 575,
      scale: 0.12
    },
    {
      id: 'mirror-shard',
      name: 'Mirror Shard',
      requester: 'Iris Gleam',
      clue: 'A silver mirror shard rests among the loose prisms.',
      key: 'object-kaleidoscope-mirror-shard',
      asset: 'assets/objects/kaleidoscope_mirror_shard.png',
      x: 920,
      y: 545,
      scale: 0.12
    },
    {
      id: 'ribbon-spool',
      name: 'Ribbon Spool',
      requester: 'Iris Gleam',
      clue: 'A rainbow ribbon spool sits near the lower-right corner.',
      key: 'object-kaleidoscope-ribbon-spool',
      asset: 'assets/objects/kaleidoscope_ribbon_spool.png',
      x: 1120,
      y: 610,
      scale: 0.12
    },
    {
      id: 'view-cap',
      name: 'Brass View Cap',
      requester: 'Iris Gleam',
      clue: 'A brass view cap glows at the front edge of the table.',
      key: 'object-kaleidoscope-view-cap',
      asset: 'assets/objects/kaleidoscope_view_cap.png',
      x: 985,
      y: 635,
      scale: 0.12
    }
  ],
  bonusEnvelopes: [
    {
      id: 'prism-charm-1',
      name: 'Prism Star',
      key: 'bonus-kaleidoscope-prism-charm-1',
      asset: 'assets/bonus/kaleidoscope_prism_star_01.png',
      x: 225,
      y: 155,
      scale: 0.08
    },
    {
      id: 'prism-charm-2',
      name: 'Sunburst Lens',
      key: 'bonus-kaleidoscope-prism-charm-2',
      asset: 'assets/bonus/kaleidoscope_sunburst_lens_02.png',
      x: 720,
      y: 165,
      scale: 0.08
    },
    {
      id: 'prism-charm-3',
      name: 'Diamond Drop',
      key: 'bonus-kaleidoscope-prism-charm-3',
      asset: 'assets/bonus/kaleidoscope_diamond_drop_03.png',
      x: 1165,
      y: 180,
      scale: 0.08
    }
  ],
  surprises: [
    { x: 590, y: 500, label: 'Spark!' },
    { x: 875, y: 520, label: 'Glimmer!' },
    { x: 1080, y: 610, label: 'Shine!' }
  ],
  previousLevelId: 'paper-boat-rainy-window'
};
