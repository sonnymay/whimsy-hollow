# Whimsy Hollow Handoff

## Current Status

Whimsy Hollow vertical slice is implemented on branch `codex/whimsy-hollow-vertical-slice`.

Repo is a Vite + Phaser 3 browser game with:
- Main menu
- One playable hidden-object scene: `Whimsy Hollow Mail Garden`
- 10 hidden objects loaded from `public/assets/objects/`
- Background loaded from `public/assets/backgrounds/mail_garden.png`
- Scene-backed main menu, low-chrome HUD, image-led on-demand request board, restart button, optional bonus notes, playful scene click reactions, found count, sparkle feedback, found toast, found sound, hint cooldown, win screen
- Local progress save at `whimsy-hollow:mail-garden`
- Imported generated art from Downloads:
  - `public/assets/backgrounds/mail_garden.png` is normalized to 1280x720.
  - `public/assets/objects/*.png` are normalized to 128x128 RGBA sprites.
- Placeholder generator remains at `scripts/generate-placeholders.mjs` for reproducible fallback art.
- First visual/gameplay polish pass aimed at a premium cozy hidden-object feel: painterly scene first, reduced flat UI, smaller hidden objects, no permanent right-side checklist blocking the art, story-flavored lost-item requests, optional note collection, and clickable scene surprises.
- Latest simplicity pass keeps reading low: the request board now shows target item pictures instead of long clues, the helper hides while the board is open, and the menu has a `Daily 3` quick-case entry.
- Accessibility/cuteness direction: design for a 7-year-old and older players first. Prefer picture-led controls and short plain labels like `Play`, `Pictures`, `Help`, `Again`, `Found`, and `Home`; avoid long clue text during normal play.
- 7-year-old playtest pass applied:
  - `Play` and `Quick 3` now clear old save progress first, so a new game starts at `0/10` or `0/3`.
  - Target sprites are larger and nudged into more readable spots so they better match their picture cards.
  - The old `1/3` mystery counter is now labeled as `Notes 0/3`.
  - The picture list is now a left-side tray instead of a bottom popup covering the middle of the scene.
  - Wrong taps now give gentle `Try again` feedback and small blue sparkles.
  - Found rewards now use louder chime volume plus more stars and floating hearts.
- Cute/personality pass applied:
  - Gameplay background now has a soft warm wash to reduce visual clutter.
  - Hidden objects now have subtle pulsing glow halos so they pop out without removing the search.
  - Top HUD buttons are brighter pill-style buttons instead of rigid tan boxes.
  - Menu, HUD, win screen, and sticker book use a friendlier rounded font stack.
  - Bottom-left helper is now a drawn chubby bird mascot instead of the placeholder smiley.
  - `Help` now makes the bird hop toward the target and leave little paw/sparkle hints.
  - `My Finds` is now a `Sticker Book` with found objects presented as collectible stickers.
- Title-screen simplification applied:
  - First page now shows only one primary button: `Play`.
  - `Quick 3` and `My Finds` were removed from the title screen to reduce decision friction for kids and older players.
  - The always-on object glow was removed; target glows now appear only during `Help`, so objects are not too easy to find.
- Mascot asset pass applied:
  - Imported generated mascot from `/Users/santipapmay/Downloads/mail_bird_mascot.png`.
  - Added it at `public/assets/characters/mail_bird_mascot.png`.
  - `MenuScene` and `GameScene` now load and display the PNG mascot instead of the drawn placeholder shapes.
  - The downloaded mascot had a checkerboard background baked into an RGB PNG. It was cleaned into a cropped transparent RGBA PNG at `public/assets/characters/mail_bird_mascot.png`; the original is preserved as `public/assets/characters/mail_bird_mascot.original.png`.
  - Title-screen speech bubble was moved away from the bird and redesigned as a cleaner rounded speech bubble with soft shadow, pink border, and no awkward floating triangle/cloud shapes.
- Flat-cartoon art unification pass applied:
  - Replaced the realistic imported `mail_garden.png` with a generated flat 2D cartoon garden from `scripts/generate-placeholders.mjs`.
  - Regenerated all 10 object sprites from the same flat-color procedural style, so objects, mascot, UI, and background now belong to the same visual family.
  - Updated the generator to use brighter pastel colors, fewer flower/details, thicker shape outlines, and no texture/noise pass.
  - Replaced dark debug-like gameplay counters with pastel chunky status chips for `Find 10`, progress, and `Notes`.

GitHub repo: `sonnymay/whimsy-hollow`

## Key Files

- `src/main.js`: Phaser game config and scene registration
- `src/scenes/MenuScene.js`: title screen and Start button
- `src/scenes/GameScene.js`: playable hidden-object scene, HUD, clicks, hint, save
- `src/scenes/WinScene.js`: completion screen and replay/menu actions
- `src/scenes/DeskScene.js`: Lost Mail Desk reward/home-base scene showing recovered objects and secret notes
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
- Browser visual check confirmed the revised menu uses the painted Mail Garden scene and no longer looks like a flat placeholder screen.
- Browser visual check confirmed the gameplay HUD is lighter, object positions no longer sit under the HUD, and the current scene reads closer to a cozy hidden-object game.
- Browser visual check confirmed the right-side checklist was removed. Normal gameplay now uses top chips for objective/count/List/Hint/Menu; the checklist appears only when `List` is clicked.
- Browser visual check confirmed the request-card overlay is readable after wrapping clues into two columns.
- Build passed after adding request clues, optional bonus notes, scene surprise hotspots, and bonus-count win text.
- Browser visual check confirmed the Lost Mail Desk scene is reachable from the menu and displays recovered keepsakes plus pinned secret notes.
- Build passed after wiring `DeskScene` into the scene registry and win/menu navigation.
- Build passed after the visual-polish changes.
- Build passed after adding image request cards, the in-game Restart button, the helper bubble, and the `Daily 3` menu option.
- Build passed after the low-reading pass that simplified menu/HUD/win labels, made request-card images larger, changed hints to visual `Look!` feedback, and shortened found/bonus messages.
- Build passed after the 7-year-old playtest fixes for fresh-start Play, clearer Notes label, side picture tray, bigger target sprites, wrong-tap feedback, and stronger found sparkle/heart rewards.
- Build passed after the cute/personality pass for softer background treatment, item glow halos, chunky colorful buttons, friendlier typography, bird helper, pet-guided Help, and sticker-book reward screen.
- Build passed after simplifying the title screen to one `Play` button and changing object glow to Help-only.
- Build passed after importing and wiring `mail_bird_mascot.png`.
- Build passed after cleaning the mascot transparency.
- Build passed after making the title-screen speech bubble cuter and moving it off the mascot.
- Build passed after replacing the ugly cloud/triangle speech bubble with the cleaner rounded bubble.
- Build passed after the flat-cartoon art unification pass and pastel status-chip HUD update.
- Browser visual check confirmed:
  - Menu shows `Play`, `Quick 3`, and `My Finds`.
  - Gameplay HUD shows `Pictures`, `Help`, `Again`, `Found`, and `Home` without the old right-side panel.
  - `Requests` opens a picture-led board with all 10 target images and very short names.
  - The helper bubble hides while the request board is open, so it does not cover the cards.
  - `Restart` resets progress back to `0/10 jobs` and `0/3 notes`.
- Standalone Chrome playtest confirmed:
  - Start enters gameplay scene.
  - Clicking Golden Key updates HUD to `1/10`.
  - Local save writes `["golden-key"]` to `whimsy-hollow:mail-garden`.
- Remaining art risk: the new flat-cartoon art is coherent and kid-friendly, but still procedurally generated. The next quality leap is hand-authoring or AI-generating a polished flat 2D Mail Garden with the same simplified shapes, thick outlines, and reserved UI/title spaces.

## Next Steps

1. Do a final flat-cartoon art pass:
   - Replace procedural generated art with polished flat 2D line-art assets.
   - Keep the same 1280x720 layout and same object IDs/paths.
   - Preserve clear empty zones for UI and one-button title screen.
2. Expand addictiveness loop:
   - Add a few optional side requests per level.
   - Add more harmless clickable reactions to background details.
3. Improve Lost Mail Desk with final painted background art and small unlock flourishes as objects arrive.
4. Re-check the on-demand request overlay after final art placement; keep it temporary and avoid covering active targets during normal play.
5. Add foreground occlusion/clutter layer for stronger camouflage.
6. Verify full 10-object completion, win screen, hint cooldown, refresh persistence, bonus-note persistence, desk persistence, and replay reset.
