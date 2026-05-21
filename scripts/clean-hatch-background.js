import fs from 'node:fs';
import { PNG } from 'pngjs';
import * as fsPromises from 'node:fs/promises';
import * as path from 'node:path';

const srcPath = '/Users/santipapmay/.gemini/antigravity/brain/fd0f9b84-3677-4353-ae90-59262afc68c4/garden_hatch.png';
const destDir = '/Users/santipapmay/Documents/Finding game on steam/public/assets/interactives';
const destPath = path.join(destDir, 'garden_hatch.png');

async function processImage() {
  await fsPromises.mkdir(destDir, { recursive: true });

  fs.createReadStream(srcPath)
    .pipe(new PNG())
    .on('parsed', function () {
      const width = this.width;
      const height = this.height;
      const centerX = width / 2;
      const centerY = height / 2;
      
      // The plate is a circle, let's find the radius.
      // Typically it occupies ~85-90% of the image.
      const maxRadius = Math.min(width, height) * 0.44; 

      // Detect background color from top-left pixel (x=0, y=0)
      const bgR = this.data[0];
      const bgG = this.data[1];
      const bgB = this.data[2];
      const threshold = 35; // tolerance for color matching

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          const idx = (width * y + x) << 2;
          const r = this.data[idx];
          const g = this.data[idx + 1];
          const b = this.data[idx + 2];

          const dx = x - centerX;
          const dy = y - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          // Calculate color distance to top-left background color
          const colorDist = Math.sqrt(
            Math.pow(r - bgR, 2) +
            Math.pow(g - bgG, 2) +
            Math.pow(b - bgB, 2)
          );

          // If outside the circular plate or matching the background color, make it transparent
          if (dist > maxRadius || colorDist < threshold) {
            this.data[idx + 3] = 0; // Alpha = 0
          }
        }
      }

      this.pack()
        .pipe(fs.createWriteStream(destPath))
        .on('finish', () => {
          console.log(`Successfully cleaned and saved hatch to: ${destPath}`);
        });
    })
    .on('error', (err) => {
      console.error('Error parsing PNG:', err);
    });
}

processImage();
