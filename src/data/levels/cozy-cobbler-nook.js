export const cozyCobblerNook = {
  id: 'cozy-cobbler-nook',
  title: 'Cozy Cobbler Nook',
  saveKey: 'whimsy-hollow:cozy-cobbler-nook',
  bonusSaveKey: 'whimsy-hollow:cozy-cobbler-nook:bonus',
  bonusLabel: 'Buttons',
  bonusFoundText: 'Button!',
  background: {
    key: 'cozyCobblerNookBackground',
    path: 'assets/backgrounds/cozy_cobbler_nook.webp'
  },
  objects: [
    {
      id: 'tiny-brown-boot',
      name: 'Tiny Boot',
      requester: 'Milo Mender',
      clue: 'A tiny brown boot hangs near the left wall hooks.',
      key: 'object-cozy-cobbler-nook-tiny-boot',
      asset: 'assets/objects/cozy_cobbler_nook_tiny_boot.png',
      x: 244,
      y: 245,
      scale: 0.16
    },
    {
      id: 'blue-thread-spool',
      name: 'Thread Spool',
      requester: 'Milo Mender',
      clue: 'A blue thread spool waits on the cobbler shelf.',
      key: 'object-cozy-cobbler-nook-blue-thread-spool',
      asset: 'assets/objects/cozy_cobbler_nook_blue_thread_spool.png',
      x: 408,
      y: 372,
      scale: 0.18
    },
    {
      id: 'brass-shoe-buckle',
      name: 'Shoe Buckle',
      requester: 'Milo Mender',
      clue: 'A brass buckle shines on the workbench.',
      key: 'object-cozy-cobbler-nook-brass-buckle',
      asset: 'assets/objects/cozy_cobbler_nook_brass_buckle.png',
      x: 760,
      y: 410,
      scale: 0.18
    },
    {
      id: 'wooden-shoehorn',
      name: 'Shoehorn',
      requester: 'Milo Mender',
      clue: 'A wooden shoehorn leans beside the right-side boots.',
      key: 'object-cozy-cobbler-nook-wooden-shoehorn',
      asset: 'assets/objects/cozy_cobbler_nook_wooden_shoehorn.png',
      x: 1080,
      y: 472,
      scale: 0.17
    },
    {
      id: 'soft-shoe-brush',
      name: 'Shoe Brush',
      requester: 'Milo Mender',
      clue: 'A soft brush rests near the sunny window.',
      key: 'object-cozy-cobbler-nook-shoe-brush',
      asset: 'assets/objects/cozy_cobbler_nook_shoe_brush.png',
      x: 735,
      y: 272,
      scale: 0.18
    },
    {
      id: 'cream-boot-lace',
      name: 'Boot Lace',
      requester: 'Milo Mender',
      clue: 'A cream boot lace curls across the worktable.',
      key: 'object-cozy-cobbler-nook-boot-lace',
      asset: 'assets/objects/cozy_cobbler_nook_boot_lace.png',
      x: 905,
      y: 468,
      scale: 0.18
    },
    {
      id: 'daisy-shoe-clip',
      name: 'Daisy Clip',
      requester: 'Milo Mender',
      clue: 'A daisy shoe clip brightens the basket of laces.',
      key: 'object-cozy-cobbler-nook-daisy-shoe-clip',
      asset: 'assets/objects/cozy_cobbler_nook_daisy_shoe_clip.png',
      x: 400,
      y: 596,
      scale: 0.18
    },
    {
      id: 'folded-polishing-cloth',
      name: 'Polishing Cloth',
      requester: 'Milo Mender',
      clue: 'A folded polishing cloth sits by the lower stool.',
      key: 'object-cozy-cobbler-nook-polishing-cloth',
      asset: 'assets/objects/cozy_cobbler_nook_polishing_cloth.png',
      x: 570,
      y: 610,
      scale: 0.17
    },
    {
      id: 'rounded-buttonhook',
      name: 'Buttonhook',
      requester: 'Milo Mender',
      clue: 'A rounded buttonhook lies near the table edge.',
      key: 'object-cozy-cobbler-nook-buttonhook',
      asset: 'assets/objects/cozy_cobbler_nook_buttonhook.png',
      x: 990,
      y: 612,
      scale: 0.18
    },
    {
      id: 'little-shoe-form',
      name: 'Shoe Form',
      requester: 'Milo Mender',
      clue: 'A little wooden shoe form rests below the right shelf.',
      key: 'object-cozy-cobbler-nook-shoe-form',
      asset: 'assets/objects/cozy_cobbler_nook_shoe_form.png',
      x: 1110,
      y: 330,
      scale: 0.17
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-button-1',
      name: 'Golden Button',
      key: 'bonus-cozy-cobbler-nook-button-1',
      asset: 'assets/bonus/cozy_cobbler_nook_golden_button_01.png',
      x: 650,
      y: 210,
      scale: 0.12
    },
    {
      id: 'golden-button-2',
      name: 'Golden Button',
      key: 'bonus-cozy-cobbler-nook-button-2',
      asset: 'assets/bonus/cozy_cobbler_nook_golden_button_02.png',
      x: 1144,
      y: 590,
      scale: 0.12
    },
    {
      id: 'golden-button-3',
      name: 'Golden Button',
      key: 'bonus-cozy-cobbler-nook-button-3',
      asset: 'assets/bonus/cozy_cobbler_nook_golden_button_03.png',
      x: 330,
      y: 450,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'cobbler-window-sun',
      x: 675,
      y: 170,
      label: 'Sunny!'
    },
    {
      id: 'cobbler-lace-tangle',
      x: 910,
      y: 452,
      label: 'Loop!'
    },
    {
      id: 'cobbler-shelf-shine',
      x: 1060,
      y: 268,
      label: 'Shine!'
    }
  ],
  previousLevelId: 'moonlit-origami-alcove'
};
