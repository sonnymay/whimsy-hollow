export const paintedEggKeepsakeTable = {
  id: 'painted-egg-keepsake-table',
  title: 'Painted Egg Keepsake Table',
  saveKey: 'whimsy-hollow:painted-egg-keepsake-table',
  bonusSaveKey: 'whimsy-hollow:painted-egg-keepsake-table:bonus',
  bonusLabel: 'Golden Eggs',
  bonusFoundText: 'Golden egg!',
  background: {
    key: 'paintedEggKeepsakeTableBackground',
    path: 'assets/backgrounds/painted_egg_keepsake_table.webp'
  },
  objects: [
    {
      id: 'painted-egg',
      name: 'Painted Egg',
      requester: 'Poppy Finch',
      clue: 'A flower-painted egg stands in a cup near the window light.',
      key: 'object-painted-egg-painted-egg',
      asset: 'assets/objects/painted_egg_painted_egg.png',
      x: 470,
      y: 385,
      scale: 0.14
    },
    {
      id: 'egg-cup',
      name: 'Egg Cup',
      requester: 'Poppy Finch',
      clue: 'A small painted egg cup waits along the row of keepsakes.',
      key: 'object-painted-egg-egg-cup',
      asset: 'assets/objects/painted_egg_egg_cup.png',
      x: 610,
      y: 380,
      scale: 0.14
    },
    {
      id: 'fine-brush',
      name: 'Fine Brush',
      requester: 'Poppy Finch',
      clue: 'The fine brush lies across the front of the worktable.',
      key: 'object-painted-egg-fine-brush',
      asset: 'assets/objects/painted_egg_fine_brush.png',
      x: 790,
      y: 515,
      scale: 0.13
    },
    {
      id: 'paint-dish',
      name: 'Paint Dish',
      requester: 'Poppy Finch',
      clue: 'A flower-shaped paint dish sits near the middle-right paints.',
      key: 'object-painted-egg-paint-dish',
      asset: 'assets/objects/painted_egg_paint_dish.png',
      x: 895,
      y: 475,
      scale: 0.14
    },
    {
      id: 'ribbon-nest',
      name: 'Ribbon Nest',
      requester: 'Poppy Finch',
      clue: 'A nest of colorful ribbon rests in the shelf basket.',
      key: 'object-painted-egg-ribbon-nest',
      asset: 'assets/objects/painted_egg_ribbon_nest.png',
      x: 590,
      y: 645,
      scale: 0.13
    },
    {
      id: 'stencil-card',
      name: 'Stencil Card',
      requester: 'Poppy Finch',
      clue: 'A flower stencil card lies flat on the front-center table.',
      key: 'object-painted-egg-stencil-card',
      asset: 'assets/objects/painted_egg_stencil_card.png',
      x: 570,
      y: 535,
      scale: 0.15
    },
    {
      id: 'sponge-cube',
      name: 'Sponge Cube',
      requester: 'Poppy Finch',
      clue: 'A soft sponge cube sits beside the varnish jar.',
      key: 'object-painted-egg-sponge-cube',
      asset: 'assets/objects/painted_egg_sponge_cube.png',
      x: 1020,
      y: 520,
      scale: 0.14
    },
    {
      id: 'drying-rack',
      name: 'Drying Rack',
      requester: 'Poppy Finch',
      clue: 'The little drying rack holds painted eggs at the right side.',
      key: 'object-painted-egg-drying-rack',
      asset: 'assets/objects/painted_egg_drying_rack.png',
      x: 915,
      y: 330,
      scale: 0.14
    },
    {
      id: 'varnish-jar',
      name: 'Varnish Jar',
      requester: 'Poppy Finch',
      clue: 'A tiny varnish jar glows near the folded cloth.',
      key: 'object-painted-egg-varnish-jar',
      asset: 'assets/objects/painted_egg_varnish_jar.png',
      x: 1115,
      y: 505,
      scale: 0.13
    },
    {
      id: 'decal-tray',
      name: 'Decal Tray',
      requester: 'Poppy Finch',
      clue: 'A tray of flower decals sits at the lower-right corner.',
      key: 'object-painted-egg-decal-tray',
      asset: 'assets/objects/painted_egg_decal_tray.png',
      x: 1035,
      y: 610,
      scale: 0.13
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-egg-1',
      name: 'Golden Egg',
      key: 'bonus-painted-egg-golden-egg-1',
      asset: 'assets/bonus/painted_egg_golden_charm_01.png',
      x: 230,
      y: 155,
      scale: 0.08
    },
    {
      id: 'golden-egg-2',
      name: 'Golden Egg',
      key: 'bonus-painted-egg-golden-egg-2',
      asset: 'assets/bonus/painted_egg_golden_charm_02.png',
      x: 715,
      y: 165,
      scale: 0.08
    },
    {
      id: 'golden-egg-3',
      name: 'Golden Egg',
      key: 'bonus-painted-egg-golden-egg-3',
      asset: 'assets/bonus/painted_egg_golden_charm_03.png',
      x: 1165,
      y: 185,
      scale: 0.08
    }
  ],
  surprises: [
    { x: 470, y: 455, label: 'Pretty!' },
    { x: 735, y: 505, label: 'Brush!' },
    { x: 1060, y: 565, label: 'Shine!' }
  ],
  previousLevelId: 'cinnamon-pomander-window-table'
};
