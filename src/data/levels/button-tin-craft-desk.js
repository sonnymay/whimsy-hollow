export const buttonTinCraftDesk = {
  id: 'button-tin-craft-desk',
  title: 'Button Tin Craft Desk',
  saveKey: 'whimsy-hollow:button-tin-craft-desk',
  bonusSaveKey: 'whimsy-hollow:button-tin-craft-desk:bonus',
  bonusLabel: 'Golden Buttons',
  bonusFoundText: 'Button!',
  background: {
    key: 'buttonTinCraftDeskBackground',
    path: 'assets/backgrounds/button_tin_craft_desk.webp'
  },
  objects: [
    {
      id: 'floral-button-tin',
      name: 'Button Tin',
      requester: 'Maisie Mender',
      clue: 'A floral button tin rests among the open button boxes.',
      key: 'object-button-tin-craft-desk-button-tin',
      asset: 'assets/objects/button_tin_craft_desk_floral_button_tin.png',
      x: 420,
      y: 440,
      scale: 0.19
    },
    {
      id: 'blue-thread-spool',
      name: 'Thread Spool',
      requester: 'Maisie Mender',
      clue: 'A blue thread spool sits on the upper shelf.',
      key: 'object-button-tin-craft-desk-thread-spool',
      asset: 'assets/objects/button_tin_craft_desk_blue_thread_spool.png',
      x: 325,
      y: 160,
      scale: 0.2
    },
    {
      id: 'silver-thimble',
      name: 'Silver Thimble',
      requester: 'Maisie Mender',
      clue: 'A silver thimble gleams near the lace scraps.',
      key: 'object-button-tin-craft-desk-thimble',
      asset: 'assets/objects/button_tin_craft_desk_silver_thimble.png',
      x: 610,
      y: 590,
      scale: 0.2
    },
    {
      id: 'tiny-sewing-scissors',
      name: 'Sewing Scissors',
      requester: 'Maisie Mender',
      clue: 'Tiny sewing scissors lie on the front desk.',
      key: 'object-button-tin-craft-desk-scissors',
      asset: 'assets/objects/button_tin_craft_desk_tiny_sewing_scissors.png',
      x: 810,
      y: 565,
      scale: 0.19
    },
    {
      id: 'lace-ribbon-roll',
      name: 'Lace Roll',
      requester: 'Maisie Mender',
      clue: 'A lace ribbon roll is tucked near the right basket.',
      key: 'object-button-tin-craft-desk-lace-roll',
      asset: 'assets/objects/button_tin_craft_desk_lace_ribbon_roll.png',
      x: 1085,
      y: 470,
      scale: 0.2
    },
    {
      id: 'wooden-needle-case',
      name: 'Needle Case',
      requester: 'Maisie Mender',
      clue: 'A wooden needle case stands with the little tools.',
      key: 'object-button-tin-craft-desk-needle-case',
      asset: 'assets/objects/button_tin_craft_desk_wooden_needle_case.png',
      x: 530,
      y: 300,
      scale: 0.2
    },
    {
      id: 'pink-fabric-swatch',
      name: 'Fabric Swatch',
      requester: 'Maisie Mender',
      clue: 'A pink fabric swatch is folded by the sunny window.',
      key: 'object-button-tin-craft-desk-fabric-swatch',
      asset: 'assets/objects/button_tin_craft_desk_pink_fabric_swatch.png',
      x: 955,
      y: 520,
      scale: 0.2
    },
    {
      id: 'brass-safety-pin',
      name: 'Safety Pin',
      requester: 'Maisie Mender',
      clue: 'A brass safety pin hangs near the ribbon rail.',
      key: 'object-button-tin-craft-desk-safety-pin',
      asset: 'assets/objects/button_tin_craft_desk_brass_safety_pin.png',
      x: 720,
      y: 230,
      scale: 0.19
    },
    {
      id: 'green-button-card',
      name: 'Button Card',
      requester: 'Maisie Mender',
      clue: 'A green button card peeks from the left shelf.',
      key: 'object-button-tin-craft-desk-button-card',
      asset: 'assets/objects/button_tin_craft_desk_green_button_card.png',
      x: 355,
      y: 345,
      scale: 0.19
    },
    {
      id: 'measuring-tape-loop',
      name: 'Measuring Tape',
      requester: 'Maisie Mender',
      clue: 'A measuring tape loop curls across the right side of the desk.',
      key: 'object-button-tin-craft-desk-measuring-tape',
      asset: 'assets/objects/button_tin_craft_desk_measuring_tape_loop.png',
      x: 910,
      y: 600,
      scale: 0.2
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-button-1',
      name: 'Golden Button',
      key: 'bonus-button-tin-craft-desk-golden-button-1',
      asset: 'assets/bonus/button_tin_craft_desk_golden_button_01.png',
      x: 255,
      y: 195,
      scale: 0.14
    },
    {
      id: 'golden-button-2',
      name: 'Golden Button',
      key: 'bonus-button-tin-craft-desk-golden-button-2',
      asset: 'assets/bonus/button_tin_craft_desk_golden_button_02.png',
      x: 675,
      y: 155,
      scale: 0.14
    },
    {
      id: 'golden-button-3',
      name: 'Golden Button',
      key: 'bonus-button-tin-craft-desk-golden-button-3',
      asset: 'assets/bonus/button_tin_craft_desk_golden_button_03.png',
      x: 1110,
      y: 165,
      scale: 0.14
    }
  ],
  surprises: [
    {
      id: 'button-desk-lamp-glow',
      x: 900,
      y: 320,
      label: 'Glow!'
    },
    {
      id: 'button-desk-thread-spin',
      x: 310,
      y: 170,
      label: 'Spin!'
    },
    {
      id: 'button-desk-drawer-click',
      x: 520,
      y: 655,
      label: 'Click!'
    }
  ],
  previousLevelId: 'sugarplum-candy-counter'
};
