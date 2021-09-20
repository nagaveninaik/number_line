import Phaser from 'phaser';
import boy from './assets/boy.png';
import numberLine from './assets/numberLine.png';
import addButton from './assets/plus.png';
import subButton from './assets/minus.png';
import clickBtn from './assets/click.png';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super();
        this.minLimit=-2;
        this.maxLimit=2;
        this.width=750;

        this.x =0;
        this.y=0;
        this.z=0;
    }

    preload ()
    {
        this.load.image('numberLine',numberLine);
        this.load.image('boy',boy);
        this.load.image('addButton',addButton);
        this.load.image('subButton',subButton);
        this.load.image('clickBtn',clickBtn);
    }
       
    create ()
    {
        this.numberLine = this.add.image(375,850,'numberLine');
        this.numberLine.setOrigin(0.5);
        this.boy = this.add.image(375,700,'boy');
        
        this.xText=this.add.text(50,300,`${this.x}`,{ fontFamily: 'serif',fontSize: '80px' });
        this.addButtonX1 = this.add.image(40,420,'addButton');
        this.subButtonX1 = this.add.image(120,420,'subButton');

        this.addButtonX1.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>
        this.xValueIncrement());

        this.subButtonX1.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>
        this.xValueDecrement());

        this.add.text(200,300,`*`,{ fontFamily: 'serif',fontSize: '80px' });

        this.yText=this.add.text(350,300,`${this.y}`,{ fontFamily: 'serif',fontSize: '80px' });
        this.addButtonY2 = this.add.image(340,420,'addButton');
        this.subButtonY2 = this.add.image(420,420,'subButton');

        this.addButtonY2.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>
        this.yValueIncrement()
        );

        this.subButtonY2.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>
        this.yValueDecrement()
        );

        this.add.text(500,300,`=`,{ fontFamily: 'serif',fontSize: '80px' });

        this.zText = this.add.text(650,300,`${this.z}`,{ fontFamily: 'serif',fontSize: '80px' });
       
        this.clickBtn = this.add.image(680,420,'clickBtn');
        
        this.clickBtn.setInteractive().on("pointerdown", (pointer, localX, localY, event)=>
            this.boyMovement()
        );  
    }

    xValueIncrement()
    {
        if( this.x < this.maxLimit){
            this.x+=1;
            this.z=this.x*this.y;
        }
    
    }

    xValueDecrement()
    {
        if(this.x > this.minLimit){
            this.x-=1;
            this.z=this.x*this.y;
         }
    }

    yValueIncrement()
    {
        if( this.y < this.maxLimit){
            this.y+=1;
            this.z=this.x*this.y;
        }
    }

    yValueDecrement()
    {
        if(this.y > this.minLimit){
            this.y-=1;
            this.z=this.x*this.y;
        }
    }

    boyMovement(){
        if(this.y==1||this.y==-1){
        this.centerValue=(this.width/2);
        this.position = (this.centerValue+(this.z*75));
        console.log(this.position);
        this.tweens.add({
            targets: this.boy,
            x:this.position,
            duration: 1000,
            ease: "Power2",
            yoyo: true,
        });
    }
     else if(this.y==2)
        {
            this.timeline = this.tweens.timeline({
                targets: this.boy,
                ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 1000,
                loop: 0,
                
            
                tweens: [
                    {
                        targets: this.boy,
                        x: (this.position/this.y),              
                         ease: 'Linear',       
                         duration: 1000,
                         repeat: 0,            // -1: infinity
                         yoyo: false,
                         offset: '+=500',   // starts 500ms after previous tween ends
                    },
                    // ...
                ]
            });
        }
        
       

    }

    update ()
    {
        this.xText.setText(`${this.x}`);
        this.yText.setText(`${this.y}`);
        this.zText.setText(`${this.z}`);
    }
}

export default MyGame;