export const paperBoatRainyWindow = {
  id: 'paper-boat-rainy-window',
  title: 'Paper Boat Rainy Window',
  saveKey: 'whimsy-hollow:paper-boat-rainy-window',
  bonusSaveKey: 'whimsy-hollow:paper-boat-rainy-window:bonus',
  bonusLabel: 'Rain Charms',
  bonusFoundText: 'Rain charm!',
  background: {
    key: 'paperBoatRainyWindowBackground',
    path: 'assets/backgrounds/paper_boat_rainy_window.webp'
  },
  objects: [
    {
      id: 'folded-boat',
      name: 'Folded Paper Boat',
      requester: 'Marina Blue',
      clue: 'A folded paper boat waits on the rainy window ledge.',
      key: 'object-paper-boat-folded-boat',
      asset: 'assets/objects/paper_boat_folded_boat.png',
      x: 335,
      y: 405,
      scale: 0.13
    },
    {
      id: 'cork-buoy',
      name: 'Cork Buoy',
      requester: 'Marina Blue',
      clue: 'A cork buoy rests near the front-left edge of the craft table.',
      key: 'object-paper-boat-cork-buoy',
      asset: 'assets/objects/paper_boat_cork_buoy.png',
      x: 360,
      y: 560,
      scale: 0.12
    },
    {
      id: 'anchor-charm',
      name: 'Anchor Charm',
      requester: 'Marina Blue',
      clue: 'A tiny anchor charm hides near the scattered blue beads.',
      key: 'object-paper-boat-anchor-charm',
      asset: 'assets/objects/paper_boat_anchor_charm.png',
      x: 915,
      y: 580,
      scale: 0.12
    },
    {
      id: 'blue-ribbon-spool',
      name: 'Blue Ribbon Spool',
      requester: 'Marina Blue',
      clue: 'A blue ribbon spool sits on the right side of the desk.',
      key: 'object-paper-boat-blue-ribbon-spool',
      asset: 'assets/objects/paper_boat_blue_ribbon_spool.png',
      x: 1115,
      y: 525,
      scale: 0.12
    },
    {
      id: 'raindrop-bead',
      name: 'Raindrop Bead',
      requester: 'Marina Blue',
      clue: 'A glassy raindrop bead glimmers by the little potted plant.',
      key: 'object-paper-boat-raindrop-bead',
      asset: 'assets/objects/paper_boat_raindrop_bead.png',
      x: 580,
      y: 390,
      scale: 0.12
    },
    {
      id: 'wax-seal-stamp',
      name: 'Wax Seal Stamp',
      requester: 'Marina Blue',
      clue: 'The wax seal stamp is tucked among papers near the middle front.',
      key: 'object-paper-boat-wax-seal-stamp',
      asset: 'assets/objects/paper_boat_wax_seal_stamp.png',
      x: 955,
      y: 615,
      scale: 0.12
    },
    {
      id: 'wooden-oar',
      name: 'Mini Wooden Oar',
      requester: 'Marina Blue',
      clue: 'A miniature wooden oar lies across the lower paper scraps.',
      key: 'object-paper-boat-wooden-oar',
      asset: 'assets/objects/paper_boat_wooden_oar.png',
      x: 730,
      y: 625,
      scale: 0.12
    },
    {
      id: 'twine-spool',
      name: 'Twine Spool',
      requester: 'Marina Blue',
      clue: 'A roll of twine sits just below the warm desk lamp.',
      key: 'object-paper-boat-twine-spool',
      asset: 'assets/objects/paper_boat_twine_spool.png',
      x: 930,
      y: 335,
      scale: 0.12
    },
    {
      id: 'map-scrap',
      name: 'Map Scrap',
      requester: 'Marina Blue',
      clue: 'A torn map scrap is tucked beside the blue ribbon curl.',
      key: 'object-paper-boat-map-scrap',
      asset: 'assets/objects/paper_boat_map_scrap.png',
      x: 1015,
      y: 600,
      scale: 0.12
    },
    {
      id: 'compass-charm',
      name: 'Compass Charm',
      requester: 'Marina Blue',
      clue: 'A tiny compass charm rests near the tray of shiny parts.',
      key: 'object-paper-boat-compass-charm',
      asset: 'assets/objects/paper_boat_compass_charm.png',
      x: 830,
      y: 435,
      scale: 0.12
    }
  ],
  bonusEnvelopes: [
    {
      id: 'rain-charm-1',
      name: 'Raindrop Star',
      key: 'bonus-paper-boat-rain-charm-1',
      asset: 'assets/bonus/paper_boat_raindrop_star_01.png',
      x: 225,
      y: 155,
      scale: 0.08
    },
    {
      id: 'rain-charm-2',
      name: 'Golden Sail',
      key: 'bonus-paper-boat-rain-charm-2',
      asset: 'assets/bonus/paper_boat_golden_sail_02.png',
      x: 710,
      y: 150,
      scale: 0.08
    },
    {
      id: 'rain-charm-3',
      name: 'Puddle Gem',
      key: 'bonus-paper-boat-rain-charm-3',
      asset: 'assets/bonus/paper_boat_puddle_gem_03.png',
      x: 1170,
      y: 170,
      scale: 0.08
    }
  ],
  surprises: [
    { x: 390, y: 415, label: 'Float!' },
    { x: 720, y: 570, label: 'Splash!' },
    { x: 1060, y: 590, label: 'Drip!' }
  ],
  previousLevelId: 'wind-up-music-box-desk'
};
