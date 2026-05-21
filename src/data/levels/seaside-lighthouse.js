export const seasideLighthouse = {
  id: 'seaside-lighthouse',
  title: 'Seaside Lighthouse',
  saveKey: 'whimsy-hollow:seaside-lighthouse',
  bonusSaveKey: 'whimsy-hollow:seaside-lighthouse:bonus',
  bonusLabel: 'Sea Glass',
  bonusFoundText: 'Sea glass!',
  background: {
    key: 'seasideLighthouseBackground',
    path: 'assets/backgrounds/seaside_lighthouse.webp'
  },
  objects: [
    {
      id: 'brass-compass',
      name: 'Compass',
      requester: 'Keeper Nora',
      clue: 'A brass compass rests near the window light.',
      key: 'object-brass-compass',
      asset: 'assets/objects/lighthouse_compass.png',
      x: 780,
      y: 438,
      scale: 0.13
    },
    {
      id: 'spiral-seashell',
      name: 'Shell',
      requester: 'Keeper Nora',
      clue: 'A spiral shell sits by the low table.',
      key: 'object-spiral-seashell',
      asset: 'assets/objects/lighthouse_seashell.png',
      x: 360,
      y: 512,
      scale: 0.13
    },
    {
      id: 'tiny-spyglass',
      name: 'Spyglass',
      requester: 'Keeper Nora',
      clue: 'A tiny spyglass hides near the sill.',
      key: 'object-tiny-spyglass',
      asset: 'assets/objects/lighthouse_spyglass.png',
      x: 512,
      y: 306,
      scale: 0.13
    },
    {
      id: 'sailor-rope-knot',
      name: 'Rope',
      requester: 'Keeper Nora',
      clue: 'A rope knot curls by the cozy chair.',
      key: 'object-sailor-rope-knot',
      asset: 'assets/objects/lighthouse_rope_knot.png',
      x: 246,
      y: 628,
      scale: 0.13
    },
    {
      id: 'sea-glass-bottle',
      name: 'Bottle',
      requester: 'Keeper Nora',
      clue: 'A blue bottle shines on the shelf.',
      key: 'object-sea-glass-bottle',
      asset: 'assets/objects/lighthouse_sea_glass_bottle.png',
      x: 1038,
      y: 206,
      scale: 0.13
    },
    {
      id: 'pearl-button',
      name: 'Button',
      requester: 'Keeper Nora',
      clue: 'A pearl button is tucked by the shell bowl.',
      key: 'object-pearl-button',
      asset: 'assets/objects/lighthouse_pearl_button.png',
      x: 874,
      y: 612,
      scale: 0.12
    },
    {
      id: 'nautical-map',
      name: 'Map',
      requester: 'Keeper Nora',
      clue: 'A folded map waits near the desk.',
      key: 'object-nautical-map',
      asset: 'assets/objects/lighthouse_nautical_map.png',
      x: 956,
      y: 388,
      scale: 0.13
    },
    {
      id: 'driftwood-star',
      name: 'Star',
      requester: 'Keeper Nora',
      clue: 'A driftwood star rests near the rug.',
      key: 'object-driftwood-star',
      asset: 'assets/objects/lighthouse_driftwood_star.png',
      x: 642,
      y: 602,
      scale: 0.13
    },
    {
      id: 'brass-bell',
      name: 'Bell',
      requester: 'Keeper Nora',
      clue: 'A brass bell sits among the sea treasures.',
      key: 'object-brass-bell',
      asset: 'assets/objects/lighthouse_brass_bell.png',
      x: 1116,
      y: 536,
      scale: 0.13
    },
    {
      id: 'striped-lighthouse-mug',
      name: 'Mug',
      requester: 'Keeper Nora',
      clue: 'A striped mug waits on the little table.',
      key: 'object-striped-lighthouse-mug',
      asset: 'assets/objects/lighthouse_striped_mug.png',
      x: 428,
      y: 472,
      scale: 0.13
    }
  ],
  bonusEnvelopes: [
    {
      id: 'sea-glass-1',
      name: 'Teal Sea Glass',
      key: 'bonus-sea-glass-1',
      asset: 'assets/bonus/sea_glass_01.png',
      x: 336,
      y: 190,
      scale: 0.12
    },
    {
      id: 'sea-glass-2',
      name: 'Blue Sea Glass',
      key: 'bonus-sea-glass-2',
      asset: 'assets/bonus/sea_glass_02.png',
      x: 742,
      y: 208,
      scale: 0.12
    },
    {
      id: 'sea-glass-3',
      name: 'Green Sea Glass',
      key: 'bonus-sea-glass-3',
      asset: 'assets/bonus/sea_glass_03.png',
      x: 1172,
      y: 266,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'lighthouse-window-glow',
      x: 520,
      y: 230,
      label: 'Shine!'
    },
    {
      id: 'lighthouse-shell-clink',
      x: 884,
      y: 250,
      label: 'Clink!'
    },
    {
      id: 'lighthouse-ocean-breeze',
      x: 1118,
      y: 160,
      label: 'Whoosh!'
    }
  ],
  previousLevelId: 'snowy-cabin-loft'
};
