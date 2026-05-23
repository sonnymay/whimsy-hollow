export const bellflowerFloristCart = {
  id: 'bellflower-florist-cart',
  title: 'Bellflower Florist Cart',
  saveKey: 'whimsy-hollow:bellflower-florist-cart',
  bonusSaveKey: 'whimsy-hollow:bellflower-florist-cart:bonus',
  bonusLabel: 'Golden Petals',
  bonusFoundText: 'Petal!',
  background: {
    key: 'bellflowerFloristCartBackground',
    path: 'assets/backgrounds/bellflower_florist_cart.webp'
  },
  objects: [
    {
      id: 'purple-ribbon-spool',
      name: 'Ribbon Spool',
      requester: 'Poppy Petal',
      clue: 'A purple ribbon spool rests in the florist shelf.',
      key: 'object-bellflower-florist-cart-ribbon-spool',
      asset: 'assets/objects/bellflower_florist_cart_purple_ribbon_spool.png',
      x: 760,
      y: 470,
      scale: 0.2
    },
    {
      id: 'tiny-brass-bell',
      name: 'Brass Bell',
      requester: 'Poppy Petal',
      clue: 'A tiny brass bell hangs near the cottage wall.',
      key: 'object-bellflower-florist-cart-brass-bell',
      asset: 'assets/objects/bellflower_florist_cart_tiny_brass_bell.png',
      x: 940,
      y: 210,
      scale: 0.2
    },
    {
      id: 'blue-flower-snips',
      name: 'Flower Snips',
      requester: 'Poppy Petal',
      clue: 'Blue flower snips wait on the cart ledge.',
      key: 'object-bellflower-florist-cart-flower-snips',
      asset: 'assets/objects/bellflower_florist_cart_blue_flower_snips.png',
      x: 610,
      y: 585,
      scale: 0.2
    },
    {
      id: 'kraft-flower-wrap',
      name: 'Flower Wrap',
      requester: 'Poppy Petal',
      clue: 'A roll of kraft flower wrap stands beside the shelf.',
      key: 'object-bellflower-florist-cart-flower-wrap',
      asset: 'assets/objects/bellflower_florist_cart_kraft_wrap_roll.png',
      x: 835,
      y: 575,
      scale: 0.2
    },
    {
      id: 'small-twine-ball',
      name: 'Twine Ball',
      requester: 'Poppy Petal',
      clue: 'A small twine ball is tucked with the ribbon spools.',
      key: 'object-bellflower-florist-cart-twine-ball',
      asset: 'assets/objects/bellflower_florist_cart_twine_ball.png',
      x: 985,
      y: 410,
      scale: 0.2
    },
    {
      id: 'ceramic-plant-tag',
      name: 'Plant Tag',
      requester: 'Poppy Petal',
      clue: 'A ceramic plant tag leans near the seed drawers.',
      key: 'object-bellflower-florist-cart-plant-tag',
      asset: 'assets/objects/bellflower_florist_cart_ceramic_plant_tag.png',
      x: 465,
      y: 405,
      scale: 0.2
    },
    {
      id: 'mini-watering-bulb',
      name: 'Watering Bulb',
      requester: 'Poppy Petal',
      clue: 'A miniature watering bulb glimmers near the metal buckets.',
      key: 'object-bellflower-florist-cart-watering-bulb',
      asset: 'assets/objects/bellflower_florist_cart_watering_bulb.png',
      x: 630,
      y: 450,
      scale: 0.2
    },
    {
      id: 'pressed-flower-card',
      name: 'Flower Card',
      requester: 'Poppy Petal',
      clue: 'A pressed flower card is pinned near the window shelf.',
      key: 'object-bellflower-florist-cart-flower-card',
      asset: 'assets/objects/bellflower_florist_cart_pressed_flower_card.png',
      x: 1130,
      y: 300,
      scale: 0.2
    },
    {
      id: 'green-seed-drawer-knob',
      name: 'Drawer Knob',
      requester: 'Poppy Petal',
      clue: 'A green seed drawer knob sits low by the cart wheel.',
      key: 'object-bellflower-florist-cart-drawer-knob',
      asset: 'assets/objects/bellflower_florist_cart_seed_drawer_knob.png',
      x: 480,
      y: 610,
      scale: 0.2
    },
    {
      id: 'little-daisy-vase',
      name: 'Daisy Vase',
      requester: 'Poppy Petal',
      clue: 'A little daisy vase nestles among the front flowers.',
      key: 'object-bellflower-florist-cart-daisy-vase',
      asset: 'assets/objects/bellflower_florist_cart_little_daisy_vase.png',
      x: 260,
      y: 560,
      scale: 0.2
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-petal-1',
      name: 'Golden Petal',
      key: 'bonus-bellflower-florist-cart-golden-petal-1',
      asset: 'assets/bonus/bellflower_florist_cart_golden_petal_01.png',
      x: 245,
      y: 195,
      scale: 0.14
    },
    {
      id: 'golden-petal-2',
      name: 'Golden Petal',
      key: 'bonus-bellflower-florist-cart-golden-petal-2',
      asset: 'assets/bonus/bellflower_florist_cart_golden_petal_02.png',
      x: 730,
      y: 165,
      scale: 0.14
    },
    {
      id: 'golden-petal-3',
      name: 'Golden Petal',
      key: 'bonus-bellflower-florist-cart-golden-petal-3',
      asset: 'assets/bonus/bellflower_florist_cart_golden_petal_03.png',
      x: 1110,
      y: 170,
      scale: 0.14
    }
  ],
  surprises: [
    {
      id: 'florist-cart-bells',
      x: 930,
      y: 200,
      label: 'Ding!'
    },
    {
      id: 'florist-cart-blooms',
      x: 445,
      y: 260,
      label: 'Bloom!'
    },
    {
      id: 'florist-cart-ribbons',
      x: 760,
      y: 430,
      label: 'Swish!'
    }
  ],
  previousLevelId: 'moonbeam-bakery-shelf'
};
