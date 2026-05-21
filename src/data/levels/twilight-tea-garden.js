export const twilightTeaGarden = {
  id: 'twilight-tea-garden',
  title: 'Twilight Tea Garden',
  saveKey: 'whimsy-hollow:twilight-tea-garden',
  bonusSaveKey: 'whimsy-hollow:twilight-tea-garden:bonus',
  bonusLabel: 'Fireflies',
  bonusFoundText: 'Firefly!',
  background: {
    key: 'twilightTeaGardenBackground',
    path: 'assets/backgrounds/twilight_tea_garden.webp'
  },
  objects: [
    {
      id: 'porcelain-teacup',
      name: 'Teacup',
      requester: 'Grandma Lily',
      clue: 'A teacup waits on the lace table.',
      key: 'object-porcelain-teacup',
      asset: 'assets/objects/tea_garden_teacup.png',
      x: 956,
      y: 428,
      scale: 0.15
    },
    {
      id: 'brass-lantern',
      name: 'Lantern',
      requester: 'Grandma Lily',
      clue: 'A tiny lantern glows near the lower stones.',
      key: 'object-brass-lantern',
      asset: 'assets/objects/tea_garden_lantern.png',
      x: 746,
      y: 592,
      scale: 0.15
    },
    {
      id: 'sugar-cubes',
      name: 'Sugar',
      requester: 'Grandma Lily',
      clue: 'Sugar cubes sit close to the tea things.',
      key: 'object-sugar-cubes',
      asset: 'assets/objects/tea_garden_sugar_cubes.png',
      x: 1084,
      y: 390,
      scale: 0.14
    },
    {
      id: 'star-biscuit',
      name: 'Biscuit',
      requester: 'Grandma Lily',
      clue: 'A star biscuit hides by the garden sweets.',
      key: 'object-star-biscuit',
      asset: 'assets/objects/tea_garden_star_biscuit.png',
      x: 872,
      y: 500,
      scale: 0.14
    },
    {
      id: 'silver-teaspoon',
      name: 'Spoon',
      requester: 'Grandma Lily',
      clue: 'A silver spoon rests near the right shelf.',
      key: 'object-silver-teaspoon',
      asset: 'assets/objects/tea_garden_teaspoon.png',
      x: 1158,
      y: 306,
      scale: 0.14
    },
    {
      id: 'lace-napkin',
      name: 'Napkin',
      requester: 'Grandma Lily',
      clue: 'A folded napkin is tucked by the left chair.',
      key: 'object-lace-napkin',
      asset: 'assets/objects/tea_garden_lace_napkin.png',
      x: 642,
      y: 446,
      scale: 0.14
    },
    {
      id: 'rose-jam',
      name: 'Jam',
      requester: 'Grandma Lily',
      clue: 'Rose jam waits near the flower pots.',
      key: 'object-rose-jam',
      asset: 'assets/objects/tea_garden_rose_jam.png',
      x: 420,
      y: 514,
      scale: 0.13
    },
    {
      id: 'lavender-sachet',
      name: 'Lavender',
      requester: 'Grandma Lily',
      clue: 'A lavender pouch sits by the purple blooms.',
      key: 'object-lavender-sachet',
      asset: 'assets/objects/tea_garden_lavender_sachet.png',
      x: 1192,
      y: 572,
      scale: 0.13
    },
    {
      id: 'garden-hand-bell',
      name: 'Bell',
      requester: 'Grandma Lily',
      clue: 'A hand bell rests on the stone ledge.',
      key: 'object-garden-hand-bell',
      asset: 'assets/objects/tea_garden_hand_bell.png',
      x: 246,
      y: 474,
      scale: 0.14
    },
    {
      id: 'honey-dipper',
      name: 'Honey',
      requester: 'Grandma Lily',
      clue: 'A honey dipper hides near the potted flowers.',
      key: 'object-honey-dipper',
      asset: 'assets/objects/tea_garden_honey_dipper.png',
      x: 556,
      y: 296,
      scale: 0.13
    }
  ],
  bonusEnvelopes: [
    {
      id: 'firefly-1',
      name: 'Glow Firefly',
      key: 'bonus-firefly-1',
      asset: 'assets/bonus/firefly_01.png',
      x: 336,
      y: 164,
      scale: 0.13
    },
    {
      id: 'firefly-2',
      name: 'Lantern Firefly',
      key: 'bonus-firefly-2',
      asset: 'assets/bonus/firefly_02.png',
      x: 718,
      y: 210,
      scale: 0.13
    },
    {
      id: 'firefly-3',
      name: 'Rose Firefly',
      key: 'bonus-firefly-3',
      asset: 'assets/bonus/firefly_03.png',
      x: 1114,
      y: 178,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'tea-garden-lantern-glow',
      x: 812,
      y: 286,
      label: 'Glow!'
    },
    {
      id: 'tea-garden-biscuit-nibble',
      x: 920,
      y: 406,
      label: 'Yum!'
    },
    {
      id: 'tea-garden-flowers-hum',
      x: 504,
      y: 238,
      label: 'Bzzzt'
    }
  ],
  previousLevelId: 'cozy-dream-bedroom'
};
