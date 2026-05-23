export const moonbeamBakeryShelf = {
  id: 'moonbeam-bakery-shelf',
  title: 'Moonbeam Bakery Shelf',
  saveKey: 'whimsy-hollow:moonbeam-bakery-shelf',
  bonusSaveKey: 'whimsy-hollow:moonbeam-bakery-shelf:bonus',
  bonusLabel: 'Moon Charms',
  bonusFoundText: 'Moon charm!',
  background: {
    key: 'moonbeamBakeryShelfBackground',
    path: 'assets/backgrounds/moonbeam_bakery_shelf.webp'
  },
  objects: [
    {
      id: 'crescent-cookie-cutter',
      name: 'Cookie Cutter',
      requester: 'Mina Moonbun',
      clue: 'A crescent cookie cutter rests near the moonlit window.',
      key: 'object-moonbeam-bakery-shelf-cookie-cutter',
      asset: 'assets/objects/moonbeam_bakery_shelf_crescent_cookie_cutter.png',
      x: 360,
      y: 235,
      scale: 0.22
    },
    {
      id: 'blue-icing-bowl',
      name: 'Blue Icing Bowl',
      requester: 'Mina Moonbun',
      clue: 'A blue icing bowl waits on the baking table.',
      key: 'object-moonbeam-bakery-shelf-blue-icing-bowl',
      asset: 'assets/objects/moonbeam_bakery_shelf_blue_icing_bowl.png',
      x: 1070,
      y: 565,
      scale: 0.22
    },
    {
      id: 'wooden-rolling-pin',
      name: 'Rolling Pin',
      requester: 'Mina Moonbun',
      clue: 'A wooden rolling pin lies beside the folded towel.',
      key: 'object-moonbeam-bakery-shelf-rolling-pin',
      asset: 'assets/objects/moonbeam_bakery_shelf_wooden_rolling_pin.png',
      x: 1010,
      y: 615,
      scale: 0.22
    },
    {
      id: 'strawberry-jam-spoon',
      name: 'Jam Spoon',
      requester: 'Mina Moonbun',
      clue: 'A jam spoon gleams near the jars on the middle shelf.',
      key: 'object-moonbeam-bakery-shelf-jam-spoon',
      asset: 'assets/objects/moonbeam_bakery_shelf_jam_spoon.png',
      x: 835,
      y: 300,
      scale: 0.2
    },
    {
      id: 'flour-scoop',
      name: 'Flour Scoop',
      requester: 'Mina Moonbun',
      clue: 'A flour scoop is tucked by the big flour sack.',
      key: 'object-moonbeam-bakery-shelf-flour-scoop',
      asset: 'assets/objects/moonbeam_bakery_shelf_flour_scoop.png',
      x: 1125,
      y: 470,
      scale: 0.2
    },
    {
      id: 'cinnamon-star-cookie',
      name: 'Star Cookie',
      requester: 'Mina Moonbun',
      clue: 'A cinnamon star cookie cools on the wire rack.',
      key: 'object-moonbeam-bakery-shelf-star-cookie',
      asset: 'assets/objects/moonbeam_bakery_shelf_cinnamon_star_cookie.png',
      x: 900,
      y: 520,
      scale: 0.2
    },
    {
      id: 'gingham-napkin',
      name: 'Gingham Napkin',
      requester: 'Mina Moonbun',
      clue: 'A folded gingham napkin is draped over the left baskets.',
      key: 'object-moonbeam-bakery-shelf-gingham-napkin',
      asset: 'assets/objects/moonbeam_bakery_shelf_gingham_napkin.png',
      x: 445,
      y: 585,
      scale: 0.21
    },
    {
      id: 'ceramic-butter-dish',
      name: 'Butter Dish',
      requester: 'Mina Moonbun',
      clue: 'A ceramic butter dish sits high on the right shelf.',
      key: 'object-moonbeam-bakery-shelf-butter-dish',
      asset: 'assets/objects/moonbeam_bakery_shelf_ceramic_butter_dish.png',
      x: 1165,
      y: 255,
      scale: 0.2
    },
    {
      id: 'little-whisk',
      name: 'Little Whisk',
      requester: 'Mina Moonbun',
      clue: 'A little whisk hangs with the baking tools.',
      key: 'object-moonbeam-bakery-shelf-little-whisk',
      asset: 'assets/objects/moonbeam_bakery_shelf_little_whisk.png',
      x: 370,
      y: 545,
      scale: 0.2
    },
    {
      id: 'wooden-bread-stamp',
      name: 'Bread Stamp',
      requester: 'Mina Moonbun',
      clue: 'A wooden bread stamp waits near the small lower shelf.',
      key: 'object-moonbeam-bakery-shelf-bread-stamp',
      asset: 'assets/objects/moonbeam_bakery_shelf_bread_stamp.png',
      x: 610,
      y: 500,
      scale: 0.21
    }
  ],
  bonusEnvelopes: [
    {
      id: 'moon-charm-1',
      name: 'Golden Moon Charm',
      key: 'bonus-moonbeam-bakery-shelf-moon-charm-1',
      asset: 'assets/bonus/moonbeam_bakery_shelf_moon_charm_01.png',
      x: 285,
      y: 205,
      scale: 0.13
    },
    {
      id: 'moon-charm-2',
      name: 'Golden Moon Charm',
      key: 'bonus-moonbeam-bakery-shelf-moon-charm-2',
      asset: 'assets/bonus/moonbeam_bakery_shelf_moon_charm_02.png',
      x: 690,
      y: 250,
      scale: 0.13
    },
    {
      id: 'moon-charm-3',
      name: 'Golden Moon Charm',
      key: 'bonus-moonbeam-bakery-shelf-moon-charm-3',
      asset: 'assets/bonus/moonbeam_bakery_shelf_moon_charm_03.png',
      x: 1085,
      y: 150,
      scale: 0.13
    }
  ],
  surprises: [
    {
      id: 'bakery-window-twinkle',
      x: 310,
      y: 180,
      label: 'Twinkle!'
    },
    {
      id: 'bakery-cookie-sniff',
      x: 835,
      y: 515,
      label: 'Mmm!'
    },
    {
      id: 'bakery-lights-glow',
      x: 990,
      y: 160,
      label: 'Glow!'
    }
  ],
  previousLevelId: 'cozy-dollhouse-workshop'
};
