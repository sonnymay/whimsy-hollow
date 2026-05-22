export const lavenderLaundryRoom = {
  id: 'lavender-laundry-room',
  title: 'Lavender Laundry Room',
  saveKey: 'whimsy-hollow:lavender-laundry-room',
  bonusSaveKey: 'whimsy-hollow:lavender-laundry-room:bonus',
  bonusLabel: 'Bubbles',
  bonusFoundText: 'Bubble!',
  background: {
    key: 'lavenderLaundryRoomBackground',
    path: 'assets/backgrounds/lavender_laundry_room.png'
  },
  objects: [
    {
      id: 'wooden-clothespin',
      name: 'Clothespin',
      requester: 'Laundry Lily',
      clue: 'A wooden clothespin rests by the drying rack.',
      key: 'object-lavender-laundry-room-clothespin',
      asset: 'assets/objects/lavender_laundry_room_clothespin.png',
      x: 1040,
      y: 360,
      scale: 0.18
    },
    {
      id: 'blue-enamel-washboard',
      name: 'Washboard',
      requester: 'Laundry Lily',
      clue: 'A blue washboard leans near the basin.',
      key: 'object-lavender-laundry-room-washboard',
      asset: 'assets/objects/lavender_laundry_room_washboard.png',
      x: 294,
      y: 456,
      scale: 0.17
    },
    {
      id: 'lavender-soap-bar',
      name: 'Soap Bar',
      requester: 'Laundry Lily',
      clue: 'A lavender soap bar sits in the morning light.',
      key: 'object-lavender-laundry-room-soap-bar',
      asset: 'assets/objects/lavender_laundry_room_soap_bar.png',
      x: 710,
      y: 482,
      scale: 0.2
    },
    {
      id: 'ribboned-sachet',
      name: 'Sachet',
      requester: 'Laundry Lily',
      clue: 'A ribboned sachet hides on the linen shelf.',
      key: 'object-lavender-laundry-room-sachet',
      asset: 'assets/objects/lavender_laundry_room_sachet.png',
      x: 514,
      y: 290,
      scale: 0.18
    },
    {
      id: 'tiny-linen-sock',
      name: 'Tiny Sock',
      requester: 'Laundry Lily',
      clue: 'A tiny sock waits in the laundry basket.',
      key: 'object-lavender-laundry-room-linen-sock',
      asset: 'assets/objects/lavender_laundry_room_linen_sock.png',
      x: 840,
      y: 610,
      scale: 0.19
    },
    {
      id: 'brass-thimble',
      name: 'Thimble',
      requester: 'Laundry Lily',
      clue: 'A brass thimble shines near the folded towels.',
      key: 'object-lavender-laundry-room-brass-thimble',
      asset: 'assets/objects/lavender_laundry_room_brass_thimble.png',
      x: 1180,
      y: 506,
      scale: 0.2
    },
    {
      id: 'flower-handkerchief',
      name: 'Handkerchief',
      requester: 'Laundry Lily',
      clue: 'A flower handkerchief hangs on the drying rack.',
      key: 'object-lavender-laundry-room-handkerchief',
      asset: 'assets/objects/lavender_laundry_room_handkerchief.png',
      x: 1018,
      y: 258,
      scale: 0.17
    },
    {
      id: 'little-laundry-scoop',
      name: 'Scoop',
      requester: 'Laundry Lily',
      clue: 'A little laundry scoop rests near the blue table.',
      key: 'object-lavender-laundry-room-laundry-scoop',
      asset: 'assets/objects/lavender_laundry_room_laundry_scoop.png',
      x: 1116,
      y: 646,
      scale: 0.19
    },
    {
      id: 'folded-towel',
      name: 'Towel',
      requester: 'Laundry Lily',
      clue: 'A folded towel sits in the lower basket.',
      key: 'object-lavender-laundry-room-folded-towel',
      asset: 'assets/objects/lavender_laundry_room_folded_towel.png',
      x: 252,
      y: 638,
      scale: 0.18
    },
    {
      id: 'pearl-button-card',
      name: 'Button Card',
      requester: 'Laundry Lily',
      clue: 'A pearl button card hides among the shelf linens.',
      key: 'object-lavender-laundry-room-button-card',
      asset: 'assets/objects/lavender_laundry_room_button_card.png',
      x: 474,
      y: 440,
      scale: 0.19
    }
  ],
  bonusEnvelopes: [
    {
      id: 'soap-bubble-1',
      name: 'Soap Bubble',
      key: 'bonus-lavender-laundry-room-bubble-1',
      asset: 'assets/bonus/lavender_laundry_room_bubble_01.png',
      x: 646,
      y: 340,
      scale: 0.13
    },
    {
      id: 'soap-bubble-2',
      name: 'Soap Bubble',
      key: 'bonus-lavender-laundry-room-bubble-2',
      asset: 'assets/bonus/lavender_laundry_room_bubble_02.png',
      x: 940,
      y: 560,
      scale: 0.14
    },
    {
      id: 'soap-bubble-3',
      name: 'Soap Bubble',
      key: 'bonus-lavender-laundry-room-bubble-3',
      asset: 'assets/bonus/lavender_laundry_room_bubble_03.png',
      x: 206,
      y: 514,
      scale: 0.15
    }
  ],
  surprises: [
    {
      id: 'laundry-window-sun',
      x: 690,
      y: 202,
      label: 'Fresh!'
    },
    {
      id: 'laundry-lavender-scent',
      x: 304,
      y: 300,
      label: 'Lavender!'
    },
    {
      id: 'laundry-basin-splash',
      x: 220,
      y: 444,
      label: 'Splash!'
    }
  ],
  previousLevelId: 'breezy-kite-workshop'
};
