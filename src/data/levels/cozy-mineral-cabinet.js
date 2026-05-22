export const cozyMineralCabinet = {
  id: 'cozy-mineral-cabinet',
  title: 'Cozy Mineral Cabinet',
  saveKey: 'whimsy-hollow:cozy-mineral-cabinet',
  bonusSaveKey: 'whimsy-hollow:cozy-mineral-cabinet:bonus',
  bonusLabel: 'Sparkles',
  bonusFoundText: 'Sparkle!',
  background: {
    key: 'cozyMineralCabinetBackground',
    path: 'assets/backgrounds/cozy_mineral_cabinet.webp'
  },
  objects: [
    {
      id: 'agate-slice',
      name: 'Agate Slice',
      requester: 'Marla Gemleaf',
      clue: 'An agate slice rests inside the mineral cabinet.',
      key: 'object-cozy-mineral-cabinet-agate-slice',
      asset: 'assets/objects/cozy_mineral_cabinet_agate_slice.png',
      x: 620,
      y: 285,
      scale: 0.22
    },
    {
      id: 'tiny-geode-half',
      name: 'Geode Half',
      requester: 'Marla Gemleaf',
      clue: 'A tiny geode half sparkles on the upper shelf.',
      key: 'object-cozy-mineral-cabinet-geode-half',
      asset: 'assets/objects/cozy_mineral_cabinet_geode_half.png',
      x: 515,
      y: 205,
      scale: 0.22
    },
    {
      id: 'brass-magnifying-glass',
      name: 'Brass Magnifier',
      requester: 'Marla Gemleaf',
      clue: 'A brass magnifier waits near the left lamp.',
      key: 'object-cozy-mineral-cabinet-brass-magnifier',
      asset: 'assets/objects/cozy_mineral_cabinet_brass_magnifier.png',
      x: 315,
      y: 380,
      scale: 0.22
    },
    {
      id: 'velvet-sample-pouch',
      name: 'Velvet Pouch',
      requester: 'Marla Gemleaf',
      clue: 'A velvet sample pouch is tucked by the sunny window.',
      key: 'object-cozy-mineral-cabinet-velvet-pouch',
      asset: 'assets/objects/cozy_mineral_cabinet_velvet_pouch.png',
      x: 1160,
      y: 460,
      scale: 0.22
    },
    {
      id: 'mineral-brush',
      name: 'Mineral Brush',
      requester: 'Marla Gemleaf',
      clue: 'A mineral brush lies near the lower left blanket basket.',
      key: 'object-cozy-mineral-cabinet-mineral-brush',
      asset: 'assets/objects/cozy_mineral_cabinet_mineral_brush.png',
      x: 260,
      y: 595,
      scale: 0.22
    },
    {
      id: 'crystal-label-card',
      name: 'Label Card',
      requester: 'Marla Gemleaf',
      clue: 'A crystal label card is set near the display drawers.',
      key: 'object-cozy-mineral-cabinet-label-card',
      asset: 'assets/objects/cozy_mineral_cabinet_label_card.png',
      x: 750,
      y: 610,
      scale: 0.22
    },
    {
      id: 'wooden-display-tray',
      name: 'Display Tray',
      requester: 'Marla Gemleaf',
      clue: 'A wooden display tray waits among the open sample boxes.',
      key: 'object-cozy-mineral-cabinet-display-tray',
      asset: 'assets/objects/cozy_mineral_cabinet_display_tray.png',
      x: 890,
      y: 420,
      scale: 0.22
    },
    {
      id: 'small-quartz-point',
      name: 'Quartz Point',
      requester: 'Marla Gemleaf',
      clue: 'A small quartz point shines on the right worktable.',
      key: 'object-cozy-mineral-cabinet-quartz-point',
      asset: 'assets/objects/cozy_mineral_cabinet_quartz_point.png',
      x: 1030,
      y: 560,
      scale: 0.22
    },
    {
      id: 'polished-jasper-pebble',
      name: 'Jasper Pebble',
      requester: 'Marla Gemleaf',
      clue: 'A polished jasper pebble is nestled near the cabinet trays.',
      key: 'object-cozy-mineral-cabinet-jasper-pebble',
      asset: 'assets/objects/cozy_mineral_cabinet_jasper_pebble.png',
      x: 575,
      y: 455,
      scale: 0.22
    },
    {
      id: 'little-specimen-jar',
      name: 'Specimen Jar',
      requester: 'Marla Gemleaf',
      clue: 'A little specimen jar sits on the low shelf.',
      key: 'object-cozy-mineral-cabinet-specimen-jar',
      asset: 'assets/objects/cozy_mineral_cabinet_specimen_jar.png',
      x: 345,
      y: 615,
      scale: 0.22
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-sparkle-1',
      name: 'Golden Sparkle',
      key: 'bonus-cozy-mineral-cabinet-sparkle-1',
      asset: 'assets/bonus/cozy_mineral_cabinet_golden_sparkle_01.png',
      x: 300,
      y: 180,
      scale: 0.16
    },
    {
      id: 'golden-sparkle-2',
      name: 'Golden Sparkle',
      key: 'bonus-cozy-mineral-cabinet-sparkle-2',
      asset: 'assets/bonus/cozy_mineral_cabinet_golden_sparkle_02.png',
      x: 845,
      y: 165,
      scale: 0.16
    },
    {
      id: 'golden-sparkle-3',
      name: 'Golden Sparkle',
      key: 'bonus-cozy-mineral-cabinet-sparkle-3',
      asset: 'assets/bonus/cozy_mineral_cabinet_golden_sparkle_03.png',
      x: 1130,
      y: 220,
      scale: 0.16
    }
  ],
  surprises: [
    {
      id: 'mineral-cabinet-crystal-shine',
      x: 660,
      y: 270,
      label: 'Shine!'
    },
    {
      id: 'mineral-cabinet-drawer-click',
      x: 710,
      y: 520,
      label: 'Click!'
    },
    {
      id: 'mineral-cabinet-lamp-glow',
      x: 315,
      y: 365,
      label: 'Glow!'
    }
  ],
  previousLevelId: 'cozy-aquarium-corner'
};
