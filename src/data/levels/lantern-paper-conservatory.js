export const lanternPaperConservatory = {
  id: 'lantern-paper-conservatory',
  title: 'Lantern Paper Conservatory',
  saveKey: 'whimsy-hollow:lantern-paper-conservatory',
  bonusSaveKey: 'whimsy-hollow:lantern-paper-conservatory:bonus',
  bonusLabel: 'Glow Moths',
  bonusFoundText: 'Glow moth!',
  background: {
    key: 'lanternPaperConservatoryBackground',
    path: 'assets/backgrounds/lantern_paper_conservatory.webp'
  },
  objects: [
    {
      id: 'painted-paper-lantern',
      name: 'Paper Lantern',
      requester: 'Pippa Fold',
      clue: 'A painted paper lantern glows among the small shelf lanterns.',
      key: 'object-lantern-paper-conservatory-paper-lantern',
      asset: 'assets/objects/lantern_paper_conservatory_paper_lantern.png',
      x: 805,
      y: 500,
      scale: 0.2
    },
    {
      id: 'folded-paper-crane',
      name: 'Paper Crane',
      requester: 'Pippa Fold',
      clue: 'A folded paper crane perches near the left cubbies.',
      key: 'object-lantern-paper-conservatory-folded-paper-crane',
      asset: 'assets/objects/lantern_paper_conservatory_folded_paper_crane.png',
      x: 425,
      y: 415,
      scale: 0.19
    },
    {
      id: 'brass-scissors',
      name: 'Brass Scissors',
      requester: 'Pippa Fold',
      clue: 'Brass scissors wait beside the lantern papers on the table.',
      key: 'object-lantern-paper-conservatory-brass-scissors',
      asset: 'assets/objects/lantern_paper_conservatory_brass_scissors.png',
      x: 930,
      y: 525,
      scale: 0.2
    },
    {
      id: 'floral-ribbon-spool',
      name: 'Ribbon Spool',
      requester: 'Pippa Fold',
      clue: 'A floral ribbon spool sits on the right craft shelf.',
      key: 'object-lantern-paper-conservatory-floral-ribbon-spool',
      asset: 'assets/objects/lantern_paper_conservatory_floral_ribbon_spool.png',
      x: 1070,
      y: 275,
      scale: 0.2
    },
    {
      id: 'bamboo-skewer-bundle',
      name: 'Bamboo Skewers',
      requester: 'Pippa Fold',
      clue: 'A tied bundle of bamboo skewers rests near the left plant stand.',
      key: 'object-lantern-paper-conservatory-bamboo-skewers',
      asset: 'assets/objects/lantern_paper_conservatory_bamboo_skewer_bundle.png',
      x: 260,
      y: 565,
      scale: 0.19
    },
    {
      id: 'tiny-glue-pot',
      name: 'Glue Pot',
      requester: 'Pippa Fold',
      clue: 'A tiny glue pot sits beside the paper scraps.',
      key: 'object-lantern-paper-conservatory-tiny-glue-pot',
      asset: 'assets/objects/lantern_paper_conservatory_tiny_glue_pot.png',
      x: 705,
      y: 565,
      scale: 0.19
    },
    {
      id: 'pressed-flower-card',
      name: 'Flower Card',
      requester: 'Pippa Fold',
      clue: 'A pressed flower card leans against the sunny window.',
      key: 'object-lantern-paper-conservatory-pressed-flower-card',
      asset: 'assets/objects/lantern_paper_conservatory_pressed_flower_card.png',
      x: 555,
      y: 325,
      scale: 0.19
    },
    {
      id: 'washi-tape-roll',
      name: 'Washi Tape',
      requester: 'Pippa Fold',
      clue: 'A pink washi tape roll hides near the front edge of the worktable.',
      key: 'object-lantern-paper-conservatory-washi-tape-roll',
      asset: 'assets/objects/lantern_paper_conservatory_washi_tape_roll.png',
      x: 880,
      y: 610,
      scale: 0.21
    },
    {
      id: 'blue-glass-bead-jar',
      name: 'Bead Jar',
      requester: 'Pippa Fold',
      clue: 'A blue glass bead jar sparkles in a lower cubby.',
      key: 'object-lantern-paper-conservatory-blue-glass-bead-jar',
      asset: 'assets/objects/lantern_paper_conservatory_blue_glass_bead_jar.png',
      x: 455,
      y: 505,
      scale: 0.19
    },
    {
      id: 'wooden-lantern-frame',
      name: 'Lantern Frame',
      requester: 'Pippa Fold',
      clue: 'A wooden lantern frame stands by the chair leg.',
      key: 'object-lantern-paper-conservatory-wooden-lantern-frame',
      asset: 'assets/objects/lantern_paper_conservatory_wooden_lantern_frame.png',
      x: 1010,
      y: 650,
      scale: 0.19
    }
  ],
  bonusEnvelopes: [
    {
      id: 'glow-moth-1',
      name: 'Glow Moth',
      key: 'bonus-lantern-paper-conservatory-glow-moth-1',
      asset: 'assets/bonus/lantern_paper_conservatory_glow_moth_01.png',
      x: 245,
      y: 205,
      scale: 0.12
    },
    {
      id: 'glow-moth-2',
      name: 'Glow Moth',
      key: 'bonus-lantern-paper-conservatory-glow-moth-2',
      asset: 'assets/bonus/lantern_paper_conservatory_glow_moth_02.png',
      x: 650,
      y: 160,
      scale: 0.12
    },
    {
      id: 'glow-moth-3',
      name: 'Glow Moth',
      key: 'bonus-lantern-paper-conservatory-glow-moth-3',
      asset: 'assets/bonus/lantern_paper_conservatory_glow_moth_03.png',
      x: 1150,
      y: 190,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'conservatory-paper-rustle',
      x: 520,
      y: 455,
      label: 'Rustle!'
    },
    {
      id: 'conservatory-lantern-glow',
      x: 835,
      y: 340,
      label: 'Glow!'
    },
    {
      id: 'conservatory-leaf-brush',
      x: 275,
      y: 355,
      label: 'Swish!'
    }
  ],
  previousLevelId: 'rainy-terrarium-table'
};
