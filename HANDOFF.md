# Whimsy Hollow Handoff

## Current Status

- **Code review bug-fix pass (2026-05-21)**:
  - **Sticker Book scroll fix.** `src/scenes/DeskScene.js` was completely rewritten to use a scrollable container with mouse-wheel + drag-scroll support and a scroll indicator thumb. Previously, with 14 levels × 96px sections = 1,344px of content in a 720px canvas, levels 9–14 were invisible off-screen. Now all content is inside a Phaser container with a geometry mask clipping it to the viewable area between the header and footer. The scroll state tracks `scrollY` clamped to `[0, maxScroll]`, and a small right-side track + thumb shows scroll position.
  - **Menu level-dots save-wipe fix.** `src/scenes/MenuScene.js` `createPlaceDots()` was clearing `localStorage` save data on every dot click — even for in-progress levels. Now save data is only wiped when replaying a completed level (`completed.has(level.id)`). In-progress levels resume where the player left off.
  - **GameScene dead code removal.** Removed ~100 lines of unreachable guide/mascot code from `src/scenes/GameScene.js`. The `createGuide()` method had an early `return` with the full original implementation below it as dead code. `sayGuide()` and `guideHopTo()` were also dead (null-checked `this.guide`/`this.guideText` which were never set). All three replaced with minimal no-op stubs so existing call sites don't need changes.
  - **WinScene dead code removal.** Removed the dead `createButton()` method (~25 lines) from `src/scenes/WinScene.js` — it was replaced by `createPillButton()` but never cleaned up.
  - **LoadingScene font consistency fix.** `src/scenes/LoadingScene.js` was hardcoding its own `UI_FONT` string instead of importing from `src/ui/theme.js`. Now imports `theme.font` so it stays consistent with all other scenes.
  - **Build verified.** `npm run build` passed. Vite still reports the known large-chunk warning (~947KB).

- **Forest Bookshop Level**: Created and integrated the 5th level (Magical hollow tree library theme) with a background image (`forest_bookshop.png`), 10 custom-themed transparent-PNG objects (e.g. inkwell, magnifying glass, hourglass, stacked books), and 3 bonus mice collectibles. Fully registered the scene in `src/data/levels.js`, mapped its soundtrack in `src/data/music.js`, and added a floating hourglass preview on the main menu.
- **Rich Scene Interactivity (Interactive Covers)**: Added support for coverings, drawers, and doors that hide specific target objects. Currently, Mail Garden features a beautiful wooden hatch (`public/assets/interactives/garden_hatch.png`) covering the `golden-key`. When clicked, it squashes/stretches and slides open via a bouncy `Back.easeOut` tween to reveal the hidden key. Hidden objects under covers start completely invisible and non-interactive until uncovered. The hint system (`Help`) programmatically opens closed covers to reveal hinted objects.
- **Tauri Native Application Wrapper**: Configured Tauri desktop application wrapping (window size `1280x720` in `tauri.conf.json`). Fullscreen toggles (`F11` key listener) check for `window.__TAURI_INTERNALS__` and dynamically import `@tauri-apps/api/window` to support native window resizing without breaking web-only builds.
- **Rust MSRV (1.82.0) Compatibility Pins**: Bypassed Cargo Edition 2024 requirements in transitive dependency updates by pinning compatible versions in `src-tauri/Cargo.toml`:
  - `indexmap = { version = "=2.6.0", features = ["serde"] }`
  - `idna_adapter = "=1.1.0"` (swaps ICU4X backend for unicode-rs)
  - `toml_parser = "=1.0.7+spec-1.1.0"`
  - `toml_writer = "=1.0.7+spec-1.1.0"`
  - `serde_spanned = "=1.0.4"`
  - `toml_datetime = "=0.7.3"`
  - `unicode-segmentation = "=1.12.0"`
- **Pause Menu Overlay & Settings Routing**: Implemented `PauseScene` registered in `src/main.js`. It freezes the gameplay and loops, showing a cozy rounded card overlay. The HUD Pause pill button and `ESC` trigger the menu. Back-routing from `SettingsScene` is handled via a `returnTo` payload passed during initialization so the player can return to the paused state.

Repo is a Vite + Phaser 3 browser game with:
- Main menu (featuring level selector dots and previews)
- Five playable hidden-object scenes: `Mail Garden`, `Busy Kitchen`, `Whimsy Living Room`, `Cozy Dream Bedroom`, and `Forest Bookshop`.
- 10 hidden objects loaded dynamically per scene from `public/assets/objects/`
- Backgrounds loaded dynamically per scene from `public/assets/backgrounds/`
- Scene-backed main menu, low-chrome HUD, image-led on-demand request board, restart button, optional bonus collectibles, playful scene click reactions, found count, sparkle feedback, found toast, found sound, hint cooldown, win screen
- Local progress save per level via unique save keys
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
- Rejected art direction:
  - Procedural flat-cartoon background/object swap looked worse.
  - User explicitly prefers the original beautiful painterly `mail_garden.png`.
  - Keep the painterly background and match new assets to that style instead of replacing it with flat procedural art.
  - The bad generated PNG swap was reverted; `scripts/generate-placeholders.mjs` was restored too.
  - Keep UI/mascot improvements, but avoid ugly flat placeholder art.
- Level 2 asset generation started:
  - Level 2 scene concept: busy magical restaurant kitchen, now labeled in data as `Busy Kitchen`.
  - Background target filename: `restaurant_kitchen.png`.
  - Downloads currently contains `/Users/santipapmay/Downloads/restaurant_kitchen.png`.
  - Generated object files found in Downloads:
    - `golden_soup_ladle.png`
    - `cherry_cupcake.png`
    - `tiny_copper_pot.png`
    - `star_cookie.png`
    - `blue_spice_jar.png`
    - `silver_fork.png`
    - `rolling_pin.png`
    - `tomato_basket.png`
    - `chef_hat.png`
    - `magic_recipe_card.png`
- Level 2 first implementation applied:
  - Copied `restaurant_kitchen.png` into `public/assets/backgrounds/restaurant_kitchen.png`.
  - Cleaned the baked checkerboard from the 10 kitchen object PNGs, cropped/resized them, and copied them into `public/assets/objects/`.
  - Added `restaurantKitchen` metadata in `src/data/levels.js` with 10 real objects, 3 bonus notes, and a few kitchen surprise hotspots.
  - Added shared level lookup helpers (`levels`, `getLevelById`, `getNextLevel`).
  - `GameScene`, `WinScene`, and `DeskScene` now use the active level instead of hard-coding Mail Garden save keys and assets.
  - Completing Level 1 now automatically starts Level 2. No extra `Next` tap is needed after Mail Garden.
  - Added `magic_recipe_card.png` as the 10th Busy Kitchen object. No placeholder art was used.
- Mail Garden completion fallback fixed:
  - User hit an `All Found!` screen with only `My Finds`, `Again`, and `Home`, so the automatic handoff was not reliable from every completion path.
  - `WinScene` now also detects a next scene and auto-starts Busy Kitchen after a short beat.
  - Old/stale dev servers on ports 5173 and 5174 were killed, then the current dev server was restarted on `http://127.0.0.1:5173/`.
- Scene completion tracking added:
  - Completed scene IDs are stored in localStorage at `whimsy-hollow:completed-scenes`.
  - Finishing a scene now calls `markSceneComplete(levelId)`.
  - The title menu uses the first unfinished place as the next `Play` target.
  - Menu copy stays low-reading: it shows the next place name and `Done x/2`.
  - If all places are done, the menu shows `All places found` and `Again`, then replays the last place without clearing the completed-scene record.
- Small menu/look polish added:
  - Menu background now matches the next unfinished place instead of always showing Mail Garden.
  - Removed the `Cute Search` eyebrow text and simplified subtitle/footer copy.
  - Bird mascot moved inward so the speech bubble no longer clips the left edge.
  - Busy Kitchen menu gets a small floating recipe-card preview beside `Play`.
  - Hidden object sprites now get subtle soft shadows so they sit better in the painterly scenes.
- Cute loading/transition scene added:
  - New `LoadingScene` uses the existing bird mascot, warm painterly colors, and short text like `Packing tiny treasures...`.
  - Opening a place from the menu and moving from Mail Garden to Busy Kitchen now route through `LoadingScene`.
  - No new loading artwork was required for this pass.
- HUD overlap fix:
  - User reported the top buttons covering the object they were looking for in Busy Kitchen.
  - Moved the `chef_hat` target down and slightly left, and reduced its scale so it sits below the top HUD instead of under `Home`.
- Living Room scene added:
  - Added `Whimsy Living Room` with id `whimsy-living-room`.
  - Background is `public/assets/backgrounds/scene_whimsy_livingroom_bg.png`.
  - Main objects copied into `public/assets/objects/`:
    - `obj_purple_teapot.png`
    - `obj_blue_teacup.png`
    - `obj_gold_spectacles.png`
    - `obj_tiny_candle.png`
    - `obj_cozy_book.png`
    - `obj_cozy_yarn_ball.png`
    - `obj_tiny_lantern.png`
    - `obj_moon_bookmark.png`
    - `obj_star_key.png`
    - `obj_tiny_pocket_watch.png`
  - Bonus mouse assets copied into `public/assets/bonus/`:
    - `bonus_sleepy_mouse_01.png`
    - `bonus_sleepy_mouse_02.png`
    - `bonus_sleepy_mouse_03.png`
  - Living Room uses `Mice 0/3`, `Mouse!`, 10 main hidden objects, 3 bonus sleepy mice, and short surprise hotspots.
- Places page and replay flow added:
  - Main menu now keeps one obvious `Play` button for the next unfinished place, plus a smaller `Places` button.
  - New `PlacesScene` shows all scenes as cards.
  - Completed scenes show gray/desaturated with `Found`, but remain clickable so they can be replayed.
  - `src/main.js` registers `PlacesScene`.
  - `src/scenes/MenuScene.js` no longer uses small scene chips on the title screen.
- Bonus completion gate fixed:
  - `GameScene` no longer jumps to the win screen immediately after the 10th main object if bonus collectibles remain.
  - After the main list is complete, the player stays in the scene and can keep finding mice/notes.
  - `Help` now sparkles a remaining bonus collectible when all main objects are already found.
  - Superseded by the later optional-bonus pass: main objects now unlock `Finished`; bonus collectibles can be found before moving on but are not required.
- Cozy Dream Bedroom level added:
  - Added `Cozy Dream Bedroom` with id `cozy-dream-bedroom`.
  - Background imported from Downloads to `public/assets/backgrounds/scene_cozy_dream_bedroom_bg.png`.
  - Main bedroom objects imported into `public/assets/objects/`:
    - `obj_sleepy_teddy_bear.png`
    - `obj_moon_pillow.png`
    - `obj_pink_slippers.png`
    - `obj_toy_star.png`
    - `obj_bedtime_book.png`
    - `obj_tiny_alarm_clock.png`
    - `obj_hair_ribbon.png`
    - `obj_soft_feather.png`
    - `obj_dream_crystal.png`
    - `obj_sleepy_cat.png`
  - Bonus moth assets imported into `public/assets/bonus/`:
    - `bonus_dream_moth_01.png`
    - `bonus_dream_moth_02.png`
    - `bonus_dream_moth_03.png`
  - Bedroom object and moth PNGs had baked checkerboard backgrounds, so those imported copies were cleaned to RGBA transparency without regenerating the art.
  - Bedroom uses `Moths 0/3`, `Moth!`, 10 short request-board names, 3 bonus dream moths, and short surprise hotspot text.
  - Code files changed for this pass: `src/data/levels.js`, `src/scenes/MenuScene.js`, `src/scenes/PlacesScene.js`, `src/scenes/GameScene.js`, and `src/scenes/WinScene.js`.
- Gameplay HUD/completion tweak:
  - `Pictures` is now `Find These` and uses a red button so it is easier to spot.
  - `Again` is now `Reset`.
  - Bonus collectibles are optional again: after all main hidden objects are found, a red `Finished` button appears.
  - Player can tap `Finished` to advance, or stay in the scene and keep finding bonus collectibles first.
  - Code changed for this pass: `src/scenes/GameScene.js`.
- Sticker Book + first-run tutorial + thumb script (2026-05-21):
  - **Global Sticker Book.** Rebuilt `src/scenes/DeskScene.js` from a per-scene "My Finds" into a cross-scene collection. Each level renders as a horizontal section: name + progress on the left, 10 small sticker plates on the right. Found objects show full color + green ✓ corner badge; unfound objects show a dim silhouette + "?" so the player can still see the silhouette of what they're hunting. Aggregate counter at top (`X of N stickers · Y/Z bonus`). Footer: `Back` (returns to last gameplay scene if entered from there, else Menu) + `Home`. Accessible from the title screen via a new `📒 Sticker Book` pill in the bottom-right corner of `MenuScene`.
  - **First-run tutorial.** New `runFirstRunTutorial` in `GameScene` fires once per device (gated by `whimsy-hollow:onboarded` localStorage key in `src/data/storage.js`) and only on `mail-garden`. Dims the scene with a soft non-interactive overlay, shows a cream speech bubble (`Tap the glowing item! · Find every cute treasure.`) near the first unfound object, draws a pulsing yellow ring around the target, offers a `Skip` link top-right. First pointer-down anywhere closes the tutorial.
  - **Thumbnail pipeline.** New `scripts/build-thumbs.mjs` resizes every painted background under `public/assets/backgrounds/` to 256×144 WebP in `public/assets/thumbs/`. Run via `npm run thumbs` after `npm install -D sharp`. Not yet wired into MenuScene — at 5 scenes the full backgrounds still load fine. Wire MenuScene's `loadImageOnce` and Sticker Book to prefer thumbs once scene count crosses ~10.
  - **Per-scene music swap path documented.** `src/data/music.js` currently points every level at `musicforgame.mp3`. To diversify per scene, drop new files into `public/assets/music/` (e.g. `mail_garden.ogg`, `kitchen.ogg`) and replace the `sharedMusic` reference for each level with `{ key: 'music-kitchen', path: 'assets/music/kitchen.ogg' }`. The crossfade engine in `src/audio/music.js` already does seamless transitions when track keys change.
  - **Save profiles — DEFERRED.** Three-slot profile system was planned but not implemented in this pass because it touches every existing localStorage key and would invalidate current save data without a migration. Next session: add `ACTIVE_PROFILE_KEY` + `withProfile(key)` helper to `src/data/storage.js`, prefix every level/found/bonus key, build a `ProfileScene` with three cards (last-played thumb + completed count) that runs before MenuScene. Provide a one-time auto-migration from un-prefixed keys to `profile-1:` so existing saves carry over.

- Big-five feature pass (2026-05-21):
  - **Music + ambient system.** New `src/audio/music.js` manages cross-scene music with crossfades. Per-level tracks declared in `src/data/music.js`. Storage keys for music on/off + music & ambient volume in `src/data/storage.js`. Missing audio files silently no-op (Phaser Loader treats 404 as no-asset), so the game still runs before any music is added.
    - Drop royalty-free loops at: `public/assets/music/menu.ogg`, `mail_garden.ogg`, `busy_kitchen.ogg`, `living_room.ogg`, `cozy_bedroom.ogg`, plus ambient layers `amb_birds.ogg`, `amb_kitchen.ogg`, `amb_fire.ogg`, `amb_night.ogg`. Sources: pixabay.com/music, freesound.org. Target: 96kbps OGG, < 1 MB each, seamless loops.
  - **Per-file levels.** `src/data/levels.js` (was 743 lines) is now a thin registry. Each scene lives in `src/data/levels/<id>.js` (`mail-garden.js`, `restaurant-kitchen.js`, `whimsy-living-room.js`, `cozy-dream-bedroom.js`). Adding a new scene = drop a new file, import + append in `levels.js`.
  - **Randomized object positions.** Each object can declare an optional `spawns: [{ x, y, scale }]` array of candidate positions; `GameScene.init()` picks one at scene start. Backward compatible — objects without `spawns` keep their fixed position. Adds replay variety without new art.
  - **Foreground occlusion layer.** Each level can declare an optional `foreground: 'assets/foregrounds/<id>.png'` (semi-transparent PNG/WebP). `GameScene` draws it at depth 8, above objects and below the HUD, so hidden items get real camouflage. Missing texture = no-op.
  - **Settings + About scene.** New `SettingsScene` reachable from the title's top-right ⚙ button. Toggles for Sounds (mute) and Music, sliders for Music volume and Ambient volume — all persisted. Includes a small About panel for the game. Cream rounded card matches the rest of the UI.
  - **Storage helpers added:** `loadMusicEnabled` / `saveMusicEnabled`, `loadMusicVolume` / `saveMusicVolume`, `loadAmbientVolume` / `saveAmbientVolume` in `src/data/storage.js`. Defaults: music on, music volume 0.45, ambient 0.25.
  - **Thumbnail pipeline deferred.** The 100-scene `MenuScene` preload bottleneck is documented in Architecture Notes but not yet implemented — needs `sharp` or `imagemagick` dependency. Future work: `scripts/build-thumbs.mjs` that resizes `public/assets/backgrounds/*` → `public/assets/thumbs/*.webp` at 256×144.

- Wide-window backdrop fix (2026-05-21):
  - On wider-than-16:9 windows, Phaser's `Scale.FIT` left dark side bars. Added a CSS `#backdrop` layer behind `#game` that holds the current scene's painted background, scaled to cover the full window, blurred (36px) and dimmed.
  - Each scene calls `setBackdrop(level.background.path)` in `create()` ([src/ui/backdrop.js](src/ui/backdrop.js)).
  - No image is cropped, no canvas is stretched, no hidden-object placements move. The bars now look like an out-of-focus extension of the painting — same trick June's Journey uses.
  - Files: [index.html](index.html), [src/styles.css](src/styles.css), [src/ui/backdrop.js](src/ui/backdrop.js), and `setBackdrop` calls in `MenuScene`, `GameScene`, `WinScene`.

- Architecture notes for 100s of scenes (added 2026-05-21):
  - **`MenuScene.preload()` currently loads every level's full background.** Must switch to per-level thumbnail PNGs (e.g., `public/assets/thumbs/<id>.webp` at 256×144) before adding many scenes.
  - **`src/data/levels.js` is one 743-line file.** Plan: split into `src/data/levels/<id>.js` with `src/data/levels/index.js` as a registry. New scene = new file.
  - **Single bundle ships all scenes** (~1.5 MB pre-gzip already). Use dynamic `import()` per level to let Vite code-split.
  - **Place dots row** stops working past ~6–8 dots. Plan a world/chapter picker before then.
  - **Add a startup schema check** that every level has the required keys (`saveKey`, 10 `objects`, `bonusEnvelopes`, etc.) so typos surface at boot, not at scene-open.
  - **Asset budget per scene** target ~500 KB–1 MB (WebP background + 10 small object PNGs + 3 bonus). 100 × 1 MB = ~100 MB total — manageable.
  - **Thumbnail generator script** under `scripts/` to batch-resize backgrounds when new scenes ship.

- Chill + clean UI overhaul (2026-05-21):
  - New shared UI kit at `src/ui/theme.js` (palette, font, sizes) and `src/ui/Button.js` (`createPillButton`, `createStatusPill`). All scenes now share one cream rounded-pill button family — consistent shape, radius, hover, click bounce.
  - `GameScene` HUD reorganized from 8 noisy elements in 5 colors → 4 calm elements in one family:
    - Left: single `0 / 10` count pill (removed redundant `Find 10` chip and the always-visible bonus chip).
    - Right cluster: 4 same-size cream buttons — Mute (🔊/🔇), List, Help, Home.
    - `Reset` and `My Finds` moved into the List panel as small text links instead of always-visible HUD buttons.
    - Bonus counter (`Letters/Mice/Moths/Notes 0/3`) moved into the List panel as a small label.
    - `Finished` button recolored from red → leaf green (still a pill), positioned bottom-center, only visible when main objects are complete.
    - List panel redesigned: cream/warm rounded panel instead of dark green.
  - Less pressure / more chill:
    - Removed the `+1` score pop on found objects.
    - Sparkles per find: 22 → 10. Hearts: 8 → 3.
    - Found chime volume: 0.7 → 0.45.
    - Help cooldown: 60s → 30s. Cooldown now just dims the button instead of showing a `Wait` label.
  - Mute toggle (🔊/🔇) added to HUD. Preference persists at `whimsy-hollow:muted`.
  - Gentle ≥80%-complete pulse: once 80% of main objects are found, the remaining objects begin a soft 0.94→1.06 scale breathing tween so kids finishing a scene aren't stuck on the last 1–2.
  - Centralized localStorage access in `src/data/storage.js` (`loadFoundIds`, `saveFoundIds`, `loadBonusIds`, `saveBonusIds`, `clearLevelProgress`, `loadMuted`, `saveMuted`). `GameScene` now goes through it instead of sprinkling raw key strings.
  - Menu redesign:
    - Title-screen `Play` button switched to the new cream pill, larger.
    - Removed the `Places` button and deleted `PlacesScene.js` + its registration from `src/main.js`. The Places page was redundant with the menu's auto-routing and had a confusing failure mode: clicking a `Found` card opened a 10/10 scene with nothing to find.
    - Added a row of 4 mini place dots under `Play` showing each scene's thumbnail with a `★ Next` / `✓ Done` / `Tap` badge. Tapping a dot always clears that scene's save and starts it fresh — no confusing finished state.
    - First implementation used a Container + reparented Graphics/Image and silently failed to render; replaced with flat world-coordinate drawing for reliability.
    - "All places found" state: replaced the lone `Again` button with a `Pick a place ↓` prompt that defers actual restart to the dots row, so the primary action is honest.
    - Decorative floating preview (teapot/cat/recipe card) now hides when all places are done — it pointed to the last scene which felt off in the all-done state.
    - Mascot moved inward (`width/2 - 360 → width/2 - 280`) and scale reduced (1.45 → 1.3) so the `Hi!` speech bubble no longer clips the left edge of the canvas.
    - Removed dead `createButton` and `drawButtonIcon` helpers in `MenuScene` after the pill button replacement.
  - `WinScene` and `PlacesScene` (before deletion) switched to the new cream pill family for consistency with the menu and HUD.

  - First frustration-fix QA pass:
  - Help now gives a much stronger hint: quadrant glow, larger pulsing ring, arrow marker, sparkle trail, and a slower 60-second recharge.
  - Main object hit zones are larger and forgiving; near misses within about 30 px snap to an unfound object.

- Twilight Tea Garden scene added:
  - Added `Twilight Tea Garden` with id `twilight-tea-garden`, inserted immediately after `cozy-dream-bedroom` in the level registry.
  - Background is `public/assets/backgrounds/twilight_tea_garden.webp` normalized to 1920x1080.
  - Main objects added in `public/assets/objects/`: `tea_garden_teacup.png`, `tea_garden_lantern.png`, `tea_garden_sugar_cubes.png`, `tea_garden_star_biscuit.png`, `tea_garden_teaspoon.png`, `tea_garden_lace_napkin.png`, `tea_garden_rose_jam.png`, `tea_garden_lavender_sachet.png`, `tea_garden_hand_bell.png`, and `tea_garden_honey_dipper.png`.
  - Bonus fireflies added in `public/assets/bonus/`: `firefly_01.png`, `firefly_02.png`, and `firefly_03.png`.
  - Uses shared music via `src/data/music.js`, `Fireflies 0/3`, `Firefly!`, 10 main hidden objects, and three small surprise hotspots.
  - Wrong clicks now show a clear ripple and play a soft low-volume sound cue.
  - Found objects now show a small `+1` pop in addition to existing sparkles/hearts/chime.
  - Toasts moved away from the top HUD to avoid covering buttons.
  - Mail Garden bonus label changed from `Notes` to `Letters`.
  - Code changed for this pass: `src/data/levels.js` and `src/scenes/GameScene.js`.

- Snowy Cabin Loft scene added:
  - Added `Snowy Cabin Loft` with id `snowy-cabin-loft`, inserted after `forest-bookshop` in the level registry.
  - Updated `forest-bookshop` so its `previousLevelId` now points to `twilight-tea-garden`, keeping the level chain coherent.
  - Background is `public/assets/backgrounds/snowy_cabin_loft.webp` normalized to 1920x1080.
  - Main objects added in `public/assets/objects/`: `cabin_mitten.png`, `cabin_cocoa_mug.png`, `cabin_pinecone.png`, `cabin_fireplace_key.png`, `cabin_snowflake_sock.png`, `cabin_sled_ornament.png`, `cabin_yarn_ball.png`, `cabin_plaid_scarf.png`, `cabin_cinnamon_bundle.png`, and `cabin_star_candle.png`.
  - Bonus snowflakes added in `public/assets/bonus/`: `snowflake_01.png`, `snowflake_02.png`, and `snowflake_03.png`.
  - Uses shared music via `src/data/music.js`, `Snowflakes 0/3`, `Snowflake!`, 10 main hidden objects, and three cozy surprise hotspots.

- Seaside Lighthouse scene added:
  - Added `Seaside Lighthouse` with id `seaside-lighthouse`, inserted after `snowy-cabin-loft` in the level registry.
  - Background is `public/assets/backgrounds/seaside_lighthouse.webp` normalized to 1920x1080.
  - Main objects added in `public/assets/objects/`: `lighthouse_compass.png`, `lighthouse_seashell.png`, `lighthouse_spyglass.png`, `lighthouse_rope_knot.png`, `lighthouse_sea_glass_bottle.png`, `lighthouse_pearl_button.png`, `lighthouse_nautical_map.png`, `lighthouse_driftwood_star.png`, `lighthouse_brass_bell.png`, and `lighthouse_striped_mug.png`.
  - Bonus sea glass added in `public/assets/bonus/`: `sea_glass_01.png`, `sea_glass_02.png`, and `sea_glass_03.png`.
  - Uses shared music via `src/data/music.js`, `Sea Glass 0/3`, `Sea glass!`, 10 main hidden objects, and three calm seaside surprise hotspots.

- Spring Meadow Picnic scene added:
  - Added `Spring Meadow Picnic` with id `spring-meadow-picnic`, inserted after `seaside-lighthouse` in the level registry.
  - Background is `public/assets/backgrounds/spring_meadow_picnic.webp` normalized to 1920x1080.
  - Main objects added in `public/assets/objects/`: `picnic_basket.png`, `picnic_strawberry_jam.png`, `picnic_lemonade_cup.png`, `picnic_daisy_crown.png`, `picnic_butterfly_net.png`, `picnic_apple_slice.png`, `picnic_gingham_napkin.png`, `picnic_honey_jar.png`, `picnic_wooden_spoon.png`, and `picnic_flower_plate.png`.
  - Bonus butterflies added in `public/assets/bonus/`: `butterfly_01.png`, `butterfly_02.png`, and `butterfly_03.png`.
  - Uses shared music via `src/data/music.js`, `Butterflies 0/3`, `Butterfly!`, 10 main hidden objects, and three soft meadow surprise hotspots.

- Autumn Apple Orchard scene finished:
  - Added `Autumn Apple Orchard` with id `autumn-apple-orchard`, inserted after `spring-meadow-picnic` in the level registry.
  - Background is `public/assets/backgrounds/autumn_apple_orchard.webp` normalized to 1920x1080.
  - Main objects added in `public/assets/objects/`: `orchard_red_apple.png`, `orchard_cider_bottle.png`, `orchard_apple_crate.png`, `orchard_brass_lantern.png`, `orchard_plaid_thermos.png`, `orchard_acorn_cap.png`, `orchard_mini_rake.png`, `orchard_pumpkin_cookie.png`, `orchard_harvest_ribbon.png`, and `orchard_copper_watering_can.png`.
  - Bonus leaves added in `public/assets/bonus/`: `autumn_leaf_01.png`, `autumn_leaf_02.png`, and `autumn_leaf_03.png`.
  - Uses shared music via `src/data/music.js`, `Leaves 0/3`, `Leaf!`, 10 main hidden objects, and three warm orchard surprise hotspots.

- Starlight Greenhouse scene added:
  - Added `Starlight Greenhouse` with id `starlight-greenhouse`, inserted after `autumn-apple-orchard` in the level registry.
  - Background is `public/assets/backgrounds/scene_starlight_greenhouse_bg.png`, copied from Downloads and matching the current painterly storybook style.
  - Main objects added under stable replacement paths in `public/assets/objects/`: `greenhouse_tiny_lantern.png`, `greenhouse_star_key.png`, `greenhouse_watering_can.png`, `greenhouse_moon_crystal.png`, `greenhouse_flower_button.png`, `greenhouse_glowing_feather.png`, `greenhouse_mushroom_basket.png`, `greenhouse_frog_statue.png`, `greenhouse_honey_dipper.png`, and `greenhouse_old_key.png`.
  - Bonus glow motes added in `public/assets/bonus/`: `greenhouse_glow_mote_01.png`, `greenhouse_glow_mote_02.png`, and `greenhouse_glow_mote_03.png`.
  - Uses shared music via `src/data/music.js`, `Glow Motes 0/3`, `Glow!`, 10 main hidden objects, and three greenhouse surprise hotspots.
  - `MenuScene.createPlaceDots()` now compacts the thumbnail row when scene count exceeds 10, because the 11th scene would overflow the 1280-wide title canvas with the old fixed dot width.

- Moonlit Toy Attic scene added:
  - Added `Moonlit Toy Attic` with id `moonlit-toy-attic`, inserted after `starlight-greenhouse` in the level registry.
  - Background is `public/assets/backgrounds/moonlit_toy_attic.png`, generated as a 1920x1080 painterly attic playroom with safe space for hidden-object placement.
  - Main objects added in `public/assets/objects/`: `moonlit_toy_attic_moon_lantern.png`, `moonlit_toy_attic_patchwork_teddy.png`, `moonlit_toy_attic_spinning_top.png`, `moonlit_toy_attic_silver_thimble.png`, `moonlit_toy_attic_storybook.png`, `moonlit_toy_attic_blue_yarn.png`, `moonlit_toy_attic_brass_telescope.png`, `moonlit_toy_attic_star_button.png`, `moonlit_toy_attic_doll_shoe.png`, and `moonlit_toy_attic_ribbon_spool.png`.
  - Bonus glow motes added in `public/assets/bonus/`: `moonlit_toy_attic_glow_mote_01.png`, `moonlit_toy_attic_glow_mote_02.png`, and `moonlit_toy_attic_glow_mote_03.png`.
  - Uses shared music via `src/data/music.js`, `Glow Motes 0/3`, `Glow!`, 10 main hidden objects, and three toy-attic surprise hotspots.

- Cloudberry Treehouse scene added:
  - Added `Cloudberry Treehouse` with id `cloudberry-treehouse`, inserted after `moonlit-toy-attic` in the level registry.
  - Background is `public/assets/backgrounds/cloudberry_treehouse.png`, generated as a 1920x1080 painterly treehouse room with leafy windows and safe object placement zones.
  - Main objects added in `public/assets/objects/`: `cloudberry_treehouse_jam_jar.png`, `cloudberry_treehouse_bird_whistle.png`, `cloudberry_treehouse_leaf_notebook.png`, `cloudberry_treehouse_acorn_button.png`, `cloudberry_treehouse_berry_basket.png`, `cloudberry_treehouse_brass_compass.png`, `cloudberry_treehouse_blue_kite.png`, `cloudberry_treehouse_toy_squirrel.png`, `cloudberry_treehouse_honey_spoon.png`, and `cloudberry_treehouse_green_handkerchief.png`.
  - Bonus berries added in `public/assets/bonus/`: `cloudberry_treehouse_berry_01.png`, `cloudberry_treehouse_berry_02.png`, and `cloudberry_treehouse_berry_03.png`.
  - Uses shared music via `src/data/music.js`, `Berries 0/3`, `Berry!`, 10 main hidden objects, and three treehouse surprise hotspots.

- Cozy Quilt Workshop scene added:
  - Added `Cozy Quilt Workshop` with id `cozy-quilt-workshop`, inserted after `cloudberry-treehouse` in the level registry.
  - Background is `public/assets/backgrounds/cozy_quilt_workshop.png`, generated as a 1920x1080 painterly cottage craft room with quilt frame, fabric shelves, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `cozy_quilt_workshop_quilt_square.png`, `cozy_quilt_workshop_embroidery_hoop.png`, `cozy_quilt_workshop_needle_case.png`, `cozy_quilt_workshop_measuring_tape.png`, `cozy_quilt_workshop_pincushion.png`, `cozy_quilt_workshop_lavender_sachet.png`, `cozy_quilt_workshop_button_card.png`, `cozy_quilt_workshop_yarn_basket.png`, `cozy_quilt_workshop_ribbon_bow.png`, and `cozy_quilt_workshop_fabric_bird.png`.
  - Bonus quilt stars added in `public/assets/bonus/`: `cozy_quilt_workshop_star_01.png`, `cozy_quilt_workshop_star_02.png`, and `cozy_quilt_workshop_star_03.png`.
  - Uses shared music via `src/data/music.js`, `Stars 0/3`, `Star!`, 10 main hidden objects, and three quilt-workshop surprise hotspots.

- Sleepy Train Car scene added:
  - Added `Sleepy Train Car` with id `sleepy-train-car`, inserted after `cozy-quilt-workshop` in the level registry.
  - Background is `public/assets/backgrounds/sleepy_train_car.png`, generated as a 1920x1080 painterly vintage train compartment with sunset window views and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `sleepy_train_car_ticket_punch.png`, `sleepy_train_car_suitcase_tag.png`, `sleepy_train_car_travel_mug.png`, `sleepy_train_car_folded_map.png`, `sleepy_train_car_pocket_watch.png`, `sleepy_train_car_flower_teapot.png`, `sleepy_train_car_striped_scarf.png`, `sleepy_train_car_train_whistle.png`, `sleepy_train_car_star_pillow.png`, and `sleepy_train_car_lavender_bookmark.png`.
  - Bonus golden tickets added in `public/assets/bonus/`: `sleepy_train_car_ticket_01.png`, `sleepy_train_car_ticket_02.png`, and `sleepy_train_car_ticket_03.png`.
  - Uses shared music via `src/data/music.js`, `Tickets 0/3`, `Ticket!`, 10 main hidden objects, and three train-car surprise hotspots.

- Sunbeam Pottery Studio scene added:
  - Added `Sunbeam Pottery Studio` with id `sunbeam-pottery-studio`, inserted after `sleepy-train-car` in the level registry.
  - Background is `public/assets/backgrounds/sunbeam_pottery_studio.png`, generated as a 1920x1080 painterly cottage pottery room with shelves, worktable, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `sunbeam_pottery_studio_clay_mug.png`, `sunbeam_pottery_studio_ceramic_tile.png`, `sunbeam_pottery_studio_pottery_rib.png`, `sunbeam_pottery_studio_soft_sponge.png`, `sunbeam_pottery_studio_blue_glaze_jar.png`, `sunbeam_pottery_studio_flower_stamp.png`, `sunbeam_pottery_studio_ribbon_vase.png`, `sunbeam_pottery_studio_clay_bird.png`, `sunbeam_pottery_studio_paint_palette.png`, and `sunbeam_pottery_studio_herb_pot.png`.
  - Bonus clay beads added in `public/assets/bonus/`: `sunbeam_pottery_studio_clay_bead_01.png`, `sunbeam_pottery_studio_clay_bead_02.png`, and `sunbeam_pottery_studio_clay_bead_03.png`.
  - Uses shared music via `src/data/music.js`, `Beads 0/3`, `Bead!`, 10 main hidden objects, and three pottery-studio surprise hotspots.

- Candlelit Music Parlor scene added:
  - Added `Candlelit Music Parlor` with id `candlelit-music-parlor`, inserted after `sunbeam-pottery-studio` in the level registry.
  - Background is `public/assets/backgrounds/candlelit_music_parlor.png`, generated as a 1920x1080 painterly cottage music room with piano, shelves, window bench, lanterns, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `candlelit_music_parlor_music_box.png`, `candlelit_music_parlor_tuning_fork.png`, `candlelit_music_parlor_blue_metronome.png`, `candlelit_music_parlor_recorder_flute.png`, `candlelit_music_parlor_piano_key_ribbon.png`, `candlelit_music_parlor_flower_tambourine.png`, `candlelit_music_parlor_candle_snuffer.png`, `candlelit_music_parlor_sheet_music_clip.png`, `candlelit_music_parlor_pearl_button.png`, and `candlelit_music_parlor_lavender_sachet.png`.
  - Bonus golden notes added in `public/assets/bonus/`: `candlelit_music_parlor_music_note_01.png`, `candlelit_music_parlor_music_note_02.png`, and `candlelit_music_parlor_music_note_03.png`.
  - Uses shared music via `src/data/music.js`, `Notes 0/3`, `Note!`, 10 main hidden objects, and three music-parlor surprise hotspots.

- Rainy Art Atelier scene added:
  - Added `Rainy Art Atelier` with id `rainy-art-atelier`, inserted after `candlelit-music-parlor` in the level registry.
  - Background is `public/assets/backgrounds/rainy_art_atelier.png`, generated as a 1920x1080 painterly cottage art studio with rainy windows, easel, shelves, worktable, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `rainy_art_atelier_paintbrush.png`, `rainy_art_atelier_blue_watercolor_pan.png`, `rainy_art_atelier_rose_paint_tube.png`, `rainy_art_atelier_palette_knife.png`, `rainy_art_atelier_sketchbook.png`, `rainy_art_atelier_pressed_daisy_card.png`, `rainy_art_atelier_ribbon_eraser.png`, `rainy_art_atelier_ceramic_water_cup.png`, `rainy_art_atelier_charcoal_pencil.png`, and `rainy_art_atelier_mini_easel.png`.
  - Bonus crystal raindrops added in `public/assets/bonus/`: `rainy_art_atelier_raindrop_01.png`, `rainy_art_atelier_raindrop_02.png`, and `rainy_art_atelier_raindrop_03.png`.
  - Uses shared music via `src/data/music.js`, `Raindrops 0/3`, `Raindrop!`, 10 main hidden objects, and three art-atelier surprise hotspots.

- Morning Clockmaker Nook scene added:
  - Added `Morning Clockmaker Nook` with id `morning-clockmaker-nook`, inserted after `rainy-art-atelier` in the level registry.
  - Background is `public/assets/backgrounds/morning_clockmaker_nook.png`, generated as a 1920x1080 painterly cottage clock repair room with warm sunlight, shelves, workbench, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `morning_clockmaker_nook_brass_gear.png`, `morning_clockmaker_nook_blue_clock_key.png`, `morning_clockmaker_nook_mechanical_bird.png`, `morning_clockmaker_nook_oil_can.png`, `morning_clockmaker_nook_watch_pillow.png`, `morning_clockmaker_nook_clock_hand.png`, `morning_clockmaker_nook_hourglass.png`, `morning_clockmaker_nook_clock_dial.png`, `morning_clockmaker_nook_cogwheel_stamp.png`, and `morning_clockmaker_nook_brass_bell.png`.
  - Bonus tiny gears added in `public/assets/bonus/`: `morning_clockmaker_nook_gear_01.png`, `morning_clockmaker_nook_gear_02.png`, and `morning_clockmaker_nook_gear_03.png`.
  - Uses shared music via `src/data/music.js`, `Gears 0/3`, `Gear!`, 10 main hidden objects, and three clockmaker-nook surprise hotspots.

- Willow Pond Boathouse scene added:
  - Added `Willow Pond Boathouse` with id `willow-pond-boathouse`, inserted after `morning-clockmaker-nook` in the level registry.
  - Background is `public/assets/backgrounds/willow_pond_boathouse.png`, generated as a 1920x1080 painterly open-air boathouse with pond view, willow branches, bench, oars, shelves, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `willow_pond_boathouse_wooden_oar.png`, `willow_pond_boathouse_blue_glass_float.png`, `willow_pond_boathouse_gingham_blanket.png`, `willow_pond_boathouse_lily_pad_coaster.png`, `willow_pond_boathouse_brass_lantern.png`, `willow_pond_boathouse_willow_bookmark.png`, `willow_pond_boathouse_rope_knot.png`, `willow_pond_boathouse_paper_sailboat.png`, `willow_pond_boathouse_painted_pebble.png`, and `willow_pond_boathouse_flower_thermos.png`.
  - Bonus crystal dewdrops added in `public/assets/bonus/`: `willow_pond_boathouse_dewdrop_01.png`, `willow_pond_boathouse_dewdrop_02.png`, and `willow_pond_boathouse_dewdrop_03.png`.
  - Uses shared music via `src/data/music.js`, `Dewdrops 0/3`, `Dewdrop!`, 10 main hidden objects, and three boathouse surprise hotspots.

- Breezy Kite Workshop scene added:
  - Added `Breezy Kite Workshop` with id `breezy-kite-workshop`, inserted after `willow-pond-boathouse` in the level registry.
  - Background is `public/assets/backgrounds/breezy_kite_workshop.png`, generated as a 1920x1080 painterly cottage kite-making room with open sky window, ribbons, worktable, shelves, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `breezy_kite_workshop_paper_kite.png`, `breezy_kite_workshop_blue_ribbon_spool.png`, `breezy_kite_workshop_bamboo_stick.png`, `breezy_kite_workshop_cloud_button.png`, `breezy_kite_workshop_flower_tail_bow.png`, `breezy_kite_workshop_scissors_charm.png`, `breezy_kite_workshop_windsock.png`, `breezy_kite_workshop_glue_pot.png`, `breezy_kite_workshop_cloth_patch.png`, and `breezy_kite_workshop_wooden_bobbin.png`.
  - Bonus pinwheels added in `public/assets/bonus/`: `breezy_kite_workshop_pinwheel_01.png`, `breezy_kite_workshop_pinwheel_02.png`, and `breezy_kite_workshop_pinwheel_03.png`.
  - Uses shared music via `src/data/music.js`, `Pinwheels 0/3`, `Pinwheel!`, 10 main hidden objects, and three kite-workshop surprise hotspots.

- Lavender Laundry Room scene added:
  - Added `Lavender Laundry Room` with id `lavender-laundry-room`, inserted after `breezy-kite-workshop` in the level registry.
  - Background is `public/assets/backgrounds/lavender_laundry_room.png`, generated as a 1920x1080 painterly cottage laundry room with lavender bundles, basin, drying rack, folded linens, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `lavender_laundry_room_clothespin.png`, `lavender_laundry_room_washboard.png`, `lavender_laundry_room_soap_bar.png`, `lavender_laundry_room_sachet.png`, `lavender_laundry_room_linen_sock.png`, `lavender_laundry_room_brass_thimble.png`, `lavender_laundry_room_handkerchief.png`, `lavender_laundry_room_laundry_scoop.png`, `lavender_laundry_room_folded_towel.png`, and `lavender_laundry_room_button_card.png`.
  - Bonus soap bubbles added in `public/assets/bonus/`: `lavender_laundry_room_bubble_01.png`, `lavender_laundry_room_bubble_02.png`, and `lavender_laundry_room_bubble_03.png`.
  - Uses shared music via `src/data/music.js`, `Bubbles 0/3`, `Bubble!`, 10 main hidden objects, and three laundry-room surprise hotspots.

- Cozy Map Room scene added:
  - Added `Cozy Map Room` with id `cozy-map-room`, inserted after `lavender-laundry-room` in the level registry.
  - Background is `public/assets/backgrounds/cozy_map_room.png`, generated as a 1920x1080 painterly map room with warm sunlight, globes, rolled maps, lanterns, plants, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `cozy_map_room_brass_compass.png`, `cozy_map_room_parchment_map.png`, `cozy_map_room_blue_journal.png`, `cozy_map_room_spyglass.png`, `cozy_map_room_sealing_wax.png`, `cozy_map_room_star_pin.png`, `cozy_map_room_ribbon_bookmark.png`, `cozy_map_room_wooden_ruler.png`, `cozy_map_room_painted_pebble.png`, and `cozy_map_room_magnifying_glass.png`.
  - Bonus compass roses added in `public/assets/bonus/`: `cozy_map_room_compass_rose_01.png`, `cozy_map_room_compass_rose_02.png`, and `cozy_map_room_compass_rose_03.png`.
  - Uses shared music via `src/data/music.js`, `Roses 0/3`, `Rose!`, 10 main hidden objects, and three map-room surprise hotspots.

- Sunny Gift Wrap Nook scene added:
  - Added `Sunny Gift Wrap Nook` with id `sunny-gift-wrap-nook`, inserted after `cozy-map-room` in the level registry.
  - Background is `public/assets/backgrounds/sunny_gift_wrap_nook.png`, generated as a 1920x1080 painterly cottage wrapping nook with paper rolls, ribbons, parcels, shelves, baskets, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `sunny_gift_wrap_nook_golden_scissors.png`, `sunny_gift_wrap_nook_blue_ribbon_spool.png`, `sunny_gift_wrap_nook_gift_tag.png`, `sunny_gift_wrap_nook_wax_stamp.png`, `sunny_gift_wrap_nook_floral_paper_roll.png`, `sunny_gift_wrap_nook_tape_dispenser.png`, `sunny_gift_wrap_nook_sticker_sheet.png`, `sunny_gift_wrap_nook_lace_doily.png`, `sunny_gift_wrap_nook_wooden_stamp.png`, and `sunny_gift_wrap_nook_blue_parcel.png`.
  - Bonus paper hearts added in `public/assets/bonus/`: `sunny_gift_wrap_nook_paper_heart_01.png`, `sunny_gift_wrap_nook_paper_heart_02.png`, and `sunny_gift_wrap_nook_paper_heart_03.png`.
  - Uses shared music via `src/data/music.js`, `Hearts 0/3`, `Heart!`, 10 main hidden objects, and three gift-wrap surprise hotspots.

- Misty Herb Pantry scene added:
  - Added `Misty Herb Pantry` with id `misty-herb-pantry`, inserted after `sunny-gift-wrap-nook` in the level registry.
  - Background is `public/assets/backgrounds/misty_herb_pantry.png`, generated as a 1920x1080 painterly cottage herb pantry with dried herbs, jars, baskets, a misty window, kettle steam, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `misty_herb_pantry_mortar_pestle.png`, `misty_herb_pantry_blue_herb_jar.png`, `misty_herb_pantry_lavender_bundle.png`, `misty_herb_pantry_copper_kettle.png`, `misty_herb_pantry_honey_spoon.png`, `misty_herb_pantry_linen_sachet.png`, `misty_herb_pantry_seed_bottle.png`, `misty_herb_pantry_rosemary_sprig.png`, `misty_herb_pantry_herb_basket.png`, and `misty_herb_pantry_tea_strainer.png`.
  - Bonus golden leaves added in `public/assets/bonus/`: `misty_herb_pantry_golden_leaf_01.png`, `misty_herb_pantry_golden_leaf_02.png`, and `misty_herb_pantry_golden_leaf_03.png`.
  - Uses shared music via `src/data/music.js`, `Leaves 0/3`, `Leaf!`, 10 main hidden objects, and three herb-pantry surprise hotspots.

- Sunny Puzzle Parlor scene added:
  - Added `Sunny Puzzle Parlor` with id `sunny-puzzle-parlor`, inserted after `misty-herb-pantry` in the level registry.
  - Background is `public/assets/backgrounds/sunny_puzzle_parlor.png`, generated as a 1920x1080 painterly cottage puzzle room with a puzzle table, game shelves, marbles, blocks, cushions, sunny window, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `sunny_puzzle_parlor_jigsaw_piece.png`, `sunny_puzzle_parlor_blue_marble.png`, `sunny_puzzle_parlor_domino_tile.png`, `sunny_puzzle_parlor_red_spinning_top.png`, `sunny_puzzle_parlor_hourglass.png`, `sunny_puzzle_parlor_flower_card.png`, `sunny_puzzle_parlor_wooden_block.png`, `sunny_puzzle_parlor_green_pawn.png`, `sunny_puzzle_parlor_pencil_stub.png`, and `sunny_puzzle_parlor_puzzle_box.png`.
  - Bonus golden puzzle pieces added in `public/assets/bonus/`: `sunny_puzzle_parlor_golden_piece_01.png`, `sunny_puzzle_parlor_golden_piece_02.png`, and `sunny_puzzle_parlor_golden_piece_03.png`.
  - Uses shared music via `src/data/music.js`, `Pieces 0/3`, `Piece!`, 10 main hidden objects, and three puzzle-parlor surprise hotspots.

- Moonlit Origami Alcove scene added:
  - Added `Moonlit Origami Alcove` with id `moonlit-origami-alcove`, inserted after `sunny-puzzle-parlor` in the level registry.
  - Background is `public/assets/backgrounds/moonlit_origami_alcove.png`, generated as a 1920x1080 painterly moonlit paper-folding nook with origami, lanterns, paper stacks, shelves, cushions, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `moonlit_origami_alcove_blue_crane.png`, `moonlit_origami_alcove_paper_star.png`, `moonlit_origami_alcove_bone_folder.png`, `moonlit_origami_alcove_patterned_sheet.png`, `moonlit_origami_alcove_paper_lantern.png`, `moonlit_origami_alcove_paperweight.png`, `moonlit_origami_alcove_washi_tape.png`, `moonlit_origami_alcove_paper_boat.png`, `moonlit_origami_alcove_paper_fan.png`, and `moonlit_origami_alcove_glue_brush.png`.
  - Bonus crescent moons added in `public/assets/bonus/`: `moonlit_origami_alcove_crescent_01.png`, `moonlit_origami_alcove_crescent_02.png`, and `moonlit_origami_alcove_crescent_03.png`.
  - Uses shared music via `src/data/music.js`, `Moons 0/3`, `Moon!`, 10 main hidden objects, and three origami-alcove surprise hotspots.

- Cozy Cobbler Nook scene added:
  - Added `Cozy Cobbler Nook` with id `cozy-cobbler-nook`, inserted after `moonlit-origami-alcove` in the level registry.
  - Background is `public/assets/backgrounds/cozy_cobbler_nook.png`, generated as a 1920x1080 painterly cottage shoe-mending corner with boots, laces, buckles, baskets, shelves, sunny window, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `cozy_cobbler_nook_tiny_boot.png`, `cozy_cobbler_nook_blue_thread_spool.png`, `cozy_cobbler_nook_brass_buckle.png`, `cozy_cobbler_nook_wooden_shoehorn.png`, `cozy_cobbler_nook_shoe_brush.png`, `cozy_cobbler_nook_boot_lace.png`, `cozy_cobbler_nook_daisy_shoe_clip.png`, `cozy_cobbler_nook_polishing_cloth.png`, `cozy_cobbler_nook_buttonhook.png`, and `cozy_cobbler_nook_shoe_form.png`.
  - Bonus golden buttons added in `public/assets/bonus/`: `cozy_cobbler_nook_golden_button_01.png`, `cozy_cobbler_nook_golden_button_02.png`, and `cozy_cobbler_nook_golden_button_03.png`.
  - Uses shared music via `src/data/music.js`, `Buttons 0/3`, `Button!`, 10 main hidden objects, and three cobbler-nook surprise hotspots.

- Starlight Observatory Nook scene added:
  - Added `Starlight Observatory Nook` with id `starlight-observatory-nook`, inserted after `cozy-cobbler-nook` in the level registry.
  - Background is `public/assets/backgrounds/starlight_observatory_nook.png`, generated as a 1920x1080 painterly cottage astronomy nook with a telescope, round window, star charts, prisms, journals, lanterns, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `starlight_observatory_nook_telescope.png`, `starlight_observatory_nook_star_chart.png`, `starlight_observatory_nook_moon_globe.png`, `starlight_observatory_nook_lens_cloth.png`, `starlight_observatory_nook_crystal_prism.png`, `starlight_observatory_nook_astrolabe.png`, `starlight_observatory_nook_comet_charm.png`, `starlight_observatory_nook_constellation_notebook.png`, `starlight_observatory_nook_star_key.png`, and `starlight_observatory_nook_tripod_knob.png`.
  - Bonus golden stars added in `public/assets/bonus/`: `starlight_observatory_nook_golden_star_01.png`, `starlight_observatory_nook_golden_star_02.png`, and `starlight_observatory_nook_golden_star_03.png`.
  - Uses shared music via `src/data/music.js`, `Stars 0/3`, `Star!`, 10 main hidden objects, and three observatory-nook surprise hotspots.

- Honey Candle Workshop scene added:
  - Added `Honey Candle Workshop` with id `honey-candle-workshop`, inserted after `starlight-observatory-nook` in the level registry.
  - Background is `public/assets/backgrounds/honey_candle_workshop.png`, generated as a 1920x1080 painterly cottage candle-making workshop with honey jars, beeswax blocks, wick spools, dried flowers, lantern glow, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `honey_candle_workshop_beeswax_candle.png`, `honey_candle_workshop_honey_jar.png`, `honey_candle_workshop_honey_dipper.png`, `honey_candle_workshop_wick_spool.png`, `honey_candle_workshop_candle_snuffer.png`, `honey_candle_workshop_wax_stamp.png`, `honey_candle_workshop_lavender_bundle.png`, `honey_candle_workshop_label_card.png`, `honey_candle_workshop_tealight_holder.png`, and `honey_candle_workshop_measuring_spoon.png`.
  - Bonus honey drops added in `public/assets/bonus/`: `honey_candle_workshop_honey_drop_01.png`, `honey_candle_workshop_honey_drop_02.png`, and `honey_candle_workshop_honey_drop_03.png`.
  - Uses shared music via `src/data/music.js`, `Honey Drops 0/3`, `Honey Drop!`, 10 main hidden objects, and three candle-workshop surprise hotspots.

- Morning Birdwatching Porch scene added:
  - Added `Morning Birdwatching Porch` with id `morning-birdwatching-porch`, inserted after `honey-candle-workshop` in the level registry.
  - Background is `public/assets/backgrounds/morning_birdwatching_porch.png`, generated as a 1920x1080 painterly cottage porch with bird feeders, birdhouses, wicker chair, seed tins, flower pots, a garden view, and safe hidden-object placement.
  - Main objects added in `public/assets/objects/`: `morning_birdwatching_porch_binoculars.png`, `morning_birdwatching_porch_seed_scoop.png`, `morning_birdwatching_porch_feather_journal.png`, `morning_birdwatching_porch_birdhouse.png`, `morning_birdwatching_porch_pinecone_charm.png`, `morning_birdwatching_porch_seed_pouch.png`, `morning_birdwatching_porch_field_guide_card.png`, `morning_birdwatching_porch_bird_whistle.png`, `morning_birdwatching_porch_seed_tin.png`, and `morning_birdwatching_porch_twig_bundle.png`.
  - Bonus golden feathers added in `public/assets/bonus/`: `morning_birdwatching_porch_golden_feather_01.png`, `morning_birdwatching_porch_golden_feather_02.png`, and `morning_birdwatching_porch_golden_feather_03.png`.
  - Uses shared music via `src/data/music.js`, `Feathers 0/3`, `Feather!`, 10 main hidden objects, and three birdwatching-porch surprise hotspots.

GitHub repo: `sonnymay/whimsy-hollow`

## Key Files

- `src/main.js`: Phaser game config and scene registration
- `src/scenes/MenuScene.js`: title screen, Play pill, place dots row, mascot
- `src/scenes/LoadingScene.js`: cute mascot-led transition between scenes
- `src/scenes/GameScene.js`: playable hidden-object scene, HUD, clicks, hint, save, mute, ≥80% pulse
- `src/scenes/WinScene.js`: completion screen and replay/menu actions
- `src/scenes/DeskScene.js`: Lost Mail Desk reward/home-base scene showing recovered objects and secret notes
- `src/ui/theme.js`: shared palette, font, sizes — the design tokens for the cute/clean look
- `src/ui/Button.js`: `createPillButton` and `createStatusPill` — the one button family used across all scenes
- `src/data/levels.js`: thin level registry — imports per-file levels and exports helpers
- `src/data/levels/<id>.js`: one file per scene (mail-garden, restaurant-kitchen, whimsy-living-room, cozy-dream-bedroom)
- `src/data/music.js`: per-level music + ambient track manifest
- `src/data/storage.js`: centralized localStorage helpers (found/bonus/mute/music/volumes)
- `src/audio/music.js`: cross-scene music/ambient player with crossfade and volume control
- `src/scenes/SettingsScene.js`: sounds/music/volume toggles + About panel
- `scripts/generate-placeholders.mjs`: deterministic PNG/WAV placeholder asset generator

Note: `src/scenes/PlacesScene.js` was deleted; its job is now handled by the place dots row on `MenuScene`.

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
- Latest dev server is running at `http://127.0.0.1:5174/` because port 5173 was already in use.
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
- Build passed after the flat-cartoon art attempt, but that art direction was rejected and the original painterly assets were restored.
- Build passed after adding the Busy Kitchen scene and level-aware scene flow.
- Build passed after adding `magic_recipe_card.png` as the 10th Busy Kitchen object.
- Browser visual check confirmed completing Mail Garden now opens Busy Kitchen directly, with `Find 10` HUD and all 10 painterly kitchen assets visible.
- Build passed after the `WinScene` fallback auto-advance fix.
- Browser visual check on `http://127.0.0.1:5173/` confirmed finishing Mail Garden lands in Busy Kitchen.
- Build passed after scene completion tracking.
- Browser visual check confirmed menu shows `Busy Kitchen` and `Done 1/2` after Mail Garden is complete, and `Play` opens Busy Kitchen.
- Build passed after menu/look polish, loading scene, object shadows, and chef-hat HUD overlap fix.
- Browser visual check confirmed Busy Kitchen opens, the recipe-card menu preview is visible, and the chef hat is no longer hidden behind the top-right buttons.
- Build passed after adding Living Room, Places page, simplified menu flow, and the bonus-completion gate fix. Vite still reports the known large bundle warning.
- Browser visual check confirmed:
  - Menu shows one large `Play` button plus `Places`.
  - `Places` opens a card page with Mail Garden, Busy Kitchen, and Whimsy Living Room.
  - Completed Whimsy Living Room card appears gray/desaturated with `Found` and remains clickable.
  - Clicking the Living Room card opens the playable Living Room scene.
  - After all 10 Living Room main objects are found, the game stays playable at `10/10` with `Mice 0/3` instead of opening the win screen.
  - After all 3 mice are clicked, the win screen appears with `Mice 3/3`.
- Build passed after adding Cozy Dream Bedroom, its 10 main hidden objects, 3 moth bonuses, four surprise hotspots, bedroom menu preview, and four-card Places layout. Vite still reports the known large bundle warning.
- Build passed after changing `Pictures` to red `Find These`, renaming `Again` to `Reset`, and making bonus collectibles optional behind a `Finished` button. Vite still reports the known large bundle warning.
- Build passed after the first frustration-fix QA pass for stronger Help, forgiving hit zones, miss ripple, found `+1`, bottom toast, and `Letters` label. Vite still reports the known large bundle warning.
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
- Build passed after implementing Phase 1: Rich Scene Interactivity (interactive covers). Verified that Phaser preload loads level interactives, container sprites render on depth 6, hidden objects are invisible and unclickable while covered, and they reveal themselves with bouncy scale tweens and soft sparkles when the cover opens.
- Remaining art risk: keep the original painterly garden, but avoid mismatched flat/cartoon overlays. New levels and sprites should be generated in the same premium hand-painted storybook style.

## Steam Release Roadmap (2026-05-21)

This roadmap is a self-contained execution plan for shipping Whimsy Hollow on
Steam. It assumes another AI agent or human collaborator may pick up at any
phase. Every task names concrete file paths, dependencies, acceptance criteria,
and known pitfalls. Read top to bottom — phases are ordered by what unblocks
the most subsequent work.

### Reality check — biggest blocker is not code

Steam's 2-hour refund window means a $5–10 cozy hidden-object game with only
4 scenes will be refunded by buyers. **The single biggest gap to ship is
content volume: target ≥30 scenes for a $5 launch, ≥50 for $10.** Every code
phase below should run in parallel with painting/generating new scenes (see
"Image generation recipe" in this doc for the exact specs).

### Snapshot of working systems as of this commit

- 4 painted scenes wired into `src/data/levels/`
- Shared UI kit (`src/ui/theme.js`, `src/ui/Button.js`) with cream pill family
- Wide-window backdrop layer (`src/ui/backdrop.js`)
- Music + ambient system (`src/audio/music.js`) using one shared `musicforgame.mp3`
- Settings scene with Sounds toggle, Music toggle, Music & Ambient volume sliders
- Place dots row on title screen (replaces deleted PlacesScene)
- Centralized localStorage helpers in `src/data/storage.js`
- Mute toggle on in-game HUD; ≥80% gentle pulse on remaining objects
- Optional `spawns` arrays per object (randomized positions); not yet populated in any level data
- Optional `foreground` field per level (occlusion layer); not yet populated

### Phase 1 — Native shell + Pause menu (next session)

Goal: stop being a website. Establish the runtime Steam will actually ship.

**Task 1.1 — PauseScene overlay**
- New file: `src/scenes/PauseScene.js`
- Register in `src/main.js` scene array.
- Trigger from `GameScene`:
  - ESC key: `this.input.keyboard.on('keydown-ESC', () => this.openPause())`
  - New small pause-icon pill in the HUD cluster (between Mute and List, label `⏸`)
- `openPause()` implementation: `this.scene.pause(); this.scene.launch('PauseScene', { from: 'GameScene' }); this.sound.pauseAll();`
- PauseScene draws a dimmed overlay + cream card with three pill buttons:
  - `Resume` → `scene.resume(data.from); scene.stop('PauseScene'); this.sound.resumeAll();`
  - `Settings` → `scene.stop('PauseScene'); scene.start('SettingsScene', { returnTo: data.from });`
  - `Home` → `scene.stop('PauseScene'); scene.stop(data.from); scene.start('MenuScene');`
- SettingsScene must accept `returnTo` data and route Done back there if present (extend the existing Done button handler).
- Hint cooldown timer must pause too — wrap `time.delayedCall` so pausing scene pauses its time event automatically (Phaser does this if you use `scene.pause`, verify).
- Music keeps playing through pause (it's chill) but SFX pauses with `this.sound.pauseAll()`.
- Acceptance:
  - ESC mid-game opens overlay within 100ms.
  - Resume returns to identical state (found objects, hint cooldown remaining, mute state).
  - Music does not restart; SFX paused while overlay is open.
  - Settings opened from Pause returns to GameScene paused state on Done.

**Task 1.2 — Tauri wrapper**
- Add dev dependency: `npm install -D @tauri-apps/cli @tauri-apps/api`
- Run: `npx tauri init` (interactive). Answers:
  - App name: `Whimsy Hollow`
  - Window title: `Whimsy Hollow`
  - Web assets location: `../dist`
  - Dev server URL: `http://localhost:5173`
  - Frontend dev command: `npm run dev`
  - Frontend build command: `npm run build`
- Edit `src-tauri/tauri.conf.json`:
  - `tauri.windows[0].width: 1280, height: 720`
  - `tauri.windows[0].resizable: true`
  - `tauri.windows[0].fullscreen: false`
  - `tauri.windows[0].title: "Whimsy Hollow"`
  - `tauri.bundle.identifier: "com.sonnymay.whimsy-hollow"` (must change before submission)
  - `tauri.bundle.icon: [paths to icons]` — generate icons later
- Add npm scripts to `package.json`:
  - `"tauri:dev": "tauri dev"`
  - `"tauri:build": "tauri build"`
- Add F11 fullscreen toggle in `src/main.js` using `@tauri-apps/api/window`:
  ```js
  if (window.__TAURI__) {
    document.addEventListener('keydown', async (e) => {
      if (e.key === 'F11') {
        const { appWindow } = await import('@tauri-apps/api/window');
        const isFull = await appWindow.isFullscreen();
        await appWindow.setFullscreen(!isFull);
      }
    });
  }
  ```
- Add a `Fullscreen` toggle row to SettingsScene that calls the same path.
- Acceptance:
  - `npm run tauri:dev` opens a native window showing the game at 1280×720.
  - F11 toggles fullscreen on Win/Mac/Linux.
  - `npm run tauri:build` produces a platform installer in `src-tauri/target/release/bundle/`.
- Known pitfalls:
  - Rust toolchain required on dev machine (`rustup`).
  - macOS first build prompts for code-signing — skip for dev, sign later via Apple Developer cert.
  - Tauri allowlist: `"shell": { "open": false }, "fs": { "all": false }` to start. Add `fs.writeFile` only when implementing save profiles below.

### Phase 2 — Fullscreen, save profiles, native save path

**Task 2.1 — Fullscreen toggle in SettingsScene**
- Add row using existing `addToggleRow` helper.
- State stored at `whimsy-hollow:fullscreen` via new `loadFullscreen`/`saveFullscreen` in `src/data/storage.js`.
- On boot, if Tauri context detected and stored value is true, set fullscreen.

**Task 2.2 — Three save profiles**
- New scene `src/scenes/ProfileScene.js`: 3 cards (Profile 1/2/3) shown after splash, before MenuScene.
- Active profile stored at `whimsy-hollow:active-profile` (default `'1'`).
- Refactor all keys in `src/data/storage.js` to be `${profile}:${baseKey}` prefixed:
  - e.g. `mail-garden:saveKey` becomes `profile-1:whimsy-hollow:mail-garden`.
  - Centralize via a `withProfile(key)` helper in storage.js.
- Each profile card shows: profile name (editable later), thumbnail of last-played scene, completed count, last-played timestamp.
- Long-press / right-click on a card → confirm dialog → wipe that profile.
- Acceptance:
  - Two siblings can keep independent progress in slots 1 and 2.
  - Active profile persists across launches.
  - Wiping a profile clears all of its keys without touching others.

**Task 2.3 — Save backend abstraction (prep for Steam Cloud)**
- New file: `src/data/storage-backend.js` exporting `{ get(key), set(key, value), remove(key) }`.
- Default: localStorage.
- When Tauri is detected, swap to file-based storage under Tauri's `appDataDir()` so Steam Cloud can sync the folder.
- All `storage.js` helpers go through the backend.
- File format: a single `save.json` per profile, not separate keys. Easier for Steam Cloud sync rules.
- Acceptance:
  - Web build still works against localStorage.
  - Tauri build writes/reads from a file path under `appDataDir`.

### Phase 3 — Controller / Steam Deck input

Steam Deck Verified status doubles cozy-game visibility. Required: every menu
must be navigable without a mouse.

**Task 3.1 — Gamepad input layer**
- New file: `src/input/gamepad.js`.
- Use Phaser's built-in `this.input.gamepad`. Enable via `input.gamepad: true` in `config` in `src/main.js`.
- Map: D-pad / left stick → move a virtual cursor between focusable UI elements.
- Maintain a focus ring around the currently focused element (cream stroke + glow).
- Add a `focusable: true` data flag on every interactive object via the Button helper.
- Buttons:
  - A (south) → click focused element
  - B (east) → back / cancel / pause
  - Y (north) → open List
  - X (west) → toggle Mute
  - Start → open Pause
  - Select → Settings
- During gameplay, the cursor is positioned anywhere on the scene by analog stick at a tunable speed; A confirms a tap at the cursor position.
- Acceptance:
  - Whole game playable on a gamepad — title → profile → scene → find objects → pause → resume → home.
  - Focus ring visible at all times when a controller is connected.

**Task 3.2 — Steam Deck-specific QA**
- Lock the renderer to 60 fps (Phaser does this by default; verify no rogue timers).
- Profile on a Steam Deck or via Proton-on-Linux test build.
- Verify text is legible at 1280×800 Deck resolution (slightly taller than 720; the Tauri window can letterbox; safe area should account for this).

### Phase 4 — Content scaling tooling

Required *before* you start mass-painting scenes — these unblock 100+ scenes.

**Task 4.1 — Thumbnail pipeline**
- Add dev dependency: `npm install -D sharp`
- New file: `scripts/build-thumbs.mjs` that walks `public/assets/backgrounds/*.{png,webp,jpg}` and emits 256×144 WebP at `public/assets/thumbs/<basename>.webp`, quality 75.
- Add npm script: `"thumbs": "node scripts/build-thumbs.mjs"`
- Update `MenuScene.preload()` and `PlacesScene` (gone) — wherever level thumbs are needed, use `assets/thumbs/<id>.webp` instead of the full background.
- Add a `thumbnail` field to each level (or derive by convention: `assets/thumbs/${id}.webp`).

**Task 4.2 — World / chapter picker**
- Add `worldId` to each level (e.g. `'mail-garden'` → world `'whimsy-village'`).
- Once levels.length > 6, replace the place-dots row with a world picker that opens a sub-grid of that world's levels.
- New scene `src/scenes/WorldsScene.js`. Cream cards for each world; tap → grid of place dots scoped to that world.
- Worlds are defined in `src/data/worlds.js`.

**Task 4.3 — Spawn slot persistence (UX bug fix)**
- Currently `GameScene.init()` re-randomizes positions on every load.
- Store chosen slot indices alongside `foundIds` so a resumed save keeps the same layout.
- New storage helper `loadSpawnLayout(level)` / `saveSpawnLayout(level, indices)`.
- On scene start: if a layout exists for this save, reuse it; else pick and persist.
- On `Reset` / completion: clear the layout so next playthrough re-randomizes.

**Task 4.4 — Global Sticker Book** (the meta retention loop)
- Promote `DeskScene` from a per-level finds view to a cross-scene sticker book.
- Layout: scroll of all objects across all levels, each grayed out until first-found.
- Found state stored persistently per profile (already done — never gets cleared by per-level Reset).
- Tapping a sticker shows the object name and which scene it's from.
- Add a `Sticker Book` link from MenuScene (small text under the dots row).

### Phase 5 — Onboarding + accessibility

**Task 5.1 — First-run tutorial**
- Storage key: `whimsy-hollow:onboarded` (per profile).
- On first GameScene load with that flag missing:
  - Mascot moves over one easy object.
  - Bubble says: `Tap me!`
  - Block all other input (overlay zone) until the kid taps that object.
  - After tap: `Nice! Now find the rest.` → set flag → release input.
- One-time, never replays.
- Skippable via a tiny `Skip` text in the corner for adult testers.

**Task 5.2 — Reduced motion mode**
- New toggle in SettingsScene: `Reduced motion`.
- When on: sparkle count 10→3, hearts 3→0, ≥80% pulse disabled, hover scaling disabled, button click bounce removed.
- Storage key: `whimsy-hollow:reduced-motion`.
- Apply at scene create time by reading the flag.

**Task 5.3 — High-contrast HUD option**
- Toggle in SettingsScene: `Stronger contrast`.
- When on: HUD pills get a darker text color and a heavier outline; finished badge becomes brighter.
- Helps players with low vision and Steam Deck outdoor users.

### Phase 6 — Steamworks integration

Requires a Steam developer account ($100 Steam Direct fee) and a partner program approval.

**Task 6.1 — Steamworks SDK integration**
- Use community plugin `tauri-plugin-steam` or `steamworks.js` via Tauri sidecar.
- Initialize on app start with the app ID Steam assigns.
- Surface `Steam.isOnline()`, `unlockAchievement(id)`, `cloudSync()` as functions in `src/integrations/steam.js`.

**Task 6.2 — Achievements (5–10 kid-friendly)**
Suggested set:
- `first_find` — find your first object
- `mail_garden_done` / `kitchen_done` / `living_room_done` / `bedroom_done`
- `all_places_v1` — finish the first 4 scenes
- `letter_carrier` — find all 3 letters in Mail Garden
- `night_owl` — find all 3 moths in the Bedroom
- `quiet_player` — play 30 minutes with music on
- `helping_paw` — use Help in 5 different scenes
Wire each achievement to a hook in `GameScene` triggered by event (found, all-found, etc.).

**Task 6.3 — Steam Cloud save**
- Define cloud sync filter in Steamworks: just the `save.json` file from Phase 2.3.
- Test by playing on one machine, signing in on another — saves should appear.

**Task 6.4 — Steam Trading Cards + emoticons** (optional, post-launch)
- Steam decides eligibility based on sales. Submit art when you qualify.

### Phase 7 — Localization

**Task 7.1 — i18n scaffold**
- New file: `src/i18n/index.js` exporting `t(key, vars)`.
- Strings live in `src/i18n/en.json`. Loader picks language by Steam interface lang or in-Settings override.
- Sweep every visible string in scenes and replace literals with `t('menu.play')`, `t('hud.help')`, etc.
- Ship English-only at launch but with the structure in place.
- Stretch goal pre-launch: Simplified Chinese, Spanish, Japanese (highest cozy-game ROI on Steam).

### Phase 8 — Store assets + launch

No code, but required.

**Task 8.1 — Capsule images**
- Small: 231×87
- Header: 460×215
- Library: 1280×720
- Page bg: 1438×810
- Painterly art consistent with in-game scenes. Whimsy Hollow logo + bird mascot on every capsule.

**Task 8.2 — Screenshots (≥5)**
- One per scene with HUD visible
- One showing the sticker book
- One showing the settings scene
- Captions: short, lowercase, no marketing-ese.

**Task 8.3 — Trailer (30–90s)**
- Open: 5s of mascot bobbing on title screen.
- Middle: 4 quick scene swipes with sparkles on found objects.
- End: title + "Wishlist now" CTA.
- No music in the trailer that you don't own rights for; even the in-game `musicforgame.mp3` should be confirmed royalty-free.

**Task 8.4 — Steam page copy**
- Tagline (60 chars): "A cozy hidden-object game for tired adults and kids."
- Bullets: no timer · painterly worlds · gentle music · safe for kids 7+
- Description: ~150 words, lowercase, no exclamation marks. Match the tone of the in-game text.
- Tags: Cozy, Hidden Object, Family Friendly, Relaxing, Cute, Wholesome, Casual, Singleplayer.

**Task 8.5 — Age rating**
- ESRB Everyone, PEGI 3 — both submittable free via Steamworks.
- Mark "No violence, no profanity, no in-app purchases, no online interaction."

### Phase 9 — Pre-launch QA

- Two-week closed playtest with 5–10 actual children + adults
- Track refund-risk signals: confusion in first 5 minutes, unfindable objects, perf hitches on Steam Deck
- Fix everything from playtest before public launch
- Build a public press list and queue a Wishlist push
- Schedule release at 12:00 Pacific on a Tuesday (Steam analytics sweet spot for cozy)

### Image / asset generation recipe (recap for future scenes)

- Backgrounds: 1920×1080 (16:9), WebP quality 85, painterly storybook style.
- Hidden object PNGs: ~256–512px on long side, transparent background, 128×128 final scale after Phaser sizing.
- Foreground layers: same 1920×1080 dimensions as background, transparent PNG with soft-edge clutter (curtains, vines, blur).
- Thumbnails: 256×144 WebP, auto-generated by `scripts/build-thumbs.mjs` (Phase 4.1).
- Audio loops: 96–128kbps OGG, < 1 MB, seamlessly looping.

### Explicit skip list (do not work on these before launch)

- ❌ Multiplayer / co-op / leaderboards — anti-chill, anti-genre
- ❌ DLC at launch — review-bomb risk; ship strong base content
- ❌ Microtransactions / energy / hearts / loot boxes — kills cozy reputation
- ❌ Steam Workshop / user-generated content — scenes are too curated
- ❌ VR / mobile port — focus, ship one platform well, port later if it sells
- ❌ Procedural scene generation — destroys painterly handcrafted feel
- ❌ Achievement popups with sound — anti-chill; if added, allow disabling

### Suggested execution order

If continuing from this commit, the highest-leverage path is:

1. **Phase 1** (Pause + Tauri) — 2–3 hours, unlocks every subsequent platform task.
2. **Phase 2.2 + 2.3** (Profiles + save backend) — required before Steam Cloud and reusable for kids on shared devices.
3. **Phase 4.3 + 4.4** (Spawn persistence + sticker book) — quick UX wins that visibly improve gameplay.
4. **Phase 5** (Onboarding + reduced motion) — makes the game shippable to actual children.
5. Then content + Steam-account setup in parallel.
6. **Phase 6** (Steamworks) only after content volume is ≥30 scenes.
7. **Phase 8** (Store assets) in the last month before launch.

If working on individual tasks, every task above is self-contained with its
own acceptance criteria — pick whichever maps to the open issue and execute.
