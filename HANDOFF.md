# Whimsy Hollow Handoff

## Current Status

Whimsy Hollow vertical slice is implemented on branch `codex/whimsy-hollow-vertical-slice`.

Repo is a Vite + Phaser 3 browser game with:
- Main menu
- One playable hidden-object scene: `Whimsy Hollow Mail Garden`
- 10 hidden objects loaded from `public/assets/objects/`
- Background loaded from `public/assets/backgrounds/mail_garden.png`
- Checklist UI, found count, sparkle feedback, found sound, hint cooldown, win screen
- Local progress save at `whimsy-hollow:mail-garden`
- Imported generated art from Downloads:
  - `public/assets/backgrounds/mail_garden.png` is normalized to 1280x720.
  - `public/assets/objects/*.png` are normalized to 128x128 RGBA sprites.
- Placeholder generator remains at `scripts/generate-placeholders.mjs` for reproducible fallback art.

GitHub repo: `sonnymay/whimsy-hollow`

## Key Files

- `src/main.js`: Phaser game config and scene registration
- `src/scenes/MenuScene.js`: title screen and Start button
- `src/scenes/GameScene.js`: playable hidden-object scene, HUD, clicks, hint, save
- `src/scenes/WinScene.js`: completion screen and replay/menu actions
- `src/data/levels.js`: level metadata and object placements
- `scripts/generate-placeholders.mjs`: deterministic PNG/WAV placeholder asset generator

## Local Commands

This machine currently has `node` available but no global `npm`.

I bootstrapped npm into `/tmp/codex-npm` and official Node into `/tmp/codex-node` for verification:

```bash
PATH=/tmp/codex-node/bin:$PATH /tmp/codex-node/bin/node /tmp/codex-npm/bin/npm-cli.js install
PATH=/tmp/codex-node/bin:$PATH /tmp/codex-node/bin/node /tmp/codex-npm/bin/npm-cli.js run build
PATH=/tmp/codex-node/bin:$PATH /tmp/codex-node/bin/node /tmp/codex-npm/bin/npm-cli.js run dev -- --port 5173
```

On a normal developer machine, use:

```bash
npm install
npm run build
npm run dev
```

## Verification Notes

- `npm install` completed with 0 vulnerabilities using temporary npm.
- First build attempt failed because Codex app Node could not load Rollup native addon under macOS hardened runtime.
- Build passed after using official Node from `/tmp/codex-node`.
- Dev server is running at `http://127.0.0.1:5173/`.
- Browser visual check confirmed menu renders.
- Standalone Chrome playtest confirmed:
  - Start enters gameplay scene.
  - Clicking Golden Key updates HUD to `1/10`.
  - Local save writes `["golden-key"]` to `whimsy-hollow:mail-garden`.

## Next Steps

1. Tune object placement/scale against final background so targets feel hidden, not stamped on top.
2. Add foreground occlusion/clutter layer for stronger camouflage.
3. Verify full 10-object completion, win screen, hint cooldown, refresh persistence, and replay reset.
