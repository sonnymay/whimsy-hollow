export const sleepyTrainCar = {
  id: 'sleepy-train-car',
  title: 'Sleepy Train Car',
  saveKey: 'whimsy-hollow:sleepy-train-car',
  bonusSaveKey: 'whimsy-hollow:sleepy-train-car:bonus',
  bonusLabel: 'Tickets',
  bonusFoundText: 'Ticket!',
  background: {
    key: 'sleepyTrainCarBackground',
    path: 'assets/backgrounds/sleepy_train_car.webp'
  },
  objects: [
    {
      id: 'brass-ticket-punch',
      name: 'Punch',
      requester: 'Conductor Pip',
      clue: 'A brass punch rests by the luggage rack.',
      key: 'object-sleepy-train-car-ticket-punch',
      asset: 'assets/objects/sleepy_train_car_ticket_punch.png',
      x: 248,
      y: 194,
      scale: 0.12
    },
    {
      id: 'suitcase-tag',
      name: 'Tag',
      requester: 'Conductor Pip',
      clue: 'A suitcase tag hangs near the soft seat.',
      key: 'object-sleepy-train-car-suitcase-tag',
      asset: 'assets/objects/sleepy_train_car_suitcase_tag.png',
      x: 1160,
      y: 560,
      scale: 0.12
    },
    {
      id: 'blue-travel-mug',
      name: 'Mug',
      requester: 'Conductor Pip',
      clue: 'A blue mug waits on the little table.',
      key: 'object-sleepy-train-car-travel-mug',
      asset: 'assets/objects/sleepy_train_car_travel_mug.png',
      x: 684,
      y: 468,
      scale: 0.12
    },
    {
      id: 'folded-train-map',
      name: 'Map',
      requester: 'Conductor Pip',
      clue: 'A folded map hides by the window view.',
      key: 'object-sleepy-train-car-folded-map',
      asset: 'assets/objects/sleepy_train_car_folded_map.png',
      x: 964,
      y: 292,
      scale: 0.12
    },
    {
      id: 'pocket-watch',
      name: 'Watch',
      requester: 'Conductor Pip',
      clue: 'A pocket watch gleams by the doorway.',
      key: 'object-sleepy-train-car-pocket-watch',
      asset: 'assets/objects/sleepy_train_car_pocket_watch.png',
      x: 516,
      y: 228,
      scale: 0.12
    },
    {
      id: 'flower-teapot',
      name: 'Teapot',
      requester: 'Conductor Pip',
      clue: 'A flower teapot sits on the round table.',
      key: 'object-sleepy-train-car-flower-teapot',
      asset: 'assets/objects/sleepy_train_car_flower_teapot.png',
      x: 710,
      y: 520,
      scale: 0.12
    },
    {
      id: 'striped-scarf',
      name: 'Scarf',
      requester: 'Conductor Pip',
      clue: 'A striped scarf is tucked beside the hat.',
      key: 'object-sleepy-train-car-striped-scarf',
      asset: 'assets/objects/sleepy_train_car_striped_scarf.png',
      x: 512,
      y: 336,
      scale: 0.12
    },
    {
      id: 'wooden-train-whistle',
      name: 'Whistle',
      requester: 'Conductor Pip',
      clue: 'A wooden whistle waits near the blanket.',
      key: 'object-sleepy-train-car-train-whistle',
      asset: 'assets/objects/sleepy_train_car_train_whistle.png',
      x: 1038,
      y: 628,
      scale: 0.12
    },
    {
      id: 'little-star-pillow',
      name: 'Pillow',
      requester: 'Conductor Pip',
      clue: 'A star pillow rests in the cozy seat.',
      key: 'object-sleepy-train-car-star-pillow',
      asset: 'assets/objects/sleepy_train_car_star_pillow.png',
      x: 338,
      y: 466,
      scale: 0.12
    },
    {
      id: 'lavender-bookmark',
      name: 'Bookmark',
      requester: 'Conductor Pip',
      clue: 'A lavender bookmark marks the travel books.',
      key: 'object-sleepy-train-car-lavender-bookmark',
      asset: 'assets/objects/sleepy_train_car_lavender_bookmark.png',
      x: 578,
      y: 392,
      scale: 0.12
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-ticket-1',
      name: 'Golden Ticket',
      key: 'bonus-sleepy-train-car-ticket-1',
      asset: 'assets/bonus/sleepy_train_car_ticket_01.png',
      x: 372,
      y: 622,
      scale: 0.1
    },
    {
      id: 'golden-ticket-2',
      name: 'Golden Ticket',
      key: 'bonus-sleepy-train-car-ticket-2',
      asset: 'assets/bonus/sleepy_train_car_ticket_02.png',
      x: 798,
      y: 608,
      scale: 0.1
    },
    {
      id: 'golden-ticket-3',
      name: 'Golden Ticket',
      key: 'bonus-sleepy-train-car-ticket-3',
      asset: 'assets/bonus/sleepy_train_car_ticket_03.png',
      x: 1120,
      y: 310,
      scale: 0.1
    }
  ],
  surprises: [
    {
      id: 'train-window-sunset',
      x: 934,
      y: 240,
      label: 'Sunset!'
    },
    {
      id: 'train-table-lamp',
      x: 710,
      y: 430,
      label: 'Glow!'
    },
    {
      id: 'train-luggage-rack',
      x: 236,
      y: 126,
      label: 'Clack!'
    }
  ],
  previousLevelId: 'cozy-quilt-workshop'
};
