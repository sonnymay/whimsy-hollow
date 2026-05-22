import Phaser from 'phaser';
import { getLevelById, getNextLevel, mailGarden, markSceneComplete, loadCompletedSceneIds, levels } from '../data/levels.js';
import { createPillButton } from '../ui/Button.js';
import { setBackdrop } from '../ui/backdrop.js';
import { theme } from '../ui/theme.js';
import { addCoins, addReputation } from '../data/storage.js';

const UI_FONT = theme.font;

export class WinScene extends Phaser.Scene {
  constructor() {
    super('WinScene');
    this.level = mailGarden;
  }

  init(data = {}) {
    this.level = getLevelById(data.levelId);
  }

  preload() {
    this.load.image(this.level.background.key, this.level.background.path);
  }

  create() {
    const { width, height } = this.scale;
    const nextLevel = getNextLevel(this.level.id);

    const completed = loadCompletedSceneIds();
    const isFirstTime = !completed.has(this.level.id);

    markSceneComplete(this.level.id);

    // Determine rewards by difficulty/index
    const levelIndex = levels.findIndex((l) => l.id === this.level.id);
    let baseCoins = 100;
    let baseRep = 50;
    if (levelIndex >= 24) {
      baseCoins = 200;
      baseRep = 100;
    } else if (levelIndex >= 12) {
      baseCoins = 150;
      baseRep = 75;
    }

    let earnedCoins = 0;
    let earnedRep = 0;

    if (isFirstTime) {
      earnedCoins += baseCoins;
      earnedRep += baseRep;
      addCoins(baseCoins);
      addReputation(baseRep);
    }


    const bonusCount = this.loadBonusCount();
    if (bonusCount > 0) {
      earnedCoins += bonusCount * 20;
      addCoins(bonusCount * 20);
    }

    setBackdrop(this.level.background.path);
    this.add.image(width / 2, height / 2, this.level.background.key).setDisplaySize(width, height);
    this.add.rectangle(0, 0, width, height, 0x17130f, 0.46).setOrigin(0);
    this.add.rectangle(width / 2, height / 2, 620, 420, 0x172820, 0.78)
      .setStrokeStyle(3, 0xf0d27d, 0.74);
    this.add.circle(width / 2, 200, 138, 0xf8d77d, 0.18);

    this.add.text(width / 2, 168, 'All Found!', {
      fontFamily: UI_FONT,
      fontSize: '62px',
      color: '#fff4cf',
      stroke: '#473222',
      strokeThickness: 7
    }).setOrigin(0.5);

    this.add.text(width / 2, 258, nextLevel ? `Next: ${nextLevel.title}` : 'Great job!', {
      fontFamily: UI_FONT,
      fontSize: '28px',
      color: '#d8ead7'
    }).setOrigin(0.5);

    // Coins & Reputation earned text
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

    this.add.text(width / 2, 305, rewardsText, {
      fontFamily: UI_FONT,
      fontSize: '24px',
      color: '#ffe1a0',
      stroke: '#281c12',
      strokeThickness: 3
    }).setOrigin(0.5);

    this.add.text(width / 2, 345, `${this.getBonusLabel()} found: ${bonusCount}/${this.level.bonusEnvelopes.length}`, {
      fontFamily: UI_FONT,
      fontSize: '18px',
      color: '#b8ccb7'
    }).setOrigin(0.5);

    const btnLabel = nextLevel ? 'Next Place' : 'My Finds';
    const btnAction = nextLevel 
      ? () => this.startNextLevel(nextLevel)
      : () => this.scene.start('DeskScene', { levelId: this.level.id });

    createPillButton(this, {
      x: width / 2 - 200, y: 432,
      width: 160, height: 60,
      label: btnLabel, fontSize: 22, radius: 30,
      onClick: btnAction
    });

    createPillButton(this, {
      x: width / 2, y: 432,
      width: 160, height: 60,
      label: 'Again', fontSize: 22, radius: 30,
      onClick: () => {
        window.localStorage.removeItem(this.level.saveKey);
        window.localStorage.removeItem(this.level.bonusSaveKey);
        this.scene.start('GameScene', { levelId: this.level.id });
      }
    });

    createPillButton(this, {
      x: width / 2 + 200, y: 432,
      width: 160, height: 60,
      label: 'Home', fontSize: 22, radius: 30,
      onClick: () => this.scene.start('MenuScene')
    });
  }

  startNextLevel(nextLevel) {
    window.localStorage.removeItem(nextLevel.saveKey);
    window.localStorage.removeItem(nextLevel.bonusSaveKey);
    this.scene.start('LoadingScene', {
      targetScene: 'GameScene',
      targetData: { levelId: nextLevel.id },
      message: `Opening ${nextLevel.title}...`
    });
  }



  loadBonusCount() {
    try {
      const value = window.localStorage.getItem(this.level.bonusSaveKey);
      const parsed = value ? JSON.parse(value) : [];
      return Array.isArray(parsed) ? parsed.length : 0;
    } catch {
      return 0;
    }
  }

  getBonusLabel() {
    return this.level.bonusLabel ?? 'Notes';
  }
}
