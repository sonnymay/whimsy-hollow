import Phaser from 'phaser';
import { getPlayTarget, getCompletedSceneCount, levels } from '../data/levels.js';
import { getCompletedCaseCount, cases } from '../data/campaign.js';
import { createPillButton } from '../ui/Button.js';
import { setBackdrop } from '../ui/backdrop.js';
import { theme } from '../ui/theme.js';
import { clearLevelProgress } from '../data/storage.js';
import { playMusicForLevel, queueMusic } from '../audio/music.js';

const UI_FONT = theme.font;
const MASCOT_KEY = 'mailBirdMascot';
const MASCOT_PATH = 'assets/characters/mail_bird_mascot.png';

export class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  preload() {
    const playTarget = getPlayTarget();
    const playScene = playTarget.level;
    if (playScene) {
      this.loadImageOnce(playScene.background.key, playScene.background.path);
    }

    if (playScene?.id === 'restaurant-kitchen') {
      this.loadImageOnce('object-magic-recipe-card', 'assets/objects/magic_recipe_card.png');
    } else if (playScene?.id === 'whimsy-living-room') {
      this.loadImageOnce('object-purple-teapot', 'assets/objects/obj_purple_teapot.png');
    } else if (playScene?.id === 'cozy-dream-bedroom') {
      this.loadImageOnce('object-sleepy-cat', 'assets/objects/obj_sleepy_cat.png');
    } else if (playScene?.id === 'forest-bookshop') {
      this.loadImageOnce('object-bookshop-hourglass', 'assets/objects/bookshop_hourglass.png');
    }

    this.load.image(MASCOT_KEY, MASCOT_PATH);
    this.load.audio('clickSfx', 'assets/sounds/click.mp3');
    queueMusic(this, '__menu__');
  }

  create() {
    const { width, height } = this.scale;
    const playTarget = getPlayTarget();
    const playScene = playTarget.level;
    const completedCount = getCompletedSceneCount();
    const caseCount = getCompletedCaseCount();
    const allCasesDone = caseCount >= cases.length;
    const sceneLabel = playTarget.type === 'case'
      ? playTarget.case.title
      : (playScene.title.replace('Whimsy Hollow ', ''));
    const footerLabel = `${caseCount}/${cases.length} cases · ${completedCount}/${levels.length} places`;

    setBackdrop(playScene.background.path);
    playMusicForLevel(this, '__menu__');


    // Background scene image is the showpiece — let it breathe by removing
    // the heavy color washes and using a single soft vignette instead.
    const bgImg = this.add.image(width / 2, height / 2, playScene.background.key).setDisplaySize(width, height);
    // Gentle parallax-style drift so the title screen feels alive
    this.tweens.add({
      targets: bgImg,
      scaleX: bgImg.scaleX * 1.04,
      scaleY: bgImg.scaleY * 1.04,
      x: width / 2 + 12,
      duration: 8000,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
    this.add.rectangle(0, 0, width, height, 0x1a231d, 0.42).setOrigin(0);
    // Top + bottom vignette gradients for legible text contrast.
    const topGrad = this.add.graphics();
    topGrad.fillGradientStyle(0x12201a, 0x12201a, 0x12201a, 0x12201a, 0.85, 0.85, 0, 0);
    topGrad.fillRect(0, 0, width, 260);
    const botGrad = this.add.graphics();
    botGrad.fillGradientStyle(0x12201a, 0x12201a, 0x12201a, 0x12201a, 0, 0, 0.85, 0.85);
    botGrad.fillRect(0, height - 220, width, 220);

    // Top-right settings button
    createPillButton(this, {
      x: width - 70, y: 50,
      width: 60, height: 48,
      label: '⚙', fontSize: 22, radius: 24,
      onClick: () => this.scene.start('SettingsScene')
    });

    // Title — slightly tighter and warmer
    this.add.text(width / 2, 132, 'Whimsy Hollow', {
      fontFamily: UI_FONT,
      fontSize: '72px',
      color: '#fff4d6',
      stroke: '#2b1c12',
      strokeThickness: 8,
      shadow: { offsetX: 0, offsetY: 4, color: '#000', blur: 8, fill: true }
    }).setOrigin(0.5);

    this.add.text(width / 2, 196, 'No timer. Just tiny treasures.', {
      fontFamily: UI_FONT,
      fontSize: '22px',
      color: '#f2ead0',
      stroke: '#1b2a22',
      strokeThickness: 3
    }).setOrigin(0.5).setAlpha(0.92);

    // "Continue" card — a single bold focal point with the next scene/case label
    const cardW = 460;
    const cardH = 168;
    const cardCx = width / 2;
    const cardCy = 358;
    const cardShadow = this.add.graphics();
    cardShadow.fillStyle(0x000000, 0.32);
    cardShadow.fillRoundedRect(cardCx - cardW / 2, cardCy - cardH / 2 + 8, cardW, cardH, 24);
    const cardBg = this.add.graphics();
    cardBg.fillStyle(0xfff7e3, 0.96);
    cardBg.fillRoundedRect(cardCx - cardW / 2, cardCy - cardH / 2, cardW, cardH, 24);
    cardBg.lineStyle(2.5, 0xc9a96e, 0.6);
    cardBg.strokeRoundedRect(cardCx - cardW / 2, cardCy - cardH / 2, cardW, cardH, 24);

    this.add.text(cardCx, cardCy - cardH / 2 + 32,
      playTarget.type === 'case' ? 'Next case' : (completedCount > 0 ? 'Continue' : 'Begin'),
      {
        fontFamily: UI_FONT,
        fontSize: '16px',
        color: '#9a8568'
      }
    ).setOrigin(0.5);

    this.add.text(cardCx, cardCy - 4, sceneLabel, {
      fontFamily: UI_FONT,
      fontSize: '28px',
      color: '#4a3a26',
      align: 'center',
      wordWrap: { width: cardW - 48, useAdvancedWrap: true }
    }).setOrigin(0.5);

    if (!allCasesDone && playTarget.type === 'case') {
      this.add.text(cardCx, cardCy + 32,
        `Case ${caseCount + 1} of ${cases.length} · ${playTarget.case.client}`,
        { fontFamily: UI_FONT, fontSize: '14px', color: '#7a6a52' }
      ).setOrigin(0.5);
    } else if (!allCasesDone) {
      this.add.text(cardCx, cardCy + 32,
        `${completedCount}/${levels.length} places visited`,
        { fontFamily: UI_FONT, fontSize: '14px', color: '#7a6a52' }
      ).setOrigin(0.5);
    }

    // Primary CTA button — single warm sun-cream pill, the obvious next action
    createPillButton(this, {
      x: cardCx, y: cardCy + cardH / 2 + 44,
      width: 280, height: 72,
      label: completedCount === 0 ? 'Begin' : 'Play',
      fontSize: 28, radius: 36,
      color: theme.color.primary,
      hoverColor: theme.color.primaryHover,
      textColor: 0xfff7e3,
      onClick: () => {
        // Direct hand-off — the destination scene's own fadeIn covers the
        // transition. Don't chain on `camerafadeoutcomplete` here because
        // the event can silently miss (e.g., double-click, paused timer,
        // stale FX state) and leave the player on a black screen.
        if (this.cameras?.main?.resetFX) {
          try { this.cameras.main.resetFX(); } catch (_) { /* ignore */ }
        }
        if (playTarget.type === 'case') {
          this.scene.start('CampaignScene', {
            caseId: playTarget.case.id,
            mode: 'intro',
            returnTo: 'MenuScene'
          });
        } else {
          this.scene.start('LoadingScene', {
            targetScene: 'GameScene',
            targetData: { levelId: playScene.id },
            message: `Opening ${sceneLabel}...`
          });
        }
      }
    });

    // Secondary actions: Places / Office / Sticker Book — uniform row
    const secY = cardCy + cardH / 2 + 130;
    const secW = 168;
    const secH = 50;
    const secGap = 16;
    const secLabels = [
      { label: 'Places',  onClick: () => this.scene.start('BrowseScene', { returnTo: 'MenuScene' }) },
      { label: 'Office',  onClick: () => this.scene.start('HubScene') },
      { label: 'Stickers', onClick: () => this.scene.start('DeskScene') }
    ];
    const totalSecW = secLabels.length * secW + (secLabels.length - 1) * secGap;
    let secX = width / 2 - totalSecW / 2 + secW / 2;
    for (const item of secLabels) {
      createPillButton(this, {
        x: secX, y: secY,
        width: secW, height: secH,
        label: item.label, fontSize: 17, radius: 25,
        onClick: item.onClick
      });
      secX += secW + secGap;
    }

    // Footer progress label
    this.add.text(width / 2, height - 32, footerLabel, {
      fontFamily: UI_FONT,
      fontSize: '15px',
      color: '#eadfc0',
      stroke: '#16251e',
      strokeThickness: 2
    }).setOrigin(0.5).setAlpha(0.9);

    this.add.text(width - 16, height - 12, 'v1.0.0', {
      fontFamily: UI_FONT,
      fontSize: '12px',
      color: '#cfc0a4',
      stroke: '#16251e',
      strokeThickness: 2
    }).setOrigin(1, 1).setAlpha(0.75);
  }

  createPlaceDots(centerX, y, nextId) {
    const completed = loadCompletedSceneIds();
    const maxRowW = 1160;
    const gap = levels.length > 10 ? 10 : 18;
    const dotW = Math.max(72, Math.min(110, Math.floor((maxRowW - (levels.length - 1) * gap) / levels.length)));
    const dotH = Math.max(52, Math.round(dotW * 0.64));
    const badgeFontSize = dotW < 90 ? 13 : 15;
    const totalW = levels.length * dotW + (levels.length - 1) * gap;
    const startX = centerX - totalW / 2 + dotW / 2;

    levels.forEach((level, i) => {
      const x = startX + i * (dotW + gap);
      const isDone = completed.has(level.id);
      const isNext = level.id === nextId;
      const frameColor = isNext ? 0xffd86f : (isDone ? 0xcabfa8 : 0xfff4d6);

      // Shadow
      const shadow = this.add.graphics();
      shadow.fillStyle(0x2b1c12, 0.28);
      shadow.fillRoundedRect(x - dotW / 2, y - dotH / 2 + 5, dotW, dotH, 14);

      // Cream backplate so the thumbnail reads well
      const back = this.add.graphics();
      back.fillStyle(0xfff4d6, 0.95);
      back.fillRoundedRect(x - dotW / 2, y - dotH / 2, dotW, dotH, 14);

      // Thumbnail — only if texture is already loaded; otherwise show name
      let thumb = null;
      if (this.textures.exists(level.background.key)) {
        thumb = this.add.image(x, y, level.background.key)
          .setDisplaySize(dotW - 10, dotH - 14);
        if (isDone) thumb.setTint(0xb8b0a0).setAlpha(0.7);
      } else {
        // Name fallback so we don't show a green "missing texture" rect
        const shortName = level.title.replace('Whimsy Hollow ', '');
        this.add.text(x, y, shortName, {
          fontFamily: UI_FONT,
          fontSize: `${Math.max(11, Math.min(14, Math.floor(dotW / 8)))}px`,
          color: '#4a3a26',
          align: 'center',
          wordWrap: { width: dotW - 14, useAdvancedWrap: true }
        }).setOrigin(0.5);
      }

      // Outline
      const frame = this.add.graphics();
      frame.lineStyle(isNext ? 4 : 3, frameColor, 0.95);
      frame.strokeRoundedRect(x - dotW / 2, y - dotH / 2, dotW, dotH, 14);

      // Status badge under the dot
      const badge = isDone ? '✓ Done' : (isNext ? '★ Next' : 'Tap');
      this.add.text(x, y + dotH / 2 + 16, badge, {
        fontFamily: UI_FONT,
        fontSize: `${badgeFontSize}px`,
        color: isDone ? '#bdf3d3' : (isNext ? '#ffe09a' : '#f2ead0'),
        stroke: '#2b2018',
        strokeThickness: 3
      }).setOrigin(0.5);

      // Click target
      const hit = this.add.zone(x, y, dotW, dotH + 32).setInteractive({ useHandCursor: true });
      hit.on('pointerover', () => { if (thumb) thumb.setDisplaySize(dotW - 4, dotH - 8); });
      hit.on('pointerout', () => { if (thumb) thumb.setDisplaySize(dotW - 10, dotH - 14); });
      hit.on('pointerdown', () => {
        // Only wipe progress for completed levels (replay). In-progress
        // levels resume where the player left off.
        if (completed.has(level.id)) {
          clearLevelProgress(level);
        }
        this.scene.start('LoadingScene', {
          targetScene: 'GameScene',
          targetData: { levelId: level.id },
          message: `Opening ${level.title.replace('Whimsy Hollow ', '')}...`
        });
      });
    });
  }

  loadImageOnce(key, path) {
    if (!this.textures.exists(key)) {
      this.load.image(key, path);
    }
  }

  createMenuPreview(x, y, levelId) {
    if (!['restaurant-kitchen', 'whimsy-living-room', 'cozy-dream-bedroom', 'forest-bookshop'].includes(levelId)) {
      return;
    }

    const shadow = this.add.ellipse(x, y + 42, 54, 14, 0x2d1d12, 0.28);
    const textureKeyByLevel = {
      'restaurant-kitchen': 'object-magic-recipe-card',
      'whimsy-living-room': 'object-purple-teapot',
      'cozy-dream-bedroom': 'object-sleepy-cat',
      'forest-bookshop': 'object-bookshop-hourglass'
    };
    const textureKey = textureKeyByLevel[levelId];
    const card = this.add.image(x, y + 4, textureKey)
      .setScale(levelId === 'restaurant-kitchen' ? 0.11 : (levelId === 'forest-bookshop' ? 0.09 : 0.07))
      .setRotation(-0.08);

    this.tweens.add({
      targets: [shadow, card],
      y: '-=5',
      duration: 1100,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }

  drawMascot(x, y, scale) {
    const mascot = this.add.container(x, y).setScale(scale);
    const shadow = this.add.ellipse(0, 55, 118, 24, 0x3d2a1d, 0.22);
    const image = this.add.image(0, -8, MASCOT_KEY)
      .setDisplaySize(148, 148);
    const bubbleParts = [
      this.add.circle(-120, -106, 34, 0x4a321c, 0.22),
      this.add.circle(-24, -106, 34, 0x4a321c, 0.22),
      this.add.rectangle(-72, -106, 96, 68, 0x4a321c, 0.22),
      this.add.circle(-120, -114, 32, 0xfffbf1, 0.98).setStrokeStyle(5, 0xff9fbd),
      this.add.circle(-24, -114, 32, 0xfffbf1, 0.98).setStrokeStyle(5, 0xff9fbd),
      this.add.rectangle(-72, -114, 96, 64, 0xfffbf1, 0.98),
      this.add.triangle(-42, -82, -16, -84, -5, -54, -40, -82, 0xfffbf1, 0.98)
    ];
    const text = this.add.text(-72, -114, 'Hi!', {
      fontFamily: UI_FONT,
      fontSize: '34px',
      color: '#35291d'
    }).setOrigin(0.5);
    mascot.add([shadow, image, ...bubbleParts, text]);

    this.tweens.add({
      targets: mascot,
      y: y - 10,
      duration: 900,
      yoyo: true,
      repeat: -1,
      ease: 'Sine.easeInOut'
    });
  }
}
