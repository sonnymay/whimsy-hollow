export const cozySockDarningBasket = {
  id: 'cozy-sock-darning-basket',
  title: 'Cozy Sock Darning Basket',
  saveKey: 'whimsy-hollow:cozy-sock-darning-basket',
  bonusSaveKey: 'whimsy-hollow:cozy-sock-darning-basket:bonus',
  bonusLabel: 'Yarn Stars',
  bonusFoundText: 'Yarn star!',
  background: {
    key: 'cozySockDarningBasketBackground',
    path: 'assets/backgrounds/cozy_sock_darning_basket.webp'
  },
  objects: [
    {
      id: 'wooden-darning-egg',
      name: 'Darning Egg',
      requester: 'Mabel Mender',
      clue: 'A smooth wooden darning egg waits near the sunny yarn basket.',
      key: 'object-cozy-sock-darning-basket-wooden-darning-egg',
      asset: 'assets/objects/sock_darning_wooden_egg.png',
      x: 595,
      y: 390,
      scale: 0.16
    },
    {
      id: 'brass-thimble',
      name: 'Brass Thimble',
      requester: 'Mabel Mender',
      clue: 'A tiny brass thimble sits beside the buttons on the mending table.',
      key: 'object-cozy-sock-darning-basket-brass-thimble',
      asset: 'assets/objects/sock_darning_brass_thimble.png',
      x: 770,
      y: 485,
      scale: 0.15
    },
    {
      id: 'embroidered-sock-patch',
      name: 'Sock Patch',
      requester: 'Mabel Mender',
      clue: 'A heart patch rests on the folded sock near the middle of the table.',
      key: 'object-cozy-sock-darning-basket-embroidered-sock-patch',
      asset: 'assets/objects/sock_darning_sock_patch.png',
      x: 675,
      y: 435,
      scale: 0.15
    },
    {
      id: 'blue-thread-spool',
      name: 'Blue Thread',
      requester: 'Mabel Mender',
      clue: 'A blue thread spool is tucked on the upper right shelf.',
      key: 'object-cozy-sock-darning-basket-blue-thread-spool',
      asset: 'assets/objects/sock_darning_blue_thread_spool.png',
      x: 1045,
      y: 145,
      scale: 0.15
    },
    {
      id: 'ribbon-measuring-tape',
      name: 'Measuring Tape',
      requester: 'Mabel Mender',
      clue: 'A soft measuring tape curls along the front right table edge.',
      key: 'object-cozy-sock-darning-basket-ribbon-measuring-tape',
      asset: 'assets/objects/sock_darning_measuring_tape.png',
      x: 1005,
      y: 520,
      scale: 0.16
    },
    {
      id: 'red-heart-button',
      name: 'Heart Button',
      requester: 'Mabel Mender',
      clue: 'A red heart button hides among the lower left craft shelves.',
      key: 'object-cozy-sock-darning-basket-red-heart-button',
      asset: 'assets/objects/sock_darning_heart_button.png',
      x: 245,
      y: 575,
      scale: 0.14
    },
    {
      id: 'wool-needle-card',
      name: 'Needle Card',
      requester: 'Mabel Mender',
      clue: 'A wool needle card leans by the folded blankets on the left.',
      key: 'object-cozy-sock-darning-basket-wool-needle-card',
      asset: 'assets/objects/sock_darning_needle_card.png',
      x: 350,
      y: 455,
      scale: 0.15
    },
    {
      id: 'stork-scissors',
      name: 'Stork Scissors',
      requester: 'Mabel Mender',
      clue: 'Small stork scissors glint near the hanging thread cards.',
      key: 'object-cozy-sock-darning-basket-stork-scissors',
      asset: 'assets/objects/sock_darning_stork_scissors.png',
      x: 475,
      y: 215,
      scale: 0.15
    },
    {
      id: 'lavender-sachet',
      name: 'Lavender Sachet',
      requester: 'Mabel Mender',
      clue: 'A lavender sachet rests near the daisies by the cozy hearth.',
      key: 'object-cozy-sock-darning-basket-lavender-sachet',
      asset: 'assets/objects/sock_darning_lavender_sachet.png',
      x: 1110,
      y: 430,
      scale: 0.15
    },
    {
      id: 'carved-sock-stretcher',
      name: 'Sock Stretcher',
      requester: 'Mabel Mender',
      clue: 'A carved sock stretcher peeks from the basket under the table.',
      key: 'object-cozy-sock-darning-basket-carved-sock-stretcher',
      asset: 'assets/objects/sock_darning_sock_stretcher.png',
      x: 835,
      y: 610,
      scale: 0.15
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-yarn-star-1',
      name: 'Golden Yarn Star',
      key: 'bonus-cozy-sock-darning-basket-yarn-star-1',
      asset: 'assets/bonus/sock_darning_yarn_star_01.png',
      x: 225,
      y: 165,
      scale: 0.09
    },
    {
      id: 'golden-yarn-star-2',
      name: 'Golden Yarn Star',
      key: 'bonus-cozy-sock-darning-basket-yarn-star-2',
      asset: 'assets/bonus/sock_darning_yarn_star_02.png',
      x: 720,
      y: 160,
      scale: 0.09
    },
    {
      id: 'golden-yarn-star-3',
      name: 'Golden Yarn Star',
      key: 'bonus-cozy-sock-darning-basket-yarn-star-3',
      asset: 'assets/bonus/sock_darning_yarn_star_03.png',
      x: 1145,
      y: 185,
      scale: 0.09
    }
  ],
  surprises: [
    {
      id: 'cozy-sock-darning-basket-snug',
      x: 760,
      y: 355,
      label: 'Snug!'
    },
    {
      id: 'cozy-sock-darning-basket-stitch',
      x: 475,
      y: 215,
      label: 'Stitch!'
    },
    {
      id: 'cozy-sock-darning-basket-warm',
      x: 1095,
      y: 515,
      label: 'Warm!'
    }
  ],
  previousLevelId: 'hummingbird-feeder-paint-shelf'
};
