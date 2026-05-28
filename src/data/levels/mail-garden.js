export const mailGarden = {
  id: 'mail-garden',
  tier: 'hero',
  caseId: 'case-1-mail',
  title: 'Whimsy Hollow Mail Garden',
  saveKey: 'whimsy-hollow:mail-garden',
  bonusSaveKey: 'whimsy-hollow:mail-garden:bonus',
  bonusLabel: 'Letters',
  bonusFoundText: 'Letter!',
  background: {
    key: 'mailGardenBackground',
    path: 'assets/backgrounds/mail_garden.webp'
  },
  objects: [
    {
      id: 'magical-mailbox',
      name: 'Magical Mailbox',
      requester: 'Postmaster Poppy',
      clue: 'A purple mailbox waits near the old fence where letters gather.',
      key: 'object-magical-mailbox',
      asset: 'assets/objects/magical_mailbox.png',
      x: 182,
      y: 508,
      scale: 0.5
    },
    {
      id: 'golden-key',
      name: 'Golden Key',
      requester: 'The garden baker',
      clue: 'A small gold key rests on the parcel table by the cottage.',
      key: 'object-golden-key',
      asset: 'assets/objects/golden_key.png',
      x: 696,
      y: 410,
      scale: 0.5
    },
    {
      id: 'blue-crystal',
      name: 'Blue Crystal',
      requester: 'A nervous florist',
      clue: 'A blue crystal hums among the high flowers and roof shadows.',
      key: 'object-blue-crystal',
      asset: 'assets/objects/blue_crystal.png',
      x: 592,
      y: 322,
      scale: 0.46
    },
    {
      id: 'mushroom-basket',
      name: 'Mushroom Basket',
      requester: 'Mosscap twins',
      clue: 'A woven basket rests where the garden path bends inward.',
      key: 'object-mushroom-basket',
      asset: 'assets/objects/mushroom_basket.png',
      x: 458,
      y: 448,
      scale: 0.48
    },
    {
      id: 'moon-coin',
      name: 'Moon Coin',
      requester: 'Lantern keeper',
      clue: 'A crescent coin glints low on the sunlit stepping stones.',
      key: 'object-moon-coin',
      asset: 'assets/objects/moon_coin.png',
      x: 614,
      y: 610,
      scale: 0.46
    },
    {
      id: 'lost-teacup',
      name: 'Lost Teacup',
      requester: 'Grandma Fern',
      clue: 'A teacup sits almost too neatly beside the garden pot.',
      key: 'object-lost-teacup',
      asset: 'assets/objects/lost_teacup.png',
      x: 308,
      y: 646,
      scale: 0.5
    },
    {
      id: 'wizard-hat',
      name: 'Wizard Hat',
      requester: 'Apprentice Nix',
      clue: 'A folded hat hides near packages outside the round door.',
      key: 'object-wizard-hat',
      asset: 'assets/objects/wizard_hat.png',
      x: 836,
      y: 388,
      scale: 0.48
    },
    {
      id: 'glowing-feather',
      name: 'Glowing Feather',
      requester: 'Sleepy songbird',
      clue: 'A pale feather caught on the flowers near the center path.',
      key: 'object-glowing-feather',
      asset: 'assets/objects/glowing_feather.png',
      x: 528,
      y: 510,
      scale: 0.44
    },
    {
      id: 'frog-statue',
      name: 'Frog Statue',
      requester: 'Pond courier',
      clue: 'A tiny frog statue watches from the stones by the walkway.',
      key: 'object-frog-statue',
      asset: 'assets/objects/frog_statue.png',
      x: 690,
      y: 560,
      scale: 0.46
    },
    {
      id: 'flower-button',
      name: 'Flower Button',
      requester: 'Tailor Bee',
      clue: 'A flower-shaped button blends into petals near the right garden.',
      key: 'object-flower-button',
      asset: 'assets/objects/flower_button.png',
      x: 898,
      y: 522,
      scale: 0.44
    }
  ],
  optionalObjectives: [],
  jujus: [
    {
      id: 'juju-mailbox',
      key: 'juju-mail-mailbox',
      asset: 'assets/objects/magical_mailbox.png',
      x: 120,
      y: 540,
      scale: 0.22,
      wobble: true,
      puzzleClue: 'Where letters nest — look for purple wood, not the path.',
      linkedObjectId: 'magical-mailbox'
    },
    {
      id: 'juju-crystal',
      key: 'juju-mail-crystal',
      asset: 'assets/objects/blue_crystal.png',
      x: 1020,
      y: 280,
      scale: 0.2,
      wobble: true,
      puzzleClue: 'Sky-colored glass loves the highest blooms.',
      linkedObjectId: 'blue-crystal'
    },
    {
      id: 'juju-key',
      key: 'juju-mail-key',
      asset: 'assets/objects/golden_key.png',
      x: 750,
      y: 360,
      scale: 0.18,
      wobble: true,
      puzzleClue: 'Gold waits on the parcel table near the cottage door.',
      linkedObjectId: 'golden-key'
    }
  ],
  bonusEnvelopes: [
    {
      id: 'left-fence-letter',
      x: 305,
      y: 562,
      clue: 'Fence letter'
    },
    {
      id: 'path-postcard',
      x: 502,
      y: 478,
      clue: 'Path postcard'
    },
    {
      id: 'cottage-note',
      x: 796,
      y: 292,
      clue: 'Cottage note'
    }
  ],
  sceneProps: [
    { id: 'prop-birdhouse', x: 702, y: 422, w: 56, h: 48, label: 'Something chirps inside the tiny post house.', sfx: 'clickSfx' },
    { id: 'prop-lantern', x: 142, y: 222, w: 48, h: 48, label: 'The lantern gives a sleepy golden blink.', sfx: 'clickSfx' },
    { id: 'prop-parcel', x: 870, y: 454, w: 64, h: 48, label: 'A parcel rustles, then settles down.', sfx: 'clickSfx' },
    { id: 'prop-flowers', x: 1062, y: 616, w: 56, h: 40, label: 'Blue flowers sparkle with garden gossip.', sfx: 'clickSfx' }
  ],
  interactives: [],
  subScenes: {
    main: {}
  }
};
