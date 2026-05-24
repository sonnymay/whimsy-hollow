export const woodenWhistleCarvingBench = {
  id: 'wooden-whistle-carving-bench',
  title: 'Wooden Whistle Carving Bench',
  saveKey: 'whimsy-hollow:wooden-whistle-carving-bench',
  bonusSaveKey: 'whimsy-hollow:wooden-whistle-carving-bench:bonus',
  bonusLabel: 'Notes',
  bonusFoundText: 'Golden note!',
  background: {
    key: 'woodenWhistleCarvingBenchBackground',
    path: 'assets/backgrounds/wooden_whistle_carving_bench.webp'
  },
  objects: [
    {
      id: 'carved-whistle',
      name: 'Carved Whistle',
      requester: 'Pip Willow',
      clue: 'A finished whistle rests near the soft cloth on the low stool.',
      key: 'object-wooden-whistle-carved-whistle',
      asset: 'assets/objects/wooden_whistle_carved_whistle.png',
      x: 315,
      y: 595,
      scale: 0.15
    },
    {
      id: 'leaf-blank',
      name: 'Leaf Blank',
      requester: 'Pip Willow',
      clue: 'A leaf-shaped blank is tucked among the tabletop carvings.',
      key: 'object-wooden-whistle-leaf-blank',
      asset: 'assets/objects/wooden_whistle_leaf_blank.png',
      x: 760,
      y: 390,
      scale: 0.15
    },
    {
      id: 'sanding-block',
      name: 'Sanding Block',
      requester: 'Pip Willow',
      clue: 'The sanding block waits by the mug and folded cloth.',
      key: 'object-wooden-whistle-sanding-block',
      asset: 'assets/objects/wooden_whistle_sanding_block.png',
      x: 1010,
      y: 475,
      scale: 0.14
    },
    {
      id: 'brass-awl',
      name: 'Brass Awl',
      requester: 'Pip Willow',
      clue: 'The brass awl points across the front edge of the bench.',
      key: 'object-wooden-whistle-brass-awl',
      asset: 'assets/objects/wooden_whistle_brass_awl.png',
      x: 875,
      y: 500,
      scale: 0.14
    },
    {
      id: 'blue-pencil',
      name: 'Blue Pencil',
      requester: 'Pip Willow',
      clue: 'A blue pencil leans with the tools near the right shelf.',
      key: 'object-wooden-whistle-blue-pencil',
      asset: 'assets/objects/wooden_whistle_blue_pencil.png',
      x: 1125,
      y: 330,
      scale: 0.13
    },
    {
      id: 'wood-shaving',
      name: 'Wood Shaving',
      requester: 'Pip Willow',
      clue: 'A curled shaving hides in the sunny scatter on the tabletop.',
      key: 'object-wooden-whistle-wood-shaving',
      asset: 'assets/objects/wooden_whistle_wood_shaving.png',
      x: 505,
      y: 420,
      scale: 0.15
    },
    {
      id: 'bench-clamp',
      name: 'Bench Clamp',
      requester: 'Pip Willow',
      clue: 'A tiny clamp grips the front of the workbench.',
      key: 'object-wooden-whistle-bench-clamp',
      asset: 'assets/objects/wooden_whistle_bench_clamp.png',
      x: 410,
      y: 510,
      scale: 0.15
    },
    {
      id: 'polishing-rag',
      name: 'Polishing Rag',
      requester: 'Pip Willow',
      clue: 'The polishing rag is folded on the right side of the bench.',
      key: 'object-wooden-whistle-polishing-rag',
      asset: 'assets/objects/wooden_whistle_polishing_rag.png',
      x: 1135,
      y: 575,
      scale: 0.14
    },
    {
      id: 'twine-loop',
      name: 'Twine Loop',
      requester: 'Pip Willow',
      clue: 'A loop of twine hangs close to the stacked shelf cubby.',
      key: 'object-wooden-whistle-twine-loop',
      asset: 'assets/objects/wooden_whistle_twine_loop.png',
      x: 845,
      y: 285,
      scale: 0.13
    },
    {
      id: 'storage-tin',
      name: 'Storage Tin',
      requester: 'Pip Willow',
      clue: 'A small green tin sits near the basket of wood pieces.',
      key: 'object-wooden-whistle-storage-tin',
      asset: 'assets/objects/wooden_whistle_storage_tin.png',
      x: 1130,
      y: 405,
      scale: 0.14
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-note-1',
      name: 'Golden Note',
      key: 'bonus-wooden-whistle-golden-note-1',
      asset: 'assets/bonus/wooden_whistle_golden_note_01.png',
      x: 230,
      y: 155,
      scale: 0.08
    },
    {
      id: 'golden-note-2',
      name: 'Golden Note',
      key: 'bonus-wooden-whistle-golden-note-2',
      asset: 'assets/bonus/wooden_whistle_golden_note_02.png',
      x: 680,
      y: 165,
      scale: 0.075
    },
    {
      id: 'golden-note-3',
      name: 'Golden Note',
      key: 'bonus-wooden-whistle-golden-note-3',
      asset: 'assets/bonus/wooden_whistle_golden_note_03.png',
      x: 1170,
      y: 185,
      scale: 0.075
    }
  ],
  surprises: [
    { x: 455, y: 405, label: 'Whittle!' },
    { x: 1030, y: 315, label: 'Tweet!' },
    { x: 650, y: 455, label: 'Shhhk' }
  ],
  previousLevelId: 'felt-star-mobile-workbench'
};
