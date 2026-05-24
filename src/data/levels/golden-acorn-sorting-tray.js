export const goldenAcornSortingTray = {
  id: 'golden-acorn-sorting-tray',
  title: 'Golden Acorn Sorting Tray',
  saveKey: 'whimsy-hollow:golden-acorn-sorting-tray',
  bonusSaveKey: 'whimsy-hollow:golden-acorn-sorting-tray:bonus',
  bonusLabel: 'Oak Charms',
  bonusFoundText: 'Oak charm!',
  background: {
    key: 'goldenAcornSortingTrayBackground',
    path: 'assets/backgrounds/golden_acorn_sorting_tray.webp'
  },
  objects: [
    {
      id: 'golden-acorn',
      name: 'Golden Acorn',
      requester: 'Orla Oakwise',
      clue: 'A golden acorn gleams in the sorting tray near the table center.',
      key: 'object-golden-acorn-sorting-tray-golden-acorn',
      asset: 'assets/objects/golden_acorn_sorting_golden_acorn.png',
      x: 575,
      y: 390,
      scale: 0.14
    },
    {
      id: 'tiny-acorn-cap',
      name: 'Acorn Cap',
      requester: 'Orla Oakwise',
      clue: 'A tiny acorn cap rests beside the left window baskets.',
      key: 'object-golden-acorn-sorting-tray-tiny-acorn-cap',
      asset: 'assets/objects/golden_acorn_sorting_acorn_cap.png',
      x: 245,
      y: 505,
      scale: 0.13
    },
    {
      id: 'oak-leaf-card',
      name: 'Oak Leaf Card',
      requester: 'Orla Oakwise',
      clue: 'An oak leaf card leans near the framed leaf picture.',
      key: 'object-golden-acorn-sorting-tray-oak-leaf-card',
      asset: 'assets/objects/golden_acorn_sorting_oak_leaf_card.png',
      x: 815,
      y: 260,
      scale: 0.13
    },
    {
      id: 'mini-balance-scale',
      name: 'Balance Scale',
      requester: 'Orla Oakwise',
      clue: 'A miniature balance scale stands on the right side of the table.',
      key: 'object-golden-acorn-sorting-tray-mini-balance-scale',
      asset: 'assets/objects/golden_acorn_sorting_balance_scale.png',
      x: 940,
      y: 340,
      scale: 0.14
    },
    {
      id: 'glass-nut-jar',
      name: 'Nut Jar',
      requester: 'Orla Oakwise',
      clue: 'A glass nut jar waits beside the blue enamel bowl.',
      key: 'object-golden-acorn-sorting-tray-glass-nut-jar',
      asset: 'assets/objects/golden_acorn_sorting_nut_jar.png',
      x: 1120,
      y: 430,
      scale: 0.14
    },
    {
      id: 'blue-enamel-bowl',
      name: 'Blue Bowl',
      requester: 'Orla Oakwise',
      clue: 'A blue enamel bowl is tucked into the right-hand work corner.',
      key: 'object-golden-acorn-sorting-tray-blue-enamel-bowl',
      asset: 'assets/objects/golden_acorn_sorting_blue_bowl.png',
      x: 1035,
      y: 505,
      scale: 0.15
    },
    {
      id: 'wooden-sorting-scoop',
      name: 'Sorting Scoop',
      requester: 'Orla Oakwise',
      clue: 'A wooden sorting scoop lies inside the blue enamel bowl.',
      key: 'object-golden-acorn-sorting-tray-wooden-sorting-scoop',
      asset: 'assets/objects/golden_acorn_sorting_wooden_scoop.png',
      x: 1085,
      y: 510,
      scale: 0.13
    },
    {
      id: 'green-ribbon-tag',
      name: 'Green Tag',
      requester: 'Orla Oakwise',
      clue: 'A green ribbon tag hangs near the front center table edge.',
      key: 'object-golden-acorn-sorting-tray-green-ribbon-tag',
      asset: 'assets/objects/golden_acorn_sorting_green_tag.png',
      x: 665,
      y: 505,
      scale: 0.13
    },
    {
      id: 'folded-linen-cloth',
      name: 'Linen Cloth',
      requester: 'Orla Oakwise',
      clue: 'A folded linen cloth drapes over the right side of the table.',
      key: 'object-golden-acorn-sorting-tray-folded-linen-cloth',
      asset: 'assets/objects/golden_acorn_sorting_linen_cloth.png',
      x: 875,
      y: 575,
      scale: 0.14
    },
    {
      id: 'wicker-acorn-basket',
      name: 'Acorn Basket',
      requester: 'Orla Oakwise',
      clue: 'A wicker acorn basket sits in the lower left sorting shelf.',
      key: 'object-golden-acorn-sorting-tray-wicker-acorn-basket',
      asset: 'assets/objects/golden_acorn_sorting_wicker_basket.png',
      x: 255,
      y: 610,
      scale: 0.13
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-oak-charm-1',
      name: 'Golden Oak Charm',
      key: 'bonus-golden-acorn-sorting-tray-oak-charm-1',
      asset: 'assets/bonus/golden_acorn_sorting_oak_leaf_charm_01.png',
      x: 225,
      y: 165,
      scale: 0.08
    },
    {
      id: 'golden-oak-charm-2',
      name: 'Golden Oak Charm',
      key: 'bonus-golden-acorn-sorting-tray-oak-charm-2',
      asset: 'assets/bonus/golden_acorn_sorting_oak_leaf_charm_02.png',
      x: 720,
      y: 170,
      scale: 0.08
    },
    {
      id: 'golden-oak-charm-3',
      name: 'Golden Oak Charm',
      key: 'bonus-golden-acorn-sorting-tray-oak-charm-3',
      asset: 'assets/bonus/golden_acorn_sorting_oak_leaf_charm_03.png',
      x: 1160,
      y: 175,
      scale: 0.08
    }
  ],
  surprises: [
    {
      id: 'golden-acorn-sorting-tray-clink',
      x: 940,
      y: 340,
      label: 'Clink!'
    },
    {
      id: 'golden-acorn-sorting-tray-rustle',
      x: 875,
      y: 575,
      label: 'Rustle!'
    },
    {
      id: 'golden-acorn-sorting-tray-shine',
      x: 575,
      y: 390,
      label: 'Shine!'
    }
  ],
  previousLevelId: 'snowglobe-packing-table'
};
