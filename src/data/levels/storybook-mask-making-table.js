export const storybookMaskMakingTable = {
  id: 'storybook-mask-making-table',
  title: 'Storybook Mask Making Table',
  saveKey: 'whimsy-hollow:storybook-mask-making-table',
  bonusSaveKey: 'whimsy-hollow:storybook-mask-making-table:bonus',
  bonusLabel: 'Sequins',
  bonusFoundText: 'Star sequin!',
  background: {
    key: 'storybookMaskMakingTableBackground',
    path: 'assets/backgrounds/storybook_mask_making_table.webp'
  },
  objects: [
    {
      id: 'fox-mask',
      name: 'Fox Mask',
      requester: 'Mira Ribbon',
      clue: 'A friendly fox mask waits near the middle of the craft table.',
      key: 'object-storybook-mask-fox-mask',
      asset: 'assets/objects/storybook_mask_fox_mask.png',
      x: 605,
      y: 315,
      scale: 0.14
    },
    {
      id: 'bunny-template',
      name: 'Bunny Template',
      requester: 'Mira Ribbon',
      clue: 'The bunny template rests by the long ribbons on the left side.',
      key: 'object-storybook-mask-bunny-template',
      asset: 'assets/objects/storybook_mask_bunny_template.png',
      x: 455,
      y: 420,
      scale: 0.14
    },
    {
      id: 'blue-feathers',
      name: 'Blue Feathers',
      requester: 'Mira Ribbon',
      clue: 'Blue feathers stand beside the paint tin and brush jar.',
      key: 'object-storybook-mask-blue-feathers',
      asset: 'assets/objects/storybook_mask_blue_feathers.png',
      x: 920,
      y: 315,
      scale: 0.13
    },
    {
      id: 'ribbon-spool',
      name: 'Ribbon Spool',
      requester: 'Mira Ribbon',
      clue: 'A pink ribbon spool rolls near the lower right corner.',
      key: 'object-storybook-mask-ribbon-spool',
      asset: 'assets/objects/storybook_mask_ribbon_spool.png',
      x: 1095,
      y: 600,
      scale: 0.13
    },
    {
      id: 'paint-tin',
      name: 'Paint Tin',
      requester: 'Mira Ribbon',
      clue: 'The watercolor tin is open beside the feather cup.',
      key: 'object-storybook-mask-paint-tin',
      asset: 'assets/objects/storybook_mask_paint_tin.png',
      x: 955,
      y: 410,
      scale: 0.13
    },
    {
      id: 'craft-scissors',
      name: 'Craft Scissors',
      requester: 'Mira Ribbon',
      clue: 'Rounded scissors are tucked near the front edge of the table.',
      key: 'object-storybook-mask-craft-scissors',
      asset: 'assets/objects/storybook_mask_craft_scissors.png',
      x: 760,
      y: 575,
      scale: 0.14
    },
    {
      id: 'glue-pot',
      name: 'Glue Pot',
      requester: 'Mira Ribbon',
      clue: 'A tiny glue pot sits beside the right-hand ribbon boxes.',
      key: 'object-storybook-mask-glue-pot',
      asset: 'assets/objects/storybook_mask_glue_pot.png',
      x: 1105,
      y: 475,
      scale: 0.14
    },
    {
      id: 'lace-trim',
      name: 'Lace Trim',
      requester: 'Mira Ribbon',
      clue: 'The lace trim drapes over the front of the worktable.',
      key: 'object-storybook-mask-lace-trim',
      asset: 'assets/objects/storybook_mask_lace_trim.png',
      x: 535,
      y: 555,
      scale: 0.15
    },
    {
      id: 'mask-stick',
      name: 'Mask Stick',
      requester: 'Mira Ribbon',
      clue: 'A wooden mask stick lies near the little mouse mask.',
      key: 'object-storybook-mask-mask-stick',
      asset: 'assets/objects/storybook_mask_mask_stick.png',
      x: 895,
      y: 565,
      scale: 0.13
    },
    {
      id: 'sequin-jar',
      name: 'Sequin Jar',
      requester: 'Mira Ribbon',
      clue: 'A jar of flower sequins sparkles by the right-side tray.',
      key: 'object-storybook-mask-sequin-jar',
      asset: 'assets/objects/storybook_mask_sequin_jar.png',
      x: 1135,
      y: 520,
      scale: 0.13
    }
  ],
  bonusEnvelopes: [
    {
      id: 'star-sequin-1',
      name: 'Star Sequin',
      key: 'bonus-storybook-mask-star-sequin-1',
      asset: 'assets/bonus/storybook_mask_star_sequin_01.png',
      x: 230,
      y: 150,
      scale: 0.07
    },
    {
      id: 'star-sequin-2',
      name: 'Star Sequin',
      key: 'bonus-storybook-mask-star-sequin-2',
      asset: 'assets/bonus/storybook_mask_star_sequin_02.png',
      x: 705,
      y: 165,
      scale: 0.07
    },
    {
      id: 'star-sequin-3',
      name: 'Star Sequin',
      key: 'bonus-storybook-mask-star-sequin-3',
      asset: 'assets/bonus/storybook_mask_star_sequin_03.png',
      x: 1165,
      y: 185,
      scale: 0.07
    }
  ],
  surprises: [
    { x: 470, y: 370, label: 'Snip!' },
    { x: 840, y: 420, label: 'Ta-da!' },
    { x: 1080, y: 360, label: 'Sparkle!' }
  ],
  previousLevelId: 'wooden-whistle-carving-bench'
};
