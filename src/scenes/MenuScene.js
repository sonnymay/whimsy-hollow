import Phaser from 'phaser';

export class MenuScene extends Phaser.Scene {
  constructor() {
    super('MenuScene');
  }

  create() {
    const { width, height } = this.scale;

    this.add.rectangle(0, 0, width, height, 0x213a34).setOrigin(0);
    this.add.circle(238, 146, 156, 0xf0c878, 0.16);
    this.add.circle(1090, 590, 210, 0x8ec7b3, 0.12);

    this.add.text(width / 2, 172, 'Whimsy Hollow', {
      fontFamily: 'Georgia, serif',
      fontSize: '76px',
      color: '#fff7dc',
      stroke: '#3f2f25',
      strokeThickness: 8
    }).setOrigin(0.5);

    this.add.text(width / 2, 252, 'A cozy hidden-object mystery in a magical village', {
      fontFamily: 'Georgia, serif',
      fontSize: '26px',
      color: '#d8ead7'
    }).setOrigin(0.5);

    this.add.text(width / 2, 336, 'Mail Garden', {
      fontFamily: 'Georgia, serif',
      fontSize: '34px',
      color: '#ffd88c'
    }).setOrigin(0.5);

    const buttonBg = this.add.rectangle(width / 2, 444, 268, 72, 0xf5c861, 1)
      .setStrokeStyle(4, 0x614a2f)
      .setInteractive({ useHandCursor: true });
    this.add.text(width / 2, 444, 'Start', {
      fontFamily: 'Georgia, serif',
      fontSize: '34px',
      color: '#35291d'
    }).setOrigin(0.5);

    buttonBg.on('pointerover', () => buttonBg.setFillStyle(0xffdd83));
    buttonBg.on('pointerout', () => buttonBg.setFillStyle(0xf5c861));
    buttonBg.on('pointerdown', () => this.scene.start('GameScene', { levelId: 'mail-garden' }));

    this.add.text(width / 2, 656, 'Find 10 small magical keepsakes hidden among the village mail blooms.', {
      fontFamily: 'Georgia, serif',
      fontSize: '22px',
      color: '#b9d8cc'
    }).setOrigin(0.5);
  }
}
