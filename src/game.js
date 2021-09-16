import Phaser from 'phaser';
import boy from './assets/boy.png';
import numberLine from './assets/numberLine.png';


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
    }
   
       
    create ()
    {
        
        this.numberLine = this.add.image(375,850,'numberLine');
        this.numberLine.setOrigin(0.5);
        this.boy = this.add.image(375,700,'boy');
        this.x =2;
        this.y=3;
        this.z=this.x*this.y;
        // this.z = x*y;
         //this.z=x*
        this.add.text(10, 10, `${this.x}+${this.y}= ${this.z}`, { fontFamily: 'serif',fontSize: '30px' });
        // console.log(this.boy)
        // let Boy = this.boy;
        // let that = this;

   
       
        this.boy.setInteractive().on("pointerdown", (pointer, localX, localY, event)=>
        this.moveBoyTween()
        );
    
}
moveBoyTween()
{
    // console.log(Boy)
    // console.log(this.boy)
   
     this.tweens.add({
        targets: this.boy,
        x: Phaser.Math.Between(187.5, 562.5),
        //y: Math.random(),
        duration: 1000,
        ease: "Power2",
        
        
        
    });
}

}



export default MyGame;
