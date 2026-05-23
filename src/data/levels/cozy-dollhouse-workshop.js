export const cozyDollhouseWorkshop = {
  id: 'cozy-dollhouse-workshop',
  title: 'Cozy Dollhouse Workshop',
  saveKey: 'whimsy-hollow:cozy-dollhouse-workshop',
  bonusSaveKey: 'whimsy-hollow:cozy-dollhouse-workshop:bonus',
  bonusLabel: 'Charms',
  bonusFoundText: 'Charm!',
  background: {
    key: 'cozyDollhouseWorkshopBackground',
    path: 'assets/backgrounds/cozy_dollhouse_workshop.webp'
  },
  objects: [
    {
      id: 'tiny-wooden-chair',
      name: 'Tiny Chair',
      requester: 'Nellie Nook',
      clue: 'A tiny wooden chair waits on the dollhouse table.',
      key: 'object-cozy-dollhouse-workshop-tiny-chair',
      asset: 'assets/objects/cozy_dollhouse_workshop_tiny_chair.png',
      x: 770,
      y: 455,
      scale: 0.2
    },
    {
      id: 'mini-blue-roof-tile',
      name: 'Blue Roof Tile',
      requester: 'Nellie Nook',
      clue: 'A blue roof tile is tucked near the upper dollhouse roof.',
      key: 'object-cozy-dollhouse-workshop-blue-roof-tile',
      asset: 'assets/objects/cozy_dollhouse_workshop_blue_roof_tile.png',
      x: 885,
      y: 210,
      scale: 0.2
    },
    {
      id: 'small-wallpaper-roll',
      name: 'Wallpaper Roll',
      requester: 'Nellie Nook',
      clue: 'A small wallpaper roll rests on the right table cloth.',
      key: 'object-cozy-dollhouse-workshop-wallpaper-roll',
      asset: 'assets/objects/cozy_dollhouse_workshop_wallpaper_roll.png',
      x: 1075,
      y: 500,
      scale: 0.2
    },
    {
      id: 'blue-paint-pot',
      name: 'Blue Paint',
      requester: 'Nellie Nook',
      clue: 'A blue paint pot sits among the little paint jars.',
      key: 'object-cozy-dollhouse-workshop-blue-paint-pot',
      asset: 'assets/objects/cozy_dollhouse_workshop_blue_paint_pot.png',
      x: 590,
      y: 430,
      scale: 0.2
    },
    {
      id: 'little-brass-doorknob',
      name: 'Brass Doorknob',
      requester: 'Nellie Nook',
      clue: 'A brass doorknob glows near the open drawer.',
      key: 'object-cozy-dollhouse-workshop-brass-doorknob',
      asset: 'assets/objects/cozy_dollhouse_workshop_brass_doorknob.png',
      x: 915,
      y: 610,
      scale: 0.2
    },
    {
      id: 'miniature-table',
      name: 'Mini Table',
      requester: 'Nellie Nook',
      clue: 'A miniature table is placed inside the dollhouse room.',
      key: 'object-cozy-dollhouse-workshop-mini-table',
      asset: 'assets/objects/cozy_dollhouse_workshop_mini_table.png',
      x: 920,
      y: 405,
      scale: 0.2
    },
    {
      id: 'dollhouse-window-frame',
      name: 'Window Frame',
      requester: 'Nellie Nook',
      clue: 'A dollhouse window frame leans by the lower shelf.',
      key: 'object-cozy-dollhouse-workshop-window-frame',
      asset: 'assets/objects/cozy_dollhouse_workshop_window_frame.png',
      x: 380,
      y: 595,
      scale: 0.2
    },
    {
      id: 'tiny-ladder',
      name: 'Tiny Ladder',
      requester: 'Nellie Nook',
      clue: 'A tiny ladder rests near the right-hand shelf.',
      key: 'object-cozy-dollhouse-workshop-tiny-ladder',
      asset: 'assets/objects/cozy_dollhouse_workshop_tiny_ladder.png',
      x: 1135,
      y: 345,
      scale: 0.2
    },
    {
      id: 'fabric-rug-sample',
      name: 'Rug Sample',
      requester: 'Nellie Nook',
      clue: 'A fabric rug sample is folded near the left basket.',
      key: 'object-cozy-dollhouse-workshop-fabric-rug-sample',
      asset: 'assets/objects/cozy_dollhouse_workshop_fabric_rug_sample.png',
      x: 260,
      y: 620,
      scale: 0.2
    },
    {
      id: 'wooden-tool-caddy',
      name: 'Tool Caddy',
      requester: 'Nellie Nook',
      clue: 'A wooden tool caddy waits by the front table leg.',
      key: 'object-cozy-dollhouse-workshop-tool-caddy',
      asset: 'assets/objects/cozy_dollhouse_workshop_tool_caddy.png',
      x: 1035,
      y: 650,
      scale: 0.2
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-house-charm-1',
      name: 'Golden House Charm',
      key: 'bonus-cozy-dollhouse-workshop-house-charm-1',
      asset: 'assets/bonus/cozy_dollhouse_workshop_golden_house_charm_01.png',
      x: 250,
      y: 165,
      scale: 0.14
    },
    {
      id: 'golden-house-charm-2',
      name: 'Golden House Charm',
      key: 'bonus-cozy-dollhouse-workshop-house-charm-2',
      asset: 'assets/bonus/cozy_dollhouse_workshop_golden_house_charm_02.png',
      x: 695,
      y: 155,
      scale: 0.14
    },
    {
      id: 'golden-house-charm-3',
      name: 'Golden House Charm',
      key: 'bonus-cozy-dollhouse-workshop-house-charm-3',
      asset: 'assets/bonus/cozy_dollhouse_workshop_golden_house_charm_03.png',
      x: 1135,
      y: 150,
      scale: 0.14
    }
  ],
  surprises: [
    {
      id: 'dollhouse-workshop-lamp-glow',
      x: 640,
      y: 315,
      label: 'Glow!'
    },
    {
      id: 'dollhouse-workshop-drawer-click',
      x: 840,
      y: 610,
      label: 'Click!'
    },
    {
      id: 'dollhouse-workshop-tiny-door',
      x: 890,
      y: 390,
      label: 'Knock!'
    }
  ],
  previousLevelId: 'sunny-bead-studio'
};
