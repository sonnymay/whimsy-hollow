export const candlelitMusicParlor = {
  id: 'candlelit-music-parlor',
  title: 'Candlelit Music Parlor',
  saveKey: 'whimsy-hollow:candlelit-music-parlor',
  bonusSaveKey: 'whimsy-hollow:candlelit-music-parlor:bonus',
  bonusLabel: 'Notes',
  bonusFoundText: 'Note!',
  background: {
    key: 'candlelitMusicParlorBackground',
    path: 'assets/backgrounds/candlelit_music_parlor.png'
  },
  objects: [
    {
      id: 'tiny-music-box',
      name: 'Music Box',
      requester: 'Melody Mae',
      clue: 'A tiny music box rests near the parlor shelves.',
      key: 'object-candlelit-music-parlor-music-box',
      asset: 'assets/objects/candlelit_music_parlor_music_box.png',
      x: 410,
      y: 428,
      scale: 0.22
    },
    {
      id: 'brass-tuning-fork',
      name: 'Tuning Fork',
      requester: 'Melody Mae',
      clue: 'A brass tuning fork glints low on the rug.',
      key: 'object-candlelit-music-parlor-tuning-fork',
      asset: 'assets/objects/candlelit_music_parlor_tuning_fork.png',
      x: 714,
      y: 610,
      scale: 0.22
    },
    {
      id: 'blue-metronome',
      name: 'Metronome',
      requester: 'Melody Mae',
      clue: 'A blue metronome ticks on the piano top.',
      key: 'object-candlelit-music-parlor-blue-metronome',
      asset: 'assets/objects/candlelit_music_parlor_blue_metronome.png',
      x: 1008,
      y: 198,
      scale: 0.2
    },
    {
      id: 'recorder-flute',
      name: 'Recorder',
      requester: 'Melody Mae',
      clue: 'A recorder flute peeks from the floor basket.',
      key: 'object-candlelit-music-parlor-recorder-flute',
      asset: 'assets/objects/candlelit_music_parlor_recorder_flute.png',
      x: 316,
      y: 610,
      scale: 0.21
    },
    {
      id: 'piano-key-ribbon',
      name: 'Key Ribbon',
      requester: 'Melody Mae',
      clue: 'A piano key ribbon curls near the bench.',
      key: 'object-candlelit-music-parlor-piano-key-ribbon',
      asset: 'assets/objects/candlelit_music_parlor_piano_key_ribbon.png',
      x: 890,
      y: 522,
      scale: 0.22
    },
    {
      id: 'flower-tambourine',
      name: 'Tambourine',
      requester: 'Melody Mae',
      clue: 'A flower tambourine waits beside the round rug.',
      key: 'object-candlelit-music-parlor-flower-tambourine',
      asset: 'assets/objects/candlelit_music_parlor_flower_tambourine.png',
      x: 468,
      y: 638,
      scale: 0.22
    },
    {
      id: 'candle-snuffer',
      name: 'Snuffer',
      requester: 'Melody Mae',
      clue: 'A golden snuffer lies near the instrument chest.',
      key: 'object-candlelit-music-parlor-candle-snuffer',
      asset: 'assets/objects/candlelit_music_parlor_candle_snuffer.png',
      x: 1140,
      y: 620,
      scale: 0.22
    },
    {
      id: 'sheet-music-clip',
      name: 'Music Clip',
      requester: 'Melody Mae',
      clue: 'A silver clip holds a tune by the piano music.',
      key: 'object-candlelit-music-parlor-sheet-music-clip',
      asset: 'assets/objects/candlelit_music_parlor_sheet_music_clip.png',
      x: 798,
      y: 360,
      scale: 0.23
    },
    {
      id: 'pearl-button',
      name: 'Pearl Button',
      requester: 'Melody Mae',
      clue: 'A pearl button shines near the painted wall trim.',
      key: 'object-candlelit-music-parlor-pearl-button',
      asset: 'assets/objects/candlelit_music_parlor_pearl_button.png',
      x: 278,
      y: 298,
      scale: 0.23
    },
    {
      id: 'lavender-sachet',
      name: 'Sachet',
      requester: 'Melody Mae',
      clue: 'A lavender sachet rests on the window bench.',
      key: 'object-candlelit-music-parlor-lavender-sachet',
      asset: 'assets/objects/candlelit_music_parlor_lavender_sachet.png',
      x: 612,
      y: 470,
      scale: 0.21
    }
  ],
  bonusEnvelopes: [
    {
      id: 'music-note-1',
      name: 'Golden Music Note',
      key: 'bonus-candlelit-music-parlor-music-note-1',
      asset: 'assets/bonus/candlelit_music_parlor_music_note_01.png',
      x: 730,
      y: 204,
      scale: 0.24
    },
    {
      id: 'music-note-2',
      name: 'Golden Music Note',
      key: 'bonus-candlelit-music-parlor-music-note-2',
      asset: 'assets/bonus/candlelit_music_parlor_music_note_02.png',
      x: 1072,
      y: 354,
      scale: 0.24
    },
    {
      id: 'music-note-3',
      name: 'Golden Music Note',
      key: 'bonus-candlelit-music-parlor-music-note-3',
      asset: 'assets/bonus/candlelit_music_parlor_music_note_03.png',
      x: 226,
      y: 585,
      scale: 0.2
    }
  ],
  surprises: [
    {
      id: 'parlor-piano-chime',
      x: 924,
      y: 386,
      label: 'Plink!'
    },
    {
      id: 'parlor-window-glow',
      x: 640,
      y: 224,
      label: 'Glow!'
    },
    {
      id: 'parlor-shelf-hum',
      x: 356,
      y: 270,
      label: 'Hum!'
    }
  ],
  previousLevelId: 'sunbeam-pottery-studio'
};
