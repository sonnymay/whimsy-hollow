export const cozyAquariumCorner = {
  id: 'cozy-aquarium-corner',
  title: 'Cozy Aquarium Corner',
  saveKey: 'whimsy-hollow:cozy-aquarium-corner',
  bonusSaveKey: 'whimsy-hollow:cozy-aquarium-corner:bonus',
  bonusLabel: 'Bubbles',
  bonusFoundText: 'Bubble!',
  background: {
    key: 'cozyAquariumCornerBackground',
    path: 'assets/backgrounds/cozy_aquarium_corner.webp'
  },
  objects: [
    {
      id: 'fish-food-tin',
      name: 'Fish Food Tin',
      requester: 'Penny Pebblebrook',
      clue: 'A fish food tin waits beside the glowing aquarium.',
      key: 'object-cozy-aquarium-corner-fish-food-tin',
      asset: 'assets/objects/cozy_aquarium_corner_fish_food_tin.png',
      x: 285,
      y: 370,
      scale: 0.22
    },
    {
      id: 'tiny-aquarium-net',
      name: 'Tiny Aquarium Net',
      requester: 'Penny Pebblebrook',
      clue: 'A tiny aquarium net hangs below the tank shelf.',
      key: 'object-cozy-aquarium-corner-tiny-net',
      asset: 'assets/objects/cozy_aquarium_corner_tiny_net.png',
      x: 475,
      y: 575,
      scale: 0.22
    },
    {
      id: 'glass-pebble-scoop',
      name: 'Pebble Scoop',
      requester: 'Penny Pebblebrook',
      clue: 'A glass pebble scoop rests on the right table.',
      key: 'object-cozy-aquarium-corner-pebble-scoop',
      asset: 'assets/objects/cozy_aquarium_corner_pebble_scoop.png',
      x: 1125,
      y: 475,
      scale: 0.22
    },
    {
      id: 'striped-shell-charm',
      name: 'Shell Charm',
      requester: 'Penny Pebblebrook',
      clue: 'A striped shell charm sits near the lower left shelf.',
      key: 'object-cozy-aquarium-corner-shell-charm',
      asset: 'assets/objects/cozy_aquarium_corner_shell_charm.png',
      x: 260,
      y: 560,
      scale: 0.22
    },
    {
      id: 'plant-weight-ring',
      name: 'Plant Weight',
      requester: 'Penny Pebblebrook',
      clue: 'A plant weight ring is tucked near the aquarium plants.',
      key: 'object-cozy-aquarium-corner-plant-weight',
      asset: 'assets/objects/cozy_aquarium_corner_plant_weight.png',
      x: 760,
      y: 405,
      scale: 0.22
    },
    {
      id: 'small-algae-scraper',
      name: 'Algae Scraper',
      requester: 'Penny Pebblebrook',
      clue: 'A small algae scraper leans by the aquarium cabinet.',
      key: 'object-cozy-aquarium-corner-algae-scraper',
      asset: 'assets/objects/cozy_aquarium_corner_algae_scraper.png',
      x: 635,
      y: 620,
      scale: 0.22
    },
    {
      id: 'ceramic-castle-ornament',
      name: 'Castle Ornament',
      requester: 'Penny Pebblebrook',
      clue: 'A ceramic castle ornament hides among the tank stones.',
      key: 'object-cozy-aquarium-corner-castle-ornament',
      asset: 'assets/objects/cozy_aquarium_corner_castle_ornament.png',
      x: 640,
      y: 330,
      scale: 0.22
    },
    {
      id: 'driftwood-twig',
      name: 'Driftwood Twig',
      requester: 'Penny Pebblebrook',
      clue: 'A driftwood twig lies near the basket on the right.',
      key: 'object-cozy-aquarium-corner-driftwood-twig',
      asset: 'assets/objects/cozy_aquarium_corner_driftwood_twig.png',
      x: 1070,
      y: 635,
      scale: 0.22
    },
    {
      id: 'blue-waterdrop-bottle',
      name: 'Water-Drop Bottle',
      requester: 'Penny Pebblebrook',
      clue: 'A blue water-drop bottle sits below the aquarium.',
      key: 'object-cozy-aquarium-corner-waterdrop-bottle',
      asset: 'assets/objects/cozy_aquarium_corner_waterdrop_bottle.png',
      x: 775,
      y: 590,
      scale: 0.22
    },
    {
      id: 'folded-care-card',
      name: 'Care Card',
      requester: 'Penny Pebblebrook',
      clue: 'A folded care card is tucked beside the reading chair.',
      key: 'object-cozy-aquarium-corner-care-card',
      asset: 'assets/objects/cozy_aquarium_corner_care_card.png',
      x: 990,
      y: 330,
      scale: 0.22
    }
  ],
  bonusEnvelopes: [
    {
      id: 'pearly-bubble-1',
      name: 'Pearly Bubble',
      key: 'bonus-cozy-aquarium-corner-bubble-1',
      asset: 'assets/bonus/cozy_aquarium_corner_pearly_bubble_01.png',
      x: 365,
      y: 150,
      scale: 0.16
    },
    {
      id: 'pearly-bubble-2',
      name: 'Pearly Bubble',
      key: 'bonus-cozy-aquarium-corner-bubble-2',
      asset: 'assets/bonus/cozy_aquarium_corner_pearly_bubble_02.png',
      x: 710,
      y: 185,
      scale: 0.16
    },
    {
      id: 'pearly-bubble-3',
      name: 'Pearly Bubble',
      key: 'bonus-cozy-aquarium-corner-bubble-3',
      asset: 'assets/bonus/cozy_aquarium_corner_pearly_bubble_03.png',
      x: 1145,
      y: 165,
      scale: 0.16
    }
  ],
  surprises: [
    {
      id: 'aquarium-bubble-pop',
      x: 610,
      y: 275,
      label: 'Pop!'
    },
    {
      id: 'aquarium-lamp-glow',
      x: 820,
      y: 190,
      label: 'Glow!'
    },
    {
      id: 'aquarium-pebble-shine',
      x: 770,
      y: 420,
      label: 'Shine!'
    }
  ],
  previousLevelId: 'rainy-boot-mudroom'
};
