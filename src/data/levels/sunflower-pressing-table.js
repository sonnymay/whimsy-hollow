export const sunflowerPressingTable = {
  id: 'sunflower-pressing-table',
  title: 'Sunflower Pressing Table',
  saveKey: 'whimsy-hollow:sunflower-pressing-table',
  bonusSaveKey: 'whimsy-hollow:sunflower-pressing-table:bonus',
  bonusLabel: 'Golden Petals',
  bonusFoundText: 'Golden petal!',
  background: {
    key: 'sunflowerPressingTableBackground',
    path: 'assets/backgrounds/sunflower_pressing_table.webp'
  },
  objects: [
    {
      id: 'wooden-flower-press',
      name: 'Flower Press',
      requester: 'Sunny Stems',
      clue: 'A wooden flower press sits in the middle of the worktable.',
      key: 'object-sunflower-pressing-table-flower-press',
      asset: 'assets/objects/sunflower_pressing_table_wooden_flower_press.png',
      x: 710,
      y: 360,
      scale: 0.2
    },
    {
      id: 'sunflower-seed-packet',
      name: 'Seed Packet',
      requester: 'Sunny Stems',
      clue: 'A sunflower seed packet peeks from the left basket.',
      key: 'object-sunflower-pressing-table-seed-packet',
      asset: 'assets/objects/sunflower_pressing_table_seed_packet.png',
      x: 360,
      y: 610,
      scale: 0.19
    },
    {
      id: 'brass-binder-clip',
      name: 'Binder Clip',
      requester: 'Sunny Stems',
      clue: 'A brass binder clip holds papers near the drying rack.',
      key: 'object-sunflower-pressing-table-binder-clip',
      asset: 'assets/objects/sunflower_pressing_table_brass_binder_clip.png',
      x: 805,
      y: 225,
      scale: 0.19
    },
    {
      id: 'blue-petal-dish',
      name: 'Petal Dish',
      requester: 'Sunny Stems',
      clue: 'A blue petal dish rests near the front edge of the table.',
      key: 'object-sunflower-pressing-table-petal-dish',
      asset: 'assets/objects/sunflower_pressing_table_blue_petal_dish.png',
      x: 930,
      y: 575,
      scale: 0.19
    },
    {
      id: 'purple-ribbon-spool',
      name: 'Ribbon Spool',
      requester: 'Sunny Stems',
      clue: 'A purple ribbon spool sits beside the right-hand drawers.',
      key: 'object-sunflower-pressing-table-ribbon-spool',
      asset: 'assets/objects/sunflower_pressing_table_purple_ribbon_spool.png',
      x: 1055,
      y: 350,
      scale: 0.19
    },
    {
      id: 'blotting-paper-stack',
      name: 'Blotting Paper',
      requester: 'Sunny Stems',
      clue: 'A stack of blotting paper waits on the left drawer cloth.',
      key: 'object-sunflower-pressing-table-blotting-paper',
      asset: 'assets/objects/sunflower_pressing_table_blotting_paper_stack.png',
      x: 265,
      y: 475,
      scale: 0.19
    },
    {
      id: 'daisy-wax-pencil',
      name: 'Wax Pencil',
      requester: 'Sunny Stems',
      clue: 'A daisy wax pencil lies between ribbons and pressed pages.',
      key: 'object-sunflower-pressing-table-wax-pencil',
      asset: 'assets/objects/sunflower_pressing_table_daisy_wax_pencil.png',
      x: 610,
      y: 525,
      scale: 0.2
    },
    {
      id: 'flower-handled-scissors',
      name: 'Flower Scissors',
      requester: 'Sunny Stems',
      clue: 'Flower-handled scissors rest on the blue sunflower cloth.',
      key: 'object-sunflower-pressing-table-flower-scissors',
      asset: 'assets/objects/sunflower_pressing_table_flower_scissors.png',
      x: 880,
      y: 500,
      scale: 0.19
    },
    {
      id: 'wooden-plant-label',
      name: 'Plant Label',
      requester: 'Sunny Stems',
      clue: 'A wooden plant label hides among the small shelf drawers.',
      key: 'object-sunflower-pressing-table-plant-label',
      asset: 'assets/objects/sunflower_pressing_table_wooden_plant_label.png',
      x: 1100,
      y: 245,
      scale: 0.19
    },
    {
      id: 'pressed-sunflower-card',
      name: 'Sunflower Card',
      requester: 'Sunny Stems',
      clue: 'A pressed sunflower card leans against the basket of pages.',
      key: 'object-sunflower-pressing-table-sunflower-card',
      asset: 'assets/objects/sunflower_pressing_table_pressed_sunflower_card.png',
      x: 1075,
      y: 555,
      scale: 0.18
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-petal-1',
      name: 'Golden Sunflower Petal',
      key: 'bonus-sunflower-pressing-table-petal-1',
      asset: 'assets/bonus/sunflower_pressing_table_golden_petal_01.png',
      x: 240,
      y: 200,
      scale: 0.12
    },
    {
      id: 'golden-petal-2',
      name: 'Golden Sunflower Petal',
      key: 'bonus-sunflower-pressing-table-petal-2',
      asset: 'assets/bonus/sunflower_pressing_table_golden_petal_02.png',
      x: 660,
      y: 155,
      scale: 0.12
    },
    {
      id: 'golden-petal-3',
      name: 'Golden Sunflower Petal',
      key: 'bonus-sunflower-pressing-table-petal-3',
      asset: 'assets/bonus/sunflower_pressing_table_golden_petal_03.png',
      x: 1145,
      y: 175,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'sunflower-window-warmth',
      x: 430,
      y: 260,
      label: 'Warm!'
    },
    {
      id: 'sunflower-paper-flutter',
      x: 720,
      y: 285,
      label: 'Flutter!'
    },
    {
      id: 'sunflower-petal-swish',
      x: 920,
      y: 575,
      label: 'Swish!'
    }
  ],
  previousLevelId: 'cloud-loom-weaving-nook'
};
