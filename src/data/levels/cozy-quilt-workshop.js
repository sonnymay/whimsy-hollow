export const cozyQuiltWorkshop = {
  id: 'cozy-quilt-workshop',
  title: 'Cozy Quilt Workshop',
  saveKey: 'whimsy-hollow:cozy-quilt-workshop',
  bonusSaveKey: 'whimsy-hollow:cozy-quilt-workshop:bonus',
  bonusLabel: 'Stars',
  bonusFoundText: 'Star!',
  background: {
    key: 'cozyQuiltWorkshopBackground',
    path: 'assets/backgrounds/cozy_quilt_workshop.png'
  },
  objects: [
    {
      id: 'patchwork-quilt-square',
      name: 'Quilt',
      requester: 'Quilter June',
      clue: 'A quilt square rests by the fabric shelves.',
      key: 'object-cozy-quilt-workshop-quilt-square',
      asset: 'assets/objects/cozy_quilt_workshop_quilt_square.png',
      x: 288,
      y: 496,
      scale: 0.13
    },
    {
      id: 'embroidery-hoop',
      name: 'Hoop',
      requester: 'Quilter June',
      clue: 'An embroidery hoop hangs near the wall shelf.',
      key: 'object-cozy-quilt-workshop-embroidery-hoop',
      asset: 'assets/objects/cozy_quilt_workshop_embroidery_hoop.png',
      x: 704,
      y: 132,
      scale: 0.12
    },
    {
      id: 'wooden-needle-case',
      name: 'Needle Case',
      requester: 'Quilter June',
      clue: 'A wooden case hides by the sewing table.',
      key: 'object-cozy-quilt-workshop-needle-case',
      asset: 'assets/objects/cozy_quilt_workshop_needle_case.png',
      x: 928,
      y: 554,
      scale: 0.12
    },
    {
      id: 'measuring-tape-roll',
      name: 'Tape',
      requester: 'Quilter June',
      clue: 'A measuring tape curls near the spool rack.',
      key: 'object-cozy-quilt-workshop-measuring-tape',
      asset: 'assets/objects/cozy_quilt_workshop_measuring_tape.png',
      x: 1150,
      y: 184,
      scale: 0.12
    },
    {
      id: 'tomato-pincushion',
      name: 'Pincushion',
      requester: 'Quilter June',
      clue: 'A pincushion sits on the low craft table.',
      key: 'object-cozy-quilt-workshop-pincushion',
      asset: 'assets/objects/cozy_quilt_workshop_pincushion.png',
      x: 1104,
      y: 500,
      scale: 0.12
    },
    {
      id: 'lavender-sachet',
      name: 'Sachet',
      requester: 'Quilter June',
      clue: 'A lavender sachet waits near the window flowers.',
      key: 'object-cozy-quilt-workshop-lavender-sachet',
      asset: 'assets/objects/cozy_quilt_workshop_lavender_sachet.png',
      x: 426,
      y: 324,
      scale: 0.12
    },
    {
      id: 'button-card',
      name: 'Buttons',
      requester: 'Quilter June',
      clue: 'A button card rests beside the quilt frame.',
      key: 'object-cozy-quilt-workshop-button-card',
      asset: 'assets/objects/cozy_quilt_workshop_button_card.png',
      x: 746,
      y: 472,
      scale: 0.12
    },
    {
      id: 'yarn-basket',
      name: 'Yarn',
      requester: 'Quilter June',
      clue: 'A basket of yarn sits near the armchair.',
      key: 'object-cozy-quilt-workshop-yarn-basket',
      asset: 'assets/objects/cozy_quilt_workshop_yarn_basket.png',
      x: 236,
      y: 640,
      scale: 0.12
    },
    {
      id: 'ribbon-bow',
      name: 'Bow',
      requester: 'Quilter June',
      clue: 'A ribbon bow is tucked by the curtain light.',
      key: 'object-cozy-quilt-workshop-ribbon-bow',
      asset: 'assets/objects/cozy_quilt_workshop_ribbon_bow.png',
      x: 528,
      y: 232,
      scale: 0.12
    },
    {
      id: 'tiny-fabric-bird',
      name: 'Bird',
      requester: 'Quilter June',
      clue: 'A fabric bird perches near the folded quilts.',
      key: 'object-cozy-quilt-workshop-fabric-bird',
      asset: 'assets/objects/cozy_quilt_workshop_fabric_bird.png',
      x: 1002,
      y: 344,
      scale: 0.12
    }
  ],
  bonusEnvelopes: [
    {
      id: 'quilt-star-1',
      name: 'Blue Quilt Star',
      key: 'bonus-quilt-star-1',
      asset: 'assets/bonus/cozy_quilt_workshop_star_01.png',
      x: 368,
      y: 190,
      scale: 0.1
    },
    {
      id: 'quilt-star-2',
      name: 'Pink Quilt Star',
      key: 'bonus-quilt-star-2',
      asset: 'assets/bonus/cozy_quilt_workshop_star_02.png',
      x: 822,
      y: 286,
      scale: 0.1
    },
    {
      id: 'quilt-star-3',
      name: 'Gold Quilt Star',
      key: 'bonus-quilt-star-3',
      asset: 'assets/bonus/cozy_quilt_workshop_star_03.png',
      x: 1164,
      y: 616,
      scale: 0.1
    }
  ],
  surprises: [
    {
      id: 'quilt-window-sun',
      x: 462,
      y: 250,
      label: 'Warm!'
    },
    {
      id: 'quilt-lantern',
      x: 1172,
      y: 480,
      label: 'Glow!'
    },
    {
      id: 'quilt-frame',
      x: 754,
      y: 354,
      label: 'Soft!'
    }
  ],
  previousLevelId: 'cloudberry-treehouse'
};
