export const cloudLoomWeavingNook = {
  id: 'cloud-loom-weaving-nook',
  title: 'Cloud Loom Weaving Nook',
  saveKey: 'whimsy-hollow:cloud-loom-weaving-nook',
  bonusSaveKey: 'whimsy-hollow:cloud-loom-weaving-nook:bonus',
  bonusLabel: 'Cloud Charms',
  bonusFoundText: 'Cloud charm!',
  background: {
    key: 'cloudLoomWeavingNookBackground',
    path: 'assets/backgrounds/cloud_loom_weaving_nook.webp'
  },
  objects: [
    {
      id: 'wooden-weaving-shuttle',
      name: 'Weaving Shuttle',
      requester: 'Winnie Warp',
      clue: 'A wooden shuttle rests across the right side of the loom.',
      key: 'object-cloud-loom-weaving-nook-wooden-shuttle',
      asset: 'assets/objects/cloud_loom_weaving_nook_wooden_shuttle.png',
      x: 870,
      y: 385,
      scale: 0.2
    },
    {
      id: 'cloud-yarn-ball',
      name: 'Cloud Yarn',
      requester: 'Winnie Warp',
      clue: 'A fluffy cloud yarn ball sits near the lower left basket.',
      key: 'object-cloud-loom-weaving-nook-cloud-yarn-ball',
      asset: 'assets/objects/cloud_loom_weaving_nook_cloud_yarn_ball.png',
      x: 260,
      y: 635,
      scale: 0.19
    },
    {
      id: 'brass-yarn-needle',
      name: 'Yarn Needle',
      requester: 'Winnie Warp',
      clue: 'A brass yarn needle shines by the front worktable.',
      key: 'object-cloud-loom-weaving-nook-yarn-needle',
      asset: 'assets/objects/cloud_loom_weaving_nook_brass_yarn_needle.png',
      x: 805,
      y: 585,
      scale: 0.2
    },
    {
      id: 'blue-thread-bobbin',
      name: 'Thread Bobbin',
      requester: 'Winnie Warp',
      clue: 'A blue thread bobbin stands among the shelf spools.',
      key: 'object-cloud-loom-weaving-nook-thread-bobbin',
      asset: 'assets/objects/cloud_loom_weaving_nook_blue_thread_bobbin.png',
      x: 990,
      y: 135,
      scale: 0.19
    },
    {
      id: 'tiny-loom-comb',
      name: 'Loom Comb',
      requester: 'Winnie Warp',
      clue: 'A tiny loom comb waits in the left tool cup.',
      key: 'object-cloud-loom-weaving-nook-loom-comb',
      asset: 'assets/objects/cloud_loom_weaving_nook_tiny_loom_comb.png',
      x: 245,
      y: 355,
      scale: 0.19
    },
    {
      id: 'woven-coaster',
      name: 'Woven Coaster',
      requester: 'Winnie Warp',
      clue: 'A woven coaster lies on the bench below the window.',
      key: 'object-cloud-loom-weaving-nook-woven-coaster',
      asset: 'assets/objects/cloud_loom_weaving_nook_woven_coaster.png',
      x: 520,
      y: 500,
      scale: 0.19
    },
    {
      id: 'lavender-thread-card',
      name: 'Thread Card',
      requester: 'Winnie Warp',
      clue: 'A lavender thread card is tucked into the yarn cubbies.',
      key: 'object-cloud-loom-weaving-nook-thread-card',
      asset: 'assets/objects/cloud_loom_weaving_nook_lavender_thread_card.png',
      x: 385,
      y: 230,
      scale: 0.19
    },
    {
      id: 'small-spindle',
      name: 'Small Spindle',
      requester: 'Winnie Warp',
      clue: 'A small spindle rests near the front bobbin tray.',
      key: 'object-cloud-loom-weaving-nook-small-spindle',
      asset: 'assets/objects/cloud_loom_weaving_nook_small_spindle.png',
      x: 735,
      y: 635,
      scale: 0.19
    },
    {
      id: 'moon-tassel-charm',
      name: 'Moon Tassel',
      requester: 'Winnie Warp',
      clue: 'A moon tassel charm dangles from the left drawer area.',
      key: 'object-cloud-loom-weaving-nook-moon-tassel',
      asset: 'assets/objects/cloud_loom_weaving_nook_moon_tassel_charm.png',
      x: 320,
      y: 425,
      scale: 0.19
    },
    {
      id: 'ceramic-yarn-bowl',
      name: 'Yarn Bowl',
      requester: 'Winnie Warp',
      clue: 'A ceramic yarn bowl sits beside the sunny loom.',
      key: 'object-cloud-loom-weaving-nook-yarn-bowl',
      asset: 'assets/objects/cloud_loom_weaving_nook_ceramic_yarn_bowl.png',
      x: 1055,
      y: 470,
      scale: 0.19
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-cloud-1',
      name: 'Golden Cloud Charm',
      key: 'bonus-cloud-loom-weaving-nook-cloud-1',
      asset: 'assets/bonus/cloud_loom_weaving_nook_golden_cloud_01.png',
      x: 225,
      y: 205,
      scale: 0.12
    },
    {
      id: 'golden-cloud-2',
      name: 'Golden Cloud Charm',
      key: 'bonus-cloud-loom-weaving-nook-cloud-2',
      asset: 'assets/bonus/cloud_loom_weaving_nook_golden_cloud_02.png',
      x: 650,
      y: 155,
      scale: 0.12
    },
    {
      id: 'golden-cloud-3',
      name: 'Golden Cloud Charm',
      key: 'bonus-cloud-loom-weaving-nook-cloud-3',
      asset: 'assets/bonus/cloud_loom_weaving_nook_golden_cloud_03.png',
      x: 1130,
      y: 175,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'cloud-loom-soft-puff',
      x: 820,
      y: 360,
      label: 'Puff!'
    },
    {
      id: 'cloud-loom-thread-tug',
      x: 565,
      y: 520,
      label: 'Tug!'
    },
    {
      id: 'cloud-loom-charm-jingle',
      x: 315,
      y: 470,
      label: 'Jingle!'
    }
  ],
  previousLevelId: 'seashell-craft-nook'
};
