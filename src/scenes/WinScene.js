import Phaser from 'phaser';
import { getLevelById, getNextLevel, mailGarden, markSceneComplete, levels } from '../data/levels.js';
import { getCaseForLevel, markCaseComplete, getNextCase } from '../data/campaign.js';
import { createPillButton } from '../ui/Button.js';
import { setBackdrop } from '../ui/backdrop.js';
import { theme } from '../ui/theme.js';
import {
  addCoins,
  addReputation,
  loadBonusIds,
  clearLevelProgress,
  addHubUnlock,
  addOwnedFurniture,
  loadCompletedSceneIds
} from '../data/storage.js';

const UI_FONT = theme.font;

export class WinScene extends Phaser.Scene {
  constructor() {
    super('WinScene');
    this.level = mailGarden;
    this.optionalAllFound = false;
  }

  init(data = {}) {
    this.level = getLevelById(data.levelId);
    this.optionalAllFound = Boolean(data.optionalAllFound);
    if (!this.level) {
      console.error('[whimsy-hollow] WinScene: unknown levelId', data.levelId);
    }
  }

  preload() {
    if (!this.level) return;
    this.load.image(this.level.background.key, this.level.background.path);
  }

  create() {
    if (!this.level) {
      this.scene.start('MenuScene');
      return;
    }
    const { width, height } = this.scale;
    const caseDef = getCaseForLevel(this.level.id);
    const nextCase = getNextCase();
    const nextLevel = getNextLevel(this.level.id);

    const completed = loadCompletedSceneIds();
    const isFirstTime = !completed.has(this.level.id);
    markSceneComplete(this.level.id);

    if (caseDef && isFirstTime) {
      markCaseComplete(caseDef.id);
    }

    let earnedCoins = 0;
    let earnedRep = 0;

    const levelIndex = levels.findIndex((l) => l.id === this.level.id);
    let baseCoins = caseDef ? 120 : 100;
    let baseRep = caseDef ? 60 : 50;
    if (levelIndex >= 24) {
      baseCoins = 200;
      baseRep = 100;
    } else if (levelIndex >= 12) {
      baseCoins = 150;
      baseRep = 75;
    }

    if (isFirstTime) {
      earnedCoins += baseCoins;
      earnedRep += baseRep;
      addCoins(baseCoins);
      addReputation(baseRep);
    }

    const bonusCount = loadBonusIds(this.level).size;
    if (bonusCount > 0) {
      earnedCoins += bonusCount * 20;
      addCoins(bonusCount * 20);
    }

    if (this.optionalAllFound && caseDef) {
      earnedCoins += caseDef.optionalBonusCoins ?? 50;
      addCoins(caseDef.optionalBonusCoins ?? 50);
      if (caseDef.hubUnlock) {
        addHubUnlock(caseDef.hubUnlock);
        addOwnedFurniture(caseDef.hubUnlock);
      }
    }

    setBackdrop(this.level.background.path);
    this.add.image(width / 2, height / 2, this.level.background.key).setDisplaySize(width, height);
    this.add.rectangle(0, 0, width, height, 0x17130f, 0.56).setOrigin(0);

    const winCardW = 640;
    const winCardH = 460;
    const winShadow = this.add.graphics();
    winShadow.fillStyle(0x000000, 0.34);
    winShadow.fillRoundedRect(width / 2 - winCardW / 2, height / 2 - winCardH / 2 + 8, winCardW, winCardH, 28);
    const winBg = this.add.graphics();
    winBg.fillStyle(0xfff7e3, 0.97);
    winBg.fillRoundedRect(width / 2 - winCardW / 2, height / 2 - winCardH / 2, winCardW, winCardH, 28);
    winBg.lineStyle(3, 0xf2b35c, 0.7);
    winBg.strokeRoundedRect(width / 2 - winCardW / 2, height / 2 - winCardH / 2, winCardW, winCardH, 28);

    // Ribbon banner — sweeps in behind the headline
    const ribbonY = 178;
    const ribbonW = 520;
    const ribbonH = 76;
    const ribbon = this.add.container(width / 2, ribbonY).setDepth(5);
    const ribbonShadow = this.add.graphics();
    ribbonShadow.fillStyle(0x2b1c12, 0.32);
    ribbonShadow.fillRoundedRect(-ribbonW / 2, -ribbonH / 2 + 6, ribbonW, ribbonH, 14);
    const ribbonBg = this.add.graphics();
    ribbonBg.fillStyle(0xf2b35c, 1);
    ribbonBg.fillRoundedRect(-ribbonW / 2, -ribbonH / 2, ribbonW, ribbonH, 14);
    ribbonBg.lineStyle(2.5, 0xfff7e3, 0.85);
    ribbonBg.strokeRoundedRect(-ribbonW / 2, -ribbonH / 2, ribbonW, ribbonH, 14);
    // Ribbon tails — small triangles either side
    const leftTail = this.add.graphics();
    leftTail.fillStyle(0xc78535, 1);
    leftTail.fillTriangle(-ribbonW / 2, -ribbonH / 2, -ribbonW / 2 - 18, 0, -ribbonW / 2, ribbonH / 2);
    const rightTail = this.add.graphics();
    rightTail.fillStyle(0xc78535, 1);
    rightTail.fillTriangle(ribbonW / 2, -ribbonH / 2, ribbonW / 2 + 18, 0, ribbonW / 2, ribbonH / 2);
    ribbon.add([ribbonShadow, leftTail, rightTail, ribbonBg]);
    ribbon.setScale(0, 1).setAlpha(0);

    const headline = this.add.text(width / 2, ribbonY, 'All Found!', {
      fontFamily: UI_FONT,
      fontSize: '52px',
      color: '#fff7e3'
    }).setOrigin(0.5).setDepth(6).setAlpha(0);

    this.tweens.add({
      targets: ribbon,
      scaleX: 1,
      alpha: 1,
      duration: 480,
      ease: 'Back.easeOut'
    });
    this.tweens.add({
      targets: headline,
      alpha: 1,
      duration: 380,
      delay: 280,
      ease: 'Sine.easeOut'
    });

    // Confetti burst
    this.spawnConfetti(width / 2, ribbonY);

    const subtitle = caseDef
      ? (nextCase ? `Next case: ${nextCase.title}` : 'All hero cases done!')
      : (nextLevel ? `Next: ${nextLevel.title}` : 'Great job!');

    this.add.text(width / 2, 248, subtitle, {
      fontFamily: UI_FONT,
      fontSize: '22px',
      color: '#4a3a26',
      align: 'center',
      wordWrap: { width: 560 }
    }).setOrigin(0.5);

    let rewardsText = '';
    if (earnedCoins > 0 && earnedRep > 0) {
      rewardsText = `+${earnedCoins} 🪙   +${earnedRep} ⭐️`;
    } else if (earnedCoins > 0) {
      rewardsText = `+${earnedCoins} 🪙`;
    } else if (earnedRep > 0) {
      rewardsText = `+${earnedRep} ⭐️`;
    } else {
      rewardsText = 'No new rewards';
    }

    this.add.text(width / 2, 298, rewardsText, {
      fontFamily: UI_FONT,
      fontSize: '26px',
      color: '#b4811a',
      stroke: '#fff4d6',
      strokeThickness: 3
    }).setOrigin(0.5);

    if (this.optionalAllFound && caseDef?.hubUnlock) {
      this.add.text(width / 2, 332, 'Office unlock + bonus extras!', {
        fontFamily: UI_FONT,
        fontSize: '15px',
        color: '#668f6f'
      }).setOrigin(0.5);
    }

    this.add.text(width / 2, 360, `${this.getBonusLabel()} found: ${bonusCount}/${this.level.bonusEnvelopes.length}`, {
      fontFamily: UI_FONT,
      fontSize: '17px',
      color: '#7a6a52'
    }).setOrigin(0.5);

    createPillButton(this, {
      x: width / 2 - 200, y: 432,
      width: 180, height: 64,
      label: caseDef ? 'Continue →' : (nextLevel ? 'Next Place →' : 'My Finds'),
      fontSize: 20, radius: 32,
      color: theme.color.primary,
      hoverColor: theme.color.primaryHover,
      textColor: 0xfff7e3,
      onClick: () => {
        if (caseDef) {
          this.scene.start('CampaignScene', {
            caseId: caseDef.id,
            mode: 'outro',
            returnTo: 'MenuScene'
          });
        } else if (nextLevel) {
          this.startNextLevel(nextLevel);
        } else {
          this.scene.start('DeskScene', { levelId: this.level.id });
        }
      }
    });

    createPillButton(this, {
      x: width / 2, y: 432,
      width: 160, height: 60,
      label: 'Again', fontSize: 22, radius: 30,
      onClick: () => {
        clearLevelProgress(this.level);
        if (caseDef) {
          this.scene.start('CampaignScene', {
            caseId: caseDef.id,
            mode: 'intro',
            returnTo: 'MenuScene'
          });
        } else {
          this.scene.start('GameScene', { levelId: this.level.id });
        }
      }
    });

    createPillButton(this, {
      x: width / 2 + 200, y: 432,
      width: 160, height: 60,
      label: 'Home', fontSize: 22, radius: 30,
      onClick: () => this.scene.start('MenuScene')
    });

    // Auto-advance after the ribbon + confetti have played out. Longer
    // than the previous 1.4s so the player has time to savor the win.
    if (caseDef) {
      this.time.delayedCall(2400, () => {
        if (this.scene.isActive('WinScene')) {
          this.scene.start('CampaignScene', {
            caseId: caseDef.id,
            mode: 'outro',
            returnTo: 'MenuScene'
          });
        }
      });
    } else if (nextLevel) {
      this.time.delayedCall(2400, () => {
        if (this.scene.isActive('WinScene')) {
          this.startNextLevel(nextLevel);
        }
      });
    }
  }

  spawnConfetti(cx, cy) {
    const colors = [0xf2b35c, 0xbdf3d3, 0xffd1dc, 0xc7e9ff, 0xfff4d6, 0xffe7a3];
    const count = 28;
    for (let i = 0; i < count; i += 1) {
      const angle = (i / count) * Math.PI * 2;
      const speed = Phaser.Math.Between(140, 280);
      const dot = this.add.rectangle(
        cx, cy,
        Phaser.Math.Between(5, 9),
        Phaser.Math.Between(8, 12),
        Phaser.Math.RND.pick(colors),
        1
      ).setDepth(7).setRotation(Math.random() * Math.PI);
      const targetX = cx + Math.cos(angle) * speed;
      const targetY = cy + Math.sin(angle) * speed * 0.7 + 80;
      const lifeMs = Phaser.Math.Between(900, 1500);
      this.tweens.add({
        targets: dot,
        x: targetX,
        y: targetY,
        rotation: dot.rotation + (Math.random() * 4 - 2),
        alpha: 0,
        scaleX: 0.4,
        duration: lifeMs,
        ease: 'Cubic.easeOut',
        onComplete: () => dot.destroy()
      });
    }
  }

  startNextLevel(nextLevel) {
    clearLevelProgress(nextLevel);
    this.scene.start('LoadingScene', {
      targetScene: 'GameScene',
      targetData: { levelId: nextLevel.id },
      message: `Opening ${nextLevel.title}...`
    });
  }

  getBonusLabel() {
    return this.level.bonusLabel ?? 'Notes';
  }
}
