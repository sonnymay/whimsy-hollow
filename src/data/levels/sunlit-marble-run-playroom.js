export const sunlitMarbleRunPlayroom = {
  id: 'sunlit-marble-run-playroom',
  title: 'Sunlit Marble Run Playroom',
  saveKey: 'whimsy-hollow:sunlit-marble-run-playroom',
  bonusSaveKey: 'whimsy-hollow:sunlit-marble-run-playroom:bonus',
  bonusLabel: 'Golden Marbles',
  bonusFoundText: 'Marble!',
  background: {
    key: 'sunlitMarbleRunPlayroomBackground',
    path: 'assets/backgrounds/sunlit_marble_run_playroom.webp'
  },
  objects: [
    {
      id: 'blue-glass-marble',
      name: 'Blue Marble',
      requester: 'Milo Marble',
      clue: 'A blue glass marble gleams near the front tray.',
      key: 'object-sunlit-marble-run-playroom-blue-marble',
      asset: 'assets/objects/sunlit_marble_run_playroom_blue_glass_marble.png',
      x: 575,
      y: 585,
      scale: 0.2
    },
    {
      id: 'curved-wooden-ramp',
      name: 'Wooden Ramp',
      requester: 'Milo Marble',
      clue: 'A curved wooden ramp curls around the tall marble tower.',
      key: 'object-sunlit-marble-run-playroom-wooden-ramp',
      asset: 'assets/objects/sunlit_marble_run_playroom_curved_wooden_ramp.png',
      x: 520,
      y: 330,
      scale: 0.19
    },
    {
      id: 'red-bridge-block',
      name: 'Bridge Block',
      requester: 'Milo Marble',
      clue: 'A red bridge block stands in the middle of the marble run.',
      key: 'object-sunlit-marble-run-playroom-bridge-block',
      asset: 'assets/objects/sunlit_marble_run_playroom_red_bridge_block.png',
      x: 720,
      y: 350,
      scale: 0.2
    },
    {
      id: 'tiny-brass-bell',
      name: 'Brass Bell',
      requester: 'Milo Marble',
      clue: 'A tiny brass bell hangs beneath a ramp.',
      key: 'object-sunlit-marble-run-playroom-brass-bell',
      asset: 'assets/objects/sunlit_marble_run_playroom_tiny_brass_bell.png',
      x: 455,
      y: 250,
      scale: 0.19
    },
    {
      id: 'green-cube-block',
      name: 'Green Block',
      requester: 'Milo Marble',
      clue: 'A green cube block sits by the left toy basket.',
      key: 'object-sunlit-marble-run-playroom-green-block',
      asset: 'assets/objects/sunlit_marble_run_playroom_green_cube_block.png',
      x: 285,
      y: 535,
      scale: 0.2
    },
    {
      id: 'little-felt-basket',
      name: 'Felt Basket',
      requester: 'Milo Marble',
      clue: 'A little felt basket is tucked under the left shelf.',
      key: 'object-sunlit-marble-run-playroom-felt-basket',
      asset: 'assets/objects/sunlit_marble_run_playroom_little_felt_basket.png',
      x: 250,
      y: 250,
      scale: 0.2
    },
    {
      id: 'rainbow-arch-block',
      name: 'Rainbow Arch',
      requester: 'Milo Marble',
      clue: 'A rainbow arch block rests on the upper shelf.',
      key: 'object-sunlit-marble-run-playroom-rainbow-arch',
      asset: 'assets/objects/sunlit_marble_run_playroom_rainbow_arch_block.png',
      x: 560,
      y: 145,
      scale: 0.2
    },
    {
      id: 'wooden-flag-peg',
      name: 'Flag Peg',
      requester: 'Milo Marble',
      clue: 'A wooden flag peg marks the finish ramp.',
      key: 'object-sunlit-marble-run-playroom-flag-peg',
      asset: 'assets/objects/sunlit_marble_run_playroom_wooden_flag_peg.png',
      x: 885,
      y: 300,
      scale: 0.19
    },
    {
      id: 'bead-maze-ring',
      name: 'Bead Maze',
      requester: 'Milo Marble',
      clue: 'A bead maze ring waits on the left play table.',
      key: 'object-sunlit-marble-run-playroom-bead-maze',
      asset: 'assets/objects/sunlit_marble_run_playroom_bead_maze_ring.png',
      x: 240,
      y: 515,
      scale: 0.2
    },
    {
      id: 'quilted-play-mat',
      name: 'Play Mat',
      requester: 'Milo Marble',
      clue: 'A quilted play mat is draped on the right side of the table.',
      key: 'object-sunlit-marble-run-playroom-play-mat',
      asset: 'assets/objects/sunlit_marble_run_playroom_quilted_play_mat.png',
      x: 1050,
      y: 535,
      scale: 0.2
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-marble-1',
      name: 'Golden Marble',
      key: 'bonus-sunlit-marble-run-playroom-golden-marble-1',
      asset: 'assets/bonus/sunlit_marble_run_playroom_golden_marble_01.png',
      x: 330,
      y: 175,
      scale: 0.14
    },
    {
      id: 'golden-marble-2',
      name: 'Golden Marble',
      key: 'bonus-sunlit-marble-run-playroom-golden-marble-2',
      asset: 'assets/bonus/sunlit_marble_run_playroom_golden_marble_02.png',
      x: 735,
      y: 155,
      scale: 0.14
    },
    {
      id: 'golden-marble-3',
      name: 'Golden Marble',
      key: 'bonus-sunlit-marble-run-playroom-golden-marble-3',
      asset: 'assets/bonus/sunlit_marble_run_playroom_golden_marble_03.png',
      x: 1125,
      y: 195,
      scale: 0.14
    }
  ],
  surprises: [
    {
      id: 'marble-run-bell-ding',
      x: 455,
      y: 250,
      label: 'Ding!'
    },
    {
      id: 'marble-run-track-roll',
      x: 720,
      y: 395,
      label: 'Roll!'
    },
    {
      id: 'marble-run-window-shine',
      x: 1055,
      y: 155,
      label: 'Shine!'
    }
  ],
  previousLevelId: 'button-tin-craft-desk'
};
