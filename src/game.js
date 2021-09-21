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
        //initialize default values
        this.minLimit=-2;
        this.maxLimit=2;
        this.width=750;
        this.centerValue=(this.width/2);


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
        this.boy = this.add.sprite(375,700,'boy');
        
        //display boy movement values with increment and decrement modify buttons
        this.xText=this.add.text(50,100,`${this.x}`,{ fontFamily: 'serif',fontSize: '80px' });
        this.addButtonX1 = this.add.image(40,220,'addButton');
        this.subButtonX1 = this.add.image(120,220,'subButton');

        
        this.addButtonX1.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>
        this.xValueIncrement());

        this.subButtonX1.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>
        this.xValueDecrement());

        this.add.text(200,100,`*`,{ fontFamily: 'serif',fontSize: '80px' });

        //display boy movement capacity at a time with increment and decrement modified buttons
        this.yText=this.add.text(350,100,`${this.y}`,{ fontFamily: 'serif',fontSize: '80px' });
        this.addButtonY2 = this.add.image(340,220,'addButton');
        this.subButtonY2 = this.add.image(420,220,'subButton');

        this.addButtonY2.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>
        this.yValueIncrement()
        );

        this.subButtonY2.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>
        this.yValueDecrement()
        );

        this.add.text(500,100,`=`,{ fontFamily: 'serif',fontSize: '80px' });

        this.zText = this.add.text(650,100,`${this.z}`,{ fontFamily: 'serif',fontSize: '80px' });
       
        //play button
        this.clickBtn = this.add.image(680,220,'clickBtn');
        this.clickBtn.setInteractive().on("pointerdown", (pointer, localX, localY, event)=>
        {
                this.boyMovement();
        }
        
        );  
    }
    
    //movement increment button
    xValueIncrement()
    {
        
        if( this.x < this.maxLimit){
            this.x+=1;
            this.z=this.x*this.y;
        }
        this.boy.setPosition(this.centerValue,700);
    
    }
    ////movement decrement button
    xValueDecrement()
    {
       
        if(this.x > this.minLimit){
            this.x-=1;
            this.z=this.x*this.y;
         }
         this.boy.setPosition(this.centerValue,700);
    }
    

    //move capacity increment button
    yValueIncrement()
    {
        
        if( this.y < this.maxLimit){
            this.y+=1;
            this.z=this.x*this.y;
        }
        this.boy.setPosition(this.centerValue,700);
    }

    //move capacity decrement button
    yValueDecrement()
    {
        
        if(this.y > this.minLimit){
            this.y-=1;
            this.z=this.x*this.y;
        }
        this.boy.setPosition(this.centerValue,700);
    }

    //boy tween movement function

    boyMovement(){
            if(this.z==0){
                this.stepValue=0;
            }
            else if(this.y>0)
            {
                this.stepValue=(this.z/this.y);
            }
            else if(this.y<0)
            {
                this.stepValue=-(this.z/this.y);
            }

            this.xPosition = (this.centerValue+(this.stepValue*80));
            this.position = (this.centerValue+(this.z*80));
            var timeline = this.tweens.timeline({

            tweens: [{
                    targets:this.boy,
                    x: this.xPosition,
                    ease: 'Power1',
                    duration: 1000,
                    yoyo:false
                
            },
            {
                targets:this.boy,
                    x: this.position,
                    ease: 'Power1',
                    duration: 1000,
                    yoyo:false,
                    delay:500,
                    
            }]
    
        });
    }
        
     //update values

    update ()
    {
        this.xText.setText(`${this.x}`);
        this.yText.setText(`${this.y}`);
        this.zText.setText(`${this.z}`);
    }
}

export default MyGame;