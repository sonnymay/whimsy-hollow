export const springMeadowPicnic = {
  id: 'spring-meadow-picnic',
  title: 'Spring Meadow Picnic',
  saveKey: 'whimsy-hollow:spring-meadow-picnic',
  bonusSaveKey: 'whimsy-hollow:spring-meadow-picnic:bonus',
  bonusLabel: 'Butterflies',
  bonusFoundText: 'Butterfly!',
  background: {
    key: 'springMeadowPicnicBackground',
    path: 'assets/backgrounds/spring_meadow_picnic.webp'
  },
  objects: [
    {
      id: 'wicker-picnic-basket',
      name: 'Basket',
      requester: 'Meadow Bea',
      clue: 'A picnic basket sits near the flower clumps.',
      key: 'object-wicker-picnic-basket',
      asset: 'assets/objects/picnic_basket.png',
      x: 1038,
      y: 380,
      scale: 0.13
    },
    {
      id: 'strawberry-jam',
      name: 'Jam',
      requester: 'Meadow Bea',
      clue: 'Strawberry jam waits by the picnic treats.',
      key: 'object-strawberry-jam',
      asset: 'assets/objects/picnic_strawberry_jam.png',
      x: 782,
      y: 530,
      scale: 0.13
    },
    {
      id: 'lemonade-cup',
      name: 'Lemonade',
      requester: 'Meadow Bea',
      clue: 'A lemonade cup shines near the crate.',
      key: 'object-lemonade-cup',
      asset: 'assets/objects/picnic_lemonade_cup.png',
      x: 820,
      y: 338,
      scale: 0.13
    },
    {
      id: 'daisy-crown',
      name: 'Daisies',
      requester: 'Meadow Bea',
      clue: 'A daisy crown hides among the flowers.',
      key: 'object-daisy-crown',
      asset: 'assets/objects/picnic_daisy_crown.png',
      x: 462,
      y: 462,
      scale: 0.13
    },
    {
      id: 'butterfly-net',
      name: 'Net',
      requester: 'Meadow Bea',
      clue: 'A blue net rests near the picnic basket.',
      key: 'object-butterfly-net',
      asset: 'assets/objects/picnic_butterfly_net.png',
      x: 1116,
      y: 294,
      scale: 0.13
    },
    {
      id: 'apple-slice',
      name: 'Apple',
      requester: 'Meadow Bea',
      clue: 'An apple slice is tucked by the blanket edge.',
      key: 'object-apple-slice',
      asset: 'assets/objects/picnic_apple_slice.png',
      x: 570,
      y: 600,
      scale: 0.12
    },
    {
      id: 'gingham-napkin',
      name: 'Napkin',
      requester: 'Meadow Bea',
      clue: 'A folded napkin lies near the sandwiches.',
      key: 'object-gingham-napkin',
      asset: 'assets/objects/picnic_gingham_napkin.png',
      x: 728,
      y: 618,
      scale: 0.13
    },
    {
      id: 'honey-jar',
      name: 'Honey',
      requester: 'Meadow Bea',
      clue: 'A honey jar glows beside the flowers.',
      key: 'object-honey-jar',
      asset: 'assets/objects/picnic_honey_jar.png',
      x: 322,
      y: 436,
      scale: 0.13
    },
    {
      id: 'wooden-spoon',
      name: 'Spoon',
      requester: 'Meadow Bea',
      clue: 'A wooden spoon rests near the plate.',
      key: 'object-wooden-spoon',
      asset: 'assets/objects/picnic_wooden_spoon.png',
      x: 892,
      y: 612,
      scale: 0.13
    },
    {
      id: 'flower-plate',
      name: 'Plate',
      requester: 'Meadow Bea',
      clue: 'A flower plate waits inside the basket.',
      key: 'object-flower-plate',
      asset: 'assets/objects/picnic_flower_plate.png',
      x: 1050,
      y: 426,
      scale: 0.13
    }
  ],
  bonusEnvelopes: [
    {
      id: 'butterfly-1',
      name: 'Yellow Butterfly',
      key: 'bonus-butterfly-1',
      asset: 'assets/bonus/butterfly_01.png',
      x: 272,
      y: 270,
      scale: 0.12
    },
    {
      id: 'butterfly-2',
      name: 'Blue Butterfly',
      key: 'bonus-butterfly-2',
      asset: 'assets/bonus/butterfly_02.png',
      x: 674,
      y: 254,
      scale: 0.12
    },
    {
      id: 'butterfly-3',
      name: 'Pink Butterfly',
      key: 'bonus-butterfly-3',
      asset: 'assets/bonus/butterfly_03.png',
      x: 1152,
      y: 512,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'picnic-lemonade-sparkle',
      x: 824,
      y: 318,
      label: 'Sweet!'
    },
    {
      id: 'picnic-flowers-sway',
      x: 430,
      y: 408,
      label: 'Bloom!'
    },
    {
      id: 'picnic-stream-breeze',
      x: 1118,
      y: 208,
      label: 'Breeze!'
    }
  ],
  previousLevelId: 'seaside-lighthouse'
};
