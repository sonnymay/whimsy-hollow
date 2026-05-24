export const windUpMusicBoxDesk = {
  id: 'wind-up-music-box-desk',
  title: 'Wind-Up Music Box Desk',
  saveKey: 'whimsy-hollow:wind-up-music-box-desk',
  bonusSaveKey: 'whimsy-hollow:wind-up-music-box-desk:bonus',
  bonusLabel: 'Golden Notes',
  bonusFoundText: 'Golden note!',
  background: {
    key: 'windUpMusicBoxDeskBackground',
    path: 'assets/backgrounds/wind_up_music_box_desk.webp'
  },
  objects: [
    {
      id: 'winding-key',
      name: 'Winding Key',
      requester: 'Melody June',
      clue: 'A brass winding key waits near the left side of the desk.',
      key: 'object-music-box-winding-key',
      asset: 'assets/objects/music_box_winding_key.png',
      x: 315,
      y: 465,
      scale: 0.13
    },
    {
      id: 'music-cylinder',
      name: 'Music Cylinder',
      requester: 'Melody June',
      clue: 'The dotted music cylinder rests over the paper tune sheet.',
      key: 'object-music-box-cylinder',
      asset: 'assets/objects/music_box_cylinder.png',
      x: 625,
      y: 565,
      scale: 0.12
    },
    {
      id: 'brass-gear',
      name: 'Brass Gear',
      requester: 'Melody June',
      clue: 'A round brass gear is tucked among the tiny parts on the right.',
      key: 'object-music-box-brass-gear',
      asset: 'assets/objects/music_box_brass_gear.png',
      x: 955,
      y: 500,
      scale: 0.12
    },
    {
      id: 'painted-music-box',
      name: 'Painted Music Box',
      requester: 'Melody June',
      clue: 'A painted music box sits beneath the glowing desk lamp.',
      key: 'object-music-box-painted-box',
      asset: 'assets/objects/music_box_painted_box.png',
      x: 1035,
      y: 405,
      scale: 0.12
    },
    {
      id: 'ribbon-rosette',
      name: 'Ribbon Rosette',
      requester: 'Melody June',
      clue: 'A pink ribbon rosette lies near the curled ribbons.',
      key: 'object-music-box-ribbon-rosette',
      asset: 'assets/objects/music_box_ribbon_rosette.png',
      x: 1115,
      y: 585,
      scale: 0.13
    },
    {
      id: 'tiny-bell',
      name: 'Tiny Bell',
      requester: 'Melody June',
      clue: 'A silver bell hangs low near the front-left edge of the worktable.',
      key: 'object-music-box-tiny-bell',
      asset: 'assets/objects/music_box_tiny_bell.png',
      x: 265,
      y: 595,
      scale: 0.12
    },
    {
      id: 'lacquer-brush',
      name: 'Lacquer Brush',
      requester: 'Melody June',
      clue: 'The red lacquer brush is set beside the tiny screwdriver.',
      key: 'object-music-box-lacquer-brush',
      asset: 'assets/objects/music_box_lacquer_brush.png',
      x: 445,
      y: 570,
      scale: 0.12
    },
    {
      id: 'tune-card',
      name: 'Tune Card',
      requester: 'Melody June',
      clue: 'A folded tune card is open in the middle of the desk.',
      key: 'object-music-box-tune-card',
      asset: 'assets/objects/music_box_tune_card.png',
      x: 735,
      y: 610,
      scale: 0.12
    },
    {
      id: 'small-screwdriver',
      name: 'Small Screwdriver',
      requester: 'Melody June',
      clue: 'A small screwdriver points across the front work area.',
      key: 'object-music-box-small-screwdriver',
      asset: 'assets/objects/music_box_small_screwdriver.png',
      x: 760,
      y: 545,
      scale: 0.12
    },
    {
      id: 'velvet-pouch',
      name: 'Velvet Pouch',
      requester: 'Melody June',
      clue: 'A purple velvet pouch nestles near the right-hand ribbon.',
      key: 'object-music-box-velvet-pouch',
      asset: 'assets/objects/music_box_velvet_pouch.png',
      x: 1180,
      y: 505,
      scale: 0.12
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-note-1',
      name: 'Golden Note',
      key: 'bonus-music-box-golden-note-1',
      asset: 'assets/bonus/music_box_golden_note_01.png',
      x: 225,
      y: 150,
      scale: 0.08
    },
    {
      id: 'golden-note-2',
      name: 'Golden Note',
      key: 'bonus-music-box-golden-note-2',
      asset: 'assets/bonus/music_box_golden_note_02.png',
      x: 735,
      y: 170,
      scale: 0.08
    },
    {
      id: 'golden-note-3',
      name: 'Golden Note',
      key: 'bonus-music-box-golden-note-3',
      asset: 'assets/bonus/music_box_golden_note_03.png',
      x: 1160,
      y: 185,
      scale: 0.08
    }
  ],
  surprises: [
    { x: 385, y: 455, label: 'Ting!' },
    { x: 685, y: 525, label: 'Click!' },
    { x: 1035, y: 440, label: 'La la!' }
  ],
  previousLevelId: 'quilled-paper-blossom-desk'
};
