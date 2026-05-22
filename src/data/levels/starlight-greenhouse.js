export const starlightGreenhouse = {
  id: 'starlight-greenhouse',
  title: 'Starlight Greenhouse',
  saveKey: 'whimsy-hollow:starlight-greenhouse',
  bonusSaveKey: 'whimsy-hollow:starlight-greenhouse:bonus',
  bonusLabel: 'Glow Motes',
  bonusFoundText: 'Glow!',
  background: {
    key: 'starlightGreenhouseBackground',
    path: 'assets/backgrounds/scene_starlight_greenhouse_bg.png'
  },
  objects: [
    {
      id: 'greenhouse-tiny-lantern',
      name: 'Lantern',
      requester: 'Moon Gardener',
      clue: 'A tiny lantern warms the flower table.',
      key: 'object-greenhouse-tiny-lantern',
      asset: 'assets/objects/greenhouse_tiny_lantern.png',
      x: 792,
      y: 394,
      scale: 0.09
    },
    {
      id: 'greenhouse-star-key',
      name: 'Star Key',
      requester: 'Moon Gardener',
      clue: 'A star key hides near the seed tray.',
      key: 'object-greenhouse-star-key',
      asset: 'assets/objects/greenhouse_star_key.png',
      x: 1028,
      y: 522,
      scale: 0.09
    },
    {
      id: 'greenhouse-watering-can',
      name: 'Can',
      requester: 'Moon Gardener',
      clue: 'A watering can waits by the right pots.',
      key: 'object-greenhouse-watering-can',
      asset: 'assets/objects/greenhouse_watering_can.png',
      x: 1148,
      y: 604,
      scale: 0.13
    },
    {
      id: 'greenhouse-moon-crystal',
      name: 'Crystal',
      requester: 'Moon Gardener',
      clue: 'A blue crystal glows beside the purple flowers.',
      key: 'object-greenhouse-moon-crystal',
      asset: 'assets/objects/greenhouse_moon_crystal.png',
      x: 208,
      y: 388,
      scale: 0.42
    },
    {
      id: 'greenhouse-flower-button',
      name: 'Button',
      requester: 'Moon Gardener',
      clue: 'A flower button rests near the shelf blooms.',
      key: 'object-greenhouse-flower-button',
      asset: 'assets/objects/greenhouse_flower_button.png',
      x: 466,
      y: 356,
      scale: 0.42
    },
    {
      id: 'greenhouse-glowing-feather',
      name: 'Feather',
      requester: 'Moon Gardener',
      clue: 'A soft feather drifts by the hanging plants.',
      key: 'object-greenhouse-glowing-feather',
      asset: 'assets/objects/greenhouse_glowing_feather.png',
      x: 656,
      y: 210,
      scale: 0.4
    },
    {
      id: 'greenhouse-mushroom-basket',
      name: 'Basket',
      requester: 'Moon Gardener',
      clue: 'A mushroom basket sits under the bench.',
      key: 'object-greenhouse-mushroom-basket',
      asset: 'assets/objects/greenhouse_mushroom_basket.png',
      x: 876,
      y: 626,
      scale: 0.43
    },
    {
      id: 'greenhouse-frog-statue',
      name: 'Frog',
      requester: 'Moon Gardener',
      clue: 'A frog statue watches the stone path.',
      key: 'object-greenhouse-frog-statue',
      asset: 'assets/objects/greenhouse_frog_statue.png',
      x: 328,
      y: 588,
      scale: 0.42
    },
    {
      id: 'greenhouse-honey-dipper',
      name: 'Dipper',
      requester: 'Moon Gardener',
      clue: 'A honey dipper lies beside the seed box.',
      key: 'object-greenhouse-honey-dipper',
      asset: 'assets/objects/greenhouse_honey_dipper.png',
      x: 1006,
      y: 462,
      scale: 0.12
    },
    {
      id: 'greenhouse-old-key',
      name: 'Old Key',
      requester: 'Moon Gardener',
      clue: 'An old key rests near the window shelf.',
      key: 'object-greenhouse-old-key',
      asset: 'assets/objects/greenhouse_old_key.png',
      x: 1118,
      y: 286,
      scale: 0.07
    }
  ],
  bonusEnvelopes: [
    {
      id: 'greenhouse-glow-mote-1',
      name: 'Blue Glow Mote',
      key: 'bonus-greenhouse-glow-mote-1',
      asset: 'assets/bonus/greenhouse_glow_mote_01.png',
      x: 532,
      y: 164,
      scale: 0.08
    },
    {
      id: 'greenhouse-glow-mote-2',
      name: 'Gold Glow Mote',
      key: 'bonus-greenhouse-glow-mote-2',
      asset: 'assets/bonus/greenhouse_glow_mote_02.png',
      x: 892,
      y: 184,
      scale: 0.08
    },
    {
      id: 'greenhouse-glow-mote-3',
      name: 'Pink Glow Mote',
      key: 'bonus-greenhouse-glow-mote-3',
      asset: 'assets/bonus/greenhouse_glow_mote_03.png',
      x: 1160,
      y: 508,
      scale: 0.08
    }
  ],
  surprises: [
    {
      id: 'greenhouse-moon-window',
      x: 640,
      y: 188,
      label: 'Moon!'
    },
    {
      id: 'greenhouse-lantern-twinkle',
      x: 768,
      y: 360,
      label: 'Twinkle!'
    },
    {
      id: 'greenhouse-flowers-sway',
      x: 292,
      y: 332,
      label: 'Bloom!'
    }
  ],
  previousLevelId: 'autumn-apple-orchard'
};
