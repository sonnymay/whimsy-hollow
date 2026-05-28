import Phaser from 'phaser';
import { LoadingScene } from './scenes/LoadingScene.js';
import { MenuScene } from './scenes/MenuScene.js';
import { GameScene } from './scenes/GameScene.js';
import { WinScene } from './scenes/WinScene.js';
import { DeskScene } from './scenes/DeskScene.js';
import { SettingsScene } from './scenes/SettingsScene.js';
import { PauseScene } from './scenes/PauseScene.js';
import { BrowseScene } from './scenes/BrowseScene.js';
import { HubScene } from './scenes/HubScene.js';
import { CampaignScene } from './scenes/CampaignScene.js';
import './styles.css';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 1280,
  height: 720,
  backgroundColor: '#1a231d',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [LoadingScene, MenuScene, CampaignScene, GameScene, WinScene, DeskScene, SettingsScene, PauseScene, BrowseScene, HubScene],
  audio: {
    disableWebAudio: false
  }
};

const game = new Phaser.Game(config);

// Dev-only handle for debugging/automation. Vite strips this branch from
// production builds (import.meta.env.DEV is false there).
if (import.meta.env.DEV) {
  window.__WH_GAME__ = game;
}

// Log uncaught errors so we can surface them in the console, but do NOT
// auto-bounce to MenuScene — that turned out to mask real bugs by
// hijacking benign asset/audio load warnings and dumping the player back
// to the title screen mid-transition.
window.addEventListener('error', (e) => {
  console.error('[whimsy-hollow] Uncaught error:', e?.message, e?.error);
});
window.addEventListener('unhandledrejection', (e) => {
  console.error('[whimsy-hollow] Unhandled rejection:', e?.reason);
});

// Toggle Fullscreen on F11 key
window.addEventListener('keydown', async (e) => {
  if (e.key === 'F11') {
    e.preventDefault();
    try {
      if (window.__TAURI_INTERNALS__) {
        const { getCurrentWindow } = await import('@tauri-apps/api/window');
        const appWindow = getCurrentWindow();
        const isFullscreen = await appWindow.isFullscreen();
        await appWindow.setFullscreen(!isFullscreen);
      } else {
        // Fallback for standard browser
        if (!document.fullscreenElement) {
          await document.documentElement.requestFullscreen();
        } else {
          if (document.exitFullscreen) {
            await document.exitFullscreen();
          }
        }
      }
    } catch (err) {
      console.error('Failed to toggle fullscreen:', err);
    }
  }
});
