export const cozyBathNook = {
  id: 'cozy-bath-nook',
  title: 'Cozy Bath Nook',
  saveKey: 'whimsy-hollow:cozy-bath-nook',
  bonusSaveKey: 'whimsy-hollow:cozy-bath-nook:bonus',
  bonusLabel: 'Bubbles',
  bonusFoundText: 'Bubble!',
  background: {
    key: 'cozyBathNookBackground',
    path: 'assets/backgrounds/cozy_bath_nook.webp'
  },
  objects: [
    {
      id: 'yellow-rubber-duck',
      name: 'Rubber Duck',
      requester: 'Penny Bubblebrook',
      clue: 'A yellow duck waits near the sunny bath rug.',
      key: 'object-cozy-bath-nook-rubber-duck',
      asset: 'assets/objects/cozy_bath_nook_rubber_duck.png',
      x: 710,
      y: 620,
      scale: 0.2
    },
    {
      id: 'seashell-soap',
      name: 'Shell Soap',
      requester: 'Penny Bubblebrook',
      clue: 'A seashell soap rests on the tub tray.',
      key: 'object-cozy-bath-nook-seashell-soap',
      asset: 'assets/objects/cozy_bath_nook_seashell_soap.png',
      x: 650,
      y: 430,
      scale: 0.22
    },
    {
      id: 'wooden-bath-brush',
      name: 'Bath Brush',
      requester: 'Penny Bubblebrook',
      clue: 'A wooden bath brush sits low by the towel basket.',
      key: 'object-cozy-bath-nook-bath-brush',
      asset: 'assets/objects/cozy_bath_nook_bath_brush.png',
      x: 1010,
      y: 625,
      scale: 0.22
    },
    {
      id: 'folded-blue-towel',
      name: 'Blue Towel',
      requester: 'Penny Bubblebrook',
      clue: 'A folded blue towel is tucked near the ladder shelf.',
      key: 'object-cozy-bath-nook-blue-towel',
      asset: 'assets/objects/cozy_bath_nook_blue_towel.png',
      x: 980,
      y: 265,
      scale: 0.22
    },
    {
      id: 'lavender-shampoo-bottle',
      name: 'Shampoo Bottle',
      requester: 'Penny Bubblebrook',
      clue: 'A lavender shampoo bottle sits on the right shelf.',
      key: 'object-cozy-bath-nook-lavender-shampoo',
      asset: 'assets/objects/cozy_bath_nook_lavender_shampoo.png',
      x: 1130,
      y: 360,
      scale: 0.2
    },
    {
      id: 'cream-loofah-puff',
      name: 'Loofah Puff',
      requester: 'Penny Bubblebrook',
      clue: 'A cream loofah puff rests on the little stool.',
      key: 'object-cozy-bath-nook-loofah-puff',
      asset: 'assets/objects/cozy_bath_nook_loofah_puff.png',
      x: 905,
      y: 575,
      scale: 0.2
    },
    {
      id: 'natural-bath-sponge',
      name: 'Bath Sponge',
      requester: 'Penny Bubblebrook',
      clue: 'A natural bath sponge is tucked by the rolled towels.',
      key: 'object-cozy-bath-nook-bath-sponge',
      asset: 'assets/objects/cozy_bath_nook_bath_sponge.png',
      x: 815,
      y: 565,
      scale: 0.22
    },
    {
      id: 'tiny-wooden-boat',
      name: 'Toy Boat',
      requester: 'Penny Bubblebrook',
      clue: 'A tiny wooden boat floats in spirit on the tub rim.',
      key: 'object-cozy-bath-nook-toy-boat',
      asset: 'assets/objects/cozy_bath_nook_toy_boat.png',
      x: 380,
      y: 390,
      scale: 0.22
    },
    {
      id: 'bath-salts-jar',
      name: 'Bath Salts',
      requester: 'Penny Bubblebrook',
      clue: 'A corked bath-salts jar is high on the wooden shelf.',
      key: 'object-cozy-bath-nook-bath-salts-jar',
      asset: 'assets/objects/cozy_bath_nook_bath_salts_jar.png',
      x: 1040,
      y: 210,
      scale: 0.2
    },
    {
      id: 'small-pearl-comb',
      name: 'Pearl Comb',
      requester: 'Penny Bubblebrook',
      clue: 'A small pearl comb rests near the rug fringe.',
      key: 'object-cozy-bath-nook-pearl-comb',
      asset: 'assets/objects/cozy_bath_nook_pearl_comb.png',
      x: 760,
      y: 625,
      scale: 0.22
    }
  ],
  bonusEnvelopes: [
    {
      id: 'pearly-bubble-1',
      name: 'Pearly Bubble',
      key: 'bonus-cozy-bath-nook-bubble-1',
      asset: 'assets/bonus/cozy_bath_nook_pearly_bubble_01.png',
      x: 315,
      y: 220,
      scale: 0.16
    },
    {
      id: 'pearly-bubble-2',
      name: 'Pearly Bubble',
      key: 'bonus-cozy-bath-nook-bubble-2',
      asset: 'assets/bonus/cozy_bath_nook_pearly_bubble_02.png',
      x: 615,
      y: 185,
      scale: 0.16
    },
    {
      id: 'pearly-bubble-3',
      name: 'Pearly Bubble',
      key: 'bonus-cozy-bath-nook-bubble-3',
      asset: 'assets/bonus/cozy_bath_nook_pearly_bubble_03.png',
      x: 1100,
      y: 170,
      scale: 0.16
    }
  ],
  surprises: [
    {
      id: 'bath-nook-tub-splash',
      x: 560,
      y: 380,
      label: 'Splash!'
    },
    {
      id: 'bath-nook-duck-squeak',
      x: 710,
      y: 615,
      label: 'Squeak!'
    },
    {
      id: 'bath-nook-window-shine',
      x: 360,
      y: 225,
      label: 'Shine!'
    }
  ],
  previousLevelId: 'sunny-wardrobe-nook'
};
