export const autumnAppleOrchard = {
  id: 'autumn-apple-orchard',
  title: 'Autumn Apple Orchard',
  saveKey: 'whimsy-hollow:autumn-apple-orchard',
  bonusSaveKey: 'whimsy-hollow:autumn-apple-orchard:bonus',
  bonusLabel: 'Leaves',
  bonusFoundText: 'Leaf!',
  background: {
    key: 'autumnAppleOrchardBackground',
    path: 'assets/backgrounds/autumn_apple_orchard.webp'
  },
  objects: [
    {
      id: 'red-apple',
      name: 'Apple',
      requester: 'Orchard Mae',
      clue: 'A shiny apple waits near the cider stand.',
      key: 'object-red-apple',
      asset: 'assets/objects/orchard_red_apple.png',
      x: 870,
      y: 382,
      scale: 0.13
    },
    {
      id: 'cider-bottle',
      name: 'Cider',
      requester: 'Orchard Mae',
      clue: 'A cider bottle glows on the wooden shelf.',
      key: 'object-cider-bottle',
      asset: 'assets/objects/orchard_cider_bottle.png',
      x: 770,
      y: 250,
      scale: 0.13
    },
    {
      id: 'apple-crate',
      name: 'Crate',
      requester: 'Orchard Mae',
      clue: 'An apple crate sits beside the warm blanket.',
      key: 'object-apple-crate',
      asset: 'assets/objects/orchard_apple_crate.png',
      x: 438,
      y: 522,
      scale: 0.13
    },
    {
      id: 'brass-orchard-lantern',
      name: 'Lantern',
      requester: 'Orchard Mae',
      clue: 'A brass lantern rests near the leaf pile.',
      key: 'object-brass-orchard-lantern',
      asset: 'assets/objects/orchard_brass_lantern.png',
      x: 282,
      y: 612,
      scale: 0.13
    },
    {
      id: 'plaid-thermos',
      name: 'Thermos',
      requester: 'Orchard Mae',
      clue: 'A plaid thermos is tucked by the stand.',
      key: 'object-plaid-thermos',
      asset: 'assets/objects/orchard_plaid_thermos.png',
      x: 956,
      y: 270,
      scale: 0.13
    },
    {
      id: 'acorn-cap',
      name: 'Acorn',
      requester: 'Orchard Mae',
      clue: 'An acorn cap hides by the pumpkin patch.',
      key: 'object-acorn-cap',
      asset: 'assets/objects/orchard_acorn_cap.png',
      x: 220,
      y: 568,
      scale: 0.12
    },
    {
      id: 'mini-rake',
      name: 'Rake',
      requester: 'Orchard Mae',
      clue: 'A little rake leans near the cider press.',
      key: 'object-mini-rake',
      asset: 'assets/objects/orchard_mini_rake.png',
      x: 622,
      y: 322,
      scale: 0.13
    },
    {
      id: 'pumpkin-cookie',
      name: 'Cookie',
      requester: 'Orchard Mae',
      clue: 'A pumpkin cookie sits beside the blanket.',
      key: 'object-pumpkin-cookie',
      asset: 'assets/objects/orchard_pumpkin_cookie.png',
      x: 642,
      y: 638,
      scale: 0.13
    },
    {
      id: 'harvest-ribbon',
      name: 'Ribbon',
      requester: 'Orchard Mae',
      clue: 'A harvest ribbon rests near the apple baskets.',
      key: 'object-harvest-ribbon',
      asset: 'assets/objects/orchard_harvest_ribbon.png',
      x: 1058,
      y: 520,
      scale: 0.13
    },
    {
      id: 'copper-watering-can',
      name: 'Can',
      requester: 'Orchard Mae',
      clue: 'A copper can sits close to the flowers.',
      key: 'object-copper-watering-can',
      asset: 'assets/objects/orchard_copper_watering_can.png',
      x: 1144,
      y: 390,
      scale: 0.13
    }
  ],
  bonusEnvelopes: [
    {
      id: 'autumn-leaf-1',
      name: 'Golden Leaf',
      key: 'bonus-autumn-leaf-1',
      asset: 'assets/bonus/autumn_leaf_01.png',
      x: 330,
      y: 240,
      scale: 0.12
    },
    {
      id: 'autumn-leaf-2',
      name: 'Red Leaf',
      key: 'bonus-autumn-leaf-2',
      asset: 'assets/bonus/autumn_leaf_02.png',
      x: 784,
      y: 154,
      scale: 0.12
    },
    {
      id: 'autumn-leaf-3',
      name: 'Orange Leaf',
      key: 'bonus-autumn-leaf-3',
      asset: 'assets/bonus/autumn_leaf_03.png',
      x: 1158,
      y: 172,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'orchard-lantern-warm',
      x: 850,
      y: 202,
      label: 'Glow!'
    },
    {
      id: 'orchard-leaves-rustle',
      x: 614,
      y: 578,
      label: 'Rustle!'
    },
    {
      id: 'orchard-cider-sweet',
      x: 762,
      y: 290,
      label: 'Sweet!'
    }
  ],
  previousLevelId: 'spring-meadow-picnic'
};
