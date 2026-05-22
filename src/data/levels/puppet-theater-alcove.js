export const puppetTheaterAlcove = {
  id: 'puppet-theater-alcove',
  title: 'Puppet Theater Alcove',
  saveKey: 'whimsy-hollow:puppet-theater-alcove',
  bonusSaveKey: 'whimsy-hollow:puppet-theater-alcove:bonus',
  bonusLabel: 'Stars',
  bonusFoundText: 'Star!',
  background: {
    key: 'puppetTheaterAlcoveBackground',
    path: 'assets/backgrounds/puppet_theater_alcove.png'
  },
  objects: [
    {
      id: 'velvet-curtain-tassel',
      name: 'Curtain Tassel',
      requester: 'Nora Stageglow',
      clue: 'A velvet curtain tassel hangs beside the little stage.',
      key: 'object-puppet-theater-alcove-curtain-tassel',
      asset: 'assets/objects/puppet_theater_alcove_curtain_tassel.png',
      x: 425,
      y: 305,
      scale: 0.22
    },
    {
      id: 'wooden-puppet-handle',
      name: 'Puppet Handle',
      requester: 'Nora Stageglow',
      clue: 'A wooden puppet handle rests near the fabric box.',
      key: 'object-puppet-theater-alcove-puppet-handle',
      asset: 'assets/objects/puppet_theater_alcove_puppet_handle.png',
      x: 680,
      y: 610,
      scale: 0.22
    },
    {
      id: 'felt-crown',
      name: 'Felt Crown',
      requester: 'Nora Stageglow',
      clue: 'A felt crown waits on the right puppet shelf.',
      key: 'object-puppet-theater-alcove-felt-crown',
      asset: 'assets/objects/puppet_theater_alcove_felt_crown.png',
      x: 945,
      y: 255,
      scale: 0.22
    },
    {
      id: 'painted-moon-prop',
      name: 'Moon Prop',
      requester: 'Nora Stageglow',
      clue: 'A painted moon prop hangs on the left wall.',
      key: 'object-puppet-theater-alcove-moon-prop',
      asset: 'assets/objects/puppet_theater_alcove_moon_prop.png',
      x: 210,
      y: 210,
      scale: 0.22
    },
    {
      id: 'blue-ribbon-spool',
      name: 'Ribbon Spool',
      requester: 'Nora Stageglow',
      clue: 'A blue ribbon spool sits near the sewing basket.',
      key: 'object-puppet-theater-alcove-ribbon-spool',
      asset: 'assets/objects/puppet_theater_alcove_ribbon_spool.png',
      x: 1045,
      y: 610,
      scale: 0.22
    },
    {
      id: 'small-stage-lantern',
      name: 'Stage Lantern',
      requester: 'Nora Stageglow',
      clue: 'A small stage lantern glows beside the curtains.',
      key: 'object-puppet-theater-alcove-stage-lantern',
      asset: 'assets/objects/puppet_theater_alcove_stage_lantern.png',
      x: 385,
      y: 405,
      scale: 0.22
    },
    {
      id: 'flower-fabric-square',
      name: 'Fabric Square',
      requester: 'Nora Stageglow',
      clue: 'A flower fabric square is tucked into the open craft box.',
      key: 'object-puppet-theater-alcove-fabric-square',
      asset: 'assets/objects/puppet_theater_alcove_fabric_square.png',
      x: 785,
      y: 570,
      scale: 0.22
    },
    {
      id: 'wooden-star-wand',
      name: 'Star Wand',
      requester: 'Nora Stageglow',
      clue: 'A wooden star wand leans near the left cushion bench.',
      key: 'object-puppet-theater-alcove-star-wand',
      asset: 'assets/objects/puppet_theater_alcove_star_wand.png',
      x: 255,
      y: 520,
      scale: 0.22
    },
    {
      id: 'button-eyed-sock-puppet',
      name: 'Sock Puppet',
      requester: 'Nora Stageglow',
      clue: 'A button-eyed sock puppet peeks from the stage shelf.',
      key: 'object-puppet-theater-alcove-sock-puppet',
      asset: 'assets/objects/puppet_theater_alcove_sock_puppet.png',
      x: 565,
      y: 335,
      scale: 0.22
    },
    {
      id: 'round-pincushion',
      name: 'Pincushion',
      requester: 'Nora Stageglow',
      clue: 'A round pincushion rests near the thread chest.',
      key: 'object-puppet-theater-alcove-pincushion',
      asset: 'assets/objects/puppet_theater_alcove_pincushion.png',
      x: 965,
      y: 640,
      scale: 0.22
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-stage-star-1',
      name: 'Golden Stage Star',
      key: 'bonus-puppet-theater-alcove-star-1',
      asset: 'assets/bonus/puppet_theater_alcove_golden_star_01.png',
      x: 310,
      y: 150,
      scale: 0.16
    },
    {
      id: 'golden-stage-star-2',
      name: 'Golden Stage Star',
      key: 'bonus-puppet-theater-alcove-star-2',
      asset: 'assets/bonus/puppet_theater_alcove_golden_star_02.png',
      x: 860,
      y: 185,
      scale: 0.16
    },
    {
      id: 'golden-stage-star-3',
      name: 'Golden Stage Star',
      key: 'bonus-puppet-theater-alcove-star-3',
      asset: 'assets/bonus/puppet_theater_alcove_golden_star_03.png',
      x: 1145,
      y: 315,
      scale: 0.17
    }
  ],
  surprises: [
    {
      id: 'puppet-curtain-swish',
      x: 548,
      y: 245,
      label: 'Swish!'
    },
    {
      id: 'puppet-lantern-glow',
      x: 845,
      y: 132,
      label: 'Glow!'
    },
    {
      id: 'puppet-ribbon-twirl',
      x: 760,
      y: 620,
      label: 'Twirl!'
    }
  ],
  previousLevelId: 'painted-pebble-patio'
};
