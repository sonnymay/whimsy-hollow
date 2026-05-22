export const rainyBootMudroom = {
  id: 'rainy-boot-mudroom',
  title: 'Rainy Boot Mudroom',
  saveKey: 'whimsy-hollow:rainy-boot-mudroom',
  bonusSaveKey: 'whimsy-hollow:rainy-boot-mudroom:bonus',
  bonusLabel: 'Raindrops',
  bonusFoundText: 'Raindrop!',
  background: {
    key: 'rainyBootMudroomBackground',
    path: 'assets/backgrounds/rainy_boot_mudroom.webp'
  },
  objects: [
    {
      id: 'yellow-rain-boot',
      name: 'Yellow Rain Boot',
      requester: 'Mina Rainbell',
      clue: 'A yellow rain boot waits below the mudroom bench.',
      key: 'object-rainy-boot-mudroom-yellow-boot',
      asset: 'assets/objects/rainy_boot_mudroom_yellow_boot.png',
      x: 630,
      y: 610,
      scale: 0.22
    },
    {
      id: 'polka-dot-umbrella',
      name: 'Polka-Dot Umbrella',
      requester: 'Mina Rainbell',
      clue: 'A polka-dot umbrella leans in the basket by the door.',
      key: 'object-rainy-boot-mudroom-polka-umbrella',
      asset: 'assets/objects/rainy_boot_mudroom_polka_umbrella.png',
      x: 230,
      y: 460,
      scale: 0.22
    },
    {
      id: 'brass-coat-hook',
      name: 'Brass Coat Hook',
      requester: 'Mina Rainbell',
      clue: 'A brass coat hook shines on the wooden hook rail.',
      key: 'object-rainy-boot-mudroom-brass-hook',
      asset: 'assets/objects/rainy_boot_mudroom_brass_hook.png',
      x: 840,
      y: 220,
      scale: 0.2
    },
    {
      id: 'folded-towel-stack',
      name: 'Towel Stack',
      requester: 'Mina Rainbell',
      clue: 'A folded towel stack sits on the right shelf.',
      key: 'object-rainy-boot-mudroom-towel-stack',
      asset: 'assets/objects/rainy_boot_mudroom_towel_stack.png',
      x: 965,
      y: 520,
      scale: 0.22
    },
    {
      id: 'blue-boot-brush',
      name: 'Boot Brush',
      requester: 'Mina Rainbell',
      clue: 'A blue boot brush rests under the bench.',
      key: 'object-rainy-boot-mudroom-boot-brush',
      asset: 'assets/objects/rainy_boot_mudroom_boot_brush.png',
      x: 500,
      y: 600,
      scale: 0.22
    },
    {
      id: 'flower-doormat-tile',
      name: 'Flower Doormat',
      requester: 'Mina Rainbell',
      clue: 'A flower doormat lies in front of the rainy door.',
      key: 'object-rainy-boot-mudroom-flower-doormat',
      asset: 'assets/objects/rainy_boot_mudroom_flower_doormat.png',
      x: 300,
      y: 625,
      scale: 0.22
    },
    {
      id: 'small-watering-can',
      name: 'Watering Can',
      requester: 'Mina Rainbell',
      clue: 'A small watering can is tucked into the lower shelf.',
      key: 'object-rainy-boot-mudroom-watering-can',
      asset: 'assets/objects/rainy_boot_mudroom_watering_can.png',
      x: 1065,
      y: 510,
      scale: 0.22
    },
    {
      id: 'wooden-clothespin',
      name: 'Wooden Clothespin',
      requester: 'Mina Rainbell',
      clue: 'A wooden clothespin is clipped near the baskets.',
      key: 'object-rainy-boot-mudroom-clothespin',
      asset: 'assets/objects/rainy_boot_mudroom_wooden_clothespin.png',
      x: 740,
      y: 580,
      scale: 0.22
    },
    {
      id: 'tiny-rain-gauge',
      name: 'Rain Gauge',
      requester: 'Mina Rainbell',
      clue: 'A tiny rain gauge stands near the rainy window.',
      key: 'object-rainy-boot-mudroom-rain-gauge',
      asset: 'assets/objects/rainy_boot_mudroom_rain_gauge.png',
      x: 1135,
      y: 310,
      scale: 0.22
    },
    {
      id: 'seed-packet-envelope',
      name: 'Seed Packet',
      requester: 'Mina Rainbell',
      clue: 'A seed packet envelope is tucked near the shelf baskets.',
      key: 'object-rainy-boot-mudroom-seed-packet',
      asset: 'assets/objects/rainy_boot_mudroom_seed_packet.png',
      x: 420,
      y: 250,
      scale: 0.22
    }
  ],
  bonusEnvelopes: [
    {
      id: 'silver-raindrop-1',
      name: 'Silver Raindrop',
      key: 'bonus-rainy-boot-mudroom-raindrop-1',
      asset: 'assets/bonus/rainy_boot_mudroom_silver_raindrop_01.png',
      x: 365,
      y: 170,
      scale: 0.16
    },
    {
      id: 'silver-raindrop-2',
      name: 'Silver Raindrop',
      key: 'bonus-rainy-boot-mudroom-raindrop-2',
      asset: 'assets/bonus/rainy_boot_mudroom_silver_raindrop_02.png',
      x: 760,
      y: 145,
      scale: 0.16
    },
    {
      id: 'silver-raindrop-3',
      name: 'Silver Raindrop',
      key: 'bonus-rainy-boot-mudroom-raindrop-3',
      asset: 'assets/bonus/rainy_boot_mudroom_silver_raindrop_03.png',
      x: 1170,
      y: 210,
      scale: 0.16
    }
  ],
  surprises: [
    {
      id: 'mudroom-window-drip',
      x: 1045,
      y: 190,
      label: 'Drip!'
    },
    {
      id: 'mudroom-lamp-glow',
      x: 470,
      y: 165,
      label: 'Glow!'
    },
    {
      id: 'mudroom-boot-squeak',
      x: 585,
      y: 610,
      label: 'Squeak!'
    }
  ],
  previousLevelId: 'rainbow-glass-sunroom'
};
