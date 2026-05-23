export const sunnyBeadStudio = {
  id: 'sunny-bead-studio',
  title: 'Sunny Bead Studio',
  saveKey: 'whimsy-hollow:sunny-bead-studio',
  bonusSaveKey: 'whimsy-hollow:sunny-bead-studio:bonus',
  bonusLabel: 'Beads',
  bonusFoundText: 'Bead!',
  background: {
    key: 'sunnyBeadStudioBackground',
    path: 'assets/backgrounds/sunny_bead_studio.webp'
  },
  objects: [
    {
      id: 'tiny-glass-bead-jar',
      name: 'Bead Jar',
      requester: 'Bibi Beadwell',
      clue: 'A tiny glass bead jar sits below the sunny window.',
      key: 'object-sunny-bead-studio-bead-jar',
      asset: 'assets/objects/sunny_bead_studio_bead_jar.png',
      x: 430,
      y: 430,
      scale: 0.2
    },
    {
      id: 'pearl-bracelet',
      name: 'Pearl Bracelet',
      requester: 'Bibi Beadwell',
      clue: 'A pearl bracelet circles the middle of the worktable.',
      key: 'object-sunny-bead-studio-pearl-bracelet',
      asset: 'assets/objects/sunny_bead_studio_pearl_bracelet.png',
      x: 810,
      y: 505,
      scale: 0.2
    },
    {
      id: 'brass-flower-charm',
      name: 'Brass Charm',
      requester: 'Bibi Beadwell',
      clue: 'A brass flower charm hangs near the charm board.',
      key: 'object-sunny-bead-studio-brass-charm',
      asset: 'assets/objects/sunny_bead_studio_brass_charm.png',
      x: 1110,
      y: 185,
      scale: 0.2
    },
    {
      id: 'blue-ribbon-spool',
      name: 'Ribbon Spool',
      requester: 'Bibi Beadwell',
      clue: 'A blue ribbon spool is tucked near the ribbon rack.',
      key: 'object-sunny-bead-studio-blue-ribbon-spool',
      asset: 'assets/objects/sunny_bead_studio_blue_ribbon_spool.png',
      x: 750,
      y: 165,
      scale: 0.2
    },
    {
      id: 'velvet-bead-tray',
      name: 'Bead Tray',
      requester: 'Bibi Beadwell',
      clue: 'A velvet bead tray rests on the right side of the table.',
      key: 'object-sunny-bead-studio-velvet-bead-tray',
      asset: 'assets/objects/sunny_bead_studio_velvet_bead_tray.png',
      x: 925,
      y: 435,
      scale: 0.2
    },
    {
      id: 'wooden-bead-scoop',
      name: 'Bead Scoop',
      requester: 'Bibi Beadwell',
      clue: 'A wooden bead scoop waits beside the lower shelf jars.',
      key: 'object-sunny-bead-studio-wooden-bead-scoop',
      asset: 'assets/objects/sunny_bead_studio_wooden_bead_scoop.png',
      x: 555,
      y: 550,
      scale: 0.2
    },
    {
      id: 'small-magnifying-loupe',
      name: 'Magnifying Loupe',
      requester: 'Bibi Beadwell',
      clue: 'A small magnifying loupe lies near the lamp glow.',
      key: 'object-sunny-bead-studio-magnifying-loupe',
      asset: 'assets/objects/sunny_bead_studio_magnifying_loupe.png',
      x: 1000,
      y: 575,
      scale: 0.2
    },
    {
      id: 'round-clasp-ring',
      name: 'Clasp Ring',
      requester: 'Bibi Beadwell',
      clue: 'A round clasp ring is tucked near the bracelet stand.',
      key: 'object-sunny-bead-studio-clasp-ring',
      asset: 'assets/objects/sunny_bead_studio_clasp_ring.png',
      x: 1160,
      y: 500,
      scale: 0.2
    },
    {
      id: 'lavender-fabric-pouch',
      name: 'Fabric Pouch',
      requester: 'Bibi Beadwell',
      clue: 'A lavender pouch rests near the draped cloth.',
      key: 'object-sunny-bead-studio-lavender-pouch',
      asset: 'assets/objects/sunny_bead_studio_lavender_pouch.png',
      x: 1045,
      y: 640,
      scale: 0.2
    },
    {
      id: 'colorful-bead-string',
      name: 'Bead String',
      requester: 'Bibi Beadwell',
      clue: 'A colorful bead string curves across the table lace.',
      key: 'object-sunny-bead-studio-colorful-bead-string',
      asset: 'assets/objects/sunny_bead_studio_colorful_bead_string.png',
      x: 760,
      y: 470,
      scale: 0.2
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-bead-1',
      name: 'Golden Bead',
      key: 'bonus-sunny-bead-studio-bead-1',
      asset: 'assets/bonus/sunny_bead_studio_golden_bead_01.png',
      x: 260,
      y: 170,
      scale: 0.15
    },
    {
      id: 'golden-bead-2',
      name: 'Golden Bead',
      key: 'bonus-sunny-bead-studio-bead-2',
      asset: 'assets/bonus/sunny_bead_studio_golden_bead_02.png',
      x: 710,
      y: 165,
      scale: 0.15
    },
    {
      id: 'golden-bead-3',
      name: 'Golden Bead',
      key: 'bonus-sunny-bead-studio-bead-3',
      asset: 'assets/bonus/sunny_bead_studio_golden_bead_03.png',
      x: 1140,
      y: 155,
      scale: 0.15
    }
  ],
  surprises: [
    {
      id: 'bead-studio-jar-jingle',
      x: 450,
      y: 430,
      label: 'Jingle!'
    },
    {
      id: 'bead-studio-lamp-glow',
      x: 815,
      y: 330,
      label: 'Glow!'
    },
    {
      id: 'bead-studio-drawer-click',
      x: 950,
      y: 625,
      label: 'Click!'
    }
  ],
  previousLevelId: 'sunlit-photo-corner'
};
