export const cranberryGarlandHearth = {
  id: 'cranberry-garland-hearth',
  title: 'Cranberry Garland Hearth',
  saveKey: 'whimsy-hollow:cranberry-garland-hearth',
  bonusSaveKey: 'whimsy-hollow:cranberry-garland-hearth:bonus',
  bonusLabel: 'Golden Cranberries',
  bonusFoundText: 'Golden cranberry!',
  background: {
    key: 'cranberryGarlandHearthBackground',
    path: 'assets/backgrounds/cranberry_garland_hearth.webp'
  },
  objects: [
    {
      id: 'cranberry-garland-loop',
      name: 'Cranberry Garland',
      requester: 'Clara Cranberry',
      clue: 'A loop of cranberry garland hangs above the cozy hearth.',
      key: 'object-cranberry-garland-hearth-garland-loop',
      asset: 'assets/objects/cranberry_garland_hearth_cranberry_garland_loop.png',
      x: 330,
      y: 260,
      scale: 0.18
    },
    {
      id: 'popcorn-string-needle',
      name: 'Popcorn Needle',
      requester: 'Clara Cranberry',
      clue: 'A popcorn string needle lies on the garland table.',
      key: 'object-cranberry-garland-hearth-popcorn-needle',
      asset: 'assets/objects/cranberry_garland_hearth_popcorn_string_needle.png',
      x: 730,
      y: 455,
      scale: 0.18
    },
    {
      id: 'red-velvet-ribbon-spool',
      name: 'Ribbon Spool',
      requester: 'Clara Cranberry',
      clue: 'A red velvet ribbon spool waits near the right craft corner.',
      key: 'object-cranberry-garland-hearth-ribbon-spool',
      asset: 'assets/objects/cranberry_garland_hearth_red_ribbon_spool.png',
      x: 1125,
      y: 470,
      scale: 0.18
    },
    {
      id: 'dried-orange-slice',
      name: 'Orange Slice',
      requester: 'Clara Cranberry',
      clue: 'A dried orange slice is tucked into the mantel garland.',
      key: 'object-cranberry-garland-hearth-orange-slice',
      asset: 'assets/objects/cranberry_garland_hearth_dried_orange_slice.png',
      x: 245,
      y: 210,
      scale: 0.17
    },
    {
      id: 'cinnamon-stick-bundle',
      name: 'Cinnamon Bundle',
      requester: 'Clara Cranberry',
      clue: 'A cinnamon bundle rests beside the jars and ribbons.',
      key: 'object-cranberry-garland-hearth-cinnamon-bundle',
      asset: 'assets/objects/cranberry_garland_hearth_cinnamon_bundle.png',
      x: 1065,
      y: 585,
      scale: 0.18
    },
    {
      id: 'tiny-brass-bell',
      name: 'Brass Bell',
      requester: 'Clara Cranberry',
      clue: 'A tiny brass bell shines on the left side of the hearth.',
      key: 'object-cranberry-garland-hearth-brass-bell',
      asset: 'assets/objects/cranberry_garland_hearth_tiny_brass_bell.png',
      x: 210,
      y: 395,
      scale: 0.17
    },
    {
      id: 'pinecone-cranberry-cluster',
      name: 'Pinecone Cluster',
      requester: 'Clara Cranberry',
      clue: 'A pinecone cluster with cranberries sits near the fireplace tools.',
      key: 'object-cranberry-garland-hearth-pinecone-cluster',
      asset: 'assets/objects/cranberry_garland_hearth_pinecone_cranberry_cluster.png',
      x: 410,
      y: 540,
      scale: 0.18
    },
    {
      id: 'wooden-bead-spool',
      name: 'Bead Spool',
      requester: 'Clara Cranberry',
      clue: 'A wooden bead spool is hidden among the table supplies.',
      key: 'object-cranberry-garland-hearth-bead-spool',
      asset: 'assets/objects/cranberry_garland_hearth_wooden_bead_spool.png',
      x: 880,
      y: 455,
      scale: 0.18
    },
    {
      id: 'folded-quilt-patch',
      name: 'Quilt Patch',
      requester: 'Clara Cranberry',
      clue: 'A folded quilt patch sits low beside the stool.',
      key: 'object-cranberry-garland-hearth-quilt-patch',
      asset: 'assets/objects/cranberry_garland_hearth_folded_quilt_patch.png',
      x: 610,
      y: 650,
      scale: 0.18
    },
    {
      id: 'copper-craft-scissors',
      name: 'Craft Scissors',
      requester: 'Clara Cranberry',
      clue: 'Copper craft scissors rest near the cranberry pile.',
      key: 'object-cranberry-garland-hearth-craft-scissors',
      asset: 'assets/objects/cranberry_garland_hearth_copper_craft_scissors.png',
      x: 770,
      y: 520,
      scale: 0.18
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-cranberry-1',
      name: 'Golden Cranberry',
      key: 'bonus-cranberry-garland-hearth-cranberry-1',
      asset: 'assets/bonus/cranberry_garland_hearth_golden_cranberry_01.png',
      x: 225,
      y: 170,
      scale: 0.12
    },
    {
      id: 'golden-cranberry-2',
      name: 'Golden Cranberry',
      key: 'bonus-cranberry-garland-hearth-cranberry-2',
      asset: 'assets/bonus/cranberry_garland_hearth_golden_cranberry_02.png',
      x: 670,
      y: 150,
      scale: 0.12
    },
    {
      id: 'golden-cranberry-3',
      name: 'Golden Cranberry',
      key: 'bonus-cranberry-garland-hearth-cranberry-3',
      asset: 'assets/bonus/cranberry_garland_hearth_golden_cranberry_03.png',
      x: 1160,
      y: 185,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'cranberry-fireplace-crackle',
      x: 350,
      y: 460,
      label: 'Crackle!'
    },
    {
      id: 'cranberry-bell-jingle',
      x: 215,
      y: 390,
      label: 'Jingle!'
    },
    {
      id: 'cranberry-window-glow',
      x: 800,
      y: 190,
      label: 'Glow!'
    }
  ],
  previousLevelId: 'rainy-umbrella-repair-stand'
};
