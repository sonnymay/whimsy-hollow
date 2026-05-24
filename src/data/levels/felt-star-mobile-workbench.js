export const feltStarMobileWorkbench = {
  id: 'felt-star-mobile-workbench',
  title: 'Felt Star Mobile Workbench',
  saveKey: 'whimsy-hollow:felt-star-mobile-workbench',
  bonusSaveKey: 'whimsy-hollow:felt-star-mobile-workbench:bonus',
  bonusLabel: 'Stitches',
  bonusFoundText: 'Stitch charm!',
  background: {
    key: 'feltStarMobileWorkbenchBackground',
    path: 'assets/backgrounds/felt_star_mobile_workbench.webp'
  },
  objects: [
    {
      id: 'yellow-felt-star',
      name: 'Felt Star',
      requester: 'Mira Moonthread',
      clue: 'A yellow felt star rests on the layered fabric near the left side of the bench.',
      key: 'object-felt-star-mobile-workbench-yellow-felt-star',
      asset: 'assets/objects/felt_star_mobile_yellow_star.png',
      x: 430,
      y: 455,
      scale: 0.14
    },
    {
      id: 'crescent-moon-charm',
      name: 'Moon Charm',
      requester: 'Mira Moonthread',
      clue: 'A crescent moon charm hangs near the left window.',
      key: 'object-felt-star-mobile-workbench-crescent-moon-charm',
      asset: 'assets/objects/felt_star_mobile_crescent_moon.png',
      x: 210,
      y: 145,
      scale: 0.13
    },
    {
      id: 'blue-felt-cloud',
      name: 'Felt Cloud',
      requester: 'Mira Moonthread',
      clue: 'A blue felt cloud waits on the hanging pattern board.',
      key: 'object-felt-star-mobile-workbench-blue-felt-cloud',
      asset: 'assets/objects/felt_star_mobile_blue_cloud.png',
      x: 470,
      y: 165,
      scale: 0.13
    },
    {
      id: 'brass-tiny-bell',
      name: 'Tiny Bell',
      requester: 'Mira Moonthread',
      clue: 'A brass tiny bell sits on the window ledge by the flowers.',
      key: 'object-felt-star-mobile-workbench-brass-tiny-bell',
      asset: 'assets/objects/felt_star_mobile_tiny_bell.png',
      x: 300,
      y: 305,
      scale: 0.13
    },
    {
      id: 'wooden-bead-string',
      name: 'Bead String',
      requester: 'Mira Moonthread',
      clue: 'A wooden bead string dangles from the mobile frame.',
      key: 'object-felt-star-mobile-workbench-wooden-bead-string',
      asset: 'assets/objects/felt_star_mobile_bead_string.png',
      x: 760,
      y: 245,
      scale: 0.16
    },
    {
      id: 'embroidery-hoop',
      name: 'Embroidery Hoop',
      requester: 'Mira Moonthread',
      clue: 'An embroidery hoop sits open on the felt stack.',
      key: 'object-felt-star-mobile-workbench-embroidery-hoop',
      asset: 'assets/objects/felt_star_mobile_embroidery_hoop.png',
      x: 520,
      y: 430,
      scale: 0.13
    },
    {
      id: 'silver-sewing-scissors',
      name: 'Sewing Scissors',
      requester: 'Mira Moonthread',
      clue: 'Silver sewing scissors lie near the front of the workbench.',
      key: 'object-felt-star-mobile-workbench-silver-sewing-scissors',
      asset: 'assets/objects/felt_star_mobile_sewing_scissors.png',
      x: 650,
      y: 545,
      scale: 0.13
    },
    {
      id: 'pink-ribbon-spool',
      name: 'Pink Ribbon',
      requester: 'Mira Moonthread',
      clue: 'A pink ribbon spool rests near the lower right corner of the bench.',
      key: 'object-felt-star-mobile-workbench-pink-ribbon-spool',
      asset: 'assets/objects/felt_star_mobile_pink_ribbon_spool.png',
      x: 1120,
      y: 575,
      scale: 0.13
    },
    {
      id: 'cotton-stuffing-puff',
      name: 'Stuffing Puff',
      requester: 'Mira Moonthread',
      clue: 'A cotton stuffing puff waits in the basket beside the lamp.',
      key: 'object-felt-star-mobile-workbench-cotton-stuffing-puff',
      asset: 'assets/objects/felt_star_mobile_stuffing_puff.png',
      x: 1115,
      y: 305,
      scale: 0.13
    },
    {
      id: 'needle-thread-card',
      name: 'Needle Card',
      requester: 'Mira Moonthread',
      clue: 'A needle card with colored thread rests on the right side of the workbench.',
      key: 'object-felt-star-mobile-workbench-needle-thread-card',
      asset: 'assets/objects/felt_star_mobile_needle_card.png',
      x: 780,
      y: 560,
      scale: 0.13
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-stitch-1',
      name: 'Golden Stitch Charm',
      key: 'bonus-felt-star-mobile-workbench-stitch-1',
      asset: 'assets/bonus/felt_star_mobile_golden_stitch_01.png',
      x: 230,
      y: 165,
      scale: 0.08
    },
    {
      id: 'golden-stitch-2',
      name: 'Golden Stitch Charm',
      key: 'bonus-felt-star-mobile-workbench-stitch-2',
      asset: 'assets/bonus/felt_star_mobile_golden_stitch_02.png',
      x: 720,
      y: 170,
      scale: 0.08
    },
    {
      id: 'golden-stitch-3',
      name: 'Golden Stitch Charm',
      key: 'bonus-felt-star-mobile-workbench-stitch-3',
      asset: 'assets/bonus/felt_star_mobile_golden_stitch_03.png',
      x: 1160,
      y: 175,
      scale: 0.08
    }
  ],
  surprises: [
    {
      id: 'felt-star-mobile-workbench-twinkle',
      x: 430,
      y: 455,
      label: 'Twinkle!'
    },
    {
      id: 'felt-star-mobile-workbench-jingle',
      x: 300,
      y: 305,
      label: 'Jingle!'
    },
    {
      id: 'felt-star-mobile-workbench-snips',
      x: 650,
      y: 545,
      label: 'Snip!'
    }
  ],
  previousLevelId: 'golden-acorn-sorting-tray'
};
