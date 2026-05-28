# Whimsy Hollow

> A cozy hidden-object game for tired adults and kids. No timer. Just tiny treasures.

![version](https://img.shields.io/badge/version-1.0.0-c9a96e) ![platforms](https://img.shields.io/badge/platforms-Windows%20%7C%20macOS%20%7C%20Linux-7eb58a)

Whimsy Hollow is a hand-painted hidden-object game built in [Phaser 3](https://phaser.io) and packaged as a desktop app with [Tauri](https://tauri.app). Search 59 cozy scenes, solve 5 story cases, find hidden spirits, and decorate your office between visits.

## Features

- **No timer, no fail state.** Tap at your own pace.
- **5 story cases** with sub-scenes, riddles, spirits, and optional bonus objectives.
- **54 additional cozy places** to explore — sun-warmed sunrooms, lantern conservatories, sunflower pressing tables, and more.
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

## Steam release notes

- Built and tested on macOS, Windows, and Linux via Tauri 2.
- Window: 1280×720 default, 960×540 minimum, resizable, F11 toggles fullscreen.
- Single player. Offline. No telemetry. No microtransactions.
- ESRB Everyone / PEGI 3.

See [STEAM-STORE.md](./STEAM-STORE.md) for capsule sizes, screenshot list, and store copy.
See [GAMEPLAY-SPEC.md](./GAMEPLAY-SPEC.md) for the hero-level data contract.

## License

Copyright (c) 2026 Whimsy Hollow. All rights reserved.
