export const sugarplumCandyCounter = {
  id: 'sugarplum-candy-counter',
  title: 'Sugarplum Candy Counter',
  saveKey: 'whimsy-hollow:sugarplum-candy-counter',
  bonusSaveKey: 'whimsy-hollow:sugarplum-candy-counter:bonus',
  bonusLabel: 'Sugar Stars',
  bonusFoundText: 'Sugar star!',
  background: {
    key: 'sugarplumCandyCounterBackground',
    path: 'assets/backgrounds/sugarplum_candy_counter.webp'
  },
  objects: [
    {
      id: 'silver-candy-scoop',
      name: 'Candy Scoop',
      requester: 'Tilly Taffy',
      clue: 'A silver candy scoop rests near the peppermint jars.',
      key: 'object-sugarplum-candy-counter-candy-scoop',
      asset: 'assets/objects/sugarplum_candy_counter_silver_candy_scoop.png',
      x: 290,
      y: 405,
      scale: 0.19
    },
    {
      id: 'pink-peppermint-tin',
      name: 'Peppermint Tin',
      requester: 'Tilly Taffy',
      clue: 'A pink peppermint tin sits among the lower sweets.',
      key: 'object-sugarplum-candy-counter-peppermint-tin',
      asset: 'assets/objects/sugarplum_candy_counter_pink_peppermint_tin.png',
      x: 420,
      y: 545,
      scale: 0.2
    },
    {
      id: 'purple-ribbon-candy',
      name: 'Ribbon Candy',
      requester: 'Tilly Taffy',
      clue: 'A purple ribbon candy is tucked near the right baskets.',
      key: 'object-sugarplum-candy-counter-ribbon-candy',
      asset: 'assets/objects/sugarplum_candy_counter_purple_ribbon_candy.png',
      x: 1115,
      y: 455,
      scale: 0.2
    },
    {
      id: 'tiny-brass-scale-weight',
      name: 'Scale Weight',
      requester: 'Tilly Taffy',
      clue: 'A tiny brass weight waits by the candy scale.',
      key: 'object-sugarplum-candy-counter-scale-weight',
      asset: 'assets/objects/sugarplum_candy_counter_brass_scale_weight.png',
      x: 665,
      y: 305,
      scale: 0.2
    },
    {
      id: 'striped-candy-bag',
      name: 'Candy Bag',
      requester: 'Tilly Taffy',
      clue: 'A folded striped candy bag leans on the counter.',
      key: 'object-sugarplum-candy-counter-candy-bag',
      asset: 'assets/objects/sugarplum_candy_counter_striped_candy_bag.png',
      x: 735,
      y: 475,
      scale: 0.2
    },
    {
      id: 'blue-sugar-tongs',
      name: 'Sugar Tongs',
      requester: 'Tilly Taffy',
      clue: 'Blue sugar tongs lie near the front cloth.',
      key: 'object-sugarplum-candy-counter-sugar-tongs',
      asset: 'assets/objects/sugarplum_candy_counter_blue_sugar_tongs.png',
      x: 510,
      y: 615,
      scale: 0.2
    },
    {
      id: 'lemon-drop-jar',
      name: 'Lemon Drop Jar',
      requester: 'Tilly Taffy',
      clue: 'A lemon drop jar glows below the window shelf.',
      key: 'object-sugarplum-candy-counter-lemon-drop-jar',
      asset: 'assets/objects/sugarplum_candy_counter_lemon_drop_jar.png',
      x: 1035,
      y: 645,
      scale: 0.2
    },
    {
      id: 'bonbon-box',
      name: 'Bonbon Box',
      requester: 'Tilly Taffy',
      clue: 'A bonbon box is hidden beside the little wooden drawer.',
      key: 'object-sugarplum-candy-counter-bonbon-box',
      asset: 'assets/objects/sugarplum_candy_counter_bonbon_box.png',
      x: 1120,
      y: 580,
      scale: 0.2
    },
    {
      id: 'tiny-paper-cone',
      name: 'Paper Cone',
      requester: 'Tilly Taffy',
      clue: 'A tiny paper cone rests near the wrapped candy pile.',
      key: 'object-sugarplum-candy-counter-paper-cone',
      asset: 'assets/objects/sugarplum_candy_counter_tiny_paper_cone.png',
      x: 840,
      y: 420,
      scale: 0.19
    },
    {
      id: 'star-lollipop',
      name: 'Star Lollipop',
      requester: 'Tilly Taffy',
      clue: 'A star lollipop shines near the hanging lights.',
      key: 'object-sugarplum-candy-counter-star-lollipop',
      asset: 'assets/objects/sugarplum_candy_counter_star_lollipop.png',
      x: 390,
      y: 190,
      scale: 0.18
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-sugar-star-1',
      name: 'Golden Sugar Star',
      key: 'bonus-sugarplum-candy-counter-sugar-star-1',
      asset: 'assets/bonus/sugarplum_candy_counter_golden_sugar_star_01.png',
      x: 275,
      y: 165,
      scale: 0.13
    },
    {
      id: 'golden-sugar-star-2',
      name: 'Golden Sugar Star',
      key: 'bonus-sugarplum-candy-counter-sugar-star-2',
      asset: 'assets/bonus/sugarplum_candy_counter_golden_sugar_star_02.png',
      x: 695,
      y: 155,
      scale: 0.13
    },
    {
      id: 'golden-sugar-star-3',
      name: 'Golden Sugar Star',
      key: 'bonus-sugarplum-candy-counter-sugar-star-3',
      asset: 'assets/bonus/sugarplum_candy_counter_golden_sugar_star_03.png',
      x: 1085,
      y: 180,
      scale: 0.13
    }
  ],
  surprises: [
    {
      id: 'candy-counter-lamp-glow',
      x: 190,
      y: 505,
      label: 'Glow!'
    },
    {
      id: 'candy-counter-scale-ding',
      x: 650,
      y: 280,
      label: 'Ding!'
    },
    {
      id: 'candy-counter-wrapper-crinkle',
      x: 890,
      y: 455,
      label: 'Crinkle!'
    }
  ],
  previousLevelId: 'bellflower-florist-cart'
};
