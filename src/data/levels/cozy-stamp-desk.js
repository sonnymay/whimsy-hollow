export const cozyStampDesk = {
  id: 'cozy-stamp-desk',
  title: 'Cozy Stamp Desk',
  saveKey: 'whimsy-hollow:cozy-stamp-desk',
  bonusSaveKey: 'whimsy-hollow:cozy-stamp-desk:bonus',
  bonusLabel: 'Stamps',
  bonusFoundText: 'Stamp!',
  background: {
    key: 'cozyStampDeskBackground',
    path: 'assets/backgrounds/cozy_stamp_desk.webp'
  },
  objects: [
    {
      id: 'small-stamp-album',
      name: 'Stamp Album',
      requester: 'Pippa Postmark',
      clue: 'A small stamp album rests open on the collecting desk.',
      key: 'object-cozy-stamp-desk-stamp-album',
      asset: 'assets/objects/cozy_stamp_desk_stamp_album.png',
      x: 515,
      y: 560,
      scale: 0.22
    },
    {
      id: 'brass-stamp-tongs',
      name: 'Stamp Tongs',
      requester: 'Pippa Postmark',
      clue: 'Brass stamp tongs wait near the lamp-lit papers.',
      key: 'object-cozy-stamp-desk-stamp-tongs',
      asset: 'assets/objects/cozy_stamp_desk_stamp_tongs.png',
      x: 880,
      y: 635,
      scale: 0.22
    },
    {
      id: 'butterfly-postcard',
      name: 'Butterfly Postcard',
      requester: 'Pippa Postmark',
      clue: 'A butterfly postcard is tucked into the left paper tray.',
      key: 'object-cozy-stamp-desk-butterfly-postcard',
      asset: 'assets/objects/cozy_stamp_desk_butterfly_postcard.png',
      x: 285,
      y: 500,
      scale: 0.22
    },
    {
      id: 'green-ink-pad',
      name: 'Green Ink Pad',
      requester: 'Pippa Postmark',
      clue: 'A green ink pad sits below the glowing desk lamp.',
      key: 'object-cozy-stamp-desk-green-ink-pad',
      asset: 'assets/objects/cozy_stamp_desk_green_ink_pad.png',
      x: 930,
      y: 575,
      scale: 0.22
    },
    {
      id: 'tiny-wax-seal-stamp',
      name: 'Wax Seal Stamp',
      requester: 'Pippa Postmark',
      clue: 'A tiny wax seal stamp is set beside the envelopes.',
      key: 'object-cozy-stamp-desk-wax-seal-stamp',
      asset: 'assets/objects/cozy_stamp_desk_wax_seal_stamp.png',
      x: 1045,
      y: 560,
      scale: 0.22
    },
    {
      id: 'perforation-gauge-ruler',
      name: 'Perforation Gauge',
      requester: 'Pippa Postmark',
      clue: 'A perforation gauge ruler lies near the stamp album.',
      key: 'object-cozy-stamp-desk-perforation-gauge',
      asset: 'assets/objects/cozy_stamp_desk_perforation_gauge.png',
      x: 680,
      y: 620,
      scale: 0.22
    },
    {
      id: 'ribbon-bundle',
      name: 'Ribbon Bundle',
      requester: 'Pippa Postmark',
      clue: 'A ribbon bundle rests in the lower left basket.',
      key: 'object-cozy-stamp-desk-ribbon-bundle',
      asset: 'assets/objects/cozy_stamp_desk_ribbon_bundle.png',
      x: 235,
      y: 620,
      scale: 0.22
    },
    {
      id: 'little-envelope-stack',
      name: 'Envelope Stack',
      requester: 'Pippa Postmark',
      clue: 'A little envelope stack waits on the desk near the window.',
      key: 'object-cozy-stamp-desk-envelope-stack',
      asset: 'assets/objects/cozy_stamp_desk_envelope_stack.png',
      x: 1120,
      y: 430,
      scale: 0.22
    },
    {
      id: 'flower-stamp-sheet',
      name: 'Flower Stamp Sheet',
      requester: 'Pippa Postmark',
      clue: 'A flower stamp sheet is filed in the wooden cubbies.',
      key: 'object-cozy-stamp-desk-flower-stamp-sheet',
      asset: 'assets/objects/cozy_stamp_desk_flower_stamp_sheet.png',
      x: 685,
      y: 310,
      scale: 0.22
    },
    {
      id: 'wooden-sorting-tray',
      name: 'Sorting Tray',
      requester: 'Pippa Postmark',
      clue: 'A wooden sorting tray sits at the right edge of the desk.',
      key: 'object-cozy-stamp-desk-sorting-tray',
      asset: 'assets/objects/cozy_stamp_desk_sorting_tray.png',
      x: 1150,
      y: 610,
      scale: 0.22
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-stamp-1',
      name: 'Golden Stamp',
      key: 'bonus-cozy-stamp-desk-stamp-1',
      asset: 'assets/bonus/cozy_stamp_desk_golden_stamp_01.png',
      x: 355,
      y: 185,
      scale: 0.16
    },
    {
      id: 'golden-stamp-2',
      name: 'Golden Stamp',
      key: 'bonus-cozy-stamp-desk-stamp-2',
      asset: 'assets/bonus/cozy_stamp_desk_golden_stamp_02.png',
      x: 805,
      y: 230,
      scale: 0.16
    },
    {
      id: 'golden-stamp-3',
      name: 'Golden Stamp',
      key: 'bonus-cozy-stamp-desk-stamp-3',
      asset: 'assets/bonus/cozy_stamp_desk_golden_stamp_03.png',
      x: 1185,
      y: 205,
      scale: 0.16
    }
  ],
  surprises: [
    {
      id: 'stamp-desk-lamp-glow',
      x: 1025,
      y: 375,
      label: 'Glow!'
    },
    {
      id: 'stamp-desk-paper-flutter',
      x: 740,
      y: 525,
      label: 'Flutter!'
    },
    {
      id: 'stamp-desk-drawer-click',
      x: 520,
      y: 410,
      label: 'Click!'
    }
  ],
  previousLevelId: 'cozy-mineral-cabinet'
};
