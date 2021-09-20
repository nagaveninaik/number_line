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
        
         this.x =0;
         this.xText=this.add.text(50,300,`${this.x}`,{ fontFamily: 'serif',fontSize: '80px' });
         this.addButtonX1 = this.add.image(40,420,'addButton');
         this.subButtonX1 = this.add.image(120,420,'subButton');

         this.addButtonX1.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>
         this.xValueIncrement());

         this.subButtonX1.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>
         this.xValueDecrement());

         this.add.text(200,300,`*`,{ fontFamily: 'serif',fontSize: '80px' });

        this.y=0;
        this.yText=this.add.text(350,300,`${this.y}`,{ fontFamily: 'serif',fontSize: '80px' });
        this.addButtonY2 = this.add.image(340,420,'addButton');
        this.subButtonY2 = this.add.image(420,420,'subButton');

        this.addButtonY2.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>
         this.yValueIncrement());

         this.subButtonY2.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>
         this.yValueDecrement());

        this.add.text(500,300,`=`,{ fontFamily: 'serif',fontSize: '80px' });

        this.z=0;
        this.zText = this.add.text(650,300,`${this.z}`,{ fontFamily: 'serif',fontSize: '80px' });
       
        this.clickBtn = this.add.image(680,420,'clickBtn');
        
        this.values = [];
        this.positionValue();
        console.log(this.values)
        // this.values.positionValue();
        // console.log(this.values)
        this.clickBtn.setInteractive().on("pointerdown", (pointer, localX, localY, event)=>
            this.boyMovement()
        
        );
           
    }

    positionValue()
    {
        this.width=750;
        this.j=0;
        this.i=30;
        while(this.i<(this.width-50)){
            if(this.j==0){
                this.values[this.j]=this.i;
                this.i+=30;
                this.j+=1;
            }
            else{
                this.i+=80;
            this.values[this.j]=this.i;
            this.j+=1;
            }
            
        }
            
        
        //(this.width/25),(this.width/11),(this.width/3.75),(this.width/2.632),(this.width/2),(this.width/1.624),(this.width/1.364),(this.width/1.182),(this.width/1.0417)
    }

    moveBoyTween(xVal)
    { 
    this.move= this.tweens.add({
        targets: this.boy,
        x:xVal,
        duration: 3000,
        ease: "Power2",
        yoyo: true,
    });
    }

    xValueIncrement()
    {
   if( this.x < 2){
    this.x+=1;
    this.xText.setText(`${this.x}`);
    
    }
    
    }

    xValueDecrement()
    {
    if(this.x > -2){
    this.x-=1;
    this.xText.setText(`${this.x}`);
   
    }
    }

    yValueIncrement()
    {
    if( this.y < 2){
    this.y+=1;
    this.yText.setText(`${this.y}`);
    
    }
    }

    yValueDecrement()
    {
    if(this.y > -2){
    this.y-=1;
    this.yText.setText(`${this.y}`);
    
    }
    }
    boyMovement(){
    
        
        switch(this.z){
            case 0 : this.moveBoyTween(this.values[4]);
                break;
            case 1 : this.moveBoyTween(this.values[5]);
                break;
            case 2 : this.moveBoyTween(this.values[6]);
                break;
            case 4 : this.moveBoyTween(this.values[8]);
                break;
            case -1 : this.moveBoyTween(this.values[3]);
                break;
            case -2 : this.moveBoyTween(this.values[2]);
                break;
            case -4 : this.moveBoyTween(this.values[0]);
                break;

        }

    }

    update ()
    {
        this.z=this.x*this.y;
        this.zText.setText(`${this.z}`);
    }
}



export default MyGame;