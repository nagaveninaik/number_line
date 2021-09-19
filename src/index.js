import Phaser from 'phaser';
import MyGame from './game';
import UIPlugin from '../node_modules/phaser3-rex-plugins/templates/ui/ui-plugin';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 750,
    height: 900,
    scale: {
        mode: Phaser.Scale.FIT,
        //autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: MyGame,
    plugins: {
        scene: [{
            key: 'rexUI',
            plugin: UIPlugin,
            mapping: 'rexUI'
        }]
    }
};

const game = new Phaser.Game(config);