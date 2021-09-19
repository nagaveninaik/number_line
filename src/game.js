

import Phaser from 'phaser';
import boy from './assets/boy.png';
import numberLine from './assets/numberLine.png';


class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

//     preload ()
//     {
//         // this.load.scenePlugin({
//         //     key: 'rexuiplugin',
//         //     url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
//         //     sceneKey: 'rexUI'
//         // });

//         this.load.image('numberLine',numberLine);
//         this.load.image('boy',boy);
//     }
   
       
//     create ()
//     {
        
//         // var numberBar = this.rexUI.add.numberBar({
//         //     x: 600,
//         //     y: 800,
//         //     width: 300, 

//         //     slider: {
//         //         width: 100, // Fixed width
//         //        track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),
//         //        indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 20, COLOR_LIGHT),
//         //        input: 'click',
//         //    },

//     //        text: this.add.text(0, 0, '').setFixedSize(50, 0),

//     //        space: {
//     //            left: 10,
//     //            right: 10,
//     //            top: 10,
//     //            bottom: 10,

//     //            //icon: 10,
//     //            slider: 10,
//     //        },

//     //        valuechangeCallback: function (value, oldValue, numberBar) {
//     //            numberBar.text = Math.round(Phaser.Math.Linear(-2, 2, value));
//     //        },
//     //    })
//     //    .layout();

//         this.numberLine = this.add.image(375,850,'numberLine');
//         this.numberLine.setOrigin(0.5);
//         this.boy = this.add.image(375,700,'boy');
//         this.x =2;
//         this.y=3;
//         this.z=this.x*this.y;
//         this.values = [190,375,550];
//         this.add.text(310, 350, `${this.x}*${this.y}= ${this.z}`, { fontFamily: 'serif',fontSize: '60px' });
//         this.boy.setInteractive().on("pointerdown", (pointer, localX, localY, event)=>
//         this.moveBoyTween(this.values[Phaser.Math.Between(0,2)])
//         );
        
    
// }

// moveBoyTween(xVal)
// {  
//      this.tweens.add({
//         targets: this.boy,
//         x:xVal,
//         duration: 1000,
//         ease: "Power2"
//     });
// }


preload() { 
    this.load.scenePlugin({
        key: 'rexuiplugin',
        url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
        sceneKey: 'rexUI'
    });      
}

create() {
    var numberBar = this.rexUI.add.numberBar({
            x: 400,
            y: 300,
            width: 300, // Fixed width

            background: this.rexUI.add.roundRectangle(10, 10, 10, 10, 10, COLOR_DARK),

            icon: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_LIGHT),

            slider: {
                // width: 120, // Fixed width
                track: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_PRIMARY),
                indicator: this.rexUI.add.roundRectangle(0, 0, 0, 0, 10, COLOR_LIGHT),
                input: 'click',
            },

            text: this.add.text(0, 0, '').setFixedSize(35, 0),

            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,

                icon: 10,
                slider: 10,
            },

            valuechangeCallback: function (value, oldValue, numberBar) {
                numberBar.text = Math.round(Phaser.Math.Linear(0, 100, value));
            },
        })
        .layout();

    numberBar.setValue(75, 0, 100);
}
    }


export default MyGame;