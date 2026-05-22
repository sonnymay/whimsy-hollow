export const sunnyPuzzleParlor = {
  id: 'sunny-puzzle-parlor',
  title: 'Sunny Puzzle Parlor',
  saveKey: 'whimsy-hollow:sunny-puzzle-parlor',
  bonusSaveKey: 'whimsy-hollow:sunny-puzzle-parlor:bonus',
  bonusLabel: 'Pieces',
  bonusFoundText: 'Piece!',
  background: {
    key: 'sunnyPuzzleParlorBackground',
    path: 'assets/backgrounds/sunny_puzzle_parlor.png'
  },
  objects: [
    {
      id: 'wooden-jigsaw-piece',
      name: 'Jigsaw Piece',
      requester: 'Poppy Puzzle',
      clue: 'A wooden jigsaw piece sits near the big puzzle table.',
      key: 'object-sunny-puzzle-parlor-jigsaw-piece',
      asset: 'assets/objects/sunny_puzzle_parlor_jigsaw_piece.png',
      x: 764,
      y: 412,
      scale: 0.18
    },
    {
      id: 'blue-glass-marble',
      name: 'Blue Marble',
      requester: 'Poppy Puzzle',
      clue: 'A blue marble gleams beside the cozy armchair.',
      key: 'object-sunny-puzzle-parlor-blue-marble',
      asset: 'assets/objects/sunny_puzzle_parlor_blue_marble.png',
      x: 246,
      y: 604,
      scale: 0.18
    },
    {
      id: 'ivory-domino-tile',
      name: 'Domino',
      requester: 'Poppy Puzzle',
      clue: 'An ivory domino leans near the shelves of games.',
      key: 'object-sunny-puzzle-parlor-domino-tile',
      asset: 'assets/objects/sunny_puzzle_parlor_domino_tile.png',
      x: 480,
      y: 338,
      scale: 0.18
    },
    {
      id: 'red-spinning-top',
      name: 'Spinning Top',
      requester: 'Poppy Puzzle',
      clue: 'A red spinning top waits on the right-side table.',
      key: 'object-sunny-puzzle-parlor-red-spinning-top',
      asset: 'assets/objects/sunny_puzzle_parlor_red_spinning_top.png',
      x: 1088,
      y: 388,
      scale: 0.18
    },
    {
      id: 'brass-hourglass',
      name: 'Hourglass',
      requester: 'Poppy Puzzle',
      clue: 'A small hourglass hides on the game shelf.',
      key: 'object-sunny-puzzle-parlor-hourglass',
      asset: 'assets/objects/sunny_puzzle_parlor_hourglass.png',
      x: 980,
      y: 230,
      scale: 0.17
    },
    {
      id: 'flower-playing-card',
      name: 'Flower Card',
      requester: 'Poppy Puzzle',
      clue: 'A flower card peeks from the basket by the chair.',
      key: 'object-sunny-puzzle-parlor-flower-card',
      asset: 'assets/objects/sunny_puzzle_parlor_flower_card.png',
      x: 340,
      y: 458,
      scale: 0.18
    },
    {
      id: 'tiny-wooden-block',
      name: 'Wooden Block',
      requester: 'Poppy Puzzle',
      clue: 'A tiny wooden block rests on the right shelf.',
      key: 'object-sunny-puzzle-parlor-wooden-block',
      asset: 'assets/objects/sunny_puzzle_parlor_wooden_block.png',
      x: 1160,
      y: 306,
      scale: 0.18
    },
    {
      id: 'green-game-pawn',
      name: 'Green Pawn',
      requester: 'Poppy Puzzle',
      clue: 'A green game pawn stands near the left checkerboard.',
      key: 'object-sunny-puzzle-parlor-green-pawn',
      asset: 'assets/objects/sunny_puzzle_parlor_green_pawn.png',
      x: 238,
      y: 632,
      scale: 0.18
    },
    {
      id: 'pencil-stub',
      name: 'Pencil Stub',
      requester: 'Poppy Puzzle',
      clue: 'A pencil stub lies along the puzzle table edge.',
      key: 'object-sunny-puzzle-parlor-pencil-stub',
      asset: 'assets/objects/sunny_puzzle_parlor_pencil_stub.png',
      x: 900,
      y: 592,
      scale: 0.18
    },
    {
      id: 'small-puzzle-box',
      name: 'Puzzle Box',
      requester: 'Poppy Puzzle',
      clue: 'A small puzzle box waits near the lower table corner.',
      key: 'object-sunny-puzzle-parlor-puzzle-box',
      asset: 'assets/objects/sunny_puzzle_parlor_puzzle_box.png',
      x: 1048,
      y: 574,
      scale: 0.17
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-puzzle-piece-1',
      name: 'Golden Piece',
      key: 'bonus-sunny-puzzle-parlor-piece-1',
      asset: 'assets/bonus/sunny_puzzle_parlor_golden_piece_01.png',
      x: 640,
      y: 238,
      scale: 0.12
    },
    {
      id: 'golden-puzzle-piece-2',
      name: 'Golden Piece',
      key: 'bonus-sunny-puzzle-parlor-piece-2',
      asset: 'assets/bonus/sunny_puzzle_parlor_golden_piece_02.png',
      x: 1118,
      y: 520,
      scale: 0.12
    },
    {
      id: 'golden-puzzle-piece-3',
      name: 'Golden Piece',
      key: 'bonus-sunny-puzzle-parlor-piece-3',
      asset: 'assets/bonus/sunny_puzzle_parlor_golden_piece_03.png',
      x: 360,
      y: 242,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'puzzle-window-sun',
      x: 820,
      y: 180,
      label: 'Sunny!'
    },
    {
      id: 'puzzle-table-click',
      x: 820,
      y: 444,
      label: 'Click!'
    },
    {
      id: 'puzzle-marble-bowl',
      x: 1110,
      y: 390,
      label: 'Clink!'
    }
  ],
  previousLevelId: 'misty-herb-pantry'
};
