export const fireflyCandleWindow = {
  id: 'firefly-candle-window',
  title: 'Firefly Candle Window',
  saveKey: 'whimsy-hollow:firefly-candle-window',
  bonusSaveKey: 'whimsy-hollow:firefly-candle-window:bonus',
  bonusLabel: 'Glowflies',
  bonusFoundText: 'Glow!',
  background: {
    key: 'fireflyCandleWindowBackground',
    path: 'assets/backgrounds/firefly_candle_window.webp'
  },
  objects: [
    {
      id: 'brass-candle-snuffer',
      name: 'Candle Snuffer',
      requester: 'Willa Wick',
      clue: 'A brass candle snuffer rests near the stacked books.',
      key: 'object-firefly-candle-window-candle-snuffer',
      asset: 'assets/objects/firefly_candle_window_brass_candle_snuffer.png',
      x: 835,
      y: 390,
      scale: 0.2
    },
    {
      id: 'beeswax-candle-stick',
      name: 'Beeswax Candle',
      requester: 'Willa Wick',
      clue: 'A beeswax candle stick glows on the right shelf.',
      key: 'object-firefly-candle-window-beeswax-candle',
      asset: 'assets/objects/firefly_candle_window_beeswax_candle_stick.png',
      x: 1130,
      y: 430,
      scale: 0.19
    },
    {
      id: 'purple-glass-jar',
      name: 'Purple Jar',
      requester: 'Willa Wick',
      clue: 'A purple glass jar waits on the windowsill.',
      key: 'object-firefly-candle-window-purple-jar',
      asset: 'assets/objects/firefly_candle_window_purple_glass_jar.png',
      x: 620,
      y: 360,
      scale: 0.2
    },
    {
      id: 'lace-curtain-tie',
      name: 'Curtain Tie',
      requester: 'Willa Wick',
      clue: 'A lace curtain tie is tucked beside the left curtain.',
      key: 'object-firefly-candle-window-curtain-tie',
      asset: 'assets/objects/firefly_candle_window_lace_curtain_tie.png',
      x: 420,
      y: 220,
      scale: 0.2
    },
    {
      id: 'tiny-matchbox',
      name: 'Matchbox',
      requester: 'Willa Wick',
      clue: 'A tiny matchbox sits near the front candle plate.',
      key: 'object-firefly-candle-window-matchbox',
      asset: 'assets/objects/firefly_candle_window_tiny_matchbox.png',
      x: 545,
      y: 640,
      scale: 0.2
    },
    {
      id: 'dried-lavender-bundle',
      name: 'Lavender Bundle',
      requester: 'Willa Wick',
      clue: 'A dried lavender bundle stands in the right-hand vase.',
      key: 'object-firefly-candle-window-lavender-bundle',
      asset: 'assets/objects/firefly_candle_window_dried_lavender_bundle.png',
      x: 960,
      y: 350,
      scale: 0.19
    },
    {
      id: 'ceramic-saucer',
      name: 'Ceramic Saucer',
      requester: 'Willa Wick',
      clue: 'A ceramic saucer rests under the middle candle.',
      key: 'object-firefly-candle-window-ceramic-saucer',
      asset: 'assets/objects/firefly_candle_window_ceramic_saucer.png',
      x: 720,
      y: 600,
      scale: 0.2
    },
    {
      id: 'little-wick-spool',
      name: 'Wick Spool',
      requester: 'Willa Wick',
      clue: 'A little wick spool sits in the right basket.',
      key: 'object-firefly-candle-window-wick-spool',
      asset: 'assets/objects/firefly_candle_window_little_wick_spool.png',
      x: 1120,
      y: 620,
      scale: 0.2
    },
    {
      id: 'star-paper-charm',
      name: 'Star Charm',
      requester: 'Willa Wick',
      clue: 'A star paper charm hangs near the ivy shelf.',
      key: 'object-firefly-candle-window-star-charm',
      asset: 'assets/objects/firefly_candle_window_star_paper_charm.png',
      x: 330,
      y: 185,
      scale: 0.2
    },
    {
      id: 'honeycomb-candle',
      name: 'Honeycomb Candle',
      requester: 'Willa Wick',
      clue: 'A honeycomb candle sits on the front saucer.',
      key: 'object-firefly-candle-window-honeycomb-candle',
      asset: 'assets/objects/firefly_candle_window_honeycomb_candle.png',
      x: 695,
      y: 560,
      scale: 0.19
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-glow-1',
      name: 'Golden Glowfly',
      key: 'bonus-firefly-candle-window-golden-glow-1',
      asset: 'assets/bonus/firefly_candle_window_golden_glow_01.png',
      x: 260,
      y: 230,
      scale: 0.14
    },
    {
      id: 'golden-glow-2',
      name: 'Golden Glowfly',
      key: 'bonus-firefly-candle-window-golden-glow-2',
      asset: 'assets/bonus/firefly_candle_window_golden_glow_02.png',
      x: 570,
      y: 155,
      scale: 0.14
    },
    {
      id: 'golden-glow-3',
      name: 'Golden Glowfly',
      key: 'bonus-firefly-candle-window-golden-glow-3',
      asset: 'assets/bonus/firefly_candle_window_golden_glow_03.png',
      x: 1045,
      y: 160,
      scale: 0.14
    }
  ],
  surprises: [
    {
      id: 'candle-window-firefly-twinkle',
      x: 585,
      y: 250,
      label: 'Twinkle!'
    },
    {
      id: 'candle-window-lantern-glow',
      x: 920,
      y: 125,
      label: 'Glow!'
    },
    {
      id: 'candle-window-drawer-click',
      x: 965,
      y: 625,
      label: 'Click!'
    }
  ],
  previousLevelId: 'sunlit-marble-run-playroom'
};
