import { mkdir, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';
import zlib from 'node:zlib';

const pngSignature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc ^= byte;
    for (let i = 0; i < 8; i += 1) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const typeBuffer = Buffer.from(type);
  const length = Buffer.alloc(4);
  const crc = Buffer.alloc(4);
  length.writeUInt32BE(data.length);
  crc.writeUInt32BE(crc32(Buffer.concat([typeBuffer, data])));
  return Buffer.concat([length, typeBuffer, data, crc]);
}

function encodePng(width, height, pixels) {
  const raw = Buffer.alloc((width * 4 + 1) * height);
  for (let y = 0; y < height; y += 1) {
    const row = y * (width * 4 + 1);
    raw[row] = 0;
    pixels.copy(raw, row + 1, y * width * 4, (y + 1) * width * 4);
  }

  const header = Buffer.alloc(13);
  header.writeUInt32BE(width, 0);
  header.writeUInt32BE(height, 4);
  header[8] = 8;
  header[9] = 6;

  return Buffer.concat([
    pngSignature,
    chunk('IHDR', header),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0))
  ]);
}

function canvas(width, height, clear = [0, 0, 0, 0]) {
  const pixels = Buffer.alloc(width * height * 4);
  for (let i = 0; i < pixels.length; i += 4) {
    pixels[i] = clear[0];
    pixels[i + 1] = clear[1];
    pixels[i + 2] = clear[2];
    pixels[i + 3] = clear[3];
  }
  return { width, height, pixels };
}

function blendPixel(c, x, y, color) {
  if (x < 0 || y < 0 || x >= c.width || y >= c.height) {
    return;
  }
  const idx = (Math.floor(y) * c.width + Math.floor(x)) * 4;
  const alpha = color[3] / 255;
  const inv = 1 - alpha;
  c.pixels[idx] = Math.round(color[0] * alpha + c.pixels[idx] * inv);
  c.pixels[idx + 1] = Math.round(color[1] * alpha + c.pixels[idx + 1] * inv);
  c.pixels[idx + 2] = Math.round(color[2] * alpha + c.pixels[idx + 2] * inv);
  c.pixels[idx + 3] = Math.min(255, Math.round(color[3] + c.pixels[idx + 3] * inv));
}

function rect(c, x, y, w, h, color) {
  for (let yy = y; yy < y + h; yy += 1) {
    for (let xx = x; xx < x + w; xx += 1) {
      blendPixel(c, xx, yy, color);
    }
  }
}

function circle(c, cx, cy, radius, color) {
  const r2 = radius * radius;
  for (let y = Math.floor(cy - radius); y <= cy + radius; y += 1) {
    for (let x = Math.floor(cx - radius); x <= cx + radius; x += 1) {
      const dx = x - cx;
      const dy = y - cy;
      if (dx * dx + dy * dy <= r2) {
        blendPixel(c, x, y, color);
      }
    }
  }
}

function ellipse(c, cx, cy, rx, ry, color) {
  for (let y = Math.floor(cy - ry); y <= cy + ry; y += 1) {
    for (let x = Math.floor(cx - rx); x <= cx + rx; x += 1) {
      const dx = (x - cx) / rx;
      const dy = (y - cy) / ry;
      if (dx * dx + dy * dy <= 1) {
        blendPixel(c, x, y, color);
      }
    }
  }
}

function line(c, x0, y0, x1, y1, color, thickness = 2) {
  const steps = Math.max(Math.abs(x1 - x0), Math.abs(y1 - y0));
  for (let i = 0; i <= steps; i += 1) {
    const t = steps === 0 ? 0 : i / steps;
    const x = x0 + (x1 - x0) * t;
    const y = y0 + (y1 - y0) * t;
    circle(c, x, y, thickness, color);
  }
}

function triangle(c, ax, ay, bx, by, cx, cy, color) {
  const minX = Math.floor(Math.min(ax, bx, cx));
  const maxX = Math.ceil(Math.max(ax, bx, cx));
  const minY = Math.floor(Math.min(ay, by, cy));
  const maxY = Math.ceil(Math.max(ay, by, cy));
  const area = (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
  for (let y = minY; y <= maxY; y += 1) {
    for (let x = minX; x <= maxX; x += 1) {
      const w0 = ((bx - ax) * (y - ay) - (by - ay) * (x - ax)) / area;
      const w1 = ((cx - bx) * (y - by) - (cy - by) * (x - bx)) / area;
      const w2 = ((ax - cx) * (y - cy) - (ay - cy) * (x - cx)) / area;
      if (w0 >= 0 && w1 >= 0 && w2 >= 0) {
        blendPixel(c, x, y, color);
      }
    }
  }
}

function star(c, cx, cy, points, inner, outer, color) {
  for (let i = 0; i < points * 2; i += 1) {
    const a0 = -Math.PI / 2 + (Math.PI * i) / points;
    const a1 = -Math.PI / 2 + (Math.PI * (i + 1)) / points;
    const r0 = i % 2 === 0 ? outer : inner;
    const r1 = i % 2 === 0 ? inner : outer;
    triangle(c, cx, cy, cx + Math.cos(a0) * r0, cy + Math.sin(a0) * r0, cx + Math.cos(a1) * r1, cy + Math.sin(a1) * r1, color);
  }
}

function softNoise(c, amount = 16) {
  for (let y = 0; y < c.height; y += 1) {
    for (let x = 0; x < c.width; x += 1) {
      const idx = (y * c.width + x) * 4;
      const n = Math.round((Math.sin(x * 12.9898 + y * 78.233) * 43758.5453 % 1) * amount);
      c.pixels[idx] = Math.max(0, Math.min(255, c.pixels[idx] + n));
      c.pixels[idx + 1] = Math.max(0, Math.min(255, c.pixels[idx + 1] + n));
      c.pixels[idx + 2] = Math.max(0, Math.min(255, c.pixels[idx + 2] + n));
    }
  }
}

async function savePng(path, c) {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, encodePng(c.width, c.height, c.pixels));
}

function background() {
  const c = canvas(1280, 720, [91, 139, 105, 255]);
  for (let y = 0; y < c.height; y += 1) {
    const skyMix = y / c.height;
    for (let x = 0; x < c.width; x += 1) {
      const idx = (y * c.width + x) * 4;
      c.pixels[idx] = Math.round(123 - skyMix * 46);
      c.pixels[idx + 1] = Math.round(181 - skyMix * 58);
      c.pixels[idx + 2] = Math.round(151 - skyMix * 76);
      c.pixels[idx + 3] = 255;
    }
  }

  ellipse(c, 640, 690, 760, 230, [82, 133, 83, 255]);
  ellipse(c, 650, 612, 480, 92, [200, 174, 118, 255]);
  ellipse(c, 650, 606, 430, 65, [220, 198, 145, 255]);
  rect(c, 90, 310, 142, 220, [115, 74, 48, 255]);
  triangle(c, 62, 314, 162, 218, 262, 314, [101, 55, 76, 255]);
  rect(c, 122, 362, 78, 54, [241, 215, 140, 255]);
  rect(c, 870, 270, 186, 235, [121, 87, 60, 255]);
  triangle(c, 832, 276, 964, 166, 1092, 276, [75, 80, 106, 255]);
  rect(c, 922, 358, 78, 70, [237, 215, 154, 255]);

  for (let i = 0; i < 72; i += 1) {
    const x = 130 + ((i * 149) % 1010);
    const y = 420 + ((i * 83) % 220);
    line(c, x, y + 18, x, y - 8, [42, 96, 62, 255], 2);
    circle(c, x - 8, y - 8, 8, [232, 168, 145, 230]);
    circle(c, x + 7, y - 9, 7, [244, 205, 124, 230]);
  }

  for (let i = 0; i < 12; i += 1) {
    const x = 210 + i * 78;
    line(c, x, 285 + Math.sin(i) * 20, x + 28, 315 + Math.cos(i) * 18, [89, 66, 45, 255], 5);
    circle(c, x - 5, 270 + Math.sin(i) * 20, 45, [54, 113, 72, 230]);
  }

  softNoise(c, 10);
  return c;
}

const objectDrawers = {
  'magical_mailbox.png': (c) => {
    rect(c, 36, 48, 58, 46, [98, 57, 113, 255]);
    ellipse(c, 65, 50, 29, 27, [122, 78, 146, 255]);
    rect(c, 44, 64, 42, 20, [241, 209, 123, 255]);
    rect(c, 58, 94, 12, 24, [88, 59, 49, 255]);
    circle(c, 94, 42, 8, [255, 231, 140, 255]);
  },
  'golden_key.png': (c) => {
    circle(c, 42, 64, 21, [238, 187, 61, 255]);
    circle(c, 42, 64, 10, [0, 0, 0, 0]);
    line(c, 58, 64, 103, 64, [238, 187, 61, 255], 7);
    rect(c, 90, 64, 8, 22, [238, 187, 61, 255]);
    rect(c, 102, 64, 7, 16, [238, 187, 61, 255]);
  },
  'blue_crystal.png': (c) => {
    triangle(c, 64, 12, 30, 68, 98, 68, [98, 207, 239, 255]);
    triangle(c, 30, 68, 64, 116, 98, 68, [45, 127, 203, 255]);
    triangle(c, 64, 12, 64, 116, 98, 68, [128, 230, 255, 190]);
    line(c, 64, 12, 64, 116, [230, 255, 255, 180], 2);
  },
  'mushroom_basket.png': (c) => {
    ellipse(c, 64, 82, 42, 26, [166, 105, 55, 255]);
    ellipse(c, 64, 72, 36, 18, [207, 151, 82, 255]);
    line(c, 30, 74, 64, 32, [136, 82, 48, 255], 5);
    line(c, 98, 74, 64, 32, [136, 82, 48, 255], 5);
    ellipse(c, 45, 48, 18, 12, [211, 72, 66, 255]);
    rect(c, 38, 48, 14, 22, [240, 218, 169, 255]);
    ellipse(c, 78, 44, 20, 13, [222, 90, 72, 255]);
    rect(c, 70, 45, 15, 25, [240, 218, 169, 255]);
  },
  'moon_coin.png': (c) => {
    circle(c, 64, 64, 38, [219, 183, 81, 255]);
    circle(c, 77, 50, 32, [255, 225, 127, 255]);
    circle(c, 88, 43, 32, [0, 0, 0, 0]);
    star(c, 52, 72, 5, 5, 13, [126, 90, 42, 190]);
  },
  'lost_teacup.png': (c) => {
    ellipse(c, 58, 74, 34, 24, [239, 222, 192, 255]);
    rect(c, 28, 54, 60, 25, [245, 231, 204, 255]);
    ellipse(c, 58, 53, 33, 12, [177, 126, 98, 255]);
    circle(c, 94, 66, 16, [245, 231, 204, 255]);
    circle(c, 94, 66, 9, [0, 0, 0, 0]);
    ellipse(c, 59, 96, 42, 8, [125, 91, 80, 180]);
  },
  'wizard_hat.png': (c) => {
    triangle(c, 64, 10, 32, 88, 96, 88, [62, 61, 134, 255]);
    ellipse(c, 64, 90, 52, 15, [46, 49, 107, 255]);
    rect(c, 43, 74, 42, 9, [238, 196, 80, 255]);
    star(c, 62, 44, 5, 3, 9, [255, 237, 139, 255]);
  },
  'glowing_feather.png': (c) => {
    ellipse(c, 64, 58, 19, 52, [198, 239, 215, 210]);
    line(c, 62, 24, 70, 108, [241, 255, 219, 255], 3);
    line(c, 66, 52, 38, 36, [139, 217, 201, 190], 2);
    line(c, 67, 62, 40, 60, [139, 217, 201, 190], 2);
    line(c, 68, 73, 42, 85, [139, 217, 201, 190], 2);
    circle(c, 64, 60, 52, [165, 240, 214, 36]);
  },
  'frog_statue.png': (c) => {
    ellipse(c, 64, 75, 38, 33, [93, 139, 106, 255]);
    circle(c, 45, 48, 15, [93, 139, 106, 255]);
    circle(c, 83, 48, 15, [93, 139, 106, 255]);
    circle(c, 45, 48, 5, [38, 54, 45, 255]);
    circle(c, 83, 48, 5, [38, 54, 45, 255]);
    line(c, 48, 82, 80, 82, [42, 79, 58, 255], 3);
    ellipse(c, 64, 103, 50, 12, [65, 86, 70, 180]);
  },
  'flower_button.png': (c) => {
    for (let i = 0; i < 8; i += 1) {
      const angle = (Math.PI * 2 * i) / 8;
      ellipse(c, 64 + Math.cos(angle) * 23, 64 + Math.sin(angle) * 23, 14, 23, [230, 139, 177, 255]);
    }
    circle(c, 64, 64, 20, [248, 212, 88, 255]);
    circle(c, 56, 60, 3, [126, 91, 44, 255]);
    circle(c, 72, 60, 3, [126, 91, 44, 255]);
    circle(c, 56, 72, 3, [126, 91, 44, 255]);
    circle(c, 72, 72, 3, [126, 91, 44, 255]);
  }
};

function objectCanvas(drawer) {
  const c = canvas(128, 128, [0, 0, 0, 0]);
  circle(c, 64, 68, 58, [255, 244, 181, 18]);
  drawer(c);
  return c;
}

async function saveWav(path) {
  await mkdir(dirname(path), { recursive: true });
  const sampleRate = 44100;
  const duration = 0.26;
  const samples = Math.floor(sampleRate * duration);
  const data = Buffer.alloc(samples * 2);
  for (let i = 0; i < samples; i += 1) {
    const t = i / sampleRate;
    const env = Math.max(0, 1 - t / duration);
    const tone = Math.sin(2 * Math.PI * 880 * t) * 0.55 + Math.sin(2 * Math.PI * 1320 * t) * 0.28;
    data.writeInt16LE(Math.max(-1, Math.min(1, tone * env)) * 32767, i * 2);
  }

  const header = Buffer.alloc(44);
  header.write('RIFF', 0);
  header.writeUInt32LE(36 + data.length, 4);
  header.write('WAVE', 8);
  header.write('fmt ', 12);
  header.writeUInt32LE(16, 16);
  header.writeUInt16LE(1, 20);
  header.writeUInt16LE(1, 22);
  header.writeUInt32LE(sampleRate, 24);
  header.writeUInt32LE(sampleRate * 2, 28);
  header.writeUInt16LE(2, 32);
  header.writeUInt16LE(16, 34);
  header.write('data', 36);
  header.writeUInt32LE(data.length, 40);
  await writeFile(path, Buffer.concat([header, data]));
}

await savePng('public/assets/backgrounds/mail_garden.png', background());

for (const [fileName, drawer] of Object.entries(objectDrawers)) {
  await savePng(`public/assets/objects/${fileName}`, objectCanvas(drawer));
}

await saveWav('public/assets/sounds/found.wav');
console.log('Generated Whimsy Hollow placeholder assets.');
