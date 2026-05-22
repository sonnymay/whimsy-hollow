export const honeyCandleWorkshop = {
  id: 'honey-candle-workshop',
  title: 'Honey Candle Workshop',
  saveKey: 'whimsy-hollow:honey-candle-workshop',
  bonusSaveKey: 'whimsy-hollow:honey-candle-workshop:bonus',
  bonusLabel: 'Honey Drops',
  bonusFoundText: 'Honey Drop!',
  background: {
    key: 'honeyCandleWorkshopBackground',
    path: 'assets/backgrounds/honey_candle_workshop.png'
  },
  objects: [
    {
      id: 'beeswax-candle',
      name: 'Beeswax Candle',
      requester: 'Mara Wickbright',
      clue: 'A honeycomb candle glows near the shelf of warm jars.',
      key: 'object-honey-candle-workshop-beeswax-candle',
      asset: 'assets/objects/honey_candle_workshop_beeswax_candle.png',
      x: 920,
      y: 480,
      scale: 0.28
    },
    {
      id: 'round-honey-jar',
      name: 'Honey Jar',
      requester: 'Mara Wickbright',
      clue: 'A round honey jar waits on the candle-making table.',
      key: 'object-honey-candle-workshop-honey-jar',
      asset: 'assets/objects/honey_candle_workshop_honey_jar.png',
      x: 735,
      y: 505,
      scale: 0.26
    },
    {
      id: 'wooden-honey-dipper',
      name: 'Honey Dipper',
      requester: 'Mara Wickbright',
      clue: 'A wooden honey dipper rests near the lower right bowl.',
      key: 'object-honey-candle-workshop-honey-dipper',
      asset: 'assets/objects/honey_candle_workshop_honey_dipper.png',
      x: 1085,
      y: 595,
      scale: 0.27
    },
    {
      id: 'cotton-wick-spool',
      name: 'Wick Spool',
      requester: 'Mara Wickbright',
      clue: 'A cotton wick spool is tucked among the shelf supplies.',
      key: 'object-honey-candle-workshop-wick-spool',
      asset: 'assets/objects/honey_candle_workshop_wick_spool.png',
      x: 465,
      y: 345,
      scale: 0.27
    },
    {
      id: 'brass-candle-snuffer',
      name: 'Candle Snuffer',
      requester: 'Mara Wickbright',
      clue: 'A brass snuffer leans near the left cubby lantern.',
      key: 'object-honey-candle-workshop-candle-snuffer',
      asset: 'assets/objects/honey_candle_workshop_candle_snuffer.png',
      x: 270,
      y: 260,
      scale: 0.26
    },
    {
      id: 'bee-wax-stamp',
      name: 'Wax Stamp',
      requester: 'Mara Wickbright',
      clue: 'A wooden wax stamp sits by the small workshop drawers.',
      key: 'object-honey-candle-workshop-wax-stamp',
      asset: 'assets/objects/honey_candle_workshop_wax_stamp.png',
      x: 820,
      y: 350,
      scale: 0.26
    },
    {
      id: 'dried-lavender-bundle',
      name: 'Lavender Bundle',
      requester: 'Mara Wickbright',
      clue: 'A lavender bundle hangs near the green cupboard.',
      key: 'object-honey-candle-workshop-lavender-bundle',
      asset: 'assets/objects/honey_candle_workshop_lavender_bundle.png',
      x: 565,
      y: 190,
      scale: 0.25
    },
    {
      id: 'flower-label-card',
      name: 'Label Card',
      requester: 'Mara Wickbright',
      clue: 'A flower label card is tucked near the sunny window.',
      key: 'object-honey-candle-workshop-label-card',
      asset: 'assets/objects/honey_candle_workshop_label_card.png',
      x: 1030,
      y: 265,
      scale: 0.26
    },
    {
      id: 'ceramic-tealight-holder',
      name: 'Tealight Holder',
      requester: 'Mara Wickbright',
      clue: 'A ceramic tealight holder hides near the low left rug.',
      key: 'object-honey-candle-workshop-tealight-holder',
      asset: 'assets/objects/honey_candle_workshop_tealight_holder.png',
      x: 300,
      y: 590,
      scale: 0.25
    },
    {
      id: 'amber-measuring-spoon',
      name: 'Measuring Spoon',
      requester: 'Mara Wickbright',
      clue: 'An amber measuring spoon lies on the front worktable.',
      key: 'object-honey-candle-workshop-measuring-spoon',
      asset: 'assets/objects/honey_candle_workshop_measuring_spoon.png',
      x: 615,
      y: 630,
      scale: 0.27
    }
  ],
  bonusEnvelopes: [
    {
      id: 'honey-drop-1',
      name: 'Honey Drop',
      key: 'bonus-honey-candle-workshop-drop-1',
      asset: 'assets/bonus/honey_candle_workshop_honey_drop_01.png',
      x: 395,
      y: 430,
      scale: 0.22
    },
    {
      id: 'honey-drop-2',
      name: 'Honey Drop',
      key: 'bonus-honey-candle-workshop-drop-2',
      asset: 'assets/bonus/honey_candle_workshop_honey_drop_02.png',
      x: 1005,
      y: 430,
      scale: 0.22
    },
    {
      id: 'honey-drop-3',
      name: 'Honey Drop',
      key: 'bonus-honey-candle-workshop-drop-3',
      asset: 'assets/bonus/honey_candle_workshop_honey_drop_03.png',
      x: 1135,
      y: 660,
      scale: 0.22
    }
  ],
  surprises: [
    {
      id: 'workshop-window-warmth',
      x: 1065,
      y: 180,
      label: 'Warm!'
    },
    {
      id: 'workshop-candle-glow',
      x: 870,
      y: 470,
      label: 'Glow!'
    },
    {
      id: 'workshop-honey-sweet',
      x: 710,
      y: 560,
      label: 'Sweet!'
    }
  ],
  previousLevelId: 'starlight-observatory-nook'
};
