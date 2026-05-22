export const paintedPebblePatio = {
  id: 'painted-pebble-patio',
  title: 'Painted Pebble Patio',
  saveKey: 'whimsy-hollow:painted-pebble-patio',
  bonusSaveKey: 'whimsy-hollow:painted-pebble-patio:bonus',
  bonusLabel: 'Pebbles',
  bonusFoundText: 'Pebble!',
  background: {
    key: 'paintedPebblePatioBackground',
    path: 'assets/backgrounds/painted_pebble_patio.webp'
  },
  objects: [
    {
      id: 'flower-painted-pebble',
      name: 'Flower Pebble',
      requester: 'Milo Stonebrush',
      clue: 'A flower-painted pebble rests on the center tray.',
      key: 'object-painted-pebble-patio-flower-pebble',
      asset: 'assets/objects/painted_pebble_patio_flower_pebble.png',
      x: 710,
      y: 505,
      scale: 0.22
    },
    {
      id: 'blue-paint-pot',
      name: 'Blue Paint',
      requester: 'Milo Stonebrush',
      clue: 'A blue paint pot sits near the brush cup.',
      key: 'object-painted-pebble-patio-blue-paint-pot',
      asset: 'assets/objects/painted_pebble_patio_blue_paint_pot.png',
      x: 830,
      y: 410,
      scale: 0.22
    },
    {
      id: 'round-paintbrush',
      name: 'Paintbrush',
      requester: 'Milo Stonebrush',
      clue: 'A round paintbrush leans by the right shelf.',
      key: 'object-painted-pebble-patio-round-paintbrush',
      asset: 'assets/objects/painted_pebble_patio_round_paintbrush.png',
      x: 1130,
      y: 300,
      scale: 0.22
    },
    {
      id: 'leaf-stencil-card',
      name: 'Leaf Stencil',
      requester: 'Milo Stonebrush',
      clue: 'A leaf stencil card hangs beside the patio post.',
      key: 'object-painted-pebble-patio-leaf-stencil',
      asset: 'assets/objects/painted_pebble_patio_leaf_stencil.png',
      x: 925,
      y: 235,
      scale: 0.21
    },
    {
      id: 'ceramic-water-cup',
      name: 'Water Cup',
      requester: 'Milo Stonebrush',
      clue: 'A ceramic water cup waits near the paint cloth.',
      key: 'object-painted-pebble-patio-water-cup',
      asset: 'assets/objects/painted_pebble_patio_water_cup.png',
      x: 975,
      y: 570,
      scale: 0.22
    },
    {
      id: 'folded-paint-cloth',
      name: 'Paint Cloth',
      requester: 'Milo Stonebrush',
      clue: 'A folded paint cloth lies on the front table corner.',
      key: 'object-painted-pebble-patio-paint-cloth',
      asset: 'assets/objects/painted_pebble_patio_paint_cloth.png',
      x: 915,
      y: 650,
      scale: 0.22
    },
    {
      id: 'wooden-drying-tray',
      name: 'Drying Tray',
      requester: 'Milo Stonebrush',
      clue: 'A wooden drying tray is tucked near the pebble box.',
      key: 'object-painted-pebble-patio-drying-tray',
      asset: 'assets/objects/painted_pebble_patio_drying_tray.png',
      x: 1050,
      y: 515,
      scale: 0.21
    },
    {
      id: 'terracotta-paint-jar',
      name: 'Paint Jar',
      requester: 'Milo Stonebrush',
      clue: 'A terracotta paint jar sits on the blue shelf.',
      key: 'object-painted-pebble-patio-terracotta-paint-jar',
      asset: 'assets/objects/painted_pebble_patio_terracotta_paint_jar.png',
      x: 1190,
      y: 430,
      scale: 0.22
    },
    {
      id: 'ribbon-tied-apron',
      name: 'Apron',
      requester: 'Milo Stonebrush',
      clue: 'A ribbon-tied apron hangs over the chair on the right.',
      key: 'object-painted-pebble-patio-apron',
      asset: 'assets/objects/painted_pebble_patio_apron.png',
      x: 1110,
      y: 620,
      scale: 0.22
    },
    {
      id: 'blue-chalk-pencil',
      name: 'Chalk Pencil',
      requester: 'Milo Stonebrush',
      clue: 'A blue chalk pencil rests near the palette tray.',
      key: 'object-painted-pebble-patio-chalk-pencil',
      asset: 'assets/objects/painted_pebble_patio_chalk_pencil.png',
      x: 760,
      y: 620,
      scale: 0.22
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-pebble-1',
      name: 'Golden Pebble',
      key: 'bonus-painted-pebble-patio-pebble-1',
      asset: 'assets/bonus/painted_pebble_patio_golden_pebble_01.png',
      x: 410,
      y: 520,
      scale: 0.16
    },
    {
      id: 'golden-pebble-2',
      name: 'Golden Pebble',
      key: 'bonus-painted-pebble-patio-pebble-2',
      asset: 'assets/bonus/painted_pebble_patio_golden_pebble_02.png',
      x: 640,
      y: 440,
      scale: 0.16
    },
    {
      id: 'golden-pebble-3',
      name: 'Golden Pebble',
      key: 'bonus-painted-pebble-patio-pebble-3',
      asset: 'assets/bonus/painted_pebble_patio_golden_pebble_03.png',
      x: 1160,
      y: 165,
      scale: 0.17
    }
  ],
  surprises: [
    {
      id: 'pebble-patio-lantern-glow',
      x: 185,
      y: 155,
      label: 'Glow!'
    },
    {
      id: 'pebble-patio-garden-breeze',
      x: 620,
      y: 205,
      label: 'Breeze!'
    },
    {
      id: 'pebble-patio-paint-spark',
      x: 860,
      y: 570,
      label: 'Paint!'
    }
  ],
  previousLevelId: 'sunlit-seed-library'
};
