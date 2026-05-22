export const rainyArtAtelier = {
  id: 'rainy-art-atelier',
  title: 'Rainy Art Atelier',
  saveKey: 'whimsy-hollow:rainy-art-atelier',
  bonusSaveKey: 'whimsy-hollow:rainy-art-atelier:bonus',
  bonusLabel: 'Raindrops',
  bonusFoundText: 'Raindrop!',
  background: {
    key: 'rainyArtAtelierBackground',
    path: 'assets/backgrounds/rainy_art_atelier.png'
  },
  objects: [
    {
      id: 'tiny-wooden-paintbrush',
      name: 'Paintbrush',
      requester: 'Painter Penny',
      clue: 'A wooden paintbrush waits near the easel.',
      key: 'object-rainy-art-atelier-paintbrush',
      asset: 'assets/objects/rainy_art_atelier_paintbrush.png',
      x: 1120,
      y: 500,
      scale: 0.2
    },
    {
      id: 'blue-watercolor-pan',
      name: 'Blue Paint',
      requester: 'Painter Penny',
      clue: 'A blue watercolor pan rests on the worktable.',
      key: 'object-rainy-art-atelier-blue-watercolor-pan',
      asset: 'assets/objects/rainy_art_atelier_blue_watercolor_pan.png',
      x: 1066,
      y: 610,
      scale: 0.24
    },
    {
      id: 'rose-paint-tube',
      name: 'Paint Tube',
      requester: 'Painter Penny',
      clue: 'A rose paint tube hides low by the supply crate.',
      key: 'object-rainy-art-atelier-rose-paint-tube',
      asset: 'assets/objects/rainy_art_atelier_rose_paint_tube.png',
      x: 384,
      y: 640,
      scale: 0.2
    },
    {
      id: 'brass-palette-knife',
      name: 'Palette Knife',
      requester: 'Painter Penny',
      clue: 'A palette knife shines beside the little cabinet.',
      key: 'object-rainy-art-atelier-palette-knife',
      asset: 'assets/objects/rainy_art_atelier_palette_knife.png',
      x: 250,
      y: 590,
      scale: 0.2
    },
    {
      id: 'little-sketchbook',
      name: 'Sketchbook',
      requester: 'Painter Penny',
      clue: 'A sketchbook waits near the pinned studies.',
      key: 'object-rainy-art-atelier-sketchbook',
      asset: 'assets/objects/rainy_art_atelier_sketchbook.png',
      x: 918,
      y: 218,
      scale: 0.2
    },
    {
      id: 'pressed-daisy-card',
      name: 'Daisy Card',
      requester: 'Painter Penny',
      clue: 'A pressed daisy card hangs on the quiet wall.',
      key: 'object-rainy-art-atelier-pressed-daisy-card',
      asset: 'assets/objects/rainy_art_atelier_pressed_daisy_card.png',
      x: 210,
      y: 360,
      scale: 0.22
    },
    {
      id: 'ribbon-eraser',
      name: 'Eraser',
      requester: 'Painter Penny',
      clue: 'A ribbon eraser sits near the window seat.',
      key: 'object-rainy-art-atelier-ribbon-eraser',
      asset: 'assets/objects/rainy_art_atelier_ribbon_eraser.png',
      x: 626,
      y: 610,
      scale: 0.23
    },
    {
      id: 'ceramic-water-cup',
      name: 'Water Cup',
      requester: 'Painter Penny',
      clue: 'A ceramic water cup waits among the brushes.',
      key: 'object-rainy-art-atelier-ceramic-water-cup',
      asset: 'assets/objects/rainy_art_atelier_ceramic_water_cup.png',
      x: 1170,
      y: 436,
      scale: 0.22
    },
    {
      id: 'charcoal-pencil',
      name: 'Charcoal',
      requester: 'Painter Penny',
      clue: 'A charcoal pencil leans by the rolled papers.',
      key: 'object-rainy-art-atelier-charcoal-pencil',
      asset: 'assets/objects/rainy_art_atelier_charcoal_pencil.png',
      x: 450,
      y: 535,
      scale: 0.2
    },
    {
      id: 'miniature-easel-charm',
      name: 'Tiny Easel',
      requester: 'Painter Penny',
      clue: 'A tiny easel charm hides on the right shelf.',
      key: 'object-rainy-art-atelier-mini-easel',
      asset: 'assets/objects/rainy_art_atelier_mini_easel.png',
      x: 982,
      y: 338,
      scale: 0.2
    }
  ],
  bonusEnvelopes: [
    {
      id: 'raindrop-1',
      name: 'Crystal Raindrop',
      key: 'bonus-rainy-art-atelier-raindrop-1',
      asset: 'assets/bonus/rainy_art_atelier_raindrop_01.png',
      x: 636,
      y: 210,
      scale: 0.18
    },
    {
      id: 'raindrop-2',
      name: 'Crystal Raindrop',
      key: 'bonus-rainy-art-atelier-raindrop-2',
      asset: 'assets/bonus/rainy_art_atelier_raindrop_02.png',
      x: 790,
      y: 250,
      scale: 0.18
    },
    {
      id: 'raindrop-3',
      name: 'Crystal Raindrop',
      key: 'bonus-rainy-art-atelier-raindrop-3',
      asset: 'assets/bonus/rainy_art_atelier_raindrop_03.png',
      x: 1220,
      y: 182,
      scale: 0.17
    }
  ],
  surprises: [
    {
      id: 'atelier-window-rain',
      x: 642,
      y: 196,
      label: 'Pitter!'
    },
    {
      id: 'atelier-easel-spark',
      x: 952,
      y: 360,
      label: 'Paint!'
    },
    {
      id: 'atelier-lantern-glow',
      x: 258,
      y: 498,
      label: 'Glow!'
    }
  ],
  previousLevelId: 'candlelit-music-parlor'
};
