export const sunbeamPotteryStudio = {
  id: 'sunbeam-pottery-studio',
  title: 'Sunbeam Pottery Studio',
  saveKey: 'whimsy-hollow:sunbeam-pottery-studio',
  bonusSaveKey: 'whimsy-hollow:sunbeam-pottery-studio:bonus',
  bonusLabel: 'Beads',
  bonusFoundText: 'Bead!',
  background: {
    key: 'sunbeamPotteryStudioBackground',
    path: 'assets/backgrounds/sunbeam_pottery_studio.png'
  },
  objects: [
    {
      id: 'tiny-clay-mug',
      name: 'Mug',
      requester: 'Potter Pippa',
      clue: 'A tiny clay mug waits near the sunlight.',
      key: 'object-sunbeam-pottery-studio-clay-mug',
      asset: 'assets/objects/sunbeam_pottery_studio_clay_mug.png',
      x: 330,
      y: 398,
      scale: 0.12
    },
    {
      id: 'painted-ceramic-tile',
      name: 'Tile',
      requester: 'Potter Pippa',
      clue: 'A painted tile rests on a wooden shelf.',
      key: 'object-sunbeam-pottery-studio-ceramic-tile',
      asset: 'assets/objects/sunbeam_pottery_studio_ceramic_tile.png',
      x: 742,
      y: 214,
      scale: 0.12
    },
    {
      id: 'wooden-pottery-rib',
      name: 'Rib',
      requester: 'Potter Pippa',
      clue: 'A wooden pottery rib leans by the worktable.',
      key: 'object-sunbeam-pottery-studio-pottery-rib',
      asset: 'assets/objects/sunbeam_pottery_studio_pottery_rib.png',
      x: 492,
      y: 478,
      scale: 0.12
    },
    {
      id: 'soft-sponge',
      name: 'Sponge',
      requester: 'Potter Pippa',
      clue: 'A soft sponge sits close to the clay tools.',
      key: 'object-sunbeam-pottery-studio-soft-sponge',
      asset: 'assets/objects/sunbeam_pottery_studio_soft_sponge.png',
      x: 538,
      y: 372,
      scale: 0.12
    },
    {
      id: 'blue-glaze-jar',
      name: 'Glaze',
      requester: 'Potter Pippa',
      clue: 'A blue glaze jar waits on the pottery shelf.',
      key: 'object-sunbeam-pottery-studio-blue-glaze-jar',
      asset: 'assets/objects/sunbeam_pottery_studio_blue_glaze_jar.png',
      x: 822,
      y: 334,
      scale: 0.12
    },
    {
      id: 'flower-stamp',
      name: 'Stamp',
      requester: 'Potter Pippa',
      clue: 'A flower stamp rests beside the drying rack.',
      key: 'object-sunbeam-pottery-studio-flower-stamp',
      asset: 'assets/objects/sunbeam_pottery_studio_flower_stamp.png',
      x: 1026,
      y: 604,
      scale: 0.12
    },
    {
      id: 'ribbon-handled-vase',
      name: 'Vase',
      requester: 'Potter Pippa',
      clue: 'A ribbon vase hides among the finished pots.',
      key: 'object-sunbeam-pottery-studio-ribbon-vase',
      asset: 'assets/objects/sunbeam_pottery_studio_ribbon_vase.png',
      x: 1102,
      y: 356,
      scale: 0.12
    },
    {
      id: 'little-clay-bird',
      name: 'Bird',
      requester: 'Potter Pippa',
      clue: 'A clay bird perches near the herb pots.',
      key: 'object-sunbeam-pottery-studio-clay-bird',
      asset: 'assets/objects/sunbeam_pottery_studio_clay_bird.png',
      x: 1178,
      y: 482,
      scale: 0.12
    },
    {
      id: 'round-paint-palette',
      name: 'Palette',
      requester: 'Potter Pippa',
      clue: 'A paint palette lies near the stool.',
      key: 'object-sunbeam-pottery-studio-paint-palette',
      asset: 'assets/objects/sunbeam_pottery_studio_paint_palette.png',
      x: 624,
      y: 626,
      scale: 0.12
    },
    {
      id: 'small-herb-pot',
      name: 'Herb Pot',
      requester: 'Potter Pippa',
      clue: 'A small herb pot grows by the window.',
      key: 'object-sunbeam-pottery-studio-herb-pot',
      asset: 'assets/objects/sunbeam_pottery_studio_herb_pot.png',
      x: 284,
      y: 250,
      scale: 0.12
    }
  ],
  bonusEnvelopes: [
    {
      id: 'clay-bead-1',
      name: 'Orange Clay Bead',
      key: 'bonus-sunbeam-pottery-studio-clay-bead-1',
      asset: 'assets/bonus/sunbeam_pottery_studio_clay_bead_01.png',
      x: 420,
      y: 622,
      scale: 0.1
    },
    {
      id: 'clay-bead-2',
      name: 'Green Clay Bead',
      key: 'bonus-sunbeam-pottery-studio-clay-bead-2',
      asset: 'assets/bonus/sunbeam_pottery_studio_clay_bead_02.png',
      x: 876,
      y: 178,
      scale: 0.1
    },
    {
      id: 'clay-bead-3',
      name: 'Blue Clay Bead',
      key: 'bonus-sunbeam-pottery-studio-clay-bead-3',
      asset: 'assets/bonus/sunbeam_pottery_studio_clay_bead_03.png',
      x: 1156,
      y: 624,
      scale: 0.1
    }
  ],
  surprises: [
    {
      id: 'pottery-window-sun',
      x: 302,
      y: 208,
      label: 'Warm!'
    },
    {
      id: 'pottery-shelf-clink',
      x: 794,
      y: 232,
      label: 'Clink!'
    },
    {
      id: 'pottery-wheel-spin',
      x: 410,
      y: 404,
      label: 'Spin!'
    }
  ],
  previousLevelId: 'sleepy-train-car'
};
