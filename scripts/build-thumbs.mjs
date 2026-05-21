#!/usr/bin/env node
/**
 * build-thumbs.mjs — generate 256×144 WebP thumbnails of every painted
 * background under public/assets/backgrounds/ into public/assets/thumbs/.
 *
 * Required: `npm install -D sharp` once. Then `npm run thumbs`.
 *
 * MenuScene/Sticker Book should prefer the thumb if it exists so the title
 * screen doesn't have to load ~1.5 MB per scene at boot. At 5 scenes that's
 * still fine; at 30+ it's mandatory.
 */
import { readdir, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'public', 'assets', 'backgrounds');
const OUT = path.join(ROOT, 'public', 'assets', 'thumbs');

const WIDTH = 256;
const HEIGHT = 144;
const QUALITY = 75;

async function main() {
  let sharp;
  try {
    ({ default: sharp } = await import('sharp'));
  } catch (e) {
    console.error('Missing dependency. Install with: npm install -D sharp');
    process.exit(1);
  }

  await mkdir(OUT, { recursive: true });
  const files = (await readdir(SRC)).filter((f) => /\.(png|jpg|jpeg|webp)$/i.test(f));
  if (files.length === 0) {
    console.warn(`No source images in ${SRC}`);
    return;
  }

  let made = 0;
  for (const f of files) {
    const base = f.replace(/\.[^.]+$/, '');
    const outPath = path.join(OUT, `${base}.webp`);
    if (existsSync(outPath)) {
      // Skip when source mtime is older than thumb — sharp will overwrite anyway,
      // but we leave it idempotent for now.
    }
    await sharp(path.join(SRC, f))
      .resize(WIDTH, HEIGHT, { fit: 'cover' })
      .webp({ quality: QUALITY })
      .toFile(outPath);
    made += 1;
    console.log(`  ✓ ${base}.webp`);
  }
  console.log(`Built ${made} thumbnail${made === 1 ? '' : 's'} in ${path.relative(ROOT, OUT)}/`);
}

main().catch((err) => { console.error(err); process.exit(1); });
