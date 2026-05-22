export const moonlitOrigamiAlcove = {
  id: 'moonlit-origami-alcove',
  title: 'Moonlit Origami Alcove',
  saveKey: 'whimsy-hollow:moonlit-origami-alcove',
  bonusSaveKey: 'whimsy-hollow:moonlit-origami-alcove:bonus',
  bonusLabel: 'Moons',
  bonusFoundText: 'Moon!',
  background: {
    key: 'moonlitOrigamiAlcoveBackground',
    path: 'assets/backgrounds/moonlit_origami_alcove.png'
  },
  objects: [
    {
      id: 'blue-origami-crane',
      name: 'Blue Crane',
      requester: 'Ori Paperfold',
      clue: 'A blue paper crane rests by the hanging folds.',
      key: 'object-moonlit-origami-alcove-blue-crane',
      asset: 'assets/objects/moonlit_origami_alcove_blue_crane.png',
      x: 330,
      y: 230,
      scale: 0.16
    },
    {
      id: 'folded-paper-star',
      name: 'Paper Star',
      requester: 'Ori Paperfold',
      clue: 'A folded paper star shines on the shelf.',
      key: 'object-moonlit-origami-alcove-paper-star',
      asset: 'assets/objects/moonlit_origami_alcove_paper_star.png',
      x: 500,
      y: 400,
      scale: 0.17
    },
    {
      id: 'bone-folder-tool',
      name: 'Bone Folder',
      requester: 'Ori Paperfold',
      clue: 'A smooth folding tool lies near the paper stack.',
      key: 'object-moonlit-origami-alcove-bone-folder',
      asset: 'assets/objects/moonlit_origami_alcove_bone_folder.png',
      x: 930,
      y: 590,
      scale: 0.18
    },
    {
      id: 'patterned-paper-sheet',
      name: 'Paper Sheet',
      requester: 'Ori Paperfold',
      clue: 'A patterned square sheet waits on the low table.',
      key: 'object-moonlit-origami-alcove-patterned-sheet',
      asset: 'assets/objects/moonlit_origami_alcove_patterned_sheet.png',
      x: 640,
      y: 535,
      scale: 0.18
    },
    {
      id: 'tiny-paper-lantern',
      name: 'Paper Lantern',
      requester: 'Ori Paperfold',
      clue: 'A tiny paper lantern glows beside the window seat.',
      key: 'object-moonlit-origami-alcove-paper-lantern',
      asset: 'assets/objects/moonlit_origami_alcove_paper_lantern.png',
      x: 930,
      y: 505,
      scale: 0.17
    },
    {
      id: 'wooden-paperweight',
      name: 'Paperweight',
      requester: 'Ori Paperfold',
      clue: 'A wooden paperweight keeps the lower pages still.',
      key: 'object-moonlit-origami-alcove-paperweight',
      asset: 'assets/objects/moonlit_origami_alcove_paperweight.png',
      x: 450,
      y: 610,
      scale: 0.18
    },
    {
      id: 'blue-washi-tape',
      name: 'Washi Tape',
      requester: 'Ori Paperfold',
      clue: 'A blue washi tape roll hides near the right basket.',
      key: 'object-moonlit-origami-alcove-washi-tape',
      asset: 'assets/objects/moonlit_origami_alcove_washi_tape.png',
      x: 1120,
      y: 640,
      scale: 0.18
    },
    {
      id: 'small-paper-boat',
      name: 'Paper Boat',
      requester: 'Ori Paperfold',
      clue: 'A small paper boat floats across the folding table.',
      key: 'object-moonlit-origami-alcove-paper-boat',
      asset: 'assets/objects/moonlit_origami_alcove_paper_boat.png',
      x: 750,
      y: 470,
      scale: 0.18
    },
    {
      id: 'red-paper-fan',
      name: 'Paper Fan',
      requester: 'Ori Paperfold',
      clue: 'A red paper fan opens near the right shelf cubbies.',
      key: 'object-moonlit-origami-alcove-paper-fan',
      asset: 'assets/objects/moonlit_origami_alcove_paper_fan.png',
      x: 1115,
      y: 420,
      scale: 0.17
    },
    {
      id: 'little-glue-brush',
      name: 'Glue Brush',
      requester: 'Ori Paperfold',
      clue: 'A little glue brush rests by the lower-right paper jar.',
      key: 'object-moonlit-origami-alcove-glue-brush',
      asset: 'assets/objects/moonlit_origami_alcove_glue_brush.png',
      x: 1010,
      y: 650,
      scale: 0.18
    }
  ],
  bonusEnvelopes: [
    {
      id: 'crescent-moon-1',
      name: 'Crescent Moon',
      key: 'bonus-moonlit-origami-alcove-moon-1',
      asset: 'assets/bonus/moonlit_origami_alcove_crescent_01.png',
      x: 610,
      y: 230,
      scale: 0.12
    },
    {
      id: 'crescent-moon-2',
      name: 'Crescent Moon',
      key: 'bonus-moonlit-origami-alcove-moon-2',
      asset: 'assets/bonus/moonlit_origami_alcove_crescent_02.png',
      x: 1180,
      y: 260,
      scale: 0.12
    },
    {
      id: 'crescent-moon-3',
      name: 'Crescent Moon',
      key: 'bonus-moonlit-origami-alcove-moon-3',
      asset: 'assets/bonus/moonlit_origami_alcove_crescent_03.png',
      x: 390,
      y: 530,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'origami-window-moon',
      x: 916,
      y: 142,
      label: 'Moon!'
    },
    {
      id: 'origami-table-fold',
      x: 742,
      y: 502,
      label: 'Fold!'
    },
    {
      id: 'origami-lantern-glow',
      x: 274,
      y: 476,
      label: 'Glow!'
    }
  ],
  previousLevelId: 'sunny-puzzle-parlor'
};
