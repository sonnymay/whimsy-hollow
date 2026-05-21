export const snowyCabinLoft = {
  id: 'snowy-cabin-loft',
  title: 'Snowy Cabin Loft',
  saveKey: 'whimsy-hollow:snowy-cabin-loft',
  bonusSaveKey: 'whimsy-hollow:snowy-cabin-loft:bonus',
  bonusLabel: 'Snowflakes',
  bonusFoundText: 'Snowflake!',
  background: {
    key: 'snowyCabinLoftBackground',
    path: 'assets/backgrounds/snowy_cabin_loft.webp'
  },
  objects: [
    {
      id: 'red-wool-mitten',
      name: 'Mitten',
      requester: 'Auntie Rowan',
      clue: 'A red mitten rests near the cozy pillows.',
      key: 'object-red-wool-mitten',
      asset: 'assets/objects/cabin_mitten.png',
      x: 260,
      y: 278,
      scale: 0.14
    },
    {
      id: 'hot-cocoa-mug',
      name: 'Cocoa',
      requester: 'Auntie Rowan',
      clue: 'A warm cocoa mug waits near the stool.',
      key: 'object-hot-cocoa-mug',
      asset: 'assets/objects/cabin_cocoa_mug.png',
      x: 800,
      y: 468,
      scale: 0.14
    },
    {
      id: 'tiny-pinecone',
      name: 'Pinecone',
      requester: 'Auntie Rowan',
      clue: 'A tiny pinecone sits close to the basket.',
      key: 'object-tiny-pinecone',
      asset: 'assets/objects/cabin_pinecone.png',
      x: 962,
      y: 510,
      scale: 0.13
    },
    {
      id: 'fireplace-key',
      name: 'Key',
      requester: 'Auntie Rowan',
      clue: 'A brass key is tucked by the warm stove.',
      key: 'object-fireplace-key',
      asset: 'assets/objects/cabin_fireplace_key.png',
      x: 1070,
      y: 412,
      scale: 0.13
    },
    {
      id: 'snowflake-sock',
      name: 'Sock',
      requester: 'Auntie Rowan',
      clue: 'A snowflake sock hangs near the mantel.',
      key: 'object-snowflake-sock',
      asset: 'assets/objects/cabin_snowflake_sock.png',
      x: 1120,
      y: 246,
      scale: 0.14
    },
    {
      id: 'sled-ornament',
      name: 'Sled',
      requester: 'Auntie Rowan',
      clue: 'A little sled ornament rests by the beams.',
      key: 'object-sled-ornament',
      asset: 'assets/objects/cabin_sled_ornament.png',
      x: 404,
      y: 186,
      scale: 0.13
    },
    {
      id: 'blue-yarn-ball',
      name: 'Yarn',
      requester: 'Auntie Rowan',
      clue: 'Blue yarn rolls near the soft rug.',
      key: 'object-blue-yarn-ball',
      asset: 'assets/objects/cabin_yarn_ball.png',
      x: 580,
      y: 552,
      scale: 0.13
    },
    {
      id: 'plaid-scarf',
      name: 'Scarf',
      requester: 'Auntie Rowan',
      clue: 'A folded scarf is tucked by the books.',
      key: 'object-plaid-scarf',
      asset: 'assets/objects/cabin_plaid_scarf.png',
      x: 712,
      y: 328,
      scale: 0.14
    },
    {
      id: 'cinnamon-bundle',
      name: 'Cinnamon',
      requester: 'Auntie Rowan',
      clue: 'Cinnamon sticks hide near the floor books.',
      key: 'object-cinnamon-bundle',
      asset: 'assets/objects/cabin_cinnamon_bundle.png',
      x: 1030,
      y: 602,
      scale: 0.13
    },
    {
      id: 'star-candle',
      name: 'Candle',
      requester: 'Auntie Rowan',
      clue: 'A star candle glows by the frosty window.',
      key: 'object-star-candle',
      asset: 'assets/objects/cabin_star_candle.png',
      x: 896,
      y: 240,
      scale: 0.13
    }
  ],
  bonusEnvelopes: [
    {
      id: 'snowflake-1',
      name: 'Blue Snowflake',
      key: 'bonus-snowflake-1',
      asset: 'assets/bonus/snowflake_01.png',
      x: 340,
      y: 138,
      scale: 0.12
    },
    {
      id: 'snowflake-2',
      name: 'Warm Snowflake',
      key: 'bonus-snowflake-2',
      asset: 'assets/bonus/snowflake_02.png',
      x: 704,
      y: 184,
      scale: 0.12
    },
    {
      id: 'snowflake-3',
      name: 'Lavender Snowflake',
      key: 'bonus-snowflake-3',
      asset: 'assets/bonus/snowflake_03.png',
      x: 1008,
      y: 154,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'cabin-fireplace-pop',
      x: 1048,
      y: 456,
      label: 'Warm!'
    },
    {
      id: 'cabin-window-snow',
      x: 784,
      y: 192,
      label: 'Snow!'
    },
    {
      id: 'cabin-blanket-soft',
      x: 408,
      y: 404,
      label: 'Cozy!'
    }
  ],
  previousLevelId: 'forest-bookshop'
};
