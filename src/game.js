import Phaser from 'phaser';
import boy from './assets/boy.png';
import numberLine from './assets/numberLine.png';
import addition from './assets/plus.png';
import sub from './assets/minus.png';
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
        this.load.image('addition',addition);
        this.load.image('sub',sub);
        this.load.image('clickBtn',clickBtn);
    }
       
    create ()
    {
        this.numberLine = this.add.image(375,850,'numberLine');
        this.numberLine.setOrigin(0.5);
        this.boy = this.add.image(375,700,'boy');
        
         this.x =0;
         this.x1=this.add.text(50,300,`${this.x}`,{ fontFamily: 'serif',fontSize: '80px' });
         this.addition1 = this.add.image(40,420,'addition');
         this.sub1 = this.add.image(120,420,'sub');

         this.addition1.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>
         this.xValueIncrement());

         this.sub1.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>
         this.xValueDecrement());

         this.add.text(200,300,`*`,{ fontFamily: 'serif',fontSize: '80px' });

        this.y=0;
        this.y1=this.add.text(350,300,`${this.y}`,{ fontFamily: 'serif',fontSize: '80px' });
        this.addition2 = this.add.image(340,420,'addition');
        this.sub2 = this.add.image(420,420,'sub');

        this.addition2.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>
         this.yValueIncrement());

         this.sub2.setInteractive().on("pointerdown",(pointer,localX,localY,event)=>
         this.yValueDecrement());

        this.add.text(500,300,`=`,{ fontFamily: 'serif',fontSize: '80px' });

        this.z=0;
        this.z1 = this.add.text(650,300,`${this.z}`,{ fontFamily: 'serif',fontSize: '80px' });
       
        this.clickBtn = this.add.image(680,420,'clickBtn');

        this.values = [30,115,200,285,375,462,550,635,720];
        this.clickBtn.setInteractive().on("pointerdown", (pointer, localX, localY, event)=>
            this.boyMovement()
        
        );
           
    }

moveBoyTween(xVal)
{ 
    this.move= this.tweens.add({
        targets: this.boy,
        x:xVal,
        duration: 3000,
        ease: "Power2",
        yoyo: true,
        loop: 0,
        // onComplete: () => {
        //     move.remove();
        // },
    });
}

xValueIncrement()
{
   if( this.x < 2){
    this.x+=1;
    this.x1.setText(`${this.x}`);
    this.z=this.x*this.y;
    this.z1.setText(`${this.z}`);
   }
    
}

xValueDecrement()
{
    if(this.x > -2){
    this.x-=1;
    this.x1.setText(`${this.x}`);
    this.z=this.x*this.y;
    this.z1.setText(`${this.z}`);
    }
}

yValueIncrement()
{
    if( this.y < 2){
    this.y+=1;
    this.y1.setText(`${this.y}`);
    this.z=this.x*this.y;
    this.z1.setText(`${this.z}`);
    }
}

yValueDecrement()
{
    if(this.y > -2){
    this.y-=1;
    this.y1.setText(`${this.y}`);
    this.z=this.x*this.y;
    this.z1.setText(`${this.z}`);
    }
}
boyMovement(){
    
        if(this.x==0||this.y==0){
           this.cur= this.moveBoyTween(this.values[4])
        }
        else {
            if((this.x==-1&&this.y==-1)||(this.x==1&&this.y==1)){
                this.moveBoyTween(this.values[5])
                 }else if((this.x==1&&this.y==2)||(this.x==2&&this.y==1)||(this.x==-1&&this.y==-2)||(this.x==-2&&this.y==-1)){
                    this.moveBoyTween(this.values[6])
                    // var timer = scene.time.addEvent({
                    //     delay: 2000,                // ms
                    //     callback: callback,
                    //     //args: [],
                    //     callbackScope: this.moveBoyTween(this.values[6]),
                    // });

                
            }else if((this.x==1&&this.y==-1)||(this.x==-1&&this.y==1)){
                this.moveBoyTween(this.values[3])
            }else if((this.x==-1&&this.y==2)||(this.x==-2&&this.y==1)||(this.x==1&&this.y==-2)||(this.x==2&&this.y==-1)){
                this.moveBoyTween(this.values[2])
            }else if((this.x==-2&&this.y==-2) ||(this.x==2&&this.y==2)){
                this.moveBoyTween(this.values[8])
            }else if((this.x==2&&this.y==-2)||(this.x==-2&&this.y==-2))  {
                this.moveBoyTween(this.values[0])
           }
        }

    }
}



export default MyGame;