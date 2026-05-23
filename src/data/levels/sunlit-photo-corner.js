export const sunlitPhotoCorner = {
  id: 'sunlit-photo-corner',
  title: 'Sunlit Photo Corner',
  saveKey: 'whimsy-hollow:sunlit-photo-corner',
  bonusSaveKey: 'whimsy-hollow:sunlit-photo-corner:bonus',
  bonusLabel: 'Stars',
  bonusFoundText: 'Star!',
  background: {
    key: 'sunlitPhotoCornerBackground',
    path: 'assets/backgrounds/sunlit_photo_corner.webp'
  },
  objects: [
    {
      id: 'vintage-camera',
      name: 'Vintage Camera',
      requester: 'Nora Snapshot',
      clue: 'A vintage camera waits near the memory desk.',
      key: 'object-sunlit-photo-corner-vintage-camera',
      asset: 'assets/objects/sunlit_photo_corner_vintage_camera.png',
      x: 925,
      y: 285,
      scale: 0.2
    },
    {
      id: 'brass-lens-cap',
      name: 'Lens Cap',
      requester: 'Nora Snapshot',
      clue: 'A brass lens cap rests by the right shelf keepsakes.',
      key: 'object-sunlit-photo-corner-brass-lens-cap',
      asset: 'assets/objects/sunlit_photo_corner_brass_lens_cap.png',
      x: 1110,
      y: 395,
      scale: 0.22
    },
    {
      id: 'small-photo-album',
      name: 'Photo Album',
      requester: 'Nora Snapshot',
      clue: 'A small photo album is open on the wooden desk.',
      key: 'object-sunlit-photo-corner-photo-album',
      asset: 'assets/objects/sunlit_photo_corner_photo_album.png',
      x: 620,
      y: 390,
      scale: 0.22
    },
    {
      id: 'wooden-picture-frame',
      name: 'Picture Frame',
      requester: 'Nora Snapshot',
      clue: 'A wooden picture frame leans under the window flowers.',
      key: 'object-sunlit-photo-corner-picture-frame',
      asset: 'assets/objects/sunlit_photo_corner_picture_frame.png',
      x: 450,
      y: 365,
      scale: 0.22
    },
    {
      id: 'camera-film-roll',
      name: 'Film Roll',
      requester: 'Nora Snapshot',
      clue: 'A little film roll hides near the lower photo basket.',
      key: 'object-sunlit-photo-corner-film-roll',
      asset: 'assets/objects/sunlit_photo_corner_film_roll.png',
      x: 300,
      y: 575,
      scale: 0.22
    },
    {
      id: 'black-white-snapshot',
      name: 'Snapshot',
      requester: 'Nora Snapshot',
      clue: 'A black-and-white snapshot lies beside the tea cup.',
      key: 'object-sunlit-photo-corner-snapshot',
      asset: 'assets/objects/sunlit_photo_corner_snapshot.png',
      x: 785,
      y: 450,
      scale: 0.22
    },
    {
      id: 'tiny-tripod',
      name: 'Tiny Tripod',
      requester: 'Nora Snapshot',
      clue: 'A tiny tripod is tucked beside the big camera legs.',
      key: 'object-sunlit-photo-corner-tiny-tripod',
      asset: 'assets/objects/sunlit_photo_corner_tiny_tripod.png',
      x: 1035,
      y: 590,
      scale: 0.22
    },
    {
      id: 'blue-ribbon-spool',
      name: 'Ribbon Spool',
      requester: 'Nora Snapshot',
      clue: 'A blue ribbon spool rests near the desk cloth.',
      key: 'object-sunlit-photo-corner-blue-ribbon-spool',
      asset: 'assets/objects/sunlit_photo_corner_blue_ribbon_spool.png',
      x: 540,
      y: 485,
      scale: 0.22
    },
    {
      id: 'dried-flower-sprig',
      name: 'Flower Sprig',
      requester: 'Nora Snapshot',
      clue: 'A dried flower sprig is pinned near the photo board.',
      key: 'object-sunlit-photo-corner-dried-flower-sprig',
      asset: 'assets/objects/sunlit_photo_corner_dried_flower_sprig.png',
      x: 760,
      y: 275,
      scale: 0.22
    },
    {
      id: 'keepsake-envelope',
      name: 'Keepsake Envelope',
      requester: 'Nora Snapshot',
      clue: 'A keepsake envelope sits low by the photo basket.',
      key: 'object-sunlit-photo-corner-keepsake-envelope',
      asset: 'assets/objects/sunlit_photo_corner_keepsake_envelope.png',
      x: 360,
      y: 620,
      scale: 0.22
    }
  ],
  bonusEnvelopes: [
    {
      id: 'golden-photo-star-1',
      name: 'Golden Photo Star',
      key: 'bonus-sunlit-photo-corner-star-1',
      asset: 'assets/bonus/sunlit_photo_corner_golden_photo_star_01.png',
      x: 260,
      y: 160,
      scale: 0.14
    },
    {
      id: 'golden-photo-star-2',
      name: 'Golden Photo Star',
      key: 'bonus-sunlit-photo-corner-star-2',
      asset: 'assets/bonus/sunlit_photo_corner_golden_photo_star_02.png',
      x: 720,
      y: 180,
      scale: 0.14
    },
    {
      id: 'golden-photo-star-3',
      name: 'Golden Photo Star',
      key: 'bonus-sunlit-photo-corner-star-3',
      asset: 'assets/bonus/sunlit_photo_corner_golden_photo_star_03.png',
      x: 1125,
      y: 175,
      scale: 0.14
    }
  ],
  surprises: [
    {
      id: 'photo-corner-camera-click',
      x: 930,
      y: 285,
      label: 'Click!'
    },
    {
      id: 'photo-corner-album-rustle',
      x: 635,
      y: 400,
      label: 'Rustle!'
    },
    {
      id: 'photo-corner-lamp-glow',
      x: 670,
      y: 300,
      label: 'Glow!'
    }
  ],
  previousLevelId: 'cozy-bath-nook'
};
