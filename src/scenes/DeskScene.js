import Phaser from 'phaser';
import { levels } from '../data/levels.js';
import { loadFoundIds, loadBonusIds } from '../data/storage.js';
import { createPillButton } from '../ui/Button.js';
import { theme, hex } from '../ui/theme.js';

const UI_FONT = theme.font;

/**
 * Global Sticker Book — every object from every scene, grayed out until found.
 * The single biggest retention loop in cozy hidden-object games: it makes
 * progress visible across scenes and gives the player a reason to revisit
 * scenes they already finished to mop up the few they missed.
 */
export class DeskScene extends Phaser.Scene {
  constructor() {
    super('DeskScene');
  }

  init(data = {}) {
    this.returnLevelId = data.levelId ?? null;
  }

  preload() {
    // Load every level's main object PNGs so each sticker can render its art.
    for (const level of levels) {
      for (const object of level.objects) {
        if (!this.textures.exists(object.key)) {
          this.load.image(object.key, object.asset);
        }
      }
    }
  }

  create() {
    const { width, height } = this.scale;

    // Background — soft cream wash with subtle painterly tint
    this.add.rectangle(0, 0, width, height, 0x2a2620).setOrigin(0);
    this.add.rectangle(0, 0, width, height, 0xfff2cf, 0.08).setOrigin(0).setBlendMode(Phaser.BlendModes.SCREEN);
    this.add.circle(1080, 130, 240, 0xffd1dc, 0.08);
    this.add.circle(220, 600, 200, 0x9de3ff, 0.08);

    // Header
    this.add.text(width / 2, 50, 'Sticker Book', {
      fontFamily: UI_FONT,
      fontSize: '44px',
      color: '#fff4d6',
      stroke: '#2b2018',
      strokeThickness: 7
    }).setOrigin(0.5);

    // Total progress
    const totals = this.computeTotals();
    this.add.text(width / 2, 90, `${totals.found} of ${totals.total} stickers · ${totals.bonusFound}/${totals.bonusTotal} bonus`, {
      fontFamily: UI_FONT,
      fontSize: '17px',
      color: '#eadfc0'
    }).setOrigin(0.5);

    // One section per level
    const sectionsTopY = 122;
    const sectionH = 96;
    const sectionGap = 8;
    levels.forEach((level, i) => {
      const y = sectionsTopY + i * (sectionH + sectionGap);
      this.drawSection(level, y, sectionH);
    });

    // Footer buttons
    createPillButton(this, {
      x: width / 2 - 130, y: height - 36,
      width: 140, height: 50,
      label: 'Back', fontSize: 20, radius: 25,
      onClick: () => {
        if (this.returnLevelId) {
          this.scene.start('GameScene', { levelId: this.returnLevelId });
        } else {
          this.scene.start('MenuScene');
        }
      }
    });

    createPillButton(this, {
      x: width / 2 + 130, y: height - 36,
      width: 140, height: 50,
      label: 'Home', fontSize: 20, radius: 25,
      onClick: () => this.scene.start('MenuScene')
    });
  }

  computeTotals() {
    let found = 0, total = 0, bonusFound = 0, bonusTotal = 0;
    for (const level of levels) {
      const f = loadFoundIds(level);
      const b = loadBonusIds(level);
      found += f.size;
      total += level.objects.length;
      bonusFound += b.size;
      bonusTotal += level.bonusEnvelopes.length;
    }
    return { found, total, bonusFound, bonusTotal };
  }

  drawSection(level, y, h) {
    const foundIds = loadFoundIds(level);
    const bonusIds = loadBonusIds(level);

    // Section card background (subtle, lets backdrop show through)
    const card = this.add.graphics();
    card.fillStyle(0xfff7e3, 0.12);
    card.fillRoundedRect(40, y, 1200, h, 16);
    card.lineStyle(1, 0xc9a96e, 0.25);
    card.strokeRoundedRect(40, y, 1200, h, 16);

    // Left label block
    const labelX = 64;
    const labelY = y + h / 2;
    const sceneName = level.title.replace('Whimsy Hollow ', '');
    this.add.text(labelX, labelY - 16, sceneName, {
      fontFamily: UI_FONT,
      fontSize: '20px',
      color: '#fff4d6',
      stroke: '#2b2018',
      strokeThickness: 4
    }).setOrigin(0, 0.5);

    const bonusLabel = level.bonusLabel ?? 'Notes';
    this.add.text(labelX, labelY + 14, `${foundIds.size}/${level.objects.length} · ${bonusLabel} ${bonusIds.size}/${level.bonusEnvelopes.length}`, {
      fontFamily: UI_FONT,
      fontSize: '13px',
      color: '#cfc0a4'
    }).setOrigin(0, 0.5);

    // Stickers row
    const stickerSize = 56;
    const stickerGap = 8;
    const rowW = level.objects.length * stickerSize + (level.objects.length - 1) * stickerGap;
    const rowStartX = 1240 - rowW - 24; // right-aligned inside section
    const rowY = y + h / 2;

    level.objects.forEach((object, i) => {
      const sx = rowStartX + i * (stickerSize + stickerGap) + stickerSize / 2;
      this.drawSticker(sx, rowY, stickerSize, object, foundIds.has(object.id));
    });
  }

  drawSticker(x, y, size, object, found) {
    // Sticker plate
    const plate = this.add.graphics();
    if (found) {
      plate.fillStyle(0xfff0c8, 0.85);
    } else {
      plate.fillStyle(0x352d22, 0.55);
    }
    plate.fillRoundedRect(x - size / 2, y - size / 2, size, size, 10);
    plate.lineStyle(1.5, found ? 0xd9b673 : 0x6a5a44, found ? 0.7 : 0.5);
    plate.strokeRoundedRect(x - size / 2, y - size / 2, size, size, 10);

    if (found) {
      // Sticker thumb in full color
      this.add.image(x, y, object.key)
        .setDisplaySize(size - 16, size - 16);

      // Small green corner check
      this.add.circle(x + size / 2 - 8, y - size / 2 + 8, 7, 0x7eb58a, 1)
        .setStrokeStyle(1.5, 0xffffff, 0.85);
      this.add.text(x + size / 2 - 8, y - size / 2 + 8, '✓', {
        fontFamily: UI_FONT, fontSize: '10px', color: '#ffffff'
      }).setOrigin(0.5);
    } else {
      // Silhouette: gray tinted thumbnail at low alpha so kids can still
      // see the shape they're hunting for.
      this.add.image(x, y, object.key)
        .setDisplaySize(size - 18, size - 18)
        .setTint(0x161310)
        .setAlpha(0.22);

      // Small "?" mark
      this.add.text(x, y, '?', {
        fontFamily: UI_FONT, fontSize: '20px', color: '#8a7e64', stroke: '#1a1410', strokeThickness: 2
      }).setOrigin(0.5).setAlpha(0.55);
    }
  }
}
