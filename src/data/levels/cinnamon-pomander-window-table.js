export const cinnamonPomanderWindowTable = {
  id: 'cinnamon-pomander-window-table',
  title: 'Cinnamon Pomander Window Table',
  saveKey: 'whimsy-hollow:cinnamon-pomander-window-table',
  bonusSaveKey: 'whimsy-hollow:cinnamon-pomander-window-table:bonus',
  bonusLabel: 'Clove Stars',
  bonusFoundText: 'Clove star!',
  background: {
    key: 'cinnamonPomanderWindowTableBackground',
    path: 'assets/backgrounds/cinnamon_pomander_window_table.webp'
  },
  objects: [
    {
      id: 'clove-orange',
      name: 'Clove Orange',
      requester: 'Auntie Marigold',
      clue: 'A clove-studded orange sits near the sunny middle of the table.',
      key: 'object-cinnamon-pomander-clove-orange',
      asset: 'assets/objects/cinnamon_pomander_clove_orange.png',
      x: 575,
      y: 360,
      scale: 0.14
    },
    {
      id: 'cinnamon-bundle',
      name: 'Cinnamon Bundle',
      requester: 'Auntie Marigold',
      clue: 'A bundle of cinnamon sticks rests on the cloth at the lower right.',
      key: 'object-cinnamon-pomander-cinnamon-bundle',
      asset: 'assets/objects/cinnamon_pomander_cinnamon_bundle.png',
      x: 930,
      y: 590,
      scale: 0.14
    },
    {
      id: 'clove-jar',
      name: 'Clove Jar',
      requester: 'Auntie Marigold',
      clue: 'The tiny clove jar waits near the front of the worktable.',
      key: 'object-cinnamon-pomander-clove-jar',
      asset: 'assets/objects/cinnamon_pomander_clove_jar.png',
      x: 590,
      y: 490,
      scale: 0.13
    },
    {
      id: 'orange-slice',
      name: 'Orange Slice',
      requester: 'Auntie Marigold',
      clue: 'A dried orange slice hangs above the right-side jars.',
      key: 'object-cinnamon-pomander-orange-slice',
      asset: 'assets/objects/cinnamon_pomander_orange_slice.png',
      x: 1015,
      y: 155,
      scale: 0.12
    },
    {
      id: 'ribbon-bow',
      name: 'Ribbon Bow',
      requester: 'Auntie Marigold',
      clue: 'A red ribbon bow is tied around a bright pomander.',
      key: 'object-cinnamon-pomander-ribbon-bow',
      asset: 'assets/objects/cinnamon_pomander_ribbon_bow.png',
      x: 955,
      y: 430,
      scale: 0.13
    },
    {
      id: 'spice-sachet',
      name: 'Spice Sachet',
      requester: 'Auntie Marigold',
      clue: 'A soft spice sachet sits beside the basket of orange slices.',
      key: 'object-cinnamon-pomander-spice-sachet',
      asset: 'assets/objects/cinnamon_pomander_spice_sachet.png',
      x: 1065,
      y: 485,
      scale: 0.13
    },
    {
      id: 'twine-spool',
      name: 'Twine Spool',
      requester: 'Auntie Marigold',
      clue: 'The twine spool is tucked along the front edge by the ribbon.',
      key: 'object-cinnamon-pomander-twine-spool',
      asset: 'assets/objects/cinnamon_pomander_twine_spool.png',
      x: 665,
      y: 560,
      scale: 0.13
    },
    {
      id: 'pattern-card',
      name: 'Pattern Card',
      requester: 'Auntie Marigold',
      clue: 'A paper pattern card lies under the red ribbon.',
      key: 'object-cinnamon-pomander-pattern-card',
      asset: 'assets/objects/cinnamon_pomander_pattern_card.png',
      x: 850,
      y: 555,
      scale: 0.14
    },
    {
      id: 'brass-awl',
      name: 'Brass Awl',
      requester: 'Auntie Marigold',
      clue: 'The little brass awl points near the clove bowl.',
      key: 'object-cinnamon-pomander-brass-awl',
      asset: 'assets/objects/cinnamon_pomander_brass_awl.png',
      x: 445,
      y: 505,
      scale: 0.13
    },
    {
      id: 'clove-bowl',
      name: 'Clove Bowl',
      requester: 'Auntie Marigold',
      clue: 'A wooden clove bowl sits near the left-middle tabletop.',
      key: 'object-cinnamon-pomander-clove-bowl',
      asset: 'assets/objects/cinnamon_pomander_clove_bowl.png',
      x: 455,
      y: 420,
      scale: 0.14
    }
  ],
  bonusEnvelopes: [
    {
      id: 'clove-star-1',
      name: 'Clove Star',
      key: 'bonus-cinnamon-pomander-clove-star-1',
      asset: 'assets/bonus/cinnamon_pomander_clove_star_01.png',
      x: 230,
      y: 155,
      scale: 0.075
    },
    {
      id: 'clove-star-2',
      name: 'Clove Star',
      key: 'bonus-cinnamon-pomander-clove-star-2',
      asset: 'assets/bonus/cinnamon_pomander_clove_star_02.png',
      x: 725,
      y: 165,
      scale: 0.075
    },
    {
      id: 'clove-star-3',
      name: 'Clove Star',
      key: 'bonus-cinnamon-pomander-clove-star-3',
      asset: 'assets/bonus/cinnamon_pomander_clove_star_03.png',
      x: 1160,
      y: 185,
      scale: 0.075
    }
  ],
  surprises: [
    { x: 430, y: 410, label: 'Spicy!' },
    { x: 765, y: 475, label: 'Sniff!' },
    { x: 1065, y: 360, label: 'Twinkle!' }
  ],
  previousLevelId: 'rainstick-bead-filling-table'
};
