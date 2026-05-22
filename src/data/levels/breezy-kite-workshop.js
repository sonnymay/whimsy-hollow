export const breezyKiteWorkshop = {
  id: 'breezy-kite-workshop',
  title: 'Breezy Kite Workshop',
  saveKey: 'whimsy-hollow:breezy-kite-workshop',
  bonusSaveKey: 'whimsy-hollow:breezy-kite-workshop:bonus',
  bonusLabel: 'Pinwheels',
  bonusFoundText: 'Pinwheel!',
  background: {
    key: 'breezyKiteWorkshopBackground',
    path: 'assets/backgrounds/breezy_kite_workshop.png'
  },
  objects: [
    {
      id: 'tiny-paper-kite',
      name: 'Paper Kite',
      requester: 'Kite Keeper Kira',
      clue: 'A tiny paper kite hangs near the left wall.',
      key: 'object-breezy-kite-workshop-paper-kite',
      asset: 'assets/objects/breezy_kite_workshop_paper_kite.png',
      x: 248,
      y: 226,
      scale: 0.17
    },
    {
      id: 'blue-ribbon-spool',
      name: 'Ribbon Spool',
      requester: 'Kite Keeper Kira',
      clue: 'A blue ribbon spool rests on the sunny worktable.',
      key: 'object-breezy-kite-workshop-blue-ribbon-spool',
      asset: 'assets/objects/breezy_kite_workshop_blue_ribbon_spool.png',
      x: 946,
      y: 460,
      scale: 0.18
    },
    {
      id: 'bamboo-kite-stick',
      name: 'Bamboo Stick',
      requester: 'Kite Keeper Kira',
      clue: 'A bamboo stick waits in the tall basket.',
      key: 'object-breezy-kite-workshop-bamboo-stick',
      asset: 'assets/objects/breezy_kite_workshop_bamboo_stick.png',
      x: 376,
      y: 476,
      scale: 0.17
    },
    {
      id: 'cloud-shaped-button',
      name: 'Cloud Button',
      requester: 'Kite Keeper Kira',
      clue: 'A cloud button hides near the bright window.',
      key: 'object-breezy-kite-workshop-cloud-button',
      asset: 'assets/objects/breezy_kite_workshop_cloud_button.png',
      x: 720,
      y: 308,
      scale: 0.21
    },
    {
      id: 'flower-tail-bow',
      name: 'Tail Bow',
      requester: 'Kite Keeper Kira',
      clue: 'A flower bow is tied near a kite tail.',
      key: 'object-breezy-kite-workshop-flower-tail-bow',
      asset: 'assets/objects/breezy_kite_workshop_flower_tail_bow.png',
      x: 1120,
      y: 236,
      scale: 0.18
    },
    {
      id: 'golden-scissors-charm',
      name: 'Scissors',
      requester: 'Kite Keeper Kira',
      clue: 'Golden scissors shine beside the paper scraps.',
      key: 'object-breezy-kite-workshop-scissors-charm',
      asset: 'assets/objects/breezy_kite_workshop_scissors_charm.png',
      x: 1012,
      y: 570,
      scale: 0.2
    },
    {
      id: 'paper-wind-sock',
      name: 'Wind Sock',
      requester: 'Kite Keeper Kira',
      clue: 'A paper wind sock dangles from the craft shelf.',
      key: 'object-breezy-kite-workshop-windsock',
      asset: 'assets/objects/breezy_kite_workshop_windsock.png',
      x: 518,
      y: 288,
      scale: 0.16
    },
    {
      id: 'little-glue-pot',
      name: 'Glue Pot',
      requester: 'Kite Keeper Kira',
      clue: 'A little glue pot waits by the brushes.',
      key: 'object-breezy-kite-workshop-glue-pot',
      asset: 'assets/objects/breezy_kite_workshop_glue_pot.png',
      x: 1160,
      y: 522,
      scale: 0.19
    },
    {
      id: 'painted-cloth-patch',
      name: 'Cloth Patch',
      requester: 'Kite Keeper Kira',
      clue: 'A painted cloth patch rests in the lower basket.',
      key: 'object-breezy-kite-workshop-cloth-patch',
      asset: 'assets/objects/breezy_kite_workshop_cloth_patch.png',
      x: 330,
      y: 638,
      scale: 0.2
    },
    {
      id: 'wooden-bobbin',
      name: 'Bobbin',
      requester: 'Kite Keeper Kira',
      clue: 'A wooden bobbin sits near the ribbon drawer.',
      key: 'object-breezy-kite-workshop-wooden-bobbin',
      asset: 'assets/objects/breezy_kite_workshop_wooden_bobbin.png',
      x: 820,
      y: 622,
      scale: 0.2
    }
  ],
  bonusEnvelopes: [
    {
      id: 'pinwheel-1',
      name: 'Red Pinwheel',
      key: 'bonus-breezy-kite-workshop-pinwheel-1',
      asset: 'assets/bonus/breezy_kite_workshop_pinwheel_01.png',
      x: 628,
      y: 198,
      scale: 0.15
    },
    {
      id: 'pinwheel-2',
      name: 'Gold Pinwheel',
      key: 'bonus-breezy-kite-workshop-pinwheel-2',
      asset: 'assets/bonus/breezy_kite_workshop_pinwheel_02.png',
      x: 1018,
      y: 384,
      scale: 0.15
    },
    {
      id: 'pinwheel-3',
      name: 'Blue Pinwheel',
      key: 'bonus-breezy-kite-workshop-pinwheel-3',
      asset: 'assets/bonus/breezy_kite_workshop_pinwheel_03.png',
      x: 1176,
      y: 650,
      scale: 0.15
    }
  ],
  surprises: [
    {
      id: 'kite-window-breeze',
      x: 672,
      y: 190,
      label: 'Breeze!'
    },
    {
      id: 'kite-ribbon-swish',
      x: 944,
      y: 438,
      label: 'Swish!'
    },
    {
      id: 'kite-wall-flutter',
      x: 214,
      y: 210,
      label: 'Flutter!'
    }
  ],
  previousLevelId: 'willow-pond-boathouse'
};
