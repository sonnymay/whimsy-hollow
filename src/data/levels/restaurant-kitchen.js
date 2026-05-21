export const restaurantKitchen = {
  id: 'restaurant-kitchen',
  title: 'Busy Kitchen',
  saveKey: 'whimsy-hollow:restaurant-kitchen',
  bonusSaveKey: 'whimsy-hollow:restaurant-kitchen:bonus',
  bonusLabel: 'Notes',
  bonusFoundText: 'Note!',
  background: {
    key: 'restaurantKitchenBackground',
    path: 'assets/backgrounds/restaurant_kitchen.png'
  },
  objects: [
    {
      id: 'golden-soup-ladle',
      name: 'Soup Ladle',
      requester: 'Soup chef',
      clue: 'A golden ladle shines beside the flour bowl.',
      key: 'object-golden-soup-ladle',
      asset: 'assets/objects/golden_soup_ladle.png',
      x: 260,
      y: 502,
      scale: 0.13
    },
    {
      id: 'cherry-cupcake',
      name: 'Cupcake',
      requester: 'Dessert helper',
      clue: 'A pink cupcake waits with the sweets.',
      key: 'object-cherry-cupcake',
      asset: 'assets/objects/cherry_cupcake.png',
      x: 1058,
      y: 504,
      scale: 0.11
    },
    {
      id: 'tiny-copper-pot',
      name: 'Copper Pot',
      requester: 'Sauce cook',
      clue: 'A small copper pot warms near the stove.',
      key: 'object-tiny-copper-pot',
      asset: 'assets/objects/tiny_copper_pot.png',
      x: 706,
      y: 332,
      scale: 0.1
    },
    {
      id: 'star-cookie',
      name: 'Star Cookie',
      requester: 'Cookie baker',
      clue: 'A star cookie hides by the cookie stand.',
      key: 'object-star-cookie',
      asset: 'assets/objects/star_cookie.png',
      x: 1174,
      y: 486,
      scale: 0.09
    },
    {
      id: 'blue-spice-jar',
      name: 'Blue Spice',
      requester: 'Spice keeper',
      clue: 'Blue spice sits among the little jars.',
      key: 'object-blue-spice-jar',
      asset: 'assets/objects/blue_spice_jar.png',
      x: 450,
      y: 210,
      scale: 0.09
    },
    {
      id: 'silver-fork',
      name: 'Silver Fork',
      requester: 'Table setter',
      clue: 'A fork slipped onto the prep table.',
      key: 'object-silver-fork',
      asset: 'assets/objects/silver_fork.png',
      x: 514,
      y: 528,
      scale: 0.13
    },
    {
      id: 'rolling-pin',
      name: 'Rolling Pin',
      requester: 'Bread baker',
      clue: 'A rolling pin rests near the checkered cloth.',
      key: 'object-rolling-pin',
      asset: 'assets/objects/rolling_pin.png',
      x: 256,
      y: 562,
      scale: 0.13
    },
    {
      id: 'tomato-basket',
      name: 'Tomatoes',
      requester: 'Garden cook',
      clue: 'A tomato basket sits by the blue cupboard.',
      key: 'object-tomato-basket',
      asset: 'assets/objects/tomato_basket.png',
      x: 406,
      y: 486,
      scale: 0.1
    },
    {
      id: 'chef-hat',
      name: 'Chef Hat',
      requester: 'Head chef',
      clue: 'A chef hat is tucked high near the plates.',
      key: 'object-chef-hat',
      asset: 'assets/objects/chef_hat.png',
      x: 1146,
      y: 132,
      scale: 0.075
    },
    {
      id: 'magic-recipe-card',
      name: 'Recipe Card',
      requester: 'Recipe keeper',
      clue: 'A magic recipe card glows near the stove.',
      key: 'object-magic-recipe-card',
      asset: 'assets/objects/magic_recipe_card.png',
      x: 778,
      y: 592,
      scale: 0.075
    }
  ],
  bonusEnvelopes: [
    {
      id: 'window-recipe-note',
      x: 172,
      y: 278,
      clue: 'Window note'
    },
    {
      id: 'stove-ticket',
      x: 764,
      y: 514,
      clue: 'Stove note'
    },
    {
      id: 'cookie-order',
      x: 1086,
      y: 434,
      clue: 'Sweet note'
    }
  ],
  surprises: [
    {
      id: 'left-lantern',
      x: 60,
      y: 86,
      label: 'The lantern glows like warm soup.'
    },
    {
      id: 'stove-fire',
      x: 738,
      y: 520,
      label: 'The stove gives a cozy pop.'
    },
    {
      id: 'blue-tiles',
      x: 904,
      y: 156,
      label: 'Painted flowers sparkle on the blue tiles.'
    },
    {
      id: 'right-cookies',
      x: 1196,
      y: 444,
      label: 'Cookies smell like tiny stars.'
    }
  ],
  previousLevelId: 'mail-garden'
};

