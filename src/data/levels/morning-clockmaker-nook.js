export const morningClockmakerNook = {
  id: 'morning-clockmaker-nook',
  title: 'Morning Clockmaker Nook',
  saveKey: 'whimsy-hollow:morning-clockmaker-nook',
  bonusSaveKey: 'whimsy-hollow:morning-clockmaker-nook:bonus',
  bonusLabel: 'Gears',
  bonusFoundText: 'Gear!',
  background: {
    key: 'morningClockmakerNookBackground',
    path: 'assets/backgrounds/morning_clockmaker_nook.png'
  },
  objects: [
    {
      id: 'brass-gear',
      name: 'Brass Gear',
      requester: 'Tinker Tilly',
      clue: 'A brass gear waits among the clock parts.',
      key: 'object-morning-clockmaker-nook-brass-gear',
      asset: 'assets/objects/morning_clockmaker_nook_brass_gear.png',
      x: 1040,
      y: 472,
      scale: 0.22
    },
    {
      id: 'blue-clock-key',
      name: 'Clock Key',
      requester: 'Tinker Tilly',
      clue: 'A blue clock key glimmers near the drawers.',
      key: 'object-morning-clockmaker-nook-blue-clock-key',
      asset: 'assets/objects/morning_clockmaker_nook_blue_clock_key.png',
      x: 702,
      y: 530,
      scale: 0.23
    },
    {
      id: 'wooden-mechanical-bird',
      name: 'Wood Bird',
      requester: 'Tinker Tilly',
      clue: 'A little wooden bird perches by the clock shelf.',
      key: 'object-morning-clockmaker-nook-mechanical-bird',
      asset: 'assets/objects/morning_clockmaker_nook_mechanical_bird.png',
      x: 426,
      y: 286,
      scale: 0.2
    },
    {
      id: 'tiny-oil-can',
      name: 'Oil Can',
      requester: 'Tinker Tilly',
      clue: 'A tiny oil can sits near the sunny workbench.',
      key: 'object-morning-clockmaker-nook-oil-can',
      asset: 'assets/objects/morning_clockmaker_nook_oil_can.png',
      x: 966,
      y: 360,
      scale: 0.2
    },
    {
      id: 'velvet-watch-pillow',
      name: 'Watch Pillow',
      requester: 'Tinker Tilly',
      clue: 'A velvet watch pillow rests low by the soft basket.',
      key: 'object-morning-clockmaker-nook-watch-pillow',
      asset: 'assets/objects/morning_clockmaker_nook_watch_pillow.png',
      x: 286,
      y: 640,
      scale: 0.18
    },
    {
      id: 'pearl-clock-hand',
      name: 'Clock Hand',
      requester: 'Tinker Tilly',
      clue: 'A pearl clock hand lies across the rug light.',
      key: 'object-morning-clockmaker-nook-clock-hand',
      asset: 'assets/objects/morning_clockmaker_nook_clock_hand.png',
      x: 756,
      y: 638,
      scale: 0.2
    },
    {
      id: 'ribbon-hourglass',
      name: 'Hourglass',
      requester: 'Tinker Tilly',
      clue: 'A ribbon hourglass waits on the right-hand bench.',
      key: 'object-morning-clockmaker-nook-hourglass',
      asset: 'assets/objects/morning_clockmaker_nook_hourglass.png',
      x: 1128,
      y: 558,
      scale: 0.2
    },
    {
      id: 'painted-clock-dial',
      name: 'Clock Dial',
      requester: 'Tinker Tilly',
      clue: 'A painted dial leans near the wall clocks.',
      key: 'object-morning-clockmaker-nook-clock-dial',
      asset: 'assets/objects/morning_clockmaker_nook_clock_dial.png',
      x: 1182,
      y: 264,
      scale: 0.19
    },
    {
      id: 'cogwheel-stamp',
      name: 'Cog Stamp',
      requester: 'Tinker Tilly',
      clue: 'A cogwheel stamp hides beside the lavender vase.',
      key: 'object-morning-clockmaker-nook-cogwheel-stamp',
      asset: 'assets/objects/morning_clockmaker_nook_cogwheel_stamp.png',
      x: 220,
      y: 478,
      scale: 0.21
    },
    {
      id: 'little-brass-bell',
      name: 'Brass Bell',
      requester: 'Tinker Tilly',
      clue: 'A little brass bell waits by the clockmaker tools.',
      key: 'object-morning-clockmaker-nook-brass-bell',
      asset: 'assets/objects/morning_clockmaker_nook_brass_bell.png',
      x: 922,
      y: 616,
      scale: 0.21
    }
  ],
  bonusEnvelopes: [
    {
      id: 'tiny-gear-1',
      name: 'Tiny Golden Gear',
      key: 'bonus-morning-clockmaker-nook-gear-1',
      asset: 'assets/bonus/morning_clockmaker_nook_gear_01.png',
      x: 352,
      y: 518,
      scale: 0.14
    },
    {
      id: 'tiny-gear-2',
      name: 'Tiny Golden Gear',
      key: 'bonus-morning-clockmaker-nook-gear-2',
      asset: 'assets/bonus/morning_clockmaker_nook_gear_02.png',
      x: 846,
      y: 402,
      scale: 0.14
    },
    {
      id: 'tiny-gear-3',
      name: 'Tiny Golden Gear',
      key: 'bonus-morning-clockmaker-nook-gear-3',
      asset: 'assets/bonus/morning_clockmaker_nook_gear_03.png',
      x: 1194,
      y: 430,
      scale: 0.14
    }
  ],
  surprises: [
    {
      id: 'clockmaker-window-sun',
      x: 676,
      y: 202,
      label: 'Tick!'
    },
    {
      id: 'clockmaker-gear-bowl',
      x: 390,
      y: 432,
      label: 'Whirr!'
    },
    {
      id: 'clockmaker-lamp-glow',
      x: 978,
      y: 320,
      label: 'Glow!'
    }
  ],
  previousLevelId: 'rainy-art-atelier'
};
