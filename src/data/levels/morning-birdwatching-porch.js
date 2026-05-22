export const morningBirdwatchingPorch = {
  id: 'morning-birdwatching-porch',
  title: 'Morning Birdwatching Porch',
  saveKey: 'whimsy-hollow:morning-birdwatching-porch',
  bonusSaveKey: 'whimsy-hollow:morning-birdwatching-porch:bonus',
  bonusLabel: 'Feathers',
  bonusFoundText: 'Feather!',
  background: {
    key: 'morningBirdwatchingPorchBackground',
    path: 'assets/backgrounds/morning_birdwatching_porch.webp'
  },
  objects: [
    {
      id: 'brass-binoculars',
      name: 'Binoculars',
      requester: 'Penny Perch',
      clue: 'Brass binoculars wait on the little round table.',
      key: 'object-morning-birdwatching-porch-binoculars',
      asset: 'assets/objects/morning_birdwatching_porch_binoculars.png',
      x: 560,
      y: 468,
      scale: 0.24
    },
    {
      id: 'birdseed-scoop',
      name: 'Seed Scoop',
      requester: 'Penny Perch',
      clue: 'A birdseed scoop rests by the seed tins on the right.',
      key: 'object-morning-birdwatching-porch-seed-scoop',
      asset: 'assets/objects/morning_birdwatching_porch_seed_scoop.png',
      x: 930,
      y: 505,
      scale: 0.24
    },
    {
      id: 'blue-feather-journal',
      name: 'Feather Journal',
      requester: 'Penny Perch',
      clue: 'A blue journal is tucked in the lower basket.',
      key: 'object-morning-birdwatching-porch-feather-journal',
      asset: 'assets/objects/morning_birdwatching_porch_feather_journal.png',
      x: 630,
      y: 625,
      scale: 0.24
    },
    {
      id: 'tiny-wooden-birdhouse',
      name: 'Birdhouse',
      requester: 'Penny Perch',
      clue: 'A tiny birdhouse sits on the left blue shelf.',
      key: 'object-morning-birdwatching-porch-birdhouse',
      asset: 'assets/objects/morning_birdwatching_porch_birdhouse.png',
      x: 335,
      y: 205,
      scale: 0.23
    },
    {
      id: 'pinecone-charm',
      name: 'Pinecone Charm',
      requester: 'Penny Perch',
      clue: 'A pinecone charm hangs near the upper left bell.',
      key: 'object-morning-birdwatching-porch-pinecone-charm',
      asset: 'assets/objects/morning_birdwatching_porch_pinecone_charm.png',
      x: 230,
      y: 140,
      scale: 0.22
    },
    {
      id: 'striped-seed-pouch',
      name: 'Seed Pouch',
      requester: 'Penny Perch',
      clue: 'A striped seed pouch hides near the porch supply bench.',
      key: 'object-morning-birdwatching-porch-seed-pouch',
      asset: 'assets/objects/morning_birdwatching_porch_seed_pouch.png',
      x: 1040,
      y: 555,
      scale: 0.23
    },
    {
      id: 'flower-field-guide',
      name: 'Field Guide',
      requester: 'Penny Perch',
      clue: 'A flower field guide card lies open near the table mug.',
      key: 'object-morning-birdwatching-porch-field-guide-card',
      asset: 'assets/objects/morning_birdwatching_porch_field_guide_card.png',
      x: 665,
      y: 505,
      scale: 0.22
    },
    {
      id: 'ceramic-bird-whistle',
      name: 'Bird Whistle',
      requester: 'Penny Perch',
      clue: 'A ceramic bird whistle perches by the railing flowers.',
      key: 'object-morning-birdwatching-porch-bird-whistle',
      asset: 'assets/objects/morning_birdwatching_porch_bird_whistle.png',
      x: 815,
      y: 415,
      scale: 0.22
    },
    {
      id: 'green-seed-tin',
      name: 'Seed Tin',
      requester: 'Penny Perch',
      clue: 'A green seed tin sits low near the rain boots.',
      key: 'object-morning-birdwatching-porch-seed-tin',
      asset: 'assets/objects/morning_birdwatching_porch_seed_tin.png',
      x: 1160,
      y: 615,
      scale: 0.23
    },
    {
      id: 'twig-bundle',
      name: 'Twig Bundle',
      requester: 'Penny Perch',
      clue: 'A ribbon-tied twig bundle rests beside the wicker chair.',
      key: 'object-morning-birdwatching-porch-twig-bundle',
      asset: 'assets/objects/morning_birdwatching_porch_twig_bundle.png',
      x: 395,
      y: 610,
      scale: 0.23
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-feather-1',
      name: 'Golden Feather',
      key: 'bonus-morning-birdwatching-porch-feather-1',
      asset: 'assets/bonus/morning_birdwatching_porch_golden_feather_01.png',
      x: 500,
      y: 265,
      scale: 0.15
    },
    {
      id: 'golden-feather-2',
      name: 'Golden Feather',
      key: 'bonus-morning-birdwatching-porch-feather-2',
      asset: 'assets/bonus/morning_birdwatching_porch_golden_feather_02.png',
      x: 1120,
      y: 250,
      scale: 0.15
    },
    {
      id: 'golden-feather-3',
      name: 'Golden Feather',
      key: 'bonus-morning-birdwatching-porch-feather-3',
      asset: 'assets/bonus/morning_birdwatching_porch_golden_feather_03.png',
      x: 250,
      y: 620,
      scale: 0.16
    }
  ],
  surprises: [
    {
      id: 'porch-feeder-sway',
      x: 760,
      y: 170,
      label: 'Sway!'
    },
    {
      id: 'porch-birdbath-shine',
      x: 855,
      y: 300,
      label: 'Shine!'
    },
    {
      id: 'porch-flower-breeze',
      x: 1080,
      y: 335,
      label: 'Breeze!'
    }
  ],
  previousLevelId: 'honey-candle-workshop'
};
