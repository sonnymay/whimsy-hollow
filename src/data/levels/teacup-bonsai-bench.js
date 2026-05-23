export const teacupBonsaiBench = {
  id: 'teacup-bonsai-bench',
  title: 'Teacup Bonsai Bench',
  saveKey: 'whimsy-hollow:teacup-bonsai-bench',
  bonusSaveKey: 'whimsy-hollow:teacup-bonsai-bench:bonus',
  bonusLabel: 'Moss Stars',
  bonusFoundText: 'Moss star!',
  background: {
    key: 'teacupBonsaiBenchBackground',
    path: 'assets/backgrounds/teacup_bonsai_bench.webp'
  },
  objects: [
    {
      id: 'bonsai-pruning-snips',
      name: 'Bonsai Snips',
      requester: 'Mina Moss',
      clue: 'Tiny pruning snips rest on the sunny bonsai bench.',
      key: 'object-teacup-bonsai-bench-bonsai-snips',
      asset: 'assets/objects/teacup_bonsai_bench_bonsai_snips.png',
      x: 575,
      y: 455,
      scale: 0.18
    },
    {
      id: 'porcelain-teacup-planter',
      name: 'Teacup Planter',
      requester: 'Mina Moss',
      clue: 'A sprout grows from a porcelain teacup near the window.',
      key: 'object-teacup-bonsai-bench-teacup-planter',
      asset: 'assets/objects/teacup_bonsai_bench_teacup_planter.png',
      x: 455,
      y: 365,
      scale: 0.18
    },
    {
      id: 'mini-wooden-rake',
      name: 'Mini Rake',
      requester: 'Mina Moss',
      clue: 'A miniature wooden rake lies among the moss trays.',
      key: 'object-teacup-bonsai-bench-mini-rake',
      asset: 'assets/objects/teacup_bonsai_bench_mini_wooden_rake.png',
      x: 725,
      y: 510,
      scale: 0.18
    },
    {
      id: 'blue-pebble-jar',
      name: 'Pebble Jar',
      requester: 'Mina Moss',
      clue: 'A blue pebble jar shines on the right shelf.',
      key: 'object-teacup-bonsai-bench-pebble-jar',
      asset: 'assets/objects/teacup_bonsai_bench_blue_pebble_jar.png',
      x: 1060,
      y: 345,
      scale: 0.18
    },
    {
      id: 'bamboo-potting-scoop',
      name: 'Bamboo Scoop',
      requester: 'Mina Moss',
      clue: 'A bamboo scoop is tucked beside the tool cup.',
      key: 'object-teacup-bonsai-bench-bamboo-scoop',
      asset: 'assets/objects/teacup_bonsai_bench_bamboo_scoop.png',
      x: 1140,
      y: 475,
      scale: 0.18
    },
    {
      id: 'soft-moss-brush',
      name: 'Moss Brush',
      requester: 'Mina Moss',
      clue: 'A soft moss brush hides near the left plant shelf.',
      key: 'object-teacup-bonsai-bench-moss-brush',
      asset: 'assets/objects/teacup_bonsai_bench_moss_brush.png',
      x: 275,
      y: 515,
      scale: 0.18
    },
    {
      id: 'ceramic-plant-label',
      name: 'Plant Label',
      requester: 'Mina Moss',
      clue: 'A blank ceramic plant label leans by the left cubbies.',
      key: 'object-teacup-bonsai-bench-plant-label',
      asset: 'assets/objects/teacup_bonsai_bench_plant_label_stake.png',
      x: 235,
      y: 305,
      scale: 0.18
    },
    {
      id: 'copper-watering-bulb',
      name: 'Watering Bulb',
      requester: 'Mina Moss',
      clue: 'A copper watering bulb glows near the bench drawers.',
      key: 'object-teacup-bonsai-bench-watering-bulb',
      asset: 'assets/objects/teacup_bonsai_bench_copper_watering_bulb.png',
      x: 1110,
      y: 585,
      scale: 0.18
    },
    {
      id: 'folded-floral-cloth',
      name: 'Floral Cloth',
      requester: 'Mina Moss',
      clue: 'A folded floral cloth sits along the front-right bench.',
      key: 'object-teacup-bonsai-bench-floral-cloth',
      asset: 'assets/objects/teacup_bonsai_bench_folded_floral_cloth.png',
      x: 920,
      y: 585,
      scale: 0.18
    },
    {
      id: 'shallow-pebble-tray',
      name: 'Pebble Tray',
      requester: 'Mina Moss',
      clue: 'A shallow pebble tray rests beside the right-side teacups.',
      key: 'object-teacup-bonsai-bench-pebble-tray',
      asset: 'assets/objects/teacup_bonsai_bench_shallow_pebble_tray.png',
      x: 990,
      y: 500,
      scale: 0.18
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-moss-star-1',
      name: 'Golden Moss Star',
      key: 'bonus-teacup-bonsai-bench-star-1',
      asset: 'assets/bonus/teacup_bonsai_bench_golden_moss_star_01.png',
      x: 250,
      y: 175,
      scale: 0.12
    },
    {
      id: 'golden-moss-star-2',
      name: 'Golden Moss Star',
      key: 'bonus-teacup-bonsai-bench-star-2',
      asset: 'assets/bonus/teacup_bonsai_bench_golden_moss_star_02.png',
      x: 695,
      y: 155,
      scale: 0.12
    },
    {
      id: 'golden-moss-star-3',
      name: 'Golden Moss Star',
      key: 'bonus-teacup-bonsai-bench-star-3',
      asset: 'assets/bonus/teacup_bonsai_bench_golden_moss_star_03.png',
      x: 1160,
      y: 185,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'teacup-bonsai-leaf-rustle',
      x: 460,
      y: 330,
      label: 'Rustle!'
    },
    {
      id: 'teacup-bonsai-pebble-click',
      x: 965,
      y: 490,
      label: 'Click!'
    },
    {
      id: 'teacup-bonsai-window-glow',
      x: 615,
      y: 170,
      label: 'Glow!'
    }
  ],
  previousLevelId: 'dandelion-wind-chime-porch'
};
