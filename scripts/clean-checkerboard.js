import fs from 'node:fs';
import { PNG } from 'pngjs';
import * as path from 'node:path';

function getDistance(c1, c2) {
  return Math.sqrt(
    Math.pow(c1[0] - c2[0], 2) +
    Math.pow(c1[1] - c2[1], 2) +
    Math.pow(c1[2] - c2[2], 2)
  );
}

export function cleanCheckerboard(srcPath, destPath, tolerance = 30) {
  return new Promise((resolve, reject) => {
    fs.createReadStream(srcPath)
      .pipe(new PNG())
      .on('parsed', function () {
        const width = this.width;
        const height = this.height;

        // 1. Sample the top-left 32x32 area to find the two dominant checkerboard colors.
        // We will collect color counts.
        const colorCounts = new Map();
        const sampleSize = Math.min(32, width, height);
        
        for (let y = 0; y < sampleSize; y++) {
          for (let x = 0; x < sampleSize; x++) {
            const idx = (width * y + x) << 2;
            const r = this.data[idx];
            const g = this.data[idx + 1];
            const b = this.data[idx + 2];
            // Round to help group slightly noisy colors
            const key = `${Math.round(r/5)*5},${Math.round(g/5)*5},${Math.round(b/5)*5}`;
            colorCounts.set(key, (colorCounts.get(key) || 0) + 1);
          }
        }

        // Sort colors by frequency
        const sortedColors = [...colorCounts.entries()]
          .sort((a, b) => b[1] - a[1])
          .map(entry => entry[0].split(',').map(Number));

        if (sortedColors.length < 2) {
          console.error("Could not detect two checkerboard colors. Using default white/gray.");
          sortedColors.push([255, 255, 255]);
          sortedColors.push([204, 204, 204]);
        }

        const colorA = sortedColors[0];
        const colorB = sortedColors[1];
        console.log(`Detected checkerboard colors: Color A = rgb(${colorA}), Color B = rgb(${colorB})`);

        // Helper to check if a pixel is background color
        const isBgColor = (r, g, b) => {
          const distA = getDistance([r, g, b], colorA);
          const distB = getDistance([r, g, b], colorB);
          return distA < tolerance || distB < tolerance;
        };

        // 2. Flood fill from borders
        const visited = new Uint8Array(width * height);
        const queue = [];

        const enqueue = (x, y) => {
          const idx = y * width + x;
          if (visited[idx]) return;
          visited[idx] = 1;
          queue.push((y << 16) | x);
        };

        // Enqueue all border pixels
        for (let x = 0; x < width; x++) {
          enqueue(x, 0);
          enqueue(x, height - 1);
        }
        for (let y = 0; y < height; y++) {
          enqueue(0, y);
          enqueue(width - 1, y);
        }

        let head = 0;
        while (head < queue.length) {
          const val = queue[head++];
          const x = val & 0xffff;
          const y = (val >> 16) & 0xffff;

          const idx = (width * y + x) << 2;
          const r = this.data[idx];
          const g = this.data[idx + 1];
          const b = this.data[idx + 2];

          if (isBgColor(r, g, b)) {
            // It is background! Make it transparent.
            this.data[idx + 3] = 0;

            // Enqueue neighbors
            if (x > 0) enqueue(x - 1, y);
            if (x < width - 1) enqueue(x + 1, y);
            if (y > 0) enqueue(x, y - 1);
            if (y < height - 1) enqueue(x, y + 1);
          }
        }

        // 3. Save the result
        const dir = path.dirname(destPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        this.pack()
          .pipe(fs.createWriteStream(destPath))
          .on('finish', () => {
            console.log(`Successfully cleaned background and saved to: ${destPath}`);
            resolve();
          })
          .on('error', (err) => reject(err));
      })
      .on('error', (err) => reject(err));
  });
}

// If run directly from CLI
if (process.argv[1].endsWith('clean-checkerboard.js')) {
  const [,, src, dest] = process.argv;
  if (!src || !dest) {
    console.log("Usage: node clean-checkerboard.js <src> <dest>");
    process.exit(1);
  }
  cleanCheckerboard(src, dest)
    .then(() => console.log("Done."))
    .catch(err => console.error(err));
}
