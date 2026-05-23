export const rainyTerrariumTable = {
  id: 'rainy-terrarium-table',
  title: 'Rainy Terrarium Table',
  saveKey: 'whimsy-hollow:rainy-terrarium-table',
  bonusSaveKey: 'whimsy-hollow:rainy-terrarium-table:bonus',
  bonusLabel: 'Raindrops',
  bonusFoundText: 'Raindrop!',
  background: {
    key: 'rainyTerrariumTableBackground',
    path: 'assets/backgrounds/rainy_terrarium_table.webp'
  },
  objects: [
    {
      id: 'round-cork-lid',
      name: 'Cork Lid',
      requester: 'Fern Fable',
      clue: 'A round cork lid rests beside the big glass terrarium.',
      key: 'object-rainy-terrarium-table-cork-lid',
      asset: 'assets/objects/rainy_terrarium_table_cork_lid.png',
      x: 540,
      y: 325,
      scale: 0.2
    },
    {
      id: 'tiny-fern-sprig',
      name: 'Fern Sprig',
      requester: 'Fern Fable',
      clue: 'A tiny fern sprig is tucked near the rain window.',
      key: 'object-rainy-terrarium-table-fern-sprig',
      asset: 'assets/objects/rainy_terrarium_table_tiny_fern_sprig.png',
      x: 340,
      y: 320,
      scale: 0.19
    },
    {
      id: 'blue-pebble-bowl',
      name: 'Pebble Bowl',
      requester: 'Fern Fable',
      clue: 'A blue pebble bowl sits near the front terrarium tools.',
      key: 'object-rainy-terrarium-table-pebble-bowl',
      asset: 'assets/objects/rainy_terrarium_table_blue_pebble_bowl.png',
      x: 735,
      y: 535,
      scale: 0.2
    },
    {
      id: 'wooden-moss-spoon',
      name: 'Moss Spoon',
      requester: 'Fern Fable',
      clue: 'A wooden moss spoon lies across the right tray.',
      key: 'object-rainy-terrarium-table-moss-spoon',
      asset: 'assets/objects/rainy_terrarium_table_wooden_moss_spoon.png',
      x: 1040,
      y: 550,
      scale: 0.19
    },
    {
      id: 'glass-droplet-jar',
      name: 'Droplet Jar',
      requester: 'Fern Fable',
      clue: 'A glass droplet jar waits on the left windowsill.',
      key: 'object-rainy-terrarium-table-droplet-jar',
      asset: 'assets/objects/rainy_terrarium_table_glass_droplet_jar.png',
      x: 350,
      y: 370,
      scale: 0.19
    },
    {
      id: 'twine-spool',
      name: 'Twine Spool',
      requester: 'Fern Fable',
      clue: 'A twine spool sits on the upper shelf cubbies.',
      key: 'object-rainy-terrarium-table-twine-spool',
      asset: 'assets/objects/rainy_terrarium_table_twine_spool.png',
      x: 840,
      y: 230,
      scale: 0.2
    },
    {
      id: 'small-terrarium-rake',
      name: 'Terrarium Rake',
      requester: 'Fern Fable',
      clue: 'A small terrarium rake rests near the right-hand plant tray.',
      key: 'object-rainy-terrarium-table-rake',
      asset: 'assets/objects/rainy_terrarium_table_small_terrarium_rake.png',
      x: 1085,
      y: 525,
      scale: 0.2
    },
    {
      id: 'mushroom-figurine',
      name: 'Mushroom Figurine',
      requester: 'Fern Fable',
      clue: 'A mushroom figurine hides inside the center glass jar.',
      key: 'object-rainy-terrarium-table-mushroom',
      asset: 'assets/objects/rainy_terrarium_table_mushroom_figurine.png',
      x: 595,
      y: 480,
      scale: 0.19
    },
    {
      id: 'folded-linen-towel',
      name: 'Linen Towel',
      requester: 'Fern Fable',
      clue: 'A folded linen towel drapes over the front of the table.',
      key: 'object-rainy-terrarium-table-linen-towel',
      asset: 'assets/objects/rainy_terrarium_table_folded_linen_towel.png',
      x: 560,
      y: 640,
      scale: 0.2
    },
    {
      id: 'brass-plant-mister',
      name: 'Plant Mister',
      requester: 'Fern Fable',
      clue: 'A brass plant mister stands beside the rain-speckled window.',
      key: 'object-rainy-terrarium-table-plant-mister',
      asset: 'assets/objects/rainy_terrarium_table_brass_plant_mister.png',
      x: 525,
      y: 300,
      scale: 0.19
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-raindrop-1',
      name: 'Golden Raindrop',
      key: 'bonus-rainy-terrarium-table-raindrop-1',
      asset: 'assets/bonus/rainy_terrarium_table_golden_raindrop_01.png',
      x: 255,
      y: 185,
      scale: 0.14
    },
    {
      id: 'golden-raindrop-2',
      name: 'Golden Raindrop',
      key: 'bonus-rainy-terrarium-table-raindrop-2',
      asset: 'assets/bonus/rainy_terrarium_table_golden_raindrop_02.png',
      x: 695,
      y: 150,
      scale: 0.14
    },
    {
      id: 'golden-raindrop-3',
      name: 'Golden Raindrop',
      key: 'bonus-rainy-terrarium-table-raindrop-3',
      asset: 'assets/bonus/rainy_terrarium_table_golden_raindrop_03.png',
      x: 1115,
      y: 170,
      scale: 0.14
    }
  ],
  surprises: [
    {
      id: 'terrarium-table-rain-tap',
      x: 360,
      y: 165,
      label: 'Tap!'
    },
    {
      id: 'terrarium-table-moss-soft',
      x: 265,
      y: 510,
      label: 'Soft!'
    },
    {
      id: 'terrarium-table-jar-glow',
      x: 580,
      y: 460,
      label: 'Glow!'
    }
  ],
  previousLevelId: 'firefly-candle-window'
};
