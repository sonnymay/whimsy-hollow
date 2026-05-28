import Phaser from 'phaser';
import { getCaseById } from '../data/campaign.js';
import { cases } from '../data/campaign.js';
import { getLevelById } from '../data/levels.js';
import { createPillButton } from '../ui/Button.js';
import { theme } from '../ui/theme.js';
import { loadCaseOnboardingDone, saveCaseOnboardingDone } from '../data/storage.js';

const UI_FONT = theme.font;

/**
 * Case intro / outro cards before or after a hero level.
 */
export class CampaignScene extends Phaser.Scene {
  constructor() {
    super('CampaignScene');
  }

  init(data = {}) {
    this.caseId = data.caseId;
    this.mode = data.mode ?? 'intro';
    this.returnTo = data.returnTo ?? 'MenuScene';
  }

  preload() {
    const caseDef = getCaseById(this.caseId);
    const level = caseDef ? getLevelById(caseDef.levelId) : null;
    if (level?.background?.path) {
      this.load.image(level.background.key, level.background.path);
    }
  }

  create() {
    const { width, height } = this.scale;
    const caseDef = getCaseById(this.caseId);
    if (!caseDef) {
      this.scene.start(this.returnTo);
      return;
    }

    const level = getLevelById(caseDef.levelId);
    if (level?.background?.key) {
      this.add.image(width / 2, height / 2, level.background.key).setDisplaySize(width, height);
      this.add.rectangle(0, 0, width, height, 0x1a231d, 0.62).setOrigin(0);
    } else {
      this.add.rectangle(0, 0, width, height, 0x2b4c3a).setOrigin(0);
    }

    const cardW = 720;
    const cardH = 440;
    const cardX = width / 2 - cardW / 2;
    const cardY = height / 2 - cardH / 2;

    // Drop shadow + cream card matching the menu/win/settings family
    const cardShadow = this.add.graphics();
    cardShadow.fillStyle(0x000000, 0.32);
    cardShadow.fillRoundedRect(cardX, cardY + 8, cardW, cardH, 28);
    const card = this.add.graphics();
    card.fillStyle(0xfff7e3, 0.97);
    card.fillRoundedRect(cardX, cardY, cardW, cardH, 28);
    card.lineStyle(2.5, 0xc9a96e, 0.55);
    card.strokeRoundedRect(cardX, cardY, cardW, cardH, 28);

    // Eyebrow label — small, muted, sets context
    const eyebrow = this.mode === 'outro' ? 'CASE CLOSED' : `CASE ${this.getCaseIndex(caseDef.id) + 1}`;
    this.add.text(width / 2, cardY + 42, eyebrow, {
      fontFamily: UI_FONT,
      fontSize: '14px',
      color: '#9a8568',
      letterSpacing: 4
    }).setOrigin(0.5);

    this.add.text(width / 2, cardY + 80, caseDef.title, {
      fontFamily: UI_FONT,
      fontSize: '34px',
      color: '#4a3a26'
    }).setOrigin(0.5);

    this.add.text(width / 2, cardY + 118, `Client: ${caseDef.client}`, {
      fontFamily: UI_FONT,
      fontSize: '17px',
      color: '#7a6a52'
    }).setOrigin(0.5);

    // Divider
    const divider = this.add.graphics();
    divider.lineStyle(1, 0xc9a96e, 0.32);
    divider.lineBetween(cardX + 80, cardY + 148, cardX + cardW - 80, cardY + 148);

    const lines = this.mode === 'outro' ? caseDef.outro : caseDef.intro;
    let lineY = cardY + 178;
    for (const line of lines) {
      this.add.text(width / 2, lineY, line, {
        fontFamily: UI_FONT,
        fontSize: '17px',
        color: '#4a3a26',
        align: 'center',
        wordWrap: { width: cardW - 80 }
      }).setOrigin(0.5, 0);
      lineY += 34;
    }

    if (this.mode === 'intro' && caseDef.id === 'case-1-mail' && !loadCaseOnboardingDone()) {
      this.add.text(width / 2, cardY + cardH - 88, 'Tap List for clues · Find grey spirits for riddles · No timer', {
        fontFamily: UI_FONT,
        fontSize: '14px',
        color: '#6a5a48',
        align: 'center',
        wordWrap: { width: cardW - 48 }
      }).setOrigin(0.5);
    }

    let btnLabel;
    if (this.mode === 'outro') {
      const idx = this.getCaseIndex(caseDef.id);
      const hasNextCase = idx >= 0 && idx + 1 < cases.length;
      btnLabel = hasNextCase ? 'Next case →' : 'Done';
    } else {
      btnLabel = 'Start searching';
    }
    createPillButton(this, {
      x: width / 2,
      y: cardY + cardH - 48,
      width: 280,
      height: 60,
      label: btnLabel,
      fontSize: 22,
      radius: 30,
      color: theme.color.primary,
      hoverColor: theme.color.primaryHover,
      textColor: 0xfff7e3,
      onClick: () => this.onPrimary()
    });

    if (this.mode === 'intro') {
      createPillButton(this, {
        x: width / 2 - 180,
        y: cardY + cardH - 48,
        width: 120,
        height: 48,
        label: 'Back',
        fontSize: 18,
        onClick: () => this.scene.start(this.returnTo)
      });
    }
  }

  getCaseIndex(caseId) {
    return cases.findIndex((c) => c.id === caseId);
  }

  onPrimary() {
    const caseDef = getCaseById(this.caseId);
    if (!caseDef) {
      this.scene.start(this.returnTo);
      return;
    }

    if (this.mode === 'outro') {
      // Chain directly into the next case's intro instead of dumping the
      // player back to the menu where they have to click Play again.
      const idx = this.getCaseIndex(caseDef.id);
      const nextCase = idx >= 0 ? cases[idx + 1] : null;
      if (nextCase) {
        this.scene.start('CampaignScene', {
          caseId: nextCase.id,
          mode: 'intro',
          returnTo: this.returnTo
        });
        return;
      }
      this.scene.start(this.returnTo);
      return;
    }

    if (caseDef.id === 'case-1-mail') {
      saveCaseOnboardingDone();
    }

    this.scene.start('LoadingScene', {
      targetScene: 'GameScene',
      targetData: { levelId: caseDef.levelId },
      message: `Opening ${caseDef.title}...`
    });
  }
}
