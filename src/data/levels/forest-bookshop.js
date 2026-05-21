export const forestBookshop = {
  id: 'forest-bookshop',
  title: 'Forest Bookshop',
  saveKey: 'whimsy-hollow:forest-bookshop',
  bonusSaveKey: 'whimsy-hollow:forest-bookshop:bonus',
  bonusLabel: 'Mice',
  bonusFoundText: 'Mouse!',
  background: {
    key: 'forestBookshopBackground',
    path: 'assets/backgrounds/forest_bookshop.png'
  },
  objects: [
    {
      id: 'bookshop-inkwell',
      name: 'Inkwell',
      requester: 'Woodland Librarian',
      clue: 'An inkwell rests near the glowing lantern.',
      key: 'object-bookshop-inkwell',
      asset: 'assets/objects/bookshop_inkwell.png',
      x: 320,
      y: 520,
      scale: 0.06
    },
    {
      id: 'bookshop-magnifying-glass',
      name: 'Magnifying Glass',
      requester: 'Woodland Librarian',
      clue: 'A magnifying glass lies on a low shelf.',
      key: 'object-bookshop-magnifying-glass',
      asset: 'assets/objects/bookshop_magnifying_glass.png',
      x: 550,
      y: 410,
      scale: 0.06
    },
    {
      id: 'bookshop-old-key',
      name: 'Old Key',
      requester: 'Woodland Librarian',
      clue: 'An old key is tucked behind a thick book.',
      key: 'object-bookshop-old-key',
      asset: 'assets/objects/bookshop_old_key.png',
      x: 820,
      y: 220,
      scale: 0.06
    },
    {
      id: 'bookshop-reading-glasses',
      name: 'Reading Glasses',
      requester: 'Woodland Librarian',
      clue: 'Reading glasses rest on the cozy armchair.',
      key: 'object-bookshop-reading-glasses',
      asset: 'assets/objects/bookshop_reading_glasses.png',
      x: 940,
      y: 480,
      scale: 0.06
    },
    {
      id: 'bookshop-scroll',
      name: 'Scroll',
      requester: 'Woodland Librarian',
      clue: 'A rolled scroll rests in a basket.',
      key: 'object-bookshop-scroll',
      asset: 'assets/objects/bookshop_scroll.png',
      x: 210,
      y: 600,
      scale: 0.07
    },
    {
      id: 'bookshop-quill',
      name: 'Quill',
      requester: 'Woodland Librarian',
      clue: 'A feather quill stands in a cup.',
      key: 'object-bookshop-quill',
      asset: 'assets/objects/bookshop_quill.png',
      x: 440,
      y: 310,
      scale: 0.06
    },
    {
      id: 'bookshop-hourglass',
      name: 'Hourglass',
      requester: 'Woodland Librarian',
      clue: 'An hourglass sits on the table edge.',
      key: 'object-bookshop-hourglass',
      asset: 'assets/objects/bookshop_hourglass.png',
      x: 710,
      y: 580,
      scale: 0.06
    },
    {
      id: 'bookshop-brass-bell',
      name: 'Brass Bell',
      requester: 'Woodland Librarian',
      clue: 'A tiny brass bell sits on a stack of papers.',
      key: 'object-bookshop-brass-bell',
      asset: 'assets/objects/bookshop_brass_bell.png',
      x: 1050,
      y: 390,
      scale: 0.06
    },
    {
      id: 'bookshop-bookmark',
      name: 'Bookmark',
      requester: 'Woodland Librarian',
      clue: 'A floral bookmark hangs from a shelf.',
      key: 'object-bookshop-bookmark',
      asset: 'assets/objects/bookshop_bookmark.png',
      x: 620,
      y: 190,
      scale: 0.06
    },
    {
      id: 'bookshop-stacked-books',
      name: 'Stacked Books',
      requester: 'Woodland Librarian',
      clue: 'Three colorful stacked books rest near the stool.',
      key: 'object-bookshop-stacked-books',
      asset: 'assets/objects/bookshop_stacked_books.png',
      x: 880,
      y: 620,
      scale: 0.07
    }
  ],
  bonusEnvelopes: [
    {
      id: 'bookshop-bonus-mouse-1',
      name: 'Woodland Mouse',
      clue: 'Mouse in the rafters',
      key: 'bonus-bookshop-mouse-1',
      asset: 'assets/bonus/bookshop_bonus_mouse_01.png',
      x: 490,
      y: 130,
      scale: 0.05
    },
    {
      id: 'bookshop-bonus-mouse-2',
      name: 'Woodland Mouse',
      clue: 'Mouse reading on the chair',
      key: 'bonus-bookshop-mouse-2',
      asset: 'assets/bonus/bookshop_bonus_mouse_02.png',
      x: 970,
      y: 530,
      scale: 0.05
    },
    {
      id: 'bookshop-bonus-mouse-3',
      name: 'Woodland Mouse',
      clue: 'Mouse hiding under the books',
      key: 'bonus-bookshop-mouse-3',
      asset: 'assets/bonus/bookshop_bonus_mouse_03.png',
      x: 280,
      y: 580,
      scale: 0.05
    }
  ],
  surprises: [
    {
      id: 'bookshop-lamp-glow',
      x: 320,
      y: 480,
      label: 'Warm!'
    },
    {
      id: 'bookshop-curtain-rustle',
      x: 1080,
      y: 220,
      label: 'Squeak!'
    }
  ],
  previousLevelId: 'twilight-tea-garden'
};
