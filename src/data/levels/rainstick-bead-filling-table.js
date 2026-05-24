export const rainstickBeadFillingTable = {
  id: 'rainstick-bead-filling-table',
  title: 'Rainstick Bead Filling Table',
  saveKey: 'whimsy-hollow:rainstick-bead-filling-table',
  bonusSaveKey: 'whimsy-hollow:rainstick-bead-filling-table:bonus',
  bonusLabel: 'Raindrops',
  bonusFoundText: 'Raindrop charm!',
  background: {
    key: 'rainstickBeadFillingTableBackground',
    path: 'assets/backgrounds/rainstick_bead_filling_table.webp'
  },
  objects: [
    {
      id: 'rainstick-tube',
      name: 'Rainstick Tube',
      requester: 'Nori Sprig',
      clue: 'A decorated rainstick tube rests across the middle of the table.',
      key: 'object-rainstick-bead-rainstick-tube',
      asset: 'assets/objects/rainstick_bead_rainstick_tube.png',
      x: 620,
      y: 395,
      scale: 0.14
    },
    {
      id: 'paper-funnel',
      name: 'Paper Funnel',
      requester: 'Nori Sprig',
      clue: 'The paper funnel is tipped near the scattered beads.',
      key: 'object-rainstick-bead-paper-funnel',
      asset: 'assets/objects/rainstick_bead_paper_funnel.png',
      x: 560,
      y: 355,
      scale: 0.14
    },
    {
      id: 'bead-scoop',
      name: 'Bead Scoop',
      requester: 'Nori Sprig',
      clue: 'A tiny scoop lies beside the bead bowls.',
      key: 'object-rainstick-bead-scoop',
      asset: 'assets/objects/rainstick_bead_scoop.png',
      x: 870,
      y: 400,
      scale: 0.14
    },
    {
      id: 'cork-stoppers',
      name: 'Cork Stoppers',
      requester: 'Nori Sprig',
      clue: 'Two cork stoppers sit near the front edge of the bench.',
      key: 'object-rainstick-bead-cork-stoppers',
      asset: 'assets/objects/rainstick_bead_cork_stoppers.png',
      x: 690,
      y: 480,
      scale: 0.14
    },
    {
      id: 'seed-jar',
      name: 'Seed Jar',
      requester: 'Nori Sprig',
      clue: 'The seed jar waits on the shelf beside the window.',
      key: 'object-rainstick-bead-seed-jar',
      asset: 'assets/objects/rainstick_bead_seed_jar.png',
      x: 505,
      y: 255,
      scale: 0.13
    },
    {
      id: 'painted-band',
      name: 'Painted Band',
      requester: 'Nori Sprig',
      clue: 'A curved painted band rests near the left table stool.',
      key: 'object-rainstick-bead-painted-band',
      asset: 'assets/objects/rainstick_bead_painted_band.png',
      x: 280,
      y: 600,
      scale: 0.16
    },
    {
      id: 'twine-wrap',
      name: 'Twine Wrap',
      requester: 'Nori Sprig',
      clue: 'A roll of twine stands beside the right-side bead bowls.',
      key: 'object-rainstick-bead-twine-wrap',
      asset: 'assets/objects/rainstick_bead_twine_wrap.png',
      x: 960,
      y: 360,
      scale: 0.14
    },
    {
      id: 'small-mallet',
      name: 'Small Mallet',
      requester: 'Nori Sprig',
      clue: 'The small mallet lies across the middle of the workbench.',
      key: 'object-rainstick-bead-small-mallet',
      asset: 'assets/objects/rainstick_bead_small_mallet.png',
      x: 610,
      y: 470,
      scale: 0.14
    },
    {
      id: 'seed-bowl',
      name: 'Seed Bowl',
      requester: 'Nori Sprig',
      clue: 'A seed bowl sits on the low round stool.',
      key: 'object-rainstick-bead-seed-bowl',
      asset: 'assets/objects/rainstick_bead_seed_bowl.png',
      x: 330,
      y: 605,
      scale: 0.14
    },
    {
      id: 'brass-sound-pin',
      name: 'Brass Sound Pin',
      requester: 'Nori Sprig',
      clue: 'A brass sound pin points along the front of the table.',
      key: 'object-rainstick-bead-brass-pin',
      asset: 'assets/objects/rainstick_bead_brass_pin.png',
      x: 805,
      y: 545,
      scale: 0.13
    }
  ],
  bonusEnvelopes: [
    {
      id: 'raindrop-charm-1',
      name: 'Raindrop Charm',
      key: 'bonus-rainstick-bead-raindrop-charm-1',
      asset: 'assets/bonus/rainstick_bead_raindrop_charm_01.png',
      x: 230,
      y: 160,
      scale: 0.08
    },
    {
      id: 'raindrop-charm-2',
      name: 'Raindrop Charm',
      key: 'bonus-rainstick-bead-raindrop-charm-2',
      asset: 'assets/bonus/rainstick_bead_raindrop_charm_02.png',
      x: 720,
      y: 165,
      scale: 0.08
    },
    {
      id: 'raindrop-charm-3',
      name: 'Raindrop Charm',
      key: 'bonus-rainstick-bead-raindrop-charm-3',
      asset: 'assets/bonus/rainstick_bead_raindrop_charm_03.png',
      x: 1160,
      y: 185,
      scale: 0.08
    }
  ],
  surprises: [
    { x: 510, y: 400, label: 'Shhhh' },
    { x: 830, y: 445, label: 'Patter!' },
    { x: 1045, y: 360, label: 'Tinkle!' }
  ],
  previousLevelId: 'storybook-mask-making-table'
};
