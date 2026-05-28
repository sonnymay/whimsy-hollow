import Phaser from 'phaser';
import { createPillButton, createStatusPill } from '../ui/Button.js';
import { theme } from '../ui/theme.js';
import {
  loadCoins,
  saveCoins,
  loadReputation,
  loadOwnedFurniture,
  addOwnedFurniture,
  loadPlacedFurniture,
  savePlacedFurniture,
  loadHubUnlocks
} from '../data/storage.js';
import { getCompletedCaseCount, cases } from '../data/campaign.js';

const UI_FONT = theme.font;

const FURNITURE_ITEMS = [
  { id: 'books', name: 'Cozy Books', key: 'furniture-books', asset: 'assets/objects/bookshop_stacked_books.png', price: 80 },
  { id: 'yarn', name: 'Dreamy Yarn', key: 'furniture-yarn', asset: 'assets/objects/obj_cozy_yarn_ball.png', price: 50 },
  { id: 'pillow', name: 'Moon Pillow', key: 'furniture-pillow', asset: 'assets/objects/obj_moon_pillow.png', price: 100 },
  { id: 'cat', name: 'Sleepy Cat', key: 'furniture-cat', asset: 'assets/objects/obj_sleepy_cat.png', price: 250 },
  { id: 'teddy', name: 'Teddy Bear', key: 'furniture-teddy', asset: 'assets/objects/obj_sleepy_teddy_bear.png', price: 150 },
  { id: 'teapot', name: 'Purple Teapot', key: 'furniture-teapot', asset: 'assets/objects/obj_purple_teapot.png', price: 90 },
  { id: 'kettle', name: 'Copper Kettle', key: 'furniture-kettle', asset: 'assets/objects/misty_herb_pantry_copper_kettle.png', price: 120 },
  { id: 'clock', name: 'Alarm Clock', key: 'furniture-clock', asset: 'assets/objects/obj_tiny_alarm_clock.png', price: 110 }
];

export class HubScene extends Phaser.Scene {
  constructor() {
    super('HubScene');
    this.placedSprites = [];
    this.selectedItem = null;
  }

  preload() {
    this.load.image('hubBackground', 'assets/backgrounds/scene_whimsy_livingroom_bg.webp');
    FURNITURE_ITEMS.forEach(f => {
      this.load.image(f.key, f.asset);
    });

    if (!this.cache.audio.exists('clickSfx')) {
      this.load.audio('clickSfx', 'assets/sounds/click.mp3');
    }
    if (!this.cache.audio.exists('bonusSfx')) {
      this.load.audio('bonusSfx', 'assets/sounds/bonus.mp3');
    }
    if (!this.cache.audio.exists('wrongSfx')) {
      this.load.audio('wrongSfx', 'assets/sounds/wrong.mp3');
    }
  }

  create() {
    const { width, height } = this.scale;
    // Room Background
    this.add.image(width / 2, height / 2, 'hubBackground').setDisplaySize(width, height);
    this.add.rectangle(width / 2, height / 2, width, height, 0xfff2cf, 0.08).setBlendMode(Phaser.BlendModes.SCREEN);

    // Setup visual containers
    this.placedGroup = this.add.group();
    this.loadPlacedItems();

    // Top HUD
    this.createTopHUD();

    // Bottom Action Buttons
    this.createBottomControls();
    this.createVisitor();

    // Shop modal & Inventory drawer references (initially hidden/inactive)
    this.shopActive = false;
    this.inventoryActive = false;

    // Global pointer down for deselecting items
    this.input.on('pointerdown', (pointer, gameObjects) => {
      // If we clicked on the background (no interactive objects or only background graphics)
      if (gameObjects.length === 0) {
        this.deselectCurrent();
      }
    });

    // Drag events for placing furniture
    this.input.on('drag', (pointer, gameObject, dragX, dragY) => {
      // Clamping coordinates to keep inside the room layout walls safely
      gameObject.x = Phaser.Math.Clamp(dragX, 100, 1180);
      gameObject.y = Phaser.Math.Clamp(dragY, 120, 600);

      // Reposition delete button overlay
      if (gameObject.deleteBtn) {
        gameObject.deleteBtn.x = gameObject.x + 40;
        gameObject.deleteBtn.y = gameObject.y - 40;
      }
    });

    this.input.on('dragend', () => {
      this.savePlacements();
    });
  }

  createTopHUD() {
    const { width } = this.scale;

    // Cream HUD shelf matching the menu/card language (was dark green)
    const hudBg = this.add.graphics();
    hudBg.fillStyle(0x2b1c12, 0.22);
    hudBg.fillRoundedRect(30, 24, width - 60, 64, 22);
    hudBg.fillStyle(0xfff7e3, 0.94);
    hudBg.fillRoundedRect(30, 20, width - 60, 64, 22);
    hudBg.lineStyle(2, 0xc9a96e, 0.5);
    hudBg.strokeRoundedRect(30, 20, width - 60, 64, 22);
    hudBg.setDepth(15);

    // Title label — sits on cream now, so dark text
    this.add.text(70, 52, 'My Cozy Office', {
      fontFamily: UI_FONT,
      fontSize: '24px',
      color: '#4a3a26'
    }).setOrigin(0, 0.5).setDepth(16);

    // Coins balance — warm sun chip
    this.coinsPill = createStatusPill(this, {
      x: width / 2 - 120,
      y: 52,
      width: 140,
      height: 40,
      label: `${loadCoins()} coins`,
      fontSize: 16,
      color: 0xffe7a3,
      textColor: 0x6a4323,
      depth: 16
    });

    // Reputation balance — leaf-green chip
    this.repPill = createStatusPill(this, {
      x: width / 2 + 30,
      y: 52,
      width: 140,
      height: 40,
      label: `${loadReputation()} rep`,
      fontSize: 16,
      color: 0xbdf3d3,
      textColor: 0x315642,
      depth: 16
    });

    // Navigation Home button
    createPillButton(this, {
      x: width - 110,
      y: 52,
      width: 120,
      height: 44,
      label: 'Home',
      fontSize: 18,
      radius: 22,
      onClick: () => {
        this.deselectCurrent();
        this.scene.start('MenuScene');
      },
      depth: 16
    });

    // Navigation Places button
    createPillButton(this, {
      x: width - 240,
      y: 52,
      width: 120,
      height: 44,
      label: 'Places',
      fontSize: 18,
      radius: 22,
      onClick: () => {
        this.deselectCurrent();
        this.scene.start('BrowseScene', { returnTo: 'HubScene' });
      },
      depth: 16
    });
  }

  createBottomControls() {
    const { width, height } = this.scale;

    // Cream bottom shelf with shadow
    const bar = this.add.graphics();
    bar.fillStyle(0x2b1c12, 0.22);
    bar.fillRoundedRect(width / 2 - 200, height - 70, 400, 60, 30);
    bar.fillStyle(0xfff7e3, 0.95);
    bar.fillRoundedRect(width / 2 - 200, height - 76, 400, 60, 30);
    bar.lineStyle(2, 0xc9a96e, 0.5);
    bar.strokeRoundedRect(width / 2 - 200, height - 76, 400, 60, 30);
    bar.setDepth(15);

    // Shop Button — amber primary
    this.shopBtn = createPillButton(this, {
      x: width / 2 - 90,
      y: height - 46,
      width: 150,
      height: 46,
      label: 'Shop',
      fontSize: 18,
      radius: 23,
      color: theme.color.primary,
      hoverColor: theme.color.primaryHover,
      textColor: 0xfff7e3,
      onClick: () => this.toggleShop(),
      depth: 16
    });

    // Inventory Drawer Button
    this.inventoryBtn = createPillButton(this, {
      x: width / 2 + 90,
      y: height - 46,
      width: 150,
      height: 46,
      label: 'Inventory',
      fontSize: 18,
      radius: 23,
      onClick: () => this.toggleInventory(),
      depth: 16
    });
  }

  loadPlacedItems() {
    // Clear any existing sprites
    this.placedSprites.forEach(s => {
      if (s.deleteBtn) s.deleteBtn.destroy();
      s.destroy();
    });
    this.placedSprites = [];

    const data = loadPlacedFurniture();
    data.forEach(item => {
      const fItem = FURNITURE_ITEMS.find(f => f.id === item.furnitureId);
      if (fItem) {
        this.spawnFurnitureSprite(fItem, item.x, item.y);
      }
    });
  }

  spawnFurnitureSprite(fItem, x, y) {
    const sprite = this.add.sprite(x, y, fItem.key)
      .setDisplaySize(96, 96)
      .setInteractive({ draggable: true, useHandCursor: true })
      .setDepth(10);

    sprite.furnitureId = fItem.id;

    // Outline / Selection highlight
    sprite.on('pointerdown', (pointer, localX, localY, event) => {
      event.stopPropagation();
      this.selectFurniture(sprite);
    });

    this.placedSprites.push(sprite);
    this.placedGroup.add(sprite);
  }

  selectFurniture(sprite) {
    if (this.selectedItem === sprite) return;
    this.deselectCurrent();

    this.selectedItem = sprite;

    // Highlight outline around selected item
    this.tweens.add({
      targets: sprite,
      scale: 1.05,
      duration: 100,
      ease: 'Sine.easeOut'
    });

    // Spawn a deletion button (✕ red bubble) just above the item
    const delBtn = this.add.container(sprite.x + 40, sprite.y - 40).setDepth(15);
    const bg = this.add.circle(0, 0, 16, 0xd65c5c)
      .setStrokeStyle(2, 0xffffff)
      .setInteractive({ useHandCursor: true });
    const txt = this.add.text(0, 0, '✕', {
      fontFamily: UI_FONT,
      fontSize: '16px',
      color: '#ffffff',
      fontStyle: 'bold'
    }).setOrigin(0.5);

    delBtn.add([bg, txt]);

    bg.on('pointerdown', (pointer, localX, localY, event) => {
      event.stopPropagation();
      this.removeFurniture(sprite);
    });

    sprite.deleteBtn = delBtn;
  }

  deselectCurrent() {
    if (this.selectedItem) {
      this.tweens.add({
        targets: this.selectedItem,
        scale: 1.0,
        duration: 120,
        ease: 'Sine.easeOut'
      });
      if (this.selectedItem.deleteBtn) {
        this.selectedItem.deleteBtn.destroy();
        this.selectedItem.deleteBtn = null;
      }
      this.selectedItem = null;
    }
  }

  removeFurniture(sprite) {
    this.sound.play('clickSfx', { volume: 0.25 });

    // Destroy animations
    this.tweens.add({
      targets: sprite,
      scale: 0,
      alpha: 0,
      duration: 180,
      onComplete: () => {
        if (sprite.deleteBtn) sprite.deleteBtn.destroy();
        this.placedSprites = this.placedSprites.filter(s => s !== sprite);
        sprite.destroy();
        this.savePlacements();

        // Refresh inventory if active to show returned item
        if (this.inventoryActive) {
          this.drawInventoryDrawer();
        }
      }
    });

    this.selectedItem = null;
  }

  savePlacements() {
    const list = this.placedSprites.map(s => ({
      furnitureId: s.furnitureId,
      x: Math.round(s.x),
      y: Math.round(s.y)
    }));
    savePlacedFurniture(list);
  }

  toggleShop() {
    this.deselectCurrent();
    if (this.inventoryActive) this.toggleInventory();

    this.shopActive = !this.shopActive;

    if (this.shopActive) {
      this.createShopModal();
    } else {
      this.destroyShopModal();
    }
  }

  createShopModal() {
    const { width, height } = this.scale;

    // Dark screen dimming overlay
    this.shopDim = this.add.rectangle(width / 2, height / 2, width, height, 0x14100c, 0.65)
      .setInteractive()
      .setDepth(20);

    // Modal panel background — soft cream card with shadow, matching menu
    this.shopPanel = this.add.container(width / 2, height / 2).setDepth(21);
    const shadow = this.add.graphics();
    shadow.fillStyle(0x000000, 0.32);
    shadow.fillRoundedRect(-460, -212, 920, 440, theme.radius.cardLarge);
    const bg = this.add.graphics();
    bg.fillStyle(0xfff7e3, 0.97);
    bg.fillRoundedRect(-460, -220, 920, 440, theme.radius.cardLarge);
    bg.lineStyle(2.5, 0xc9a96e, 0.55);
    bg.strokeRoundedRect(-460, -220, 920, 440, theme.radius.cardLarge);
    this.shopPanel.add([shadow, bg]);

    // Shop title — calm, no white stroke
    const title = this.add.text(0, -178, 'Furniture Boutique', {
      fontFamily: UI_FONT,
      fontSize: '32px',
      color: '#4a3a26'
    }).setOrigin(0.5);
    const titleSub = this.add.text(0, -148, 'Spend coins · decorate the office', {
      fontFamily: UI_FONT,
      fontSize: '14px',
      color: '#9a8568'
    }).setOrigin(0.5);
    // Subtle divider under title
    const divider = this.add.graphics();
    divider.lineStyle(1, 0xc9a96e, 0.3);
    divider.lineBetween(-360, -126, 360, -126);
    this.shopPanel.add([title, titleSub, divider]);

    // Close button
    const closeBtn = createPillButton(this, {
      x: 410,
      y: -175,
      width: 48,
      height: 48,
      label: '✕',
      fontSize: 22,
      radius: 24,
      onClick: () => this.toggleShop(),
      depth: 22
    });
    this.shopCloseButton = closeBtn; // hold for clean destruction

    // Draw shop item grids
    this.drawShopItems();
  }

  drawShopItems() {
    if (this.shopItemsContainer) this.shopItemsContainer.destroy();
    this.shopItemsContainer = this.add.container(0, 0).setDepth(22);
    this.shopPanel.add(this.shopItemsContainer);

    const owned = loadOwnedFurniture();
    const coins = loadCoins();

    const startX = -360;
    const startY = -80;
    const colGap = 240;
    const rowGap = 160;

    FURNITURE_ITEMS.forEach((f, i) => {
      const col = i % 4;
      const row = Math.floor(i / 4);
      const x = startX + col * colGap;
      const y = startY + row * rowGap;

      // Item Card container
      const card = this.add.graphics();
      const isOwned = owned.includes(f.id);
      card.fillStyle(isOwned ? 0xe5ebd7 : 0xffebd4, 1);
      card.fillRoundedRect(x - 100, y - 70, 200, 140, 12);
      card.lineStyle(1.5, isOwned ? 0x7eb58a : 0xd9b673, 0.7);
      card.strokeRoundedRect(x - 100, y - 70, 200, 140, 12);
      this.shopItemsContainer.add(card);

      // Furniture thumbnail image
      const img = this.add.image(x, y - 20, f.key).setDisplaySize(60, 60);
      this.shopItemsContainer.add(img);

      // Item name
      const name = this.add.text(x, y + 22, f.name, {
        fontFamily: UI_FONT, fontSize: '15px', color: '#4a3a26', fontStyle: 'bold'
      }).setOrigin(0.5);
      this.shopItemsContainer.add(name);

      // Buy button / status
      if (isOwned) {
        const ownedText = this.add.text(x, y + 46, '✓ Placed', {
          fontFamily: UI_FONT, fontSize: '14px', color: '#668f6f', fontStyle: 'bold'
        }).setOrigin(0.5);
        this.shopItemsContainer.add(ownedText);
      } else {
        const btn = createPillButton(this, {
          x: x,
          y: y + 48,
          width: 140,
          height: 32,
          label: `Buy · ${f.price}`,
          fontSize: 14,
          radius: 16,
          color: coins >= f.price ? theme.color.primary : theme.color.muted,
          hoverColor: theme.color.primaryHover,
          textColor: coins >= f.price ? 0xfff7e3 : 0x7a6750,
          onClick: () => this.buyFurniture(f),
          depth: 23
        });
        if (coins < f.price) {
          btn.setEnabled(false);
        }
        this.shopItemsContainer.add(btn.container);
      }
    });
  }

  buyFurniture(f) {
    const coins = loadCoins();
    if (coins >= f.price) {
      saveCoins(coins - f.price);
      addOwnedFurniture(f.id);

      this.sound.play('bonusSfx', { volume: 0.35 });

      // Visual rewards/particles or text flash
      const flash = this.add.text(this.scale.width / 2, this.scale.height / 2 - 100, `Purchased ${f.name}!`, {
        fontFamily: UI_FONT, fontSize: '28px', color: '#f0d27d', stroke: '#000000', strokeThickness: 5
      }).setOrigin(0.5).setDepth(30);
      this.tweens.add({
        targets: flash,
        y: this.scale.height / 2 - 140,
        alpha: 0,
        duration: 1500,
        onComplete: () => flash.destroy()
      });

      // Refresh HUD & shop cards
      this.coinsPill.setText(`${loadCoins()} coins`);
      this.drawShopItems();
    } else {
      this.sound.play('wrongSfx', { volume: 0.3 });
    }
  }

  destroyShopModal() {
    if (this.shopDim) this.shopDim.destroy();
    if (this.shopPanel) this.shopPanel.destroy();
    if (this.shopCloseButton) this.shopCloseButton.destroy();
    this.shopDim = null;
    this.shopPanel = null;
    this.shopCloseButton = null;
  }

  toggleInventory() {
    this.deselectCurrent();
    if (this.shopActive) this.toggleShop();

    this.inventoryActive = !this.inventoryActive;

    if (this.inventoryActive) {
      this.createInventoryDrawer();
    } else {
      this.destroyInventoryDrawer();
    }
  }

  createInventoryDrawer() {
    const { width, height } = this.scale;

    this.drawerContainer = this.add.container(0, height).setDepth(20);

    // Slide up animation
    this.tweens.add({
      targets: this.drawerContainer,
      y: height - 150,
      duration: 250,
      ease: 'Back.easeOut',
      easeParams: [0.8]
    });

    // Drawer Background panel — cream to match the rest of the language
    const shadow = this.add.graphics();
    shadow.fillStyle(0x000000, 0.26);
    shadow.fillRoundedRect(40, 6, width - 80, 140, 22);
    const bg = this.add.graphics();
    bg.fillStyle(0xfff7e3, 0.97);
    bg.fillRoundedRect(40, 0, width - 80, 140, 22);
    bg.lineStyle(2, 0xc9a96e, 0.55);
    bg.strokeRoundedRect(40, 0, width - 80, 140, 22);
    this.drawerContainer.add([shadow, bg]);

    // Title / Instructions
    const title = this.add.text(70, 20, 'Select to decorate:', {
      fontFamily: UI_FONT, fontSize: '15px', color: '#7a6a52'
    });
    this.drawerContainer.add(title);

    // Render items in inventory
    this.drawInventoryDrawer();
  }

  drawInventoryDrawer() {
    if (this.inventoryItemsContainer) this.inventoryItemsContainer.destroy();
    this.inventoryItemsContainer = this.add.container(0, 0);
    this.drawerContainer.add(this.inventoryItemsContainer);

    const owned = loadOwnedFurniture();
    const placed = loadPlacedFurniture().map(p => p.furnitureId);
    const unplaced = owned.filter(id => !placed.includes(id));

    if (unplaced.length === 0) {
      const emptyText = this.add.text(this.scale.width / 2, 70, 'No decorations yet — visit the Shop to buy some.', {
        fontFamily: UI_FONT, fontSize: '16px', color: '#7a6a52'
      }).setOrigin(0.5);
      this.inventoryItemsContainer.add(emptyText);
      return;
    }

    const startX = 140;
    const itemGap = 120;
    const y = 74;

    unplaced.forEach((id, i) => {
      const f = FURNITURE_ITEMS.find(item => item.id === id);
      if (!f) return;

      const x = startX + i * itemGap;

      // Clickable card backing — warm sun chip
      const card = this.add.graphics()
        .fillStyle(0xffe7a3, 0.35)
        .fillRoundedRect(x - 45, y - 40, 90, 80, 12)
        .lineStyle(1.5, 0xc9a96e, 0.45)
        .strokeRoundedRect(x - 45, y - 40, 90, 80, 12)
        .setInteractive(new Phaser.Geom.Rectangle(x - 45, y - 40, 90, 80), Phaser.Geom.Rectangle.Contains);
      this.inventoryItemsContainer.add(card);

      const img = this.add.image(x, y - 6, f.key).setDisplaySize(50, 50)
        .setInteractive({ useHandCursor: true });
      this.inventoryItemsContainer.add(img);

      const name = this.add.text(x, y + 26, f.name, {
        fontFamily: UI_FONT, fontSize: '12px', color: '#4a3a26'
      }).setOrigin(0.5);
      this.inventoryItemsContainer.add(name);

      // Action: spawn into room on click
      const spawnAction = () => {
        this.sound.play('clickSfx', { volume: 0.25 });
        this.spawnFurnitureSprite(f, 640, 360);
        this.savePlacements();
        this.drawInventoryDrawer(); // Refresh list to remove it
      };

      card.on('pointerdown', spawnAction);
      img.on('pointerdown', spawnAction);
    });
  }

  destroyInventoryDrawer() {
    if (!this.drawerContainer) return;
    this.tweens.add({
      targets: this.drawerContainer,
      y: this.scale.height,
      duration: 200,
      ease: 'Power2.easeIn',
      onComplete: () => {
        this.drawerContainer.destroy();
        this.drawerContainer = null;
        this.inventoryItemsContainer = null;
      }
    });
  }

  createVisitor() {
    const { width, height } = this.scale;
    const done = getCompletedCaseCount();
    const unlocks = loadHubUnlocks();

    const visitor = this.add.text(200, height - 120, '🐤', {
      fontFamily: UI_FONT,
      fontSize: '42px'
    }).setOrigin(0.5).setDepth(14).setInteractive({ useHandCursor: true });

    const lines = [
      `Cases solved: ${done}/${cases.length}`,
      unlocks.size > 0 ? 'New office gifts unlocked!' : 'Finish case extras for hub gifts.'
    ];

    visitor.on('pointerdown', () => {
      this.showVisitorBubble(lines[Phaser.Math.Between(0, lines.length - 1)]);
    });
  }

  showVisitorBubble(text) {
    if (this.visitorBubble) this.visitorBubble.destroy();
    this.visitorBubble = this.add.text(200, this.scale.height - 170, text, {
      fontFamily: UI_FONT,
      fontSize: '14px',
      color: '#4a3a26',
      backgroundColor: '#fff7e3',
      padding: { x: 14, y: 10 },
      wordWrap: { width: 220 }
    }).setOrigin(0.5, 1).setDepth(15);

    this.time.delayedCall(4000, () => {
      if (this.visitorBubble) {
        this.visitorBubble.destroy();
        this.visitorBubble = null;
      }
    });
  }
}
