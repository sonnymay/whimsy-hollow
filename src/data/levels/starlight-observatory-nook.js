export const starlightObservatoryNook = {
  id: 'starlight-observatory-nook',
  title: 'Starlight Observatory Nook',
  saveKey: 'whimsy-hollow:starlight-observatory-nook',
  bonusSaveKey: 'whimsy-hollow:starlight-observatory-nook:bonus',
  bonusLabel: 'Stars',
  bonusFoundText: 'Star!',
  background: {
    key: 'starlightObservatoryNookBackground',
    path: 'assets/backgrounds/starlight_observatory_nook.webp'
  },
  objects: [
    {
      id: 'small-brass-telescope',
      name: 'Telescope',
      requester: 'Nova Nightwatch',
      clue: 'A small brass telescope points toward the round window.',
      key: 'object-starlight-observatory-nook-telescope',
      asset: 'assets/objects/starlight_observatory_nook_telescope.png',
      x: 960,
      y: 332,
      scale: 0.17
    },
    {
      id: 'blue-star-chart',
      name: 'Star Chart',
      requester: 'Nova Nightwatch',
      clue: 'A blue star chart hangs on the left wall.',
      key: 'object-starlight-observatory-nook-star-chart',
      asset: 'assets/objects/starlight_observatory_nook_star_chart.png',
      x: 282,
      y: 225,
      scale: 0.16
    },
    {
      id: 'tiny-moon-globe',
      name: 'Moon Globe',
      requester: 'Nova Nightwatch',
      clue: 'A tiny moon globe sits among the shelf journals.',
      key: 'object-starlight-observatory-nook-moon-globe',
      asset: 'assets/objects/starlight_observatory_nook_moon_globe.png',
      x: 470,
      y: 260,
      scale: 0.17
    },
    {
      id: 'velvet-lens-cloth',
      name: 'Lens Cloth',
      requester: 'Nova Nightwatch',
      clue: 'A velvet lens cloth is folded near the lower basket.',
      key: 'object-starlight-observatory-nook-lens-cloth',
      asset: 'assets/objects/starlight_observatory_nook_lens_cloth.png',
      x: 885,
      y: 590,
      scale: 0.17
    },
    {
      id: 'clear-crystal-prism',
      name: 'Crystal Prism',
      requester: 'Nova Nightwatch',
      clue: 'A clear prism glints on the writing desk.',
      key: 'object-starlight-observatory-nook-crystal-prism',
      asset: 'assets/objects/starlight_observatory_nook_crystal_prism.png',
      x: 380,
      y: 385,
      scale: 0.16
    },
    {
      id: 'brass-astrolabe',
      name: 'Astrolabe',
      requester: 'Nova Nightwatch',
      clue: 'A brass astrolabe rests near the left lantern.',
      key: 'object-starlight-observatory-nook-astrolabe',
      asset: 'assets/objects/starlight_observatory_nook_astrolabe.png',
      x: 230,
      y: 352,
      scale: 0.17
    },
    {
      id: 'tiny-comet-charm',
      name: 'Comet Charm',
      requester: 'Nova Nightwatch',
      clue: 'A tiny comet charm streaks near the right shelves.',
      key: 'object-starlight-observatory-nook-comet-charm',
      asset: 'assets/objects/starlight_observatory_nook_comet_charm.png',
      x: 1070,
      y: 650,
      scale: 0.17
    },
    {
      id: 'constellation-notebook',
      name: 'Notebook',
      requester: 'Nova Nightwatch',
      clue: 'A constellation notebook is tucked below the bookcase.',
      key: 'object-starlight-observatory-nook-constellation-notebook',
      asset: 'assets/objects/starlight_observatory_nook_constellation_notebook.png',
      x: 510,
      y: 520,
      scale: 0.17
    },
    {
      id: 'silver-star-key',
      name: 'Star Key',
      requester: 'Nova Nightwatch',
      clue: 'A silver star key hangs near the telescope corner.',
      key: 'object-starlight-observatory-nook-star-key',
      asset: 'assets/objects/starlight_observatory_nook_star_key.png',
      x: 1120,
      y: 420,
      scale: 0.18
    },
    {
      id: 'wooden-tripod-knob',
      name: 'Tripod Knob',
      requester: 'Nova Nightwatch',
      clue: 'A wooden tripod knob hides near the lower right shelf.',
      key: 'object-starlight-observatory-nook-tripod-knob',
      asset: 'assets/objects/starlight_observatory_nook_tripod_knob.png',
      x: 1180,
      y: 610,
      scale: 0.18
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-star-1',
      name: 'Golden Star',
      key: 'bonus-starlight-observatory-nook-star-1',
      asset: 'assets/bonus/starlight_observatory_nook_golden_star_01.png',
      x: 615,
      y: 220,
      scale: 0.12
    },
    {
      id: 'golden-star-2',
      name: 'Golden Star',
      key: 'bonus-starlight-observatory-nook-star-2',
      asset: 'assets/bonus/starlight_observatory_nook_golden_star_02.png',
      x: 900,
      y: 430,
      scale: 0.12
    },
    {
      id: 'golden-star-3',
      name: 'Golden Star',
      key: 'bonus-starlight-observatory-nook-star-3',
      asset: 'assets/bonus/starlight_observatory_nook_golden_star_03.png',
      x: 270,
      y: 610,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'observatory-window-stars',
      x: 850,
      y: 165,
      label: 'Twinkle!'
    },
    {
      id: 'observatory-prism-glow',
      x: 312,
      y: 334,
      label: 'Glow!'
    },
    {
      id: 'observatory-telescope-view',
      x: 960,
      y: 302,
      label: 'Look!'
    }
  ],
  previousLevelId: 'cozy-cobbler-nook'
};
