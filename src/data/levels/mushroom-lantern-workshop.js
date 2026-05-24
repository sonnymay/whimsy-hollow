export const mushroomLanternWorkshop = {
  id: 'mushroom-lantern-workshop',
  title: 'Mushroom Lantern Workshop',
  saveKey: 'whimsy-hollow:mushroom-lantern-workshop',
  bonusSaveKey: 'whimsy-hollow:mushroom-lantern-workshop:bonus',
  bonusLabel: 'Glow Mushrooms',
  bonusFoundText: 'Glow mushroom!',
  background: {
    key: 'mushroomLanternWorkshopBackground',
    path: 'assets/backgrounds/mushroom_lantern_workshop.webp'
  },
  objects: [
    {
      id: 'paper-mushroom-cap',
      name: 'Paper Mushroom Cap',
      requester: 'Pip Lanternleaf',
      clue: 'A red paper mushroom cap waits in the lower basket by the left shelf.',
      key: 'object-mushroom-lantern-workshop-paper-mushroom-cap',
      asset: 'assets/objects/mushroom_lantern_workshop_paper_mushroom_cap.png',
      x: 315,
      y: 610,
      scale: 0.17
    },
    {
      id: 'brass-lantern-frame',
      name: 'Lantern Frame',
      requester: 'Pip Lanternleaf',
      clue: 'A brass lantern frame hangs from the upper left shelf.',
      key: 'object-mushroom-lantern-workshop-brass-lantern-frame',
      asset: 'assets/objects/mushroom_lantern_workshop_brass_lantern_frame.png',
      x: 350,
      y: 235,
      scale: 0.17
    },
    {
      id: 'vellum-botanical-sheet',
      name: 'Botanical Sheet',
      requester: 'Pip Lanternleaf',
      clue: 'A vellum botanical sheet is spread across the center workbench.',
      key: 'object-mushroom-lantern-workshop-vellum-botanical-sheet',
      asset: 'assets/objects/mushroom_lantern_workshop_vellum_botanical_sheet.png',
      x: 720,
      y: 560,
      scale: 0.17
    },
    {
      id: 'moss-jar',
      name: 'Moss Jar',
      requester: 'Pip Lanternleaf',
      clue: 'A moss jar sits on the left shelf among the glass jars.',
      key: 'object-mushroom-lantern-workshop-moss-jar',
      asset: 'assets/objects/mushroom_lantern_workshop_moss_jar.png',
      x: 255,
      y: 305,
      scale: 0.16
    },
    {
      id: 'copper-craft-scissors',
      name: 'Craft Scissors',
      requester: 'Pip Lanternleaf',
      clue: 'Copper craft scissors lie near the right side of the workbench.',
      key: 'object-mushroom-lantern-workshop-copper-craft-scissors',
      asset: 'assets/objects/mushroom_lantern_workshop_copper_craft_scissors.png',
      x: 930,
      y: 515,
      scale: 0.16
    },
    {
      id: 'green-twine-spool',
      name: 'Green Twine',
      requester: 'Pip Lanternleaf',
      clue: 'A green twine spool is tucked into the small shelf under the lanterns.',
      key: 'object-mushroom-lantern-workshop-green-twine-spool',
      asset: 'assets/objects/mushroom_lantern_workshop_green_twine_spool.png',
      x: 430,
      y: 455,
      scale: 0.16
    },
    {
      id: 'tiny-paintbrush',
      name: 'Tiny Paintbrush',
      requester: 'Pip Lanternleaf',
      clue: 'A tiny paintbrush stands in the cup near the front of the bench.',
      key: 'object-mushroom-lantern-workshop-tiny-paintbrush',
      asset: 'assets/objects/mushroom_lantern_workshop_tiny_paintbrush.png',
      x: 525,
      y: 520,
      scale: 0.16
    },
    {
      id: 'wire-hoop-ring',
      name: 'Wire Hoop',
      requester: 'Pip Lanternleaf',
      clue: 'A wire hoop ring rests beside the lantern supplies on the left shelf.',
      key: 'object-mushroom-lantern-workshop-wire-hoop-ring',
      asset: 'assets/objects/mushroom_lantern_workshop_wire_hoop_ring.png',
      x: 305,
      y: 430,
      scale: 0.16
    },
    {
      id: 'acorn-thimble',
      name: 'Acorn Thimble',
      requester: 'Pip Lanternleaf',
      clue: 'An acorn thimble hides near the basket of mushroom parts.',
      key: 'object-mushroom-lantern-workshop-acorn-thimble',
      asset: 'assets/objects/mushroom_lantern_workshop_acorn_thimble.png',
      x: 410,
      y: 360,
      scale: 0.16
    },
    {
      id: 'wooden-awl',
      name: 'Wooden Awl',
      requester: 'Pip Lanternleaf',
      clue: 'A wooden awl lies on the front right workbench edge.',
      key: 'object-mushroom-lantern-workshop-wooden-awl',
      asset: 'assets/objects/mushroom_lantern_workshop_wooden_awl.png',
      x: 1045,
      y: 610,
      scale: 0.16
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-glow-mushroom-1',
      name: 'Golden Glow Mushroom',
      key: 'bonus-mushroom-lantern-workshop-glow-mushroom-1',
      asset: 'assets/bonus/mushroom_lantern_workshop_golden_glow_mushroom_01.png',
      x: 230,
      y: 150,
      scale: 0.1
    },
    {
      id: 'golden-glow-mushroom-2',
      name: 'Golden Glow Mushroom',
      key: 'bonus-mushroom-lantern-workshop-glow-mushroom-2',
      asset: 'assets/bonus/mushroom_lantern_workshop_golden_glow_mushroom_02.png',
      x: 705,
      y: 160,
      scale: 0.1
    },
    {
      id: 'golden-glow-mushroom-3',
      name: 'Golden Glow Mushroom',
      key: 'bonus-mushroom-lantern-workshop-glow-mushroom-3',
      asset: 'assets/bonus/mushroom_lantern_workshop_golden_glow_mushroom_03.png',
      x: 1160,
      y: 165,
      scale: 0.1
    }
  ],
  surprises: [
    {
      id: 'mushroom-lantern-workshop-glow',
      x: 640,
      y: 250,
      label: 'Glow!'
    },
    {
      id: 'mushroom-lantern-workshop-snips',
      x: 930,
      y: 515,
      label: 'Snip!'
    },
    {
      id: 'mushroom-lantern-workshop-rustle',
      x: 420,
      y: 355,
      label: 'Rustle!'
    }
  ],
  previousLevelId: 'cozy-yarn-dyeing-corner'
};
