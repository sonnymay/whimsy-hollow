export const sunnyGiftWrapNook = {
  id: 'sunny-gift-wrap-nook',
  title: 'Sunny Gift Wrap Nook',
  saveKey: 'whimsy-hollow:sunny-gift-wrap-nook',
  bonusSaveKey: 'whimsy-hollow:sunny-gift-wrap-nook:bonus',
  bonusLabel: 'Hearts',
  bonusFoundText: 'Heart!',
  background: {
    key: 'sunnyGiftWrapNookBackground',
    path: 'assets/backgrounds/sunny_gift_wrap_nook.webp'
  },
  objects: [
    {
      id: 'golden-craft-scissors',
      name: 'Craft Scissors',
      requester: 'Penny Parcel',
      clue: 'Golden scissors rest near the wrapping table edge.',
      key: 'object-sunny-gift-wrap-nook-golden-scissors',
      asset: 'assets/objects/sunny_gift_wrap_nook_golden_scissors.png',
      x: 822,
      y: 518,
      scale: 0.18
    },
    {
      id: 'blue-ribbon-spool',
      name: 'Ribbon Spool',
      requester: 'Penny Parcel',
      clue: 'A blue ribbon spool waits on the lower shelf.',
      key: 'object-sunny-gift-wrap-nook-blue-ribbon-spool',
      asset: 'assets/objects/sunny_gift_wrap_nook_blue_ribbon_spool.png',
      x: 498,
      y: 350,
      scale: 0.18
    },
    {
      id: 'kraft-gift-tag',
      name: 'Gift Tag',
      requester: 'Penny Parcel',
      clue: 'A blank gift tag hangs near the paper samples.',
      key: 'object-sunny-gift-wrap-nook-gift-tag',
      asset: 'assets/objects/sunny_gift_wrap_nook_gift_tag.png',
      x: 1108,
      y: 328,
      scale: 0.18
    },
    {
      id: 'wax-seal-stamp',
      name: 'Wax Stamp',
      requester: 'Penny Parcel',
      clue: 'A wax stamp sits close to the sunny window bench.',
      key: 'object-sunny-gift-wrap-nook-wax-stamp',
      asset: 'assets/objects/sunny_gift_wrap_nook_wax_stamp.png',
      x: 612,
      y: 468,
      scale: 0.18
    },
    {
      id: 'floral-paper-roll',
      name: 'Paper Roll',
      requester: 'Penny Parcel',
      clue: 'A floral paper roll leans inside the basket of wraps.',
      key: 'object-sunny-gift-wrap-nook-floral-paper-roll',
      asset: 'assets/objects/sunny_gift_wrap_nook_floral_paper_roll.png',
      x: 250,
      y: 512,
      scale: 0.18
    },
    {
      id: 'tiny-tape-dispenser',
      name: 'Tape Dispenser',
      requester: 'Penny Parcel',
      clue: 'A tiny tape dispenser hides by the table ribbons.',
      key: 'object-sunny-gift-wrap-nook-tape-dispenser',
      asset: 'assets/objects/sunny_gift_wrap_nook_tape_dispenser.png',
      x: 1018,
      y: 550,
      scale: 0.18
    },
    {
      id: 'flower-sticker-sheet',
      name: 'Sticker Sheet',
      requester: 'Penny Parcel',
      clue: 'A flower sticker sheet clips to the right wall.',
      key: 'object-sunny-gift-wrap-nook-sticker-sheet',
      asset: 'assets/objects/sunny_gift_wrap_nook_sticker_sheet.png',
      x: 1172,
      y: 250,
      scale: 0.17
    },
    {
      id: 'lace-paper-doily',
      name: 'Lace Doily',
      requester: 'Penny Parcel',
      clue: 'A lace doily brightens the lower wrapping table.',
      key: 'object-sunny-gift-wrap-nook-lace-doily',
      asset: 'assets/objects/sunny_gift_wrap_nook_lace_doily.png',
      x: 956,
      y: 640,
      scale: 0.18
    },
    {
      id: 'wooden-rubber-stamp',
      name: 'Wooden Stamp',
      requester: 'Penny Parcel',
      clue: 'A wooden stamp stands near the shelf jars.',
      key: 'object-sunny-gift-wrap-nook-wooden-stamp',
      asset: 'assets/objects/sunny_gift_wrap_nook_wooden_stamp.png',
      x: 414,
      y: 256,
      scale: 0.18
    },
    {
      id: 'blue-wrapped-parcel',
      name: 'Blue Parcel',
      requester: 'Penny Parcel',
      clue: 'A blue wrapped parcel waits beside the flower vase.',
      key: 'object-sunny-gift-wrap-nook-blue-parcel',
      asset: 'assets/objects/sunny_gift_wrap_nook_blue_parcel.png',
      x: 1160,
      y: 596,
      scale: 0.18
    }
  ],
  bonusEnvelopes: [
    {
      id: 'paper-heart-1',
      name: 'Paper Heart',
      key: 'bonus-sunny-gift-wrap-nook-heart-1',
      asset: 'assets/bonus/sunny_gift_wrap_nook_paper_heart_01.png',
      x: 700,
      y: 284,
      scale: 0.13
    },
    {
      id: 'paper-heart-2',
      name: 'Paper Heart',
      key: 'bonus-sunny-gift-wrap-nook-heart-2',
      asset: 'assets/bonus/sunny_gift_wrap_nook_paper_heart_02.png',
      x: 358,
      y: 620,
      scale: 0.13
    },
    {
      id: 'paper-heart-3',
      name: 'Paper Heart',
      key: 'bonus-sunny-gift-wrap-nook-heart-3',
      asset: 'assets/bonus/sunny_gift_wrap_nook_paper_heart_03.png',
      x: 1092,
      y: 438,
      scale: 0.13
    }
  ],
  surprises: [
    {
      id: 'gift-wrap-window-sun',
      x: 718,
      y: 190,
      label: 'Warm!'
    },
    {
      id: 'gift-wrap-ribbon-curl',
      x: 900,
      y: 548,
      label: 'Curl!'
    },
    {
      id: 'gift-wrap-paper-stack',
      x: 260,
      y: 612,
      label: 'Pretty!'
    }
  ],
  previousLevelId: 'cozy-map-room'
};
