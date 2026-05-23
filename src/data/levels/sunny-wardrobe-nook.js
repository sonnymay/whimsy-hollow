export const sunnyWardrobeNook = {
  id: 'sunny-wardrobe-nook',
  title: 'Sunny Wardrobe Nook',
  saveKey: 'whimsy-hollow:sunny-wardrobe-nook',
  bonusSaveKey: 'whimsy-hollow:sunny-wardrobe-nook:bonus',
  bonusLabel: 'Hatpins',
  bonusFoundText: 'Hatpin!',
  background: {
    key: 'sunnyWardrobeNookBackground',
    path: 'assets/backgrounds/sunny_wardrobe_nook.webp'
  },
  objects: [
    {
      id: 'straw-sunhat',
      name: 'Straw Sunhat',
      requester: 'Mira Hatbox',
      clue: 'A straw sunhat rests near the sunny window.',
      key: 'object-sunny-wardrobe-nook-straw-sunhat',
      asset: 'assets/objects/sunny_wardrobe_nook_straw_sunhat.png',
      x: 310,
      y: 255,
      scale: 0.22
    },
    {
      id: 'blue-silk-scarf',
      name: 'Blue Silk Scarf',
      requester: 'Mira Hatbox',
      clue: 'A blue silk scarf is draped near the lower basket.',
      key: 'object-sunny-wardrobe-nook-blue-silk-scarf',
      asset: 'assets/objects/sunny_wardrobe_nook_blue_silk_scarf.png',
      x: 520,
      y: 615,
      scale: 0.22
    },
    {
      id: 'pearl-hairpin',
      name: 'Pearl Hairpin',
      requester: 'Mira Hatbox',
      clue: 'A pearl hairpin glints above the wardrobe shelves.',
      key: 'object-sunny-wardrobe-nook-pearl-hairpin',
      asset: 'assets/objects/sunny_wardrobe_nook_pearl_hairpin.png',
      x: 1115,
      y: 275,
      scale: 0.22
    },
    {
      id: 'lavender-sachet',
      name: 'Lavender Sachet',
      requester: 'Mira Hatbox',
      clue: 'A lavender sachet is tucked beside the open drawer.',
      key: 'object-sunny-wardrobe-nook-lavender-sachet',
      asset: 'assets/objects/sunny_wardrobe_nook_lavender_sachet.png',
      x: 805,
      y: 585,
      scale: 0.22
    },
    {
      id: 'velvet-glove',
      name: 'Velvet Glove',
      requester: 'Mira Hatbox',
      clue: 'A single velvet glove waits near the vanity flowers.',
      key: 'object-sunny-wardrobe-nook-velvet-glove',
      asset: 'assets/objects/sunny_wardrobe_nook_velvet_glove.png',
      x: 1035,
      y: 610,
      scale: 0.22
    },
    {
      id: 'hat-brush',
      name: 'Hat Brush',
      requester: 'Mira Hatbox',
      clue: 'A wooden hat brush sits among the wardrobe cubbies.',
      key: 'object-sunny-wardrobe-nook-hat-brush',
      asset: 'assets/objects/sunny_wardrobe_nook_hat_brush.png',
      x: 645,
      y: 430,
      scale: 0.22
    },
    {
      id: 'oval-hand-mirror',
      name: 'Hand Mirror',
      requester: 'Mira Hatbox',
      clue: 'A small oval hand mirror shines on the vanity.',
      key: 'object-sunny-wardrobe-nook-oval-hand-mirror',
      asset: 'assets/objects/sunny_wardrobe_nook_oval_hand_mirror.png',
      x: 930,
      y: 360,
      scale: 0.22
    },
    {
      id: 'button-card',
      name: 'Button Card',
      requester: 'Mira Hatbox',
      clue: 'A button card is tucked near the stacked hatboxes.',
      key: 'object-sunny-wardrobe-nook-button-card',
      asset: 'assets/objects/sunny_wardrobe_nook_button_card.png',
      x: 410,
      y: 500,
      scale: 0.22
    },
    {
      id: 'lace-collar',
      name: 'Lace Collar',
      requester: 'Mira Hatbox',
      clue: 'A lace collar rests at the edge of the dressing stool.',
      key: 'object-sunny-wardrobe-nook-lace-collar',
      asset: 'assets/objects/sunny_wardrobe_nook_lace_collar.png',
      x: 700,
      y: 640,
      scale: 0.22
    },
    {
      id: 'ribbon-brooch',
      name: 'Ribbon Brooch',
      requester: 'Mira Hatbox',
      clue: 'A ribbon brooch is pinned close to the right basket.',
      key: 'object-sunny-wardrobe-nook-ribbon-brooch',
      asset: 'assets/objects/sunny_wardrobe_nook_ribbon_brooch.png',
      x: 1160,
      y: 500,
      scale: 0.22
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-hatpin-1',
      name: 'Golden Hatpin',
      key: 'bonus-sunny-wardrobe-nook-hatpin-1',
      asset: 'assets/bonus/sunny_wardrobe_nook_hatpin_01.png',
      x: 285,
      y: 165,
      scale: 0.15
    },
    {
      id: 'golden-hatpin-2',
      name: 'Golden Hatpin',
      key: 'bonus-sunny-wardrobe-nook-hatpin-2',
      asset: 'assets/bonus/sunny_wardrobe_nook_hatpin_02.png',
      x: 765,
      y: 170,
      scale: 0.15
    },
    {
      id: 'golden-hatpin-3',
      name: 'Golden Hatpin',
      key: 'bonus-sunny-wardrobe-nook-hatpin-3',
      asset: 'assets/bonus/sunny_wardrobe_nook_hatpin_03.png',
      x: 1135,
      y: 150,
      scale: 0.15
    }
  ],
  surprises: [
    {
      id: 'wardrobe-drawer-click',
      x: 625,
      y: 470,
      label: 'Click!'
    },
    {
      id: 'wardrobe-mirror-gleam',
      x: 930,
      y: 320,
      label: 'Gleam!'
    },
    {
      id: 'wardrobe-scarf-flutter',
      x: 520,
      y: 580,
      label: 'Flutter!'
    }
  ],
  previousLevelId: 'cozy-stamp-desk'
};
