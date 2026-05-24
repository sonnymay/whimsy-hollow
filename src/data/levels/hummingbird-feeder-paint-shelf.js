export const hummingbirdFeederPaintShelf = {
  id: 'hummingbird-feeder-paint-shelf',
  title: 'Hummingbird Feeder Paint Shelf',
  saveKey: 'whimsy-hollow:hummingbird-feeder-paint-shelf',
  bonusSaveKey: 'whimsy-hollow:hummingbird-feeder-paint-shelf:bonus',
  bonusLabel: 'Nectar Drops',
  bonusFoundText: 'Nectar drop!',
  background: {
    key: 'hummingbirdFeederPaintShelfBackground',
    path: 'assets/backgrounds/hummingbird_feeder_paint_shelf.webp'
  },
  objects: [
    {
      id: 'glass-feeder-bulb',
      name: 'Feeder Bulb',
      requester: 'Ivy Nectarwell',
      clue: 'A tiny glass feeder bulb rests near the center paint pots.',
      key: 'object-hummingbird-feeder-paint-shelf-glass-feeder-bulb',
      asset: 'assets/objects/hummingbird_feeder_paint_shelf_glass_feeder_bulb.png',
      x: 700,
      y: 385,
      scale: 0.16
    },
    {
      id: 'red-flower-port',
      name: 'Flower Port',
      requester: 'Ivy Nectarwell',
      clue: 'A red flower feeder port is tucked on the left feeder shelf.',
      key: 'object-hummingbird-feeder-paint-shelf-red-flower-port',
      asset: 'assets/objects/hummingbird_feeder_paint_shelf_red_flower_port.png',
      x: 390,
      y: 225,
      scale: 0.16
    },
    {
      id: 'copper-hanging-hook',
      name: 'Copper Hook',
      requester: 'Ivy Nectarwell',
      clue: 'A copper hanging hook waits on the wall rail above the bench.',
      key: 'object-hummingbird-feeder-paint-shelf-copper-hanging-hook',
      asset: 'assets/objects/hummingbird_feeder_paint_shelf_copper_hanging_hook.png',
      x: 780,
      y: 165,
      scale: 0.15
    },
    {
      id: 'blue-paint-pot',
      name: 'Blue Paint Pot',
      requester: 'Ivy Nectarwell',
      clue: 'A small blue paint pot sits among the bright pots on the table.',
      key: 'object-hummingbird-feeder-paint-shelf-blue-paint-pot',
      asset: 'assets/objects/hummingbird_feeder_paint_shelf_blue_paint_pot.png',
      x: 860,
      y: 445,
      scale: 0.16
    },
    {
      id: 'wooden-sugar-scoop',
      name: 'Sugar Scoop',
      requester: 'Ivy Nectarwell',
      clue: 'A wooden sugar scoop rests beside the sugar jar.',
      key: 'object-hummingbird-feeder-paint-shelf-wooden-sugar-scoop',
      asset: 'assets/objects/hummingbird_feeder_paint_shelf_wooden_sugar_scoop.png',
      x: 990,
      y: 470,
      scale: 0.16
    },
    {
      id: 'green-twine-spool',
      name: 'Green Twine',
      requester: 'Ivy Nectarwell',
      clue: 'A green twine spool is tucked near the right workbench edge.',
      key: 'object-hummingbird-feeder-paint-shelf-green-twine-spool',
      asset: 'assets/objects/hummingbird_feeder_paint_shelf_green_twine_spool.png',
      x: 1125,
      y: 535,
      scale: 0.16
    },
    {
      id: 'cork-stopper',
      name: 'Cork Stopper',
      requester: 'Ivy Nectarwell',
      clue: 'A cork stopper waits in the small tray beneath the left shelf.',
      key: 'object-hummingbird-feeder-paint-shelf-cork-stopper',
      asset: 'assets/objects/hummingbird_feeder_paint_shelf_cork_stopper.png',
      x: 350,
      y: 485,
      scale: 0.16
    },
    {
      id: 'cleaning-brush',
      name: 'Cleaning Brush',
      requester: 'Ivy Nectarwell',
      clue: 'A thin cleaning brush lies across the front of the painting table.',
      key: 'object-hummingbird-feeder-paint-shelf-cleaning-brush',
      asset: 'assets/objects/hummingbird_feeder_paint_shelf_cleaning_brush.png',
      x: 640,
      y: 515,
      scale: 0.15
    },
    {
      id: 'blank-seed-tag',
      name: 'Seed Tag',
      requester: 'Ivy Nectarwell',
      clue: 'A blank seed packet tag leans near the sunny window.',
      key: 'object-hummingbird-feeder-paint-shelf-blank-seed-tag',
      asset: 'assets/objects/hummingbird_feeder_paint_shelf_blank_seed_tag.png',
      x: 1090,
      y: 425,
      scale: 0.16
    },
    {
      id: 'flower-stencil-card',
      name: 'Flower Stencil',
      requester: 'Ivy Nectarwell',
      clue: 'A flower stencil card rests on the cloth by the paint palette.',
      key: 'object-hummingbird-feeder-paint-shelf-flower-stencil-card',
      asset: 'assets/objects/hummingbird_feeder_paint_shelf_flower_stencil_card.png',
      x: 585,
      y: 455,
      scale: 0.16
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-nectar-drop-1',
      name: 'Golden Nectar Drop',
      key: 'bonus-hummingbird-feeder-paint-shelf-nectar-drop-1',
      asset: 'assets/bonus/hummingbird_feeder_paint_shelf_golden_nectar_drop_01.png',
      x: 235,
      y: 150,
      scale: 0.1
    },
    {
      id: 'golden-nectar-drop-2',
      name: 'Golden Nectar Drop',
      key: 'bonus-hummingbird-feeder-paint-shelf-nectar-drop-2',
      asset: 'assets/bonus/hummingbird_feeder_paint_shelf_golden_nectar_drop_02.png',
      x: 710,
      y: 160,
      scale: 0.1
    },
    {
      id: 'golden-nectar-drop-3',
      name: 'Golden Nectar Drop',
      key: 'bonus-hummingbird-feeder-paint-shelf-nectar-drop-3',
      asset: 'assets/bonus/hummingbird_feeder_paint_shelf_golden_nectar_drop_03.png',
      x: 1160,
      y: 165,
      scale: 0.1
    }
  ],
  surprises: [
    {
      id: 'hummingbird-feeder-paint-shelf-tinkle',
      x: 780,
      y: 165,
      label: 'Tinkle!'
    },
    {
      id: 'hummingbird-feeder-paint-shelf-brush',
      x: 640,
      y: 515,
      label: 'Brush!'
    },
    {
      id: 'hummingbird-feeder-paint-shelf-sweet',
      x: 990,
      y: 470,
      label: 'Sweet!'
    }
  ],
  previousLevelId: 'clover-charm-tinkering-tray'
};
