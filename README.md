# Whimsy Hollow

> A cozy hidden-object game for tired adults and kids. No timer. Just tiny treasures.

![version](https://img.shields.io/badge/version-1.0.0-c9a96e) ![platforms](https://img.shields.io/badge/platforms-Windows%20%7C%20macOS%20%7C%20Linux-7eb58a)

Whimsy Hollow is a hand-painted hidden-object game built in [Phaser 3](https://phaser.io) and packaged as a desktop app with [Tauri](https://tauri.app). Search 59 cozy scenes, solve 5 story cases, find hidden spirits, and decorate your office between visits.

## Features

- **No timer, no fail state.** Tap at your own pace.
- **5 story cases** with sub-scenes, riddles, spirits, and optional bonus objectives.
- **54 additional cozy places** to explore — sun-warmed sunrooms, lantern conservatories, sunflower pressing tables, and more.
- **Collectible spirits** hidden throughout each scene
- **Office decoration system** — furnish and customize your space between sessions
- **Original hand-painted art** with cozy, warm aesthetics
- **Cross-platform desktop app** via Tauri (Windows, macOS, Linux)

## Tech Stack

- **Game Engine:** Phaser 3
- **Desktop Wrapper:** Tauri
- **Language:** JavaScript / TypeScript
- **Art:** Custom hand-painted assets

## Live Demo

[whimsy-hollow.vercel.app](https://whimsy-hollow.vercel.app)
- **Cozy Office hub** — earn furniture by completing cases and decorate your hideaway.
- **Accessibility built-in** — colorblind filters, high-contrast outlines, keyboard pointer, reduced motion.
- **3 save slots** — share the hollow with the whole household.

## Run from source

```bash
npm install
npm run dev          # browser dev build at http://127.0.0.1:5173
npm run build        # production build into dist/
npm run tauri:dev    # native desktop dev shell (requires Rust toolchain)
npm run tauri:build  # ship-ready desktop bundle
```

## Project layout

```
src/
  main.js                 # Phaser bootstrap + scene registry + error recovery
  scenes/                 # Loading, Menu, Browse, Campaign, Game, Win, Hub, Pause, Settings, Desk
  data/
    levels.js             # registry of all 59 levels
    levels/*.js           # one file per scene
    campaign.js           # 5 story cases linked to hero levels
    storage.js            # save slots, settings, progress
  game/HeroLevelController.js  # hero-level systems (jujus, optionals, sub-scenes)
  ui/                     # buttons, theme, backdrop
  audio/                  # music + sfx
public/assets/            # webp backgrounds, png objects, sounds, music
src-tauri/                # desktop shell config
```

## What This Code Shows

- **Phaser 3 scene graph** — 59 independent scenes registered and hot-switched with zero reload; each scene is a self-contained JS module with shared camera and audio bus
- **Campaign state machine** — hero-level controller tracks case completion, juju unlocks, optional objectives, and spirit collection across 5 nested story arcs
- **Save system** — 3 independent save slots using structured localStorage with migration guards for future schema changes
- **Tauri desktop packaging** — same codebase ships as a Vercel web build and a native Tauri 2 app for Windows / macOS / Linux; window size, fullscreen, and asset paths differ per target
- **Accessibility layer** — colorblind filters (deuteranopia / protanopia / tritanopia), high-contrast outlines, keyboard pointer support, and reduced-motion mode all wired to a single settings observer

---

## Steam release notes

Built and tested on macOS, Windows, and Linux via Tauri 2.
Window: 1280×720 default, 960×540 minimum, resizable, F11 toggles fullscreen.
Single player. Offline. No telemetry. No microtransactions.
ESRB Everyone / PEGI 3.

See STEAM-STORE.md for capsule sizes, screenshot list, and store copy. See GAMEPLAY-SPEC.md for the hero-level data contract.

---

## License

MIT © Sonny May
