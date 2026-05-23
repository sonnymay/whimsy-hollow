export const mapleCocoaBreakfastNook = {
  id: 'maple-cocoa-breakfast-nook',
  title: 'Maple Cocoa Breakfast Nook',
  saveKey: 'whimsy-hollow:maple-cocoa-breakfast-nook',
  bonusSaveKey: 'whimsy-hollow:maple-cocoa-breakfast-nook:bonus',
  bonusLabel: 'Golden Leaves',
  bonusFoundText: 'Golden leaf!',
  background: {
    key: 'mapleCocoaBreakfastNookBackground',
    path: 'assets/backgrounds/maple_cocoa_breakfast_nook.webp'
  },
  objects: [
    {
      id: 'maple-syrup-bottle',
      name: 'Syrup Bottle',
      requester: 'Aunt Maple',
      clue: 'A maple-shaped syrup bottle glows near the breakfast table.',
      key: 'object-maple-cocoa-breakfast-nook-syrup-bottle',
      asset: 'assets/objects/maple_cocoa_breakfast_nook_syrup_bottle.png',
      x: 390,
      y: 445,
      scale: 0.18
    },
    {
      id: 'leaf-cocoa-mug',
      name: 'Cocoa Mug',
      requester: 'Aunt Maple',
      clue: 'A warm cocoa mug waits on the front table.',
      key: 'object-maple-cocoa-breakfast-nook-cocoa-mug',
      asset: 'assets/objects/maple_cocoa_breakfast_nook_cocoa_mug.png',
      x: 650,
      y: 515,
      scale: 0.18
    },
    {
      id: 'tiny-copper-whisk',
      name: 'Copper Whisk',
      requester: 'Aunt Maple',
      clue: 'A tiny copper whisk hangs with the right-side kitchen tools.',
      key: 'object-maple-cocoa-breakfast-nook-copper-whisk',
      asset: 'assets/objects/maple_cocoa_breakfast_nook_copper_whisk.png',
      x: 1010,
      y: 195,
      scale: 0.18
    },
    {
      id: 'folded-plaid-napkin',
      name: 'Plaid Napkin',
      requester: 'Aunt Maple',
      clue: 'A folded plaid napkin rests beside the green cabinets.',
      key: 'object-maple-cocoa-breakfast-nook-plaid-napkin',
      asset: 'assets/objects/maple_cocoa_breakfast_nook_plaid_napkin.png',
      x: 975,
      y: 425,
      scale: 0.18
    },
    {
      id: 'buttered-pancake-stack',
      name: 'Pancake Stack',
      requester: 'Aunt Maple',
      clue: 'A buttered pancake stack sits near the sunny window.',
      key: 'object-maple-cocoa-breakfast-nook-pancake-stack',
      asset: 'assets/objects/maple_cocoa_breakfast_nook_pancake_stack.png',
      x: 520,
      y: 300,
      scale: 0.18
    },
    {
      id: 'cinnamon-stick-bundle',
      name: 'Cinnamon Bundle',
      requester: 'Aunt Maple',
      clue: 'A cinnamon bundle is tucked low by the blanket basket.',
      key: 'object-maple-cocoa-breakfast-nook-cinnamon-bundle',
      asset: 'assets/objects/maple_cocoa_breakfast_nook_cinnamon_bundle.png',
      x: 225,
      y: 580,
      scale: 0.17
    },
    {
      id: 'cocoa-powder-jar',
      name: 'Cocoa Jar',
      requester: 'Aunt Maple',
      clue: 'A cocoa jar hides among the right-side pantry jars.',
      key: 'object-maple-cocoa-breakfast-nook-cocoa-powder-jar',
      asset: 'assets/objects/maple_cocoa_breakfast_nook_cocoa_powder_jar.png',
      x: 1135,
      y: 360,
      scale: 0.18
    },
    {
      id: 'wooden-honey-dipper',
      name: 'Honey Dipper',
      requester: 'Aunt Maple',
      clue: 'A wooden honey dipper lies below the table edge.',
      key: 'object-maple-cocoa-breakfast-nook-honey-dipper',
      asset: 'assets/objects/maple_cocoa_breakfast_nook_honey_dipper.png',
      x: 710,
      y: 575,
      scale: 0.18
    },
    {
      id: 'flower-cream-pitcher',
      name: 'Cream Pitcher',
      requester: 'Aunt Maple',
      clue: 'A flowered cream pitcher sits near the left window plants.',
      key: 'object-maple-cocoa-breakfast-nook-cream-pitcher',
      asset: 'assets/objects/maple_cocoa_breakfast_nook_cream_pitcher.png',
      x: 315,
      y: 405,
      scale: 0.17
    },
    {
      id: 'brass-breakfast-bell',
      name: 'Breakfast Bell',
      requester: 'Aunt Maple',
      clue: 'A brass breakfast bell shines near the cabinet shelf.',
      key: 'object-maple-cocoa-breakfast-nook-breakfast-bell',
      asset: 'assets/objects/maple_cocoa_breakfast_nook_breakfast_bell.png',
      x: 850,
      y: 255,
      scale: 0.17
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-maple-leaf-1',
      name: 'Golden Maple Leaf',
      key: 'bonus-maple-cocoa-breakfast-nook-leaf-1',
      asset: 'assets/bonus/maple_cocoa_breakfast_nook_golden_leaf_01.png',
      x: 255,
      y: 170,
      scale: 0.12
    },
    {
      id: 'golden-maple-leaf-2',
      name: 'Golden Maple Leaf',
      key: 'bonus-maple-cocoa-breakfast-nook-leaf-2',
      asset: 'assets/bonus/maple_cocoa_breakfast_nook_golden_leaf_02.png',
      x: 735,
      y: 180,
      scale: 0.12
    },
    {
      id: 'golden-maple-leaf-3',
      name: 'Golden Maple Leaf',
      key: 'bonus-maple-cocoa-breakfast-nook-leaf-3',
      asset: 'assets/bonus/maple_cocoa_breakfast_nook_golden_leaf_03.png',
      x: 1160,
      y: 205,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'maple-window-glimmer',
      x: 330,
      y: 245,
      label: 'Glimmer!'
    },
    {
      id: 'maple-cocoa-steam',
      x: 620,
      y: 465,
      label: 'Sip!'
    },
    {
      id: 'maple-bell-ding',
      x: 920,
      y: 225,
      label: 'Ding!'
    }
  ],
  previousLevelId: 'blueberry-jam-pantry-window'
};
