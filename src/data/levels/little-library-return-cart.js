export const littleLibraryReturnCart = {
  id: 'little-library-return-cart',
  title: 'Little Library Return Cart',
  saveKey: 'whimsy-hollow:little-library-return-cart',
  bonusSaveKey: 'whimsy-hollow:little-library-return-cart:bonus',
  bonusLabel: 'Golden Bookmarks',
  bonusFoundText: 'Golden bookmark!',
  background: {
    key: 'littleLibraryReturnCartBackground',
    path: 'assets/backgrounds/little_library_return_cart.webp'
  },
  objects: [
    {
      id: 'floral-bookmark',
      name: 'Floral Bookmark',
      requester: 'Mabel Page',
      clue: 'A floral bookmark hangs among the ribbons on the book cart.',
      key: 'object-little-library-return-cart-floral-bookmark',
      asset: 'assets/objects/little_library_return_cart_floral_bookmark.png',
      x: 650,
      y: 345,
      scale: 0.17
    },
    {
      id: 'brass-service-bell',
      name: 'Brass Bell',
      requester: 'Mabel Page',
      clue: 'A little brass bell waits on the upper shelf near the curtains.',
      key: 'object-little-library-return-cart-brass-service-bell',
      asset: 'assets/objects/little_library_return_cart_brass_service_bell.png',
      x: 565,
      y: 210,
      scale: 0.18
    },
    {
      id: 'wooden-return-stamp',
      name: 'Return Stamp',
      requester: 'Mabel Page',
      clue: 'A wooden return stamp rests beside the return box.',
      key: 'object-little-library-return-cart-wooden-return-stamp',
      asset: 'assets/objects/little_library_return_cart_wooden_return_stamp.png',
      x: 375,
      y: 365,
      scale: 0.17
    },
    {
      id: 'library-card',
      name: 'Library Card',
      requester: 'Mabel Page',
      clue: 'A cream library card is tucked into the lower cart pocket.',
      key: 'object-little-library-return-cart-library-card',
      asset: 'assets/objects/little_library_return_cart_library_card.png',
      x: 755,
      y: 520,
      scale: 0.17
    },
    {
      id: 'blue-pocket-notebook',
      name: 'Pocket Notebook',
      requester: 'Mabel Page',
      clue: 'A blue pocket notebook hides in the right basket of books.',
      key: 'object-little-library-return-cart-blue-pocket-notebook',
      asset: 'assets/objects/little_library_return_cart_blue_pocket_notebook.png',
      x: 1110,
      y: 620,
      scale: 0.17
    },
    {
      id: 'reading-glasses',
      name: 'Reading Glasses',
      requester: 'Mabel Page',
      clue: 'Round reading glasses shine near the left book basket.',
      key: 'object-little-library-return-cart-reading-glasses',
      asset: 'assets/objects/little_library_return_cart_reading_glasses.png',
      x: 245,
      y: 555,
      scale: 0.18
    },
    {
      id: 'woven-book-basket',
      name: 'Book Basket',
      requester: 'Mabel Page',
      clue: 'A woven book basket sits low by the cozy reading cushion.',
      key: 'object-little-library-return-cart-woven-book-basket',
      asset: 'assets/objects/little_library_return_cart_woven_book_basket.png',
      x: 1015,
      y: 655,
      scale: 0.18
    },
    {
      id: 'potted-fern-sprig',
      name: 'Fern Sprig',
      requester: 'Mabel Page',
      clue: 'A potted fern sprig peeks from the high wooden shelf.',
      key: 'object-little-library-return-cart-potted-fern-sprig',
      asset: 'assets/objects/little_library_return_cart_potted_fern_sprig.png',
      x: 470,
      y: 165,
      scale: 0.17
    },
    {
      id: 'ribbon-pencil',
      name: 'Ribbon Pencil',
      requester: 'Mabel Page',
      clue: 'A striped pencil with a ribbon leans near the cart handle.',
      key: 'object-little-library-return-cart-ribbon-pencil',
      asset: 'assets/objects/little_library_return_cart_ribbon_pencil.png',
      x: 840,
      y: 420,
      scale: 0.17
    },
    {
      id: 'house-bookend',
      name: 'House Bookend',
      requester: 'Mabel Page',
      clue: 'A tiny house-shaped bookend sits on the middle shelf.',
      key: 'object-little-library-return-cart-house-bookend',
      asset: 'assets/objects/little_library_return_cart_house_bookend.png',
      x: 505,
      y: 390,
      scale: 0.17
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-bookmark-1',
      name: 'Golden Bookmark',
      key: 'bonus-little-library-return-cart-bookmark-1',
      asset: 'assets/bonus/little_library_return_cart_golden_bookmark_01.png',
      x: 225,
      y: 175,
      scale: 0.12
    },
    {
      id: 'golden-bookmark-2',
      name: 'Golden Bookmark',
      key: 'bonus-little-library-return-cart-bookmark-2',
      asset: 'assets/bonus/little_library_return_cart_golden_bookmark_02.png',
      x: 665,
      y: 180,
      scale: 0.12
    },
    {
      id: 'golden-bookmark-3',
      name: 'Golden Bookmark',
      key: 'bonus-little-library-return-cart-bookmark-3',
      asset: 'assets/bonus/little_library_return_cart_golden_bookmark_03.png',
      x: 1060,
      y: 140,
      scale: 0.12
    }
  ],
  surprises: [
    {
      id: 'little-library-bell-ding',
      x: 565,
      y: 210,
      label: 'Ding!'
    },
    {
      id: 'little-library-page-flutter',
      x: 760,
      y: 360,
      label: 'Flutter!'
    },
    {
      id: 'little-library-window-sunbeam',
      x: 980,
      y: 180,
      label: 'Warm!'
    }
  ],
  previousLevelId: 'cranberry-garland-hearth'
};
