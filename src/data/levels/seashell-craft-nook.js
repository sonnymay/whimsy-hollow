export const seashellCraftNook = {
  id: 'seashell-craft-nook',
  title: 'Seashell Craft Nook',
  saveKey: 'whimsy-hollow:seashell-craft-nook',
  bonusSaveKey: 'whimsy-hollow:seashell-craft-nook:bonus',
  bonusLabel: 'Sea Glass',
  bonusFoundText: 'Sea glass!',
  background: {
    key: 'seashellCraftNookBackground',
    path: 'assets/backgrounds/seashell_craft_nook.webp'
  },
  objects: [
    {
      id: 'scallop-shell-charm',
      name: 'Shell Charm',
      requester: 'Marina Pearl',
      clue: 'A shell charm hangs near the little plant shelf.',
      key: 'object-seashell-craft-nook-shell-charm',
      asset: 'assets/objects/seashell_craft_nook_scallop_shell_charm.png',
      x: 335,
      y: 245,
      scale: 0.2
    },
    {
      id: 'sea-glass-bottle',
      name: 'Sea Glass Bottle',
      requester: 'Marina Pearl',
      clue: 'A sea glass bottle sparkles on the sunny windowsill.',
      key: 'object-seashell-craft-nook-sea-glass-bottle',
      asset: 'assets/objects/seashell_craft_nook_sea_glass_bottle.png',
      x: 520,
      y: 430,
      scale: 0.19
    },
    {
      id: 'coral-ribbon-spool',
      name: 'Ribbon Spool',
      requester: 'Marina Pearl',
      clue: 'A coral ribbon spool sits beneath the hanging ribbons.',
      key: 'object-seashell-craft-nook-ribbon-spool',
      asset: 'assets/objects/seashell_craft_nook_coral_ribbon_spool.png',
      x: 930,
      y: 285,
      scale: 0.19
    },
    {
      id: 'driftwood-sailboat',
      name: 'Driftwood Boat',
      requester: 'Marina Pearl',
      clue: 'A tiny driftwood boat rests near the left window light.',
      key: 'object-seashell-craft-nook-driftwood-sailboat',
      asset: 'assets/objects/seashell_craft_nook_driftwood_sailboat.png',
      x: 405,
      y: 385,
      scale: 0.2
    },
    {
      id: 'brass-shell-scoop',
      name: 'Shell Scoop',
      requester: 'Marina Pearl',
      clue: 'A brass shell scoop gleams beside the front craft tray.',
      key: 'object-seashell-craft-nook-shell-scoop',
      asset: 'assets/objects/seashell_craft_nook_brass_shell_scoop.png',
      x: 835,
      y: 560,
      scale: 0.19
    },
    {
      id: 'blue-bead-bracelet',
      name: 'Bead Bracelet',
      requester: 'Marina Pearl',
      clue: 'A blue bead bracelet circles a corner of the worktable.',
      key: 'object-seashell-craft-nook-bead-bracelet',
      asset: 'assets/objects/seashell_craft_nook_blue_bead_bracelet.png',
      x: 1080,
      y: 590,
      scale: 0.2
    },
    {
      id: 'pearl-button-card',
      name: 'Button Card',
      requester: 'Marina Pearl',
      clue: 'A pearl button card lies between the shell trays.',
      key: 'object-seashell-craft-nook-button-card',
      asset: 'assets/objects/seashell_craft_nook_pearl_button_card.png',
      x: 650,
      y: 560,
      scale: 0.19
    },
    {
      id: 'craft-glue-bottle',
      name: 'Glue Bottle',
      requester: 'Marina Pearl',
      clue: 'A small glue bottle stands by the right-hand drawers.',
      key: 'object-seashell-craft-nook-glue-bottle',
      asset: 'assets/objects/seashell_craft_nook_craft_glue_bottle.png',
      x: 1080,
      y: 365,
      scale: 0.2
    },
    {
      id: 'folded-linen-cloth',
      name: 'Linen Cloth',
      requester: 'Marina Pearl',
      clue: 'A folded linen cloth drapes over the basket on the left.',
      key: 'object-seashell-craft-nook-linen-cloth',
      asset: 'assets/objects/seashell_craft_nook_folded_linen_cloth.png',
      x: 300,
      y: 610,
      scale: 0.19
    },
    {
      id: 'turquoise-glass-float',
      name: 'Glass Float',
      requester: 'Marina Pearl',
      clue: 'A turquoise glass float is tucked under the table.',
      key: 'object-seashell-craft-nook-glass-float',
      asset: 'assets/objects/seashell_craft_nook_turquoise_glass_float.png',
      x: 720,
      y: 395,
      scale: 0.18
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-sea-glass-1',
      name: 'Golden Sea Glass',
      key: 'bonus-seashell-craft-nook-sea-glass-1',
      asset: 'assets/bonus/seashell_craft_nook_golden_sea_glass_01.png',
      x: 245,
      y: 205,
      scale: 0.12
    },
    {
      id: 'golden-sea-glass-2',
      name: 'Golden Sea Glass',
      key: 'bonus-seashell-craft-nook-sea-glass-2',
      asset: 'assets/bonus/seashell_craft_nook_golden_sea_glass_02.png',
      x: 760,
      y: 150,
      scale: 0.12
    },
    {
      id: 'golden-sea-glass-3',
      name: 'Golden Sea Glass',
      key: 'bonus-seashell-craft-nook-sea-glass-3',
      asset: 'assets/bonus/seashell_craft_nook_golden_sea_glass_03.png',
      x: 1130,
      y: 180,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'seashell-window-breeze',
      x: 430,
      y: 260,
      label: 'Breeze!'
    },
    {
      id: 'seashell-tray-tinkle',
      x: 650,
      y: 520,
      label: 'Tinkle!'
    },
    {
      id: 'seashell-ribbon-flutter',
      x: 990,
      y: 245,
      label: 'Flutter!'
    }
  ],
  previousLevelId: 'lantern-paper-conservatory'
};
