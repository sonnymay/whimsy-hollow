# Whimsy Hollow — Hero Level Gameplay Spec

Contract for **hero** levels (`tier: 'hero'`). Standard levels keep the legacy 10 + 3 bonus format.

## Level metadata

```js
{
  id: 'mail-garden',
  tier: 'hero',           // 'hero' | 'standard' (default standard)
  caseId: 'case-1-mail',  // links to campaign.js
  title: '...',
  saveKey: '...',
  // ... existing fields
}
```

## Case (campaign.js)

Shown in `CampaignScene` before play and summarized on win.

| Field | Type | Notes |
|-------|------|-------|
| `id` | string | e.g. `case-1-mail` |
| `title` | string | Case name |
| `client` | string | Who asked |
| `request` | string | One-line hook |
| `intro` | string[] | 2–4 lines of story |
| `outro` | string[] | 2–4 lines after finish |
| `levelId` | string | Registry id |
| `unlockAfter` | string \| null | Previous case id |

## Main objectives (`objects[]`)

Unchanged. 10 items. Hints allowed (List clue + Help compass).

| Field | Notes |
|-------|-------|
| `hiddenUnder` | interactive id |
| `requiresFlag` | level state flag must be true |
| `hiddenUntilFlag` | sprite invisible until flag set |

## Optional objectives (`optionalObjectives[]`)

3–5 extras. **No** Help/compass. Shown in List under “Extras”.

```js
{
  id: 'extra-lantern-charm',
  name: 'Lantern Charm',
  key: 'optional-lantern-charm',
  asset: 'assets/objects/...',
  x, y, scale,
  requiresFlag?: 'shedOpen',
  subScene?: 'shed'   // only in that sub-scene
}
```

Save key: `{saveKey}:optional` (array of found ids).

## Juju (`jujus[]`)

2–4 per hero level. Grey wobbly collectibles → spend for **puzzle clue** on a main objective (not auto-reveal).

```js
{
  id: 'juju-fence',
  key: 'juju-mail-fence',
  asset: 'assets/objects/moon_coin.png',  // disguise sprite
  x, y, scale: 0.4,
  wobble: true,
  revealAfter?: 'watered',      // optional levelState flag
  puzzleClue: 'Think fence — not the gate, the posts.',
  linkedObjectId: 'magical-mailbox'  // which checklist item gets tier-2 hint
}
```

Save: `{saveKey}:juju-collected` (ids), in-run bank `jujuCharges` (resets per level entry).

## Level state (`levelState` flags)

Persisted at `{saveKey}:state` as JSON object.

Interactives may set flags:

```js
{
  id: 'watering-can',
  type: 'toggle',
  setsFlag: 'watered',
  // ...
}
```

Objects/interactives/jujus may use `requiresFlag` / `revealAfter`.

## Interactives (`interactives[]`)

| type | Behavior |
|------|----------|
| `slide-x` / `slide-y` | Existing cover |
| `toggle` | Click toggles open state; `setsFlag` when open |
| `spawn` | On open, reveals juju id or shows object |

Common fields: `id`, `key`, `asset`, `x`, `y`, `scale`, `setsFlag`, `requiresFlag`, `revealsJujuId`, `hiddenUnder` support unchanged.

## Sub-scenes (`subScenes`)

```js
subScenes: {
  main: { background: null },  // default — uses level.background
  shed: {
    background: { key, path },  // optional; null = same bg, pan camera
    camera: { scrollX, scrollY, zoom: 1.2 },
    enterHotspot: { x, y, w, h, label: 'Shed' }
  }
}
```

`activeSubScene` stored in level state. Exit hotspot returns to `main`.

## Scene props (`sceneProps[]`)

Click-only flavor. No win tracking.

```js
{
  id: 'prop-birdhouse',
  x, y, w: 48, h: 48,
  label: 'Chirp!',
  sfx?: 'clickSfx'
}
```

## Hints (hero)

1. **List card** → mascot text clue (`object.clue`)
2. **Help** → compass + glow (main objectives only; 30s cooldown)
3. **Juju spend** → tap checklist card when `jujuCharges > 0` → show `juju.puzzleClue` for linked item (no camera pan)

Standard levels: legacy random 👻 ghost + direct reveal.

## Hub rewards

- First clear: coins + rep (existing)
- All optional objectives in case: +50 coins, unlock `hubUnlock` id from case data

## Mail Garden v2 (reference hero)

- Flags: `hatchOpen`, `watered`, `shedOpen`
- Interactives: garden-hatch (slide-y), watering-can (toggle → watered), shed-door (toggle → shedOpen + sub-scene)
- Jujus: 3 tied to mailbox, crystal, key
- Optional: 2 items in shed sub-scene
- Props: birdhouse, lantern, parcels, flowers (from surprises migrated)
