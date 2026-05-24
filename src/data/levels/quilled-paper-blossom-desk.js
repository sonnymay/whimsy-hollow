export const quilledPaperBlossomDesk = {
  id: 'quilled-paper-blossom-desk',
  title: 'Quilled Paper Blossom Desk',
  saveKey: 'whimsy-hollow:quilled-paper-blossom-desk',
  bonusSaveKey: 'whimsy-hollow:quilled-paper-blossom-desk:bonus',
  bonusLabel: 'Paper Curls',
  bonusFoundText: 'Golden curl!',
  background: {
    key: 'quilledPaperBlossomDeskBackground',
    path: 'assets/backgrounds/quilled_paper_blossom_desk.webp'
  },
  objects: [
    {
      id: 'flower-coil',
      name: 'Flower Coil',
      requester: 'Petal Mae',
      clue: 'A rainbow flower coil rests near the left side of the craft table.',
      key: 'object-quilled-paper-flower-coil',
      asset: 'assets/objects/quilled_paper_flower_coil.png',
      x: 500,
      y: 410,
      scale: 0.14
    },
    {
      id: 'strip-bundle',
      name: 'Paper Strip Bundle',
      requester: 'Petal Mae',
      clue: 'A bundle of colorful paper strips lies beside the sunny basket.',
      key: 'object-quilled-paper-strip-bundle',
      asset: 'assets/objects/quilled_paper_strip_bundle.png',
      x: 320,
      y: 520,
      scale: 0.14
    },
    {
      id: 'slotted-tool',
      name: 'Slotted Tool',
      requester: 'Petal Mae',
      clue: 'The wooden slotted tool is tucked across the middle of the desk.',
      key: 'object-quilled-paper-slotted-tool',
      asset: 'assets/objects/quilled_paper_slotted_tool.png',
      x: 775,
      y: 560,
      scale: 0.13
    },
    {
      id: 'glue-pot',
      name: 'Glue Pot',
      requester: 'Petal Mae',
      clue: 'A small glue pot waits near the cup of quilling tools.',
      key: 'object-quilled-paper-glue-pot',
      asset: 'assets/objects/quilled_paper_glue_pot.png',
      x: 940,
      y: 430,
      scale: 0.13
    },
    {
      id: 'tweezers',
      name: 'Tweezers',
      requester: 'Petal Mae',
      clue: 'Fine tweezers gleam near the front edge of the table.',
      key: 'object-quilled-paper-tweezers',
      asset: 'assets/objects/quilled_paper_tweezers.png',
      x: 780,
      y: 600,
      scale: 0.13
    },
    {
      id: 'floral-card',
      name: 'Floral Card',
      requester: 'Petal Mae',
      clue: 'A finished floral card sits in the center of the work surface.',
      key: 'object-quilled-paper-floral-card',
      asset: 'assets/objects/quilled_paper_floral_card.png',
      x: 575,
      y: 535,
      scale: 0.14
    },
    {
      id: 'curling-comb',
      name: 'Curling Comb',
      requester: 'Petal Mae',
      clue: 'The curling comb rests low on the right side of the desk.',
      key: 'object-quilled-paper-curling-comb',
      asset: 'assets/objects/quilled_paper_curling_comb.png',
      x: 930,
      y: 605,
      scale: 0.13
    },
    {
      id: 'ribbon-clip',
      name: 'Ribbon Clip',
      requester: 'Petal Mae',
      clue: 'A ribbon-tied clip is hiding near the quilled flower tray.',
      key: 'object-quilled-paper-ribbon-clip',
      asset: 'assets/objects/quilled_paper_ribbon_clip.png',
      x: 1040,
      y: 560,
      scale: 0.13
    },
    {
      id: 'petal-tray',
      name: 'Petal Tray',
      requester: 'Petal Mae',
      clue: 'A little tray of paper petals is set beside the right-hand basket.',
      key: 'object-quilled-paper-petal-tray',
      asset: 'assets/objects/quilled_paper_petal_tray.png',
      x: 1020,
      y: 470,
      scale: 0.13
    },
    {
      id: 'rolled-spool',
      name: 'Rolled Paper Spool',
      requester: 'Petal Mae',
      clue: 'A round spool of rolled paper rests near the lower right corner.',
      key: 'object-quilled-paper-rolled-spool',
      asset: 'assets/objects/quilled_paper_rolled_spool.png',
      x: 1110,
      y: 590,
      scale: 0.13
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-curl-1',
      name: 'Golden Paper Curl',
      key: 'bonus-quilled-paper-golden-curl-1',
      asset: 'assets/bonus/quilled_paper_golden_curl_01.png',
      x: 230,
      y: 155,
      scale: 0.08
    },
    {
      id: 'golden-curl-2',
      name: 'Golden Paper Curl',
      key: 'bonus-quilled-paper-golden-curl-2',
      asset: 'assets/bonus/quilled_paper_golden_curl_02.png',
      x: 720,
      y: 165,
      scale: 0.08
    },
    {
      id: 'golden-curl-3',
      name: 'Golden Paper Curl',
      key: 'bonus-quilled-paper-golden-curl-3',
      asset: 'assets/bonus/quilled_paper_golden_curl_03.png',
      x: 1160,
      y: 185,
      scale: 0.08
    }
  ],
  surprises: [
    { x: 500, y: 450, label: 'Curl!' },
    { x: 760, y: 505, label: 'Twist!' },
    { x: 1080, y: 520, label: 'Bloom!' }
  ],
  previousLevelId: 'painted-egg-keepsake-table'
};
