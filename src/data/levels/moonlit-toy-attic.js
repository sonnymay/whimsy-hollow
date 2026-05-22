export const moonlitToyAttic = {
  id: 'moonlit-toy-attic',
  title: 'Moonlit Toy Attic',
  saveKey: 'whimsy-hollow:moonlit-toy-attic',
  bonusSaveKey: 'whimsy-hollow:moonlit-toy-attic:bonus',
  bonusLabel: 'Glow Motes',
  bonusFoundText: 'Glow!',
  background: {
    key: 'moonlitToyAtticBackground',
    path: 'assets/backgrounds/moonlit_toy_attic.webp'
  },
  objects: [
    {
      id: 'moon-lantern',
      name: 'Moon Lantern',
      requester: 'Attic Keeper',
      clue: 'A moon lantern glows on a high shelf.',
      key: 'object-moonlit-toy-attic-moon-lantern',
      asset: 'assets/objects/moonlit_toy_attic_moon_lantern.png',
      x: 1110,
      y: 178,
      scale: 0.18
    },
    {
      id: 'patchwork-teddy',
      name: 'Teddy',
      requester: 'Attic Keeper',
      clue: 'A patchwork teddy waits by the book shelf.',
      key: 'object-moonlit-toy-attic-patchwork-teddy',
      asset: 'assets/objects/moonlit_toy_attic_patchwork_teddy.png',
      x: 708,
      y: 245,
      scale: 0.17
    },
    {
      id: 'spinning-top',
      name: 'Top',
      requester: 'Attic Keeper',
      clue: 'A spinning top rests near the round rug.',
      key: 'object-moonlit-toy-attic-spinning-top',
      asset: 'assets/objects/moonlit_toy_attic_spinning_top.png',
      x: 396,
      y: 610,
      scale: 0.15
    },
    {
      id: 'silver-thimble',
      name: 'Thimble',
      requester: 'Attic Keeper',
      clue: 'A silver thimble hides beside the craft table.',
      key: 'object-moonlit-toy-attic-silver-thimble',
      asset: 'assets/objects/moonlit_toy_attic_silver_thimble.png',
      x: 998,
      y: 442,
      scale: 0.14
    },
    {
      id: 'tiny-storybook',
      name: 'Book',
      requester: 'Attic Keeper',
      clue: 'A moon storybook sits near the left toys.',
      key: 'object-moonlit-toy-attic-storybook',
      asset: 'assets/objects/moonlit_toy_attic_storybook.png',
      x: 272,
      y: 416,
      scale: 0.15
    },
    {
      id: 'blue-yarn-ball',
      name: 'Yarn',
      requester: 'Attic Keeper',
      clue: 'A blue yarn ball rolled by the cushions.',
      key: 'object-moonlit-toy-attic-blue-yarn',
      asset: 'assets/objects/moonlit_toy_attic_blue_yarn.png',
      x: 788,
      y: 556,
      scale: 0.15
    },
    {
      id: 'brass-telescope',
      name: 'Telescope',
      requester: 'Attic Keeper',
      clue: 'A brass telescope points toward moonlight.',
      key: 'object-moonlit-toy-attic-brass-telescope',
      asset: 'assets/objects/moonlit_toy_attic_brass_telescope.png',
      x: 1012,
      y: 628,
      scale: 0.16
    },
    {
      id: 'star-button',
      name: 'Star',
      requester: 'Attic Keeper',
      clue: 'A star button shines near the dollhouse.',
      key: 'object-moonlit-toy-attic-star-button',
      asset: 'assets/objects/moonlit_toy_attic_star_button.png',
      x: 846,
      y: 378,
      scale: 0.16
    },
    {
      id: 'doll-shoe',
      name: 'Shoe',
      requester: 'Attic Keeper',
      clue: 'A tiny doll shoe sits beside the toy horse.',
      key: 'object-moonlit-toy-attic-doll-shoe',
      asset: 'assets/objects/moonlit_toy_attic_doll_shoe.png',
      x: 230,
      y: 575,
      scale: 0.15
    },
    {
      id: 'ribbon-spool',
      name: 'Ribbon',
      requester: 'Attic Keeper',
      clue: 'A ribbon spool rests near the art table.',
      key: 'object-moonlit-toy-attic-ribbon-spool',
      asset: 'assets/objects/moonlit_toy_attic_ribbon_spool.png',
      x: 1138,
      y: 482,
      scale: 0.15
    }
  ],
  bonusEnvelopes: [
    {
      id: 'attic-glow-mote-1',
      name: 'Gold Glow Mote',
      key: 'bonus-moonlit-toy-attic-glow-mote-1',
      asset: 'assets/bonus/moonlit_toy_attic_glow_mote_01.png',
      x: 430,
      y: 222,
      scale: 0.11
    },
    {
      id: 'attic-glow-mote-2',
      name: 'Blue Glow Mote',
      key: 'bonus-moonlit-toy-attic-glow-mote-2',
      asset: 'assets/bonus/moonlit_toy_attic_glow_mote_02.png',
      x: 742,
      y: 156,
      scale: 0.11
    },
    {
      id: 'attic-glow-mote-3',
      name: 'Pink Glow Mote',
      key: 'bonus-moonlit-toy-attic-glow-mote-3',
      asset: 'assets/bonus/moonlit_toy_attic_glow_mote_03.png',
      x: 1118,
      y: 318,
      scale: 0.11
    }
  ],
  surprises: [
    {
      id: 'attic-moon-window',
      x: 474,
      y: 206,
      label: 'Moon!'
    },
    {
      id: 'attic-star-lights',
      x: 1030,
      y: 116,
      label: 'Twinkle!'
    },
    {
      id: 'attic-toy-trunk',
      x: 548,
      y: 450,
      label: 'Creak!'
    }
  ],
  previousLevelId: 'starlight-greenhouse'
};
