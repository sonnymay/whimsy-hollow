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
import './styles.css';

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 1280,
  height: 720,
  backgroundColor: '#263b35',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  scene: [LoadingScene, MenuScene, GameScene, WinScene, DeskScene, SettingsScene, PauseScene, BrowseScene, HubScene],
  audio: {
    disableWebAudio: false
  }
};

const game = new Phaser.Game(config);

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
