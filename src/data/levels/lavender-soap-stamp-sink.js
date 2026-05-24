export const lavenderSoapStampSink = {
  id: 'lavender-soap-stamp-sink',
  title: 'Lavender Soap Stamp Sink',
  saveKey: 'whimsy-hollow:lavender-soap-stamp-sink',
  bonusSaveKey: 'whimsy-hollow:lavender-soap-stamp-sink:bonus',
  bonusLabel: 'Golden Lavender',
  bonusFoundText: 'Golden lavender!',
  background: {
    key: 'lavenderSoapStampSinkBackground',
    path: 'assets/backgrounds/lavender_soap_stamp_sink.webp'
  },
  objects: [
    {
      id: 'lavender-soap-bar',
      name: 'Lavender Soap Bar',
      requester: 'Lena Lather',
      clue: 'A lavender soap bar rests on the wooden work counter.',
      key: 'object-lavender-soap-stamp-sink-lavender-soap-bar',
      asset: 'assets/objects/lavender_soap_stamp_sink_lavender_soap_bar.png',
      x: 555,
      y: 405,
      scale: 0.18
    },
    {
      id: 'wooden-soap-stamp',
      name: 'Soap Stamp',
      requester: 'Lena Lather',
      clue: 'A wooden soap stamp stands beside the soap molds.',
      key: 'object-lavender-soap-stamp-sink-wooden-soap-stamp',
      asset: 'assets/objects/lavender_soap_stamp_sink_wooden_soap_stamp.png',
      x: 410,
      y: 410,
      scale: 0.17
    },
    {
      id: 'oval-soap-mold',
      name: 'Soap Mold',
      requester: 'Lena Lather',
      clue: 'An oval soap mold sits high on the left shelf.',
      key: 'object-lavender-soap-stamp-sink-oval-soap-mold',
      asset: 'assets/objects/lavender_soap_stamp_sink_oval_soap_mold.png',
      x: 455,
      y: 205,
      scale: 0.18
    },
    {
      id: 'twine-bundle',
      name: 'Twine Bundle',
      requester: 'Lena Lather',
      clue: 'A twine bundle is tied on the right drying table.',
      key: 'object-lavender-soap-stamp-sink-twine-bundle',
      asset: 'assets/objects/lavender_soap_stamp_sink_twine_bundle.png',
      x: 960,
      y: 475,
      scale: 0.18
    },
    {
      id: 'blue-enamel-pitcher',
      name: 'Enamel Pitcher',
      requester: 'Lena Lather',
      clue: 'A blue enamel pitcher waits on the sunlit window ledge.',
      key: 'object-lavender-soap-stamp-sink-blue-enamel-pitcher',
      asset: 'assets/objects/lavender_soap_stamp_sink_blue_enamel_pitcher.png',
      x: 990,
      y: 195,
      scale: 0.18
    },
    {
      id: 'amber-oil-bottle',
      name: 'Oil Bottle',
      requester: 'Lena Lather',
      clue: 'A small amber oil bottle glows near the farmhouse sink.',
      key: 'object-lavender-soap-stamp-sink-amber-oil-bottle',
      asset: 'assets/objects/lavender_soap_stamp_sink_amber_oil_bottle.png',
      x: 870,
      y: 335,
      scale: 0.17
    },
    {
      id: 'folded-linen-towel',
      name: 'Linen Towel',
      requester: 'Lena Lather',
      clue: 'A folded linen towel is tucked under the workbench.',
      key: 'object-lavender-soap-stamp-sink-folded-linen-towel',
      asset: 'assets/objects/lavender_soap_stamp_sink_folded_linen_towel.png',
      x: 500,
      y: 620,
      scale: 0.18
    },
    {
      id: 'lavender-sachet',
      name: 'Lavender Sachet',
      requester: 'Lena Lather',
      clue: 'A dried lavender sachet sits in the basket below the shelf.',
      key: 'object-lavender-soap-stamp-sink-lavender-sachet',
      asset: 'assets/objects/lavender_soap_stamp_sink_lavender_sachet.png',
      x: 505,
      y: 305,
      scale: 0.17
    },
    {
      id: 'brass-measuring-scoop',
      name: 'Measuring Scoop',
      requester: 'Lena Lather',
      clue: 'A brass measuring scoop is nestled near the left mold tray.',
      key: 'object-lavender-soap-stamp-sink-brass-measuring-scoop',
      asset: 'assets/objects/lavender_soap_stamp_sink_brass_measuring_scoop.png',
      x: 305,
      y: 430,
      scale: 0.18
    },
    {
      id: 'drying-rack-slat',
      name: 'Drying Rack',
      requester: 'Lena Lather',
      clue: 'A tiny drying rack slat leans on the right soap stand.',
      key: 'object-lavender-soap-stamp-sink-drying-rack-slat',
      asset: 'assets/objects/lavender_soap_stamp_sink_drying_rack_slat.png',
      x: 1110,
      y: 385,
      scale: 0.18
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-lavender-1',
      name: 'Golden Lavender',
      key: 'bonus-lavender-soap-stamp-sink-lavender-1',
      asset: 'assets/bonus/lavender_soap_stamp_sink_golden_lavender_01.png',
      x: 230,
      y: 160,
      scale: 0.12
    },
    {
      id: 'golden-lavender-2',
      name: 'Golden Lavender',
      key: 'bonus-lavender-soap-stamp-sink-lavender-2',
      asset: 'assets/bonus/lavender_soap_stamp_sink_golden_lavender_02.png',
      x: 705,
      y: 155,
      scale: 0.12
    },
    {
      id: 'golden-lavender-3',
      name: 'Golden Lavender',
      key: 'bonus-lavender-soap-stamp-sink-lavender-3',
      asset: 'assets/bonus/lavender_soap_stamp_sink_golden_lavender_03.png',
      x: 1135,
      y: 170,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'lavender-soap-stamp-thump',
      x: 410,
      y: 410,
      label: 'Stamp!'
    },
    {
      id: 'lavender-soap-sink-drip',
      x: 765,
      y: 350,
      label: 'Drip!'
    },
    {
      id: 'lavender-soap-window-glow',
      x: 1010,
      y: 185,
      label: 'Glow!'
    }
  ],
  previousLevelId: 'pastel-birdhouse-painting-bench'
};
