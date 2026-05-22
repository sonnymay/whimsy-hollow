export const cozyMapRoom = {
  id: 'cozy-map-room',
  title: 'Cozy Map Room',
  saveKey: 'whimsy-hollow:cozy-map-room',
  bonusSaveKey: 'whimsy-hollow:cozy-map-room:bonus',
  bonusLabel: 'Roses',
  bonusFoundText: 'Rose!',
  background: {
    key: 'cozyMapRoomBackground',
    path: 'assets/backgrounds/cozy_map_room.webp'
  },
  objects: [
    {
      id: 'brass-compass',
      name: 'Brass Compass',
      requester: 'Mira Mapmaker',
      clue: 'A brass compass points from the wide map table.',
      key: 'object-cozy-map-room-brass-compass',
      asset: 'assets/objects/cozy_map_room_brass_compass.png',
      x: 980,
      y: 530,
      scale: 0.2
    },
    {
      id: 'parchment-map',
      name: 'Parchment Map',
      requester: 'Mira Mapmaker',
      clue: 'A rolled parchment map rests near the window seat.',
      key: 'object-cozy-map-room-parchment-map',
      asset: 'assets/objects/cozy_map_room_parchment_map.png',
      x: 540,
      y: 585,
      scale: 0.18
    },
    {
      id: 'blue-travel-journal',
      name: 'Travel Journal',
      requester: 'Mira Mapmaker',
      clue: 'A blue travel journal hides among the shelf books.',
      key: 'object-cozy-map-room-blue-journal',
      asset: 'assets/objects/cozy_map_room_blue_journal.png',
      x: 335,
      y: 300,
      scale: 0.19
    },
    {
      id: 'tiny-spyglass',
      name: 'Tiny Spyglass',
      requester: 'Mira Mapmaker',
      clue: 'A tiny spyglass waits on the high right shelf.',
      key: 'object-cozy-map-room-spyglass',
      asset: 'assets/objects/cozy_map_room_spyglass.png',
      x: 1120,
      y: 420,
      scale: 0.18
    },
    {
      id: 'red-sealing-wax',
      name: 'Sealing Wax',
      requester: 'Mira Mapmaker',
      clue: 'A red seal shines near the middle of the room.',
      key: 'object-cozy-map-room-sealing-wax',
      asset: 'assets/objects/cozy_map_room_sealing_wax.png',
      x: 704,
      y: 408,
      scale: 0.22
    },
    {
      id: 'star-map-pin',
      name: 'Star Pin',
      requester: 'Mira Mapmaker',
      clue: 'A star-shaped pin glitters near the hanging maps.',
      key: 'object-cozy-map-room-star-pin',
      asset: 'assets/objects/cozy_map_room_star_pin.png',
      x: 826,
      y: 232,
      scale: 0.2
    },
    {
      id: 'ribbon-bookmark',
      name: 'Bookmark',
      requester: 'Mira Mapmaker',
      clue: 'A ribbon bookmark tucks beside the cozy cushions.',
      key: 'object-cozy-map-room-ribbon-bookmark',
      asset: 'assets/objects/cozy_map_room_ribbon_bookmark.png',
      x: 440,
      y: 452,
      scale: 0.2
    },
    {
      id: 'wooden-ruler',
      name: 'Wooden Ruler',
      requester: 'Mira Mapmaker',
      clue: 'A small wooden ruler lies along the lower table edge.',
      key: 'object-cozy-map-room-wooden-ruler',
      asset: 'assets/objects/cozy_map_room_wooden_ruler.png',
      x: 740,
      y: 620,
      scale: 0.19
    },
    {
      id: 'painted-pebble',
      name: 'Painted Pebble',
      requester: 'Mira Mapmaker',
      clue: 'A painted pebble sits by the left-side plant pot.',
      key: 'object-cozy-map-room-painted-pebble',
      asset: 'assets/objects/cozy_map_room_painted_pebble.png',
      x: 230,
      y: 612,
      scale: 0.2
    },
    {
      id: 'magnifying-glass',
      name: 'Magnifying Glass',
      requester: 'Mira Mapmaker',
      clue: 'A magnifying glass waits near the right corner of the desk.',
      key: 'object-cozy-map-room-magnifying-glass',
      asset: 'assets/objects/cozy_map_room_magnifying_glass.png',
      x: 1080,
      y: 616,
      scale: 0.19
    }
  ],
  bonusEnvelopes: [
    {
      id: 'compass-rose-1',
      name: 'Compass Rose',
      key: 'bonus-cozy-map-room-compass-rose-1',
      asset: 'assets/bonus/cozy_map_room_compass_rose_01.png',
      x: 620,
      y: 196,
      scale: 0.15
    },
    {
      id: 'compass-rose-2',
      name: 'Compass Rose',
      key: 'bonus-cozy-map-room-compass-rose-2',
      asset: 'assets/bonus/cozy_map_room_compass_rose_02.png',
      x: 910,
      y: 340,
      scale: 0.15
    },
    {
      id: 'compass-rose-3',
      name: 'Compass Rose',
      key: 'bonus-cozy-map-room-compass-rose-3',
      asset: 'assets/bonus/cozy_map_room_compass_rose_03.png',
      x: 1184,
      y: 220,
      scale: 0.15
    }
  ],
  surprises: [
    {
      id: 'map-room-window-view',
      x: 748,
      y: 190,
      label: 'Sunny!'
    },
    {
      id: 'map-room-globe-spin',
      x: 990,
      y: 360,
      label: 'Spin!'
    },
    {
      id: 'map-room-lantern-glow',
      x: 250,
      y: 480,
      label: 'Glow!'
    }
  ],
  previousLevelId: 'lavender-laundry-room'
};
