import { execSync } from 'node:child_process';
import { cleanCheckerboard } from './clean-checkerboard.js';
import * as path from 'node:path';
import * as fs from 'node:fs';

const brainDir = '/Users/santipapmay/.gemini/antigravity/brain/fd0f9b84-3677-4353-ae90-59262afc68c4';
const projectDir = '/Users/santipapmay/Documents/Finding game on steam';

const assets = [
  { src: 'bookshop_inkwell_1779387878811.png', dest: 'public/assets/objects/bookshop_inkwell.png' },
  { src: 'bookshop_magnifying_glass_1779387903202.png', dest: 'public/assets/objects/bookshop_magnifying_glass.png' },
  { src: 'bookshop_old_key_1779387928109.png', dest: 'public/assets/objects/bookshop_old_key.png' },
  { src: 'bookshop_reading_glasses_1779387969945.png', dest: 'public/assets/objects/bookshop_reading_glasses.png' },
  { src: 'bookshop_scroll_1779387998528.png', dest: 'public/assets/objects/bookshop_scroll.png' },
  { src: 'bookshop_quill_1779388018155.png', dest: 'public/assets/objects/bookshop_quill.png' },
  { src: 'bookshop_hourglass_1779388048396.png', dest: 'public/assets/objects/bookshop_hourglass.png' },
  { src: 'bookshop_brass_bell_1779388072653.png', dest: 'public/assets/objects/bookshop_brass_bell.png' },
  { src: 'bookshop_bookmark_1779388121547.png', dest: 'public/assets/objects/bookshop_bookmark.png' },
  { src: 'bookshop_stacked_books_1779388158352.png', dest: 'public/assets/objects/bookshop_stacked_books.png' },
  { src: 'bookshop_bonus_mouse_01_1779388188324.png', dest: 'public/assets/bonus/bookshop_bonus_mouse_01.png' },
  { src: 'bookshop_bonus_mouse_02_1779388215179.png', dest: 'public/assets/bonus/bookshop_bonus_mouse_02.png' }
];

async function run() {
  // 1. Process the 12 generated assets
  for (const asset of assets) {
    const fullSrc = path.join(brainDir, asset.src);
    const fullDest = path.join(projectDir, asset.dest);
    const tempPng = path.join('/tmp', `temp_${path.basename(asset.src)}`);

    console.log(`Processing ${asset.src} -> ${asset.dest}`);

    // Convert input format to true PNG
    execSync(`sips -s format png "${fullSrc}" --out "${tempPng}"`);

    // Clean background
    await cleanCheckerboard(tempPng, fullDest, 30);
  }

  // 2. Handle the 3rd mouse copy from public/assets/bonus/bonus_sleepy_mouse_03.png
  const srcMouse3 = path.join(projectDir, 'public/assets/bonus/bonus_sleepy_mouse_03.png');
  const destMouse3 = path.join(projectDir, 'public/assets/bonus/bookshop_bonus_mouse_03.png');
  console.log(`Copying sleepy mouse 3 -> ${destMouse3}`);
  fs.copyFileSync(srcMouse3, destMouse3);

  console.log("All assets processed successfully!");
}

run().catch(console.error);
