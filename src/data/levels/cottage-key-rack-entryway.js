export const cottageKeyRackEntryway = {
  id: 'cottage-key-rack-entryway',
  title: 'Cottage Key Rack Entryway',
  saveKey: 'whimsy-hollow:cottage-key-rack-entryway',
  bonusSaveKey: 'whimsy-hollow:cottage-key-rack-entryway:bonus',
  bonusLabel: 'Golden Keys',
  bonusFoundText: 'Golden key!',
  background: {
    key: 'cottageKeyRackEntrywayBackground',
    path: 'assets/backgrounds/cottage_key_rack_entryway.webp'
  },
  objects: [
    {
      id: 'brass-key-ring',
      name: 'Brass Key Ring',
      requester: 'Penny Porchlight',
      clue: 'A brass key ring hangs from the wooden key rack.',
      key: 'object-cottage-key-rack-entryway-brass-key-ring',
      asset: 'assets/objects/cottage_key_rack_entryway_brass_key_ring.png',
      x: 520,
      y: 245,
      scale: 0.17
    },
    {
      id: 'acorn-key-fob',
      name: 'Acorn Key Fob',
      requester: 'Penny Porchlight',
      clue: 'An acorn key fob dangles near the left coat hooks.',
      key: 'object-cottage-key-rack-entryway-acorn-key-fob',
      asset: 'assets/objects/cottage_key_rack_entryway_acorn_key_fob.png',
      x: 465,
      y: 265,
      scale: 0.18
    },
    {
      id: 'wooden-shoehorn',
      name: 'Wooden Shoehorn',
      requester: 'Penny Porchlight',
      clue: 'A tiny wooden shoehorn waits near the bench cubbies.',
      key: 'object-cottage-key-rack-entryway-wooden-shoehorn',
      asset: 'assets/objects/cottage_key_rack_entryway_wooden_shoehorn.png',
      x: 675,
      y: 625,
      scale: 0.18
    },
    {
      id: 'blue-hook-tag',
      name: 'Blue Hook Tag',
      requester: 'Penny Porchlight',
      clue: 'A blue hook tag hangs below the painted key shelf.',
      key: 'object-cottage-key-rack-entryway-blue-hook-tag',
      asset: 'assets/objects/cottage_key_rack_entryway_blue_hook_tag.png',
      x: 570,
      y: 330,
      scale: 0.17
    },
    {
      id: 'porcelain-key-dish',
      name: 'Porcelain Key Dish',
      requester: 'Penny Porchlight',
      clue: 'A porcelain key dish sits on the small table by the window.',
      key: 'object-cottage-key-rack-entryway-porcelain-key-dish',
      asset: 'assets/objects/cottage_key_rack_entryway_porcelain_key_dish.png',
      x: 1015,
      y: 465,
      scale: 0.18
    },
    {
      id: 'lavender-sachet',
      name: 'Lavender Sachet',
      requester: 'Penny Porchlight',
      clue: 'A lavender sachet is tucked by the trailing vines.',
      key: 'object-cottage-key-rack-entryway-lavender-sachet',
      asset: 'assets/objects/cottage_key_rack_entryway_lavender_sachet.png',
      x: 250,
      y: 370,
      scale: 0.18
    },
    {
      id: 'clothes-brush',
      name: 'Clothes Brush',
      requester: 'Penny Porchlight',
      clue: 'A small clothes brush rests near the wicker basket stack.',
      key: 'object-cottage-key-rack-entryway-clothes-brush',
      asset: 'assets/objects/cottage_key_rack_entryway_clothes_brush.png',
      x: 285,
      y: 605,
      scale: 0.18
    },
    {
      id: 'gingham-scarf',
      name: 'Gingham Scarf',
      requester: 'Penny Porchlight',
      clue: 'A folded gingham scarf lies across the entry bench.',
      key: 'object-cottage-key-rack-entryway-gingham-scarf',
      asset: 'assets/objects/cottage_key_rack_entryway_gingham_scarf.png',
      x: 380,
      y: 560,
      scale: 0.17
    },
    {
      id: 'doorbell-button',
      name: 'Doorbell Button',
      requester: 'Penny Porchlight',
      clue: 'A ceramic doorbell button shines near the green door.',
      key: 'object-cottage-key-rack-entryway-doorbell-button',
      asset: 'assets/objects/cottage_key_rack_entryway_doorbell_button.png',
      x: 1180,
      y: 350,
      scale: 0.18
    },
    {
      id: 'green-coin-purse',
      name: 'Green Coin Purse',
      requester: 'Penny Porchlight',
      clue: 'A little green coin purse hides in the lower right basket.',
      key: 'object-cottage-key-rack-entryway-green-coin-purse',
      asset: 'assets/objects/cottage_key_rack_entryway_green_coin_purse.png',
      x: 1050,
      y: 610,
      scale: 0.18
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-key-1',
      name: 'Golden Key',
      key: 'bonus-cottage-key-rack-entryway-key-1',
      asset: 'assets/bonus/cottage_key_rack_entryway_golden_key_01.png',
      x: 210,
      y: 190,
      scale: 0.12
    },
    {
      id: 'golden-key-2',
      name: 'Golden Key',
      key: 'bonus-cottage-key-rack-entryway-key-2',
      asset: 'assets/bonus/cottage_key_rack_entryway_golden_key_02.png',
      x: 690,
      y: 160,
      scale: 0.12
    },
    {
      id: 'golden-key-3',
      name: 'Golden Key',
      key: 'bonus-cottage-key-rack-entryway-key-3',
      asset: 'assets/bonus/cottage_key_rack_entryway_golden_key_03.png',
      x: 1145,
      y: 155,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'cottage-key-rack-jingle',
      x: 520,
      y: 245,
      label: 'Jingle!'
    },
    {
      id: 'cottage-entryway-sunbeam',
      x: 980,
      y: 170,
      label: 'Warm!'
    },
    {
      id: 'cottage-basket-rustle',
      x: 255,
      y: 585,
      label: 'Rustle!'
    }
  ],
  previousLevelId: 'little-library-return-cart'
};
