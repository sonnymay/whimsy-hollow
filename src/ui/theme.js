export const theme = {
  font: '"Arial Rounded MT Bold", "Trebuchet MS", "Comic Sans MS", Arial, sans-serif',

  color: {
    cream: 0xfff4d6,
    creamHover: 0xfff9e8,
    creamSoft: 0xfaeac0,
    text: 0x4a3a26,
    textSoft: 0x7a6750,
    outline: 0x6a4323,
    shadow: 0x2b1c12,

    leaf: 0xbdf3d3,
    sky: 0xc7e9ff,
    blossom: 0xffd1dc,
    sun: 0xffe7a3,
    muted: 0xcabfa8,

    // New: brand accents — use sparingly for primary CTAs / found feedback
    primary: 0xf2b35c,
    primaryHover: 0xffc878,
    primaryText: 0xfff7e3,
    success: 0x7eb58a
  },

  size: {
    hudButton: { w: 96, h: 48, font: 18, radius: 24 },
    hudPill: { w: 168, h: 48, font: 20, radius: 24 },
    menuButton: { w: 260, h: 76, font: 30, radius: 38 },
    smallButton: { w: 140, h: 56, font: 22, radius: 28 }
  },

  // Unified radii so every card/panel feels like the same family
  radius: {
    pill: 24,
    card: 22,
    cardLarge: 28,
    chip: 14
  },

  // Drop-shadow params shared by all cards/panels
  shadow: {
    color: 0x2b1c12,
    alpha: 0.22,
    offsetY: 6
  },

  hud: {
    y: 44,
    leftX: 110,
    margin: 18,
    gap: 14
  }
};

export const hex = (n) => `#${n.toString(16).padStart(6, '0')}`;
