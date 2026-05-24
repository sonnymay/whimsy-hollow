export const copperWeatherVaneWorkbench = {
  id: 'copper-weather-vane-workbench',
  title: 'Copper Weather Vane Workbench',
  saveKey: 'whimsy-hollow:copper-weather-vane-workbench',
  bonusSaveKey: 'whimsy-hollow:copper-weather-vane-workbench:bonus',
  bonusLabel: 'Wind Swirls',
  bonusFoundText: 'Wind swirl!',
  background: {
    key: 'copperWeatherVaneWorkbenchBackground',
    path: 'assets/backgrounds/copper_weather_vane_workbench.webp'
  },
  objects: [
    {
      id: 'copper-rooster-topper',
      name: 'Rooster Topper',
      requester: 'Nora Northwind',
      clue: 'A copper rooster topper perches near the middle of the workbench.',
      key: 'object-copper-weather-vane-workbench-copper-rooster-topper',
      asset: 'assets/objects/weather_vane_rooster_topper.png',
      x: 760,
      y: 300,
      scale: 0.15
    },
    {
      id: 'brass-compass-rose',
      name: 'Compass Rose',
      requester: 'Nora Northwind',
      clue: 'A brass compass rose rests on the lower left work paper.',
      key: 'object-copper-weather-vane-workbench-brass-compass-rose',
      asset: 'assets/objects/weather_vane_compass_rose.png',
      x: 560,
      y: 430,
      scale: 0.14
    },
    {
      id: 'tiny-wind-ribbon',
      name: 'Wind Ribbon',
      requester: 'Nora Northwind',
      clue: 'A tiny wind ribbon hangs among the colorful ribbons on the right.',
      key: 'object-copper-weather-vane-workbench-tiny-wind-ribbon',
      asset: 'assets/objects/weather_vane_wind_ribbon.png',
      x: 1130,
      y: 185,
      scale: 0.14
    },
    {
      id: 'cloud-sketch-card',
      name: 'Cloud Sketch',
      requester: 'Nora Northwind',
      clue: 'A cloud sketch card sits open on the front-left side of the table.',
      key: 'object-copper-weather-vane-workbench-cloud-sketch-card',
      asset: 'assets/objects/weather_vane_cloud_sketch.png',
      x: 475,
      y: 455,
      scale: 0.14
    },
    {
      id: 'blue-roof-tile',
      name: 'Blue Roof Tile',
      requester: 'Nora Northwind',
      clue: 'A blue roof tile leans on the little rooftop model.',
      key: 'object-copper-weather-vane-workbench-blue-roof-tile',
      asset: 'assets/objects/weather_vane_blue_roof_tile.png',
      x: 410,
      y: 365,
      scale: 0.15
    },
    {
      id: 'small-screw-jar',
      name: 'Screw Jar',
      requester: 'Nora Northwind',
      clue: 'A small screw jar waits on the lower left shelf.',
      key: 'object-copper-weather-vane-workbench-small-screw-jar',
      asset: 'assets/objects/weather_vane_screw_jar.png',
      x: 245,
      y: 505,
      scale: 0.14
    },
    {
      id: 'wooden-arrow-pointer',
      name: 'Arrow Pointer',
      requester: 'Nora Northwind',
      clue: 'A wooden arrow pointer lies along the right side of the table.',
      key: 'object-copper-weather-vane-workbench-wooden-arrow-pointer',
      asset: 'assets/objects/weather_vane_arrow_pointer.png',
      x: 1000,
      y: 480,
      scale: 0.17
    },
    {
      id: 'little-bell-charm',
      name: 'Bell Charm',
      requester: 'Nora Northwind',
      clue: 'A little bell charm hangs beneath the upper right shelf.',
      key: 'object-copper-weather-vane-workbench-little-bell-charm',
      asset: 'assets/objects/weather_vane_bell_charm.png',
      x: 1075,
      y: 330,
      scale: 0.13
    },
    {
      id: 'coiled-twine-spool',
      name: 'Twine Spool',
      requester: 'Nora Northwind',
      clue: 'A coiled twine spool is tucked in the basket near the lower right.',
      key: 'object-copper-weather-vane-workbench-coiled-twine-spool',
      asset: 'assets/objects/weather_vane_twine_spool.png',
      x: 910,
      y: 620,
      scale: 0.14
    },
    {
      id: 'copper-rain-cup',
      name: 'Rain Cup',
      requester: 'Nora Northwind',
      clue: 'A copper rain cup peeks from the left storage cubby.',
      key: 'object-copper-weather-vane-workbench-copper-rain-cup',
      asset: 'assets/objects/weather_vane_rain_cup.png',
      x: 205,
      y: 400,
      scale: 0.14
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-wind-swirl-1',
      name: 'Golden Wind Swirl',
      key: 'bonus-copper-weather-vane-workbench-wind-swirl-1',
      asset: 'assets/bonus/weather_vane_wind_swirl_01.png',
      x: 230,
      y: 170,
      scale: 0.08
    },
    {
      id: 'golden-wind-swirl-2',
      name: 'Golden Wind Swirl',
      key: 'bonus-copper-weather-vane-workbench-wind-swirl-2',
      asset: 'assets/bonus/weather_vane_wind_swirl_02.png',
      x: 720,
      y: 165,
      scale: 0.08
    },
    {
      id: 'golden-wind-swirl-3',
      name: 'Golden Wind Swirl',
      key: 'bonus-copper-weather-vane-workbench-wind-swirl-3',
      asset: 'assets/bonus/weather_vane_wind_swirl_03.png',
      x: 1165,
      y: 180,
      scale: 0.08
    }
  ],
  surprises: [
    {
      id: 'copper-weather-vane-workbench-spin',
      x: 760,
      y: 300,
      label: 'Spin!'
    },
    {
      id: 'copper-weather-vane-workbench-chime',
      x: 1075,
      y: 330,
      label: 'Chime!'
    },
    {
      id: 'copper-weather-vane-workbench-breeze',
      x: 1130,
      y: 185,
      label: 'Breeze!'
    }
  ],
  previousLevelId: 'cozy-sock-darning-basket'
};
