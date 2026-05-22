import { readdir, mkdir, rename, readFile, writeFile, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

// Asset Paths
const BG_DIR = path.join(ROOT, 'public', 'assets', 'backgrounds');
const SPRITE_DIRS = [
  path.join(ROOT, 'public', 'assets', 'objects'),
  path.join(ROOT, 'public', 'assets', 'bonus'),
  path.join(ROOT, 'public', 'assets', 'characters'),
  path.join(ROOT, 'public', 'assets', 'interactives')
];
const LEVELS_DIR = path.join(ROOT, 'src', 'data', 'levels');
const ORIGINALS_ROOT = path.join(ROOT, '_originals');

let sharp;

async function initSharp() {
  try {
    const { default: s } = await import('sharp');
    sharp = s;
  } catch (err) {
    console.error('Failed to import sharp. Please ensure it is installed: npm install -D sharp');
    process.exit(1);
  }
}

function formatSize(bytes) {
  return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

async function convertBackgrounds() {
  console.log('\n--- Converting Backgrounds to WebP (Quality: 80, Max: 1920x1080) ---');
  const originalsDir = path.join(ORIGINALS_ROOT, 'backgrounds');
  await mkdir(originalsDir, { recursive: true });

  let files = [];
  if (existsSync(BG_DIR)) {
    files = await readdir(BG_DIR);
  }
  const pngFiles = files.filter(f => f.toLowerCase().endsWith('.png'));

  let totalBefore = 0;
  let totalAfter = 0;
  let processed = 0;

  for (const file of pngFiles) {
    const srcPath = path.join(BG_DIR, file);
    const destName = file.replace(/\.png$/i, '.webp');
    const destPath = path.join(BG_DIR, destName);
    const backupPath = path.join(originalsDir, file);

    // If backup already exists, we skip processing to avoid overwriting the high-res backup
    if (existsSync(backupPath)) {
      console.log(`  Skipping: ${file} (already optimized, backup exists in ${path.relative(ROOT, backupPath)})`);
      continue;
    }

    const beforeStat = await stat(srcPath);
    totalBefore += beforeStat.size;

    console.log(`Processing: ${file} (${formatSize(beforeStat.size)})`);

    try {
      await sharp(srcPath)
        .resize(1920, 1080, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(destPath);

      const afterStat = await stat(destPath);
      totalAfter += afterStat.size;
      processed++;

      // Move original to root backup
      await rename(srcPath, backupPath);
      console.log(`  ✓ Converted to ${destName} (${formatSize(afterStat.size)}) - Saved ${((1 - afterStat.size / beforeStat.size) * 100).toFixed(1)}%`);
    } catch (err) {
      console.error(`  ✗ Error converting ${file}:`, err.message);
    }
  }

  return { processed, totalBefore, totalAfter };
}

async function resizeSprites() {
  console.log('\n--- Resizing Sprites (>50KB to Max: 512px) ---');
  let totalBefore = 0;
  let totalAfter = 0;
  let processed = 0;

  for (const dir of SPRITE_DIRS) {
    if (!existsSync(dir)) {
      console.log(`Directory does not exist, skipping: ${dir}`);
      continue;
    }

    const dirName = path.basename(dir);
    console.log(`Scanning: ${dirName}`);
    const originalsDir = path.join(ORIGINALS_ROOT, dirName);
    await mkdir(originalsDir, { recursive: true });

    const files = await readdir(dir);
    const pngFiles = files.filter(f => f.toLowerCase().endsWith('.png') && !f.toLowerCase().includes('.original.png'));

    for (const file of pngFiles) {
      const srcPath = path.join(dir, file);
      const backupPath = path.join(originalsDir, file);

      // If backup already exists, we skip it
      if (existsSync(backupPath)) {
        continue;
      }

      const beforeStat = await stat(srcPath);

      // Only resize if larger than 50KB (51200 bytes)
      if (beforeStat.size > 50 * 1024) {
        totalBefore += beforeStat.size;
        console.log(`  Optimizing: ${dirName}/${file} (${formatSize(beforeStat.size)})`);

        const tempPath = path.join(dir, `_temp_${file}`);

        try {
          await sharp(srcPath)
            .resize(512, 512, { fit: 'inside', withoutEnlargement: true })
            .png({ compressionLevel: 9, palette: true })
            .toFile(tempPath);

          const afterStat = await stat(tempPath);
          totalAfter += afterStat.size;
          processed++;

          // Backup original and replace with optimized version
          await rename(srcPath, backupPath);
          await rename(tempPath, srcPath);

          console.log(`    ✓ Resized & compressed (${formatSize(afterStat.size)}) - Saved ${((1 - afterStat.size / beforeStat.size) * 100).toFixed(1)}%`);
        } catch (err) {
          console.error(`    ✗ Error optimizing ${file}:`, err.message);
          if (existsSync(tempPath)) {
            await rename(tempPath, srcPath);
          }
        }
      }
    }
  }

  return { processed, totalBefore, totalAfter };
}

async function updateLevelFiles() {
  console.log('\n--- Updating Level Data Files ---');
  if (!existsSync(LEVELS_DIR)) {
    console.warn(`Levels directory does not exist: ${LEVELS_DIR}`);
    return;
  }

  const files = await readdir(LEVELS_DIR);
  const jsFiles = files.filter(f => f.endsWith('.js'));
  let updatedCount = 0;

  for (const file of jsFiles) {
    const filePath = path.join(LEVELS_DIR, file);
    const content = await readFile(filePath, 'utf8');

    const bgPngRegex = /(path\s*:\s*['"]assets\/backgrounds\/[^'"]+)\.png(['"])/g;

    if (bgPngRegex.test(content)) {
      const updatedContent = content.replace(bgPngRegex, '$1.webp$2');
      await writeFile(filePath, updatedContent, 'utf8');
      console.log(`  ✓ Updated background path in: ${file}`);
      updatedCount++;
    }
  }

  console.log(`Total level files updated: ${updatedCount}`);
}

async function main() {
  const start = Date.now();
  await initSharp();

  const bgStats = await convertBackgrounds();
  const spriteStats = await resizeSprites();
  await updateLevelFiles();

  const elapsed = ((Date.now() - start) / 1000).toFixed(1);
  const totalBefore = bgStats.totalBefore + spriteStats.totalBefore;
  const totalAfter = bgStats.totalAfter + spriteStats.totalAfter;
  const savings = totalBefore - totalAfter;

  console.log('\n=========================================');
  console.log('            OPTIMIZATION SUMMARY          ');
  console.log('=========================================');
  console.log(`Time Elapsed: ${elapsed}s`);
  console.log(`Backgrounds Converted: ${bgStats.processed}`);
  console.log(`Sprites Optimized: ${spriteStats.processed}`);
  if (totalBefore > 0) {
    console.log(`Total Space Before: ${formatSize(totalBefore)}`);
    console.log(`Total Space After:  ${formatSize(totalAfter)}`);
    console.log(`Total Savings:      ${formatSize(savings)} (${((savings / totalBefore) * 100).toFixed(1)}% saved)`);
  } else {
    console.log('No new files needed optimization.');
  }
  console.log('=========================================');
}

main().catch(err => {
  console.error('Fatal Error running optimize-assets:', err);
  process.exit(1);
});
