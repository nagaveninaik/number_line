import Phaser from 'phaser';
import MyGame from './game';

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 750,
    height: 900,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: MyGame
};

const game = new Phaser.Game(config);