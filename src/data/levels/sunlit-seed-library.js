export const sunlitSeedLibrary = {
  id: 'sunlit-seed-library',
  title: 'Sunlit Seed Library',
  saveKey: 'whimsy-hollow:sunlit-seed-library',
  bonusSaveKey: 'whimsy-hollow:sunlit-seed-library:bonus',
  bonusLabel: 'Seeds',
  bonusFoundText: 'Seed!',
  background: {
    key: 'sunlitSeedLibraryBackground',
    path: 'assets/backgrounds/sunlit_seed_library.webp'
  },
  objects: [
    {
      id: 'brass-watering-can',
      name: 'Watering Can',
      requester: 'Ivy Seedwhistle',
      clue: 'A tiny brass watering can sits near the potted flowers.',
      key: 'object-sunlit-seed-library-watering-can',
      asset: 'assets/objects/sunlit_seed_library_watering_can.png',
      x: 520,
      y: 220,
      scale: 0.22
    },
    {
      id: 'flower-seed-packet',
      name: 'Seed Packet',
      requester: 'Ivy Seedwhistle',
      clue: 'A flower seed packet is tucked into the right cubbies.',
      key: 'object-sunlit-seed-library-seed-packet',
      asset: 'assets/objects/sunlit_seed_library_seed_packet.png',
      x: 825,
      y: 275,
      scale: 0.22
    },
    {
      id: 'wooden-plant-label',
      name: 'Plant Label',
      requester: 'Ivy Seedwhistle',
      clue: 'A wooden plant label stands in the front seedling pot.',
      key: 'object-sunlit-seed-library-plant-label',
      asset: 'assets/objects/sunlit_seed_library_plant_label.png',
      x: 735,
      y: 450,
      scale: 0.22
    },
    {
      id: 'terracotta-seedling-pot',
      name: 'Seedling Pot',
      requester: 'Ivy Seedwhistle',
      clue: 'A terracotta pot waits beside the sunny window.',
      key: 'object-sunlit-seed-library-seedling-pot',
      asset: 'assets/objects/sunlit_seed_library_seedling_pot.png',
      x: 1120,
      y: 250,
      scale: 0.22
    },
    {
      id: 'blue-twine-spool',
      name: 'Twine Spool',
      requester: 'Ivy Seedwhistle',
      clue: 'A blue twine spool rests on the front worktable.',
      key: 'object-sunlit-seed-library-twine-spool',
      asset: 'assets/objects/sunlit_seed_library_twine_spool.png',
      x: 965,
      y: 525,
      scale: 0.22
    },
    {
      id: 'small-hand-trowel',
      name: 'Hand Trowel',
      requester: 'Ivy Seedwhistle',
      clue: 'A small hand trowel lies across the potting table.',
      key: 'object-sunlit-seed-library-hand-trowel',
      asset: 'assets/objects/sunlit_seed_library_hand_trowel.png',
      x: 675,
      y: 540,
      scale: 0.22
    },
    {
      id: 'glass-seed-jar',
      name: 'Seed Jar',
      requester: 'Ivy Seedwhistle',
      clue: 'A glass seed jar glints on the right shelf.',
      key: 'object-sunlit-seed-library-seed-jar',
      asset: 'assets/objects/sunlit_seed_library_seed_jar.png',
      x: 1070,
      y: 390,
      scale: 0.22
    },
    {
      id: 'pressed-flower-card',
      name: 'Flower Card',
      requester: 'Ivy Seedwhistle',
      clue: 'A pressed flower card rests near the seed tray.',
      key: 'object-sunlit-seed-library-pressed-flower-card',
      asset: 'assets/objects/sunlit_seed_library_pressed_flower_card.png',
      x: 840,
      y: 580,
      scale: 0.22
    },
    {
      id: 'green-garden-gloves',
      name: 'Garden Gloves',
      requester: 'Ivy Seedwhistle',
      clue: 'Green garden gloves hide beside the lower left basket.',
      key: 'object-sunlit-seed-library-garden-gloves',
      asset: 'assets/objects/sunlit_seed_library_garden_gloves.png',
      x: 225,
      y: 610,
      scale: 0.22
    },
    {
      id: 'wooden-catalog-drawer',
      name: 'Catalog Drawer',
      requester: 'Ivy Seedwhistle',
      clue: 'A wooden catalog drawer peeks from the card cabinet.',
      key: 'object-sunlit-seed-library-catalog-drawer',
      asset: 'assets/objects/sunlit_seed_library_catalog_drawer.png',
      x: 390,
      y: 405,
      scale: 0.22
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-seed-1',
      name: 'Golden Seed',
      key: 'bonus-sunlit-seed-library-seed-1',
      asset: 'assets/bonus/sunlit_seed_library_golden_seed_01.png',
      x: 300,
      y: 250,
      scale: 0.16
    },
    {
      id: 'golden-seed-2',
      name: 'Golden Seed',
      key: 'bonus-sunlit-seed-library-seed-2',
      asset: 'assets/bonus/sunlit_seed_library_golden_seed_02.png',
      x: 610,
      y: 640,
      scale: 0.17
    },
    {
      id: 'golden-seed-3',
      name: 'Golden Seed',
      key: 'bonus-sunlit-seed-library-seed-3',
      asset: 'assets/bonus/sunlit_seed_library_golden_seed_03.png',
      x: 1140,
      y: 595,
      scale: 0.17
    }
  ],
  surprises: [
    {
      id: 'seed-library-window-sun',
      x: 1090,
      y: 170,
      label: 'Shine!'
    },
    {
      id: 'seed-library-catalog-click',
      x: 390,
      y: 330,
      label: 'Click!'
    },
    {
      id: 'seed-library-sprout',
      x: 760,
      y: 410,
      label: 'Sprout!'
    }
  ],
  previousLevelId: 'morning-birdwatching-porch'
};
