export const snowglobePackingTable = {
  id: 'snowglobe-packing-table',
  title: 'Snowglobe Packing Table',
  saveKey: 'whimsy-hollow:snowglobe-packing-table',
  bonusSaveKey: 'whimsy-hollow:snowglobe-packing-table:bonus',
  bonusLabel: 'Snowflakes',
  bonusFoundText: 'Snowflake!',
  background: {
    key: 'snowglobePackingTableBackground',
    path: 'assets/backgrounds/snowglobe_packing_table.webp'
  },
  objects: [
    {
      id: 'tiny-snowglobe',
      name: 'Tiny Snowglobe',
      requester: 'Elsie Snowcap',
      clue: 'A tiny snowglobe rests near the left side of the packing table.',
      key: 'object-snowglobe-packing-table-tiny-snowglobe',
      asset: 'assets/objects/snowglobe_packing_tiny_snowglobe.png',
      x: 470,
      y: 355,
      scale: 0.14
    },
    {
      id: 'velvet-globe-base',
      name: 'Velvet Base',
      requester: 'Elsie Snowcap',
      clue: 'A blue velvet base sits beneath the row of finished globes.',
      key: 'object-snowglobe-packing-table-velvet-globe-base',
      asset: 'assets/objects/snowglobe_packing_velvet_base.png',
      x: 665,
      y: 400,
      scale: 0.14
    },
    {
      id: 'paper-snowflake',
      name: 'Paper Snowflake',
      requester: 'Elsie Snowcap',
      clue: 'A paper snowflake is tucked near the sunny winter window.',
      key: 'object-snowglobe-packing-table-paper-snowflake',
      asset: 'assets/objects/snowglobe_packing_paper_snowflake.png',
      x: 300,
      y: 210,
      scale: 0.13
    },
    {
      id: 'brass-winding-key',
      name: 'Winding Key',
      requester: 'Elsie Snowcap',
      clue: 'A brass winding key waits beside the wrapping ribbon on the right.',
      key: 'object-snowglobe-packing-table-brass-winding-key',
      asset: 'assets/objects/snowglobe_packing_brass_key.png',
      x: 1010,
      y: 515,
      scale: 0.14
    },
    {
      id: 'blue-velvet-ribbon',
      name: 'Blue Ribbon',
      requester: 'Elsie Snowcap',
      clue: 'A blue velvet ribbon rests near the large wrapped box.',
      key: 'object-snowglobe-packing-table-blue-velvet-ribbon',
      asset: 'assets/objects/snowglobe_packing_blue_ribbon.png',
      x: 1130,
      y: 620,
      scale: 0.14
    },
    {
      id: 'miniature-pine-tree',
      name: 'Mini Pine Tree',
      requester: 'Elsie Snowcap',
      clue: 'A miniature pine tree stands by the left window ledge.',
      key: 'object-snowglobe-packing-table-miniature-pine-tree',
      asset: 'assets/objects/snowglobe_packing_mini_pine_tree.png',
      x: 210,
      y: 245,
      scale: 0.14
    },
    {
      id: 'glass-dome',
      name: 'Glass Dome',
      requester: 'Elsie Snowcap',
      clue: 'A clear glass dome sits on the upper right wrapping shelf.',
      key: 'object-snowglobe-packing-table-glass-dome',
      asset: 'assets/objects/snowglobe_packing_glass_dome.png',
      x: 1000,
      y: 285,
      scale: 0.13
    },
    {
      id: 'star-confetti-jar',
      name: 'Star Jar',
      requester: 'Elsie Snowcap',
      clue: 'A star confetti jar waits near the middle of the packing table.',
      key: 'object-snowglobe-packing-table-star-confetti-jar',
      asset: 'assets/objects/snowglobe_packing_star_confetti_jar.png',
      x: 640,
      y: 455,
      scale: 0.14
    },
    {
      id: 'polishing-cloth',
      name: 'Polishing Cloth',
      requester: 'Elsie Snowcap',
      clue: 'A soft polishing cloth drapes over the front edge of the table.',
      key: 'object-snowglobe-packing-table-polishing-cloth',
      asset: 'assets/objects/snowglobe_packing_polishing_cloth.png',
      x: 535,
      y: 520,
      scale: 0.14
    },
    {
      id: 'kraft-gift-box',
      name: 'Gift Box',
      requester: 'Elsie Snowcap',
      clue: 'A small kraft gift box is stacked near the lower left packages.',
      key: 'object-snowglobe-packing-table-kraft-gift-box',
      asset: 'assets/objects/snowglobe_packing_gift_box.png',
      x: 250,
      y: 585,
      scale: 0.13
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-snowflake-1',
      name: 'Golden Snowflake',
      key: 'bonus-snowglobe-packing-table-snowflake-1',
      asset: 'assets/bonus/snowglobe_packing_golden_snowflake_01.png',
      x: 225,
      y: 160,
      scale: 0.08
    },
    {
      id: 'golden-snowflake-2',
      name: 'Golden Snowflake',
      key: 'bonus-snowglobe-packing-table-snowflake-2',
      asset: 'assets/bonus/snowglobe_packing_golden_snowflake_02.png',
      x: 735,
      y: 165,
      scale: 0.08
    },
    {
      id: 'golden-snowflake-3',
      name: 'Golden Snowflake',
      key: 'bonus-snowglobe-packing-table-snowflake-3',
      asset: 'assets/bonus/snowglobe_packing_golden_snowflake_03.png',
      x: 1160,
      y: 170,
      scale: 0.08
    }
  ],
  surprises: [
    {
      id: 'snowglobe-packing-table-shake',
      x: 470,
      y: 355,
      label: 'Shake!'
    },
    {
      id: 'snowglobe-packing-table-sparkle',
      x: 640,
      y: 455,
      label: 'Sparkle!'
    },
    {
      id: 'snowglobe-packing-table-wrap',
      x: 1130,
      y: 620,
      label: 'Wrap!'
    }
  ],
  previousLevelId: 'copper-weather-vane-workbench'
};
