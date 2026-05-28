import Phaser from 'phaser';
import { levels, loadCompletedSceneIds, getFirstUnfinishedLevel } from '../data/levels.js';
import { createPillButton } from '../ui/Button.js';
import { theme } from '../ui/theme.js';
import { loadReputation, clearLevelProgress } from '../data/storage.js';

const UI_FONT = theme.font;


/**
 * Scrollable grid of every scene in the game. Replaces the title-screen
 * place-dot row that didn't scale past ~6 levels.
 *
 * Cards render the level's background as a thumbnail when its texture is
 * already loaded (typically the active "Next" scene, which MenuScene
 * preloaded). Other cards show a cream name card until the player visits
 * them; this keeps the boot-time download tiny even at 20+ levels.
 *
 * Tapping any card always clears that scene's save and starts fresh —
 * avoids the old PlacesScene trap of opening a completed 10/10 scene.
 */
export class BrowseScene extends Phaser.Scene {
  constructor() {
    super('BrowseScene');
  }

  init(data = {}) {
    this.returnTo = data.returnTo ?? 'MenuScene';
  }

  preload() {
    if (!this.cache.audio.exists('wrongSfx')) {
      this.load.audio('wrongSfx', 'assets/sounds/wrong.mp3');
    }
  }

  create() {
    const { width, height } = this.scale;
    // Background wash — warmer, less muddy
    this.add.rectangle(0, 0, width, height, 0x1f2a23).setOrigin(0);
    this.add.rectangle(0, 0, width, height, 0xfff2cf, 0.06).setOrigin(0).setBlendMode(Phaser.BlendModes.SCREEN);
    this.add.circle(1080, 130, 240, 0xffd1dc, 0.08);
    this.add.circle(220, 600, 200, 0x9de3ff, 0.08);

    // Header
    this.add.text(width / 2, 56, 'Places', {
      fontFamily: UI_FONT,
      fontSize: '44px',
      color: '#fff4d6',
      stroke: '#2b2018',
      strokeThickness: 5
    }).setOrigin(0.5);

    const completed = loadCompletedSceneIds();
    const next = getFirstUnfinishedLevel();
    const total = levels.length;
    // Progress chip instead of plain text
    const chipW = 320;
    const chipH = 26;
    const chipY = 100;
    const chipBg = this.add.graphics();
    chipBg.fillStyle(0xfff7e3, 0.18);
    chipBg.fillRoundedRect(width / 2 - chipW / 2, chipY - chipH / 2, chipW, chipH, 13);
    this.add.text(width / 2, chipY, `${completed.size} / ${total} found  ·  tap any place to play`, {
      fontFamily: UI_FONT,
      fontSize: '14px',
      color: '#fff4d6'
    }).setOrigin(0.5).setAlpha(0.92);

    // Scrollable grid region
    const gridTopY = 134;
    const footerH = 76;
    const viewableH = height - gridTopY - footerH;

    const cardW = 280;
    const cardH = 168;
    const cols = 4;
    const colGap = 16;
    const rowGap = 16;
    const rows = Math.ceil(total / cols);
    const gridW = cols * cardW + (cols - 1) * colGap;
    const startX = width / 2 - gridW / 2 + cardW / 2;
    const contentH = rows * cardH + (rows - 1) * rowGap;

    this.scrollContainer = this.add.container(0, 0);

    levels.forEach((level, i) => {
      const col = i % cols;
      const row = Math.floor(i / cols);
      const cx = startX + col * (cardW + colGap);
      const cy = gridTopY + row * (cardH + rowGap) + cardH / 2;
      this.drawPlaceCard(level, cx, cy, cardW, cardH, completed.has(level.id), next && next.id === level.id);
    });

    // Mask so cards don't bleed past header/footer
    this.scrollY = 0;
    this.maxScroll = Math.max(0, contentH - viewableH);
    this.scrollTopY = gridTopY;
    this.scrollViewH = viewableH;

    const maskShape = this.make.graphics({ add: false });
    maskShape.fillStyle(0xffffff);
    maskShape.fillRect(0, gridTopY, width, viewableH);
    this.scrollContainer.setMask(maskShape.createGeometryMask());

    // Wheel + drag scroll
    this.input.on('wheel', (_pointer, _objs, _dx, dy) => this.setScroll(this.scrollY + dy * 0.6));

    this.dragStart = null;
    this.input.on('pointerdown', (pointer) => {
      if (pointer.y < gridTopY || pointer.y > gridTopY + viewableH) return;
      this.dragStart = { y: pointer.y, scroll: this.scrollY, moved: 0 };
    });
    this.input.on('pointermove', (pointer) => {
      if (!this.dragStart || !pointer.isDown) return;
      const dy = this.dragStart.y - pointer.y;
      this.dragStart.moved = Math.max(this.dragStart.moved, Math.abs(dy));
      this.setScroll(this.dragStart.scroll + dy);
    });
    // Defer the global pointerup that nulls dragStart so card handlers can
    // inspect it first (Phaser fires listeners in registration order).
    this.input.on('pointerup', () => { this.time.delayedCall(0, () => { this.dragStart = null; }); });
    this.suppressClickIfDrag = () => this.dragStart && this.dragStart.moved > 8;
    this.requireSceneOwnedTap = () => this.dragStart !== null;

    // Scroll indicator
    if (this.maxScroll > 0) {
      this.add.graphics()
        .fillStyle(0xfff4d6, 0.12)
        .fillRoundedRect(width - 18, gridTopY + 4, 8, viewableH - 8, 4);
      this.scrollThumb = this.add.graphics();
      this.updateScrollThumb();
    }

    // Footer
    createPillButton(this, {
      x: width / 2, y: height - 36,
      width: 160, height: 50,
      label: 'Home', fontSize: 20, radius: 25,
      onClick: () => this.scene.start(this.returnTo)
    });
  }

  setScroll(value) {
    this.scrollY = Phaser.Math.Clamp(value, 0, this.maxScroll);
    this.scrollContainer.y = -this.scrollY;
    this.updateScrollThumb();
  }

  updateScrollThumb() {
    if (!this.scrollThumb || this.maxScroll <= 0) return;
    const { width } = this.scale;
    const trackH = this.scrollViewH - 8;
    const thumbH = Math.max(30, (this.scrollViewH / (this.scrollViewH + this.maxScroll)) * trackH);
    const thumbY = this.scrollTopY + 4 + (this.scrollY / this.maxScroll) * (trackH - thumbH);
    this.scrollThumb.clear();
    this.scrollThumb.fillStyle(0xfff4d6, 0.35);
    this.scrollThumb.fillRoundedRect(width - 18, thumbY, 8, thumbH, 4);
  }

  drawPlaceCard(level, cx, cy, w, h, isDone, isNext) {
    // Determine locks by difficulty and reputation
    const levelIndex = levels.findIndex((l) => l.id === level.id);
    let requiredRep = 0;
    let difficulty = 'Easy';
    if (levelIndex >= 24) {
      difficulty = 'Hard';
      requiredRep = 800;
    } else if (levelIndex >= 12) {
      difficulty = 'Medium';
      requiredRep = 300;
    }
    const currentRep = loadReputation();
    const isLocked = currentRep < requiredRep;

    // Drop shadow
    const shadow = this.add.graphics();
    shadow.fillStyle(0x1a140d, 0.34);
    shadow.fillRoundedRect(cx - w / 2 + 3, cy - h / 2 + 6, w, h, 18);
    this.scrollContainer.add(shadow);

    // Card body
    const card = this.add.graphics();
    if (isLocked) {
      card.fillStyle(0x3a3630, 0.95); // Dark gray for locked
    } else {
      card.fillStyle(isDone ? 0xe8efd6 : 0xfff0d4, 0.95);
    }
    card.fillRoundedRect(cx - w / 2, cy - h / 2, w, h, 18);
    card.lineStyle(isNext && !isLocked ? 4 : 2, isLocked ? 0x5a5044 : (isNext ? 0xffd86f : (isDone ? 0xcabfa8 : 0xd9b673)), 0.85);
    card.strokeRoundedRect(cx - w / 2, cy - h / 2, w, h, 18);
    this.scrollContainer.add(card);

    // Thumbnail if texture is loaded, else placeholder bg
    const thumbY = cy - 16;
    const thumbW = w - 28;
    const thumbH = h - 70;
    if (this.textures.exists(level.background.key)) {
      const thumb = this.add.image(cx, thumbY, level.background.key)
        .setDisplaySize(thumbW, thumbH);
      if (isLocked) {
        thumb.setTint(0x4a4a4a).setAlpha(0.5); // very dark/tinted for locked
      } else if (isDone) {
        thumb.setTint(0xb8b0a0).setAlpha(0.7);
      }
      this.scrollContainer.add(thumb);
    } else {
      // Soft painterly tint placeholder so it doesn't feel empty
      const ph = this.add.graphics();
      if (isLocked) {
        ph.fillGradientStyle(0x5a5044, 0x5a5044, 0x302a24, 0x302a24, 1);
      } else {
        ph.fillGradientStyle(0xfde4b3, 0xfde4b3, 0xc9b48a, 0xc9b48a, 1);
      }
      ph.fillRoundedRect(cx - thumbW / 2, thumbY - thumbH / 2, thumbW, thumbH, 10);
      this.scrollContainer.add(ph);
    }

    // Name
    const title = level.title.replace('Whimsy Hollow ', '');
    const nameText = this.add.text(cx, cy + h / 2 - 36, title, {
      fontFamily: UI_FONT,
      fontSize: '18px',
      color: isLocked ? '#998d7d' : '#4a3a26',
      align: 'center',
      wordWrap: { width: w - 24, useAdvancedWrap: true }
    }).setOrigin(0.5);
    this.scrollContainer.add(nameText);

    // Status badge
    let badge = isDone ? '✓ Done' : (isNext ? '★ Next' : 'Tap');
    let badgeColor = isDone ? '#7eb58a' : (isNext ? '#a67a1e' : '#7a6750');
    if (isLocked) {
      badge = `Locked · ${requiredRep} rep`;
      badgeColor = '#d6827e';
    }
    const badgeText = this.add.text(cx, cy + h / 2 - 12, badge, {
      fontFamily: UI_FONT, fontSize: '13px', color: badgeColor
    }).setOrigin(0.5);
    this.scrollContainer.add(badgeText);

    // Click target
    const hit = this.add.zone(cx, cy, w, h).setInteractive({ useHandCursor: true });
    hit.on('pointerup', () => {
      // Ignore the carry-over pointerup from MenuScene's Places button —
      // a real tap on a card requires a pointerdown to have fired in
      // THIS scene first (which sets dragStart via the global handler).
      if (!this.requireSceneOwnedTap()) return;
      if (this.suppressClickIfDrag && this.suppressClickIfDrag()) return;

      if (isLocked) {
        if (this.cache.audio.exists('wrongSfx')) {
          this.sound.play('wrongSfx', { volume: 0.3 });
        }
        // Flash text on screen
        const lockMsg = this.add.text(cx, cy, `Requires ${requiredRep} Rep!`, {
          fontFamily: UI_FONT, fontSize: '20px', color: '#ff7777', stroke: '#000000', strokeThickness: 4
        }).setOrigin(0.5);
        this.tweens.add({
          targets: lockMsg,
          y: cy - 30,
          alpha: 0,
          duration: 1200,
          onComplete: () => lockMsg.destroy()
        });
        return;
      }

      clearLevelProgress(level);
      this.scene.start('LoadingScene', {
        targetScene: 'GameScene',
        targetData: { levelId: level.id },
        message: `Opening ${title}...`
      });
    });
    this.scrollContainer.add(hit);
  }

}
