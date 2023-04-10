import Cactus from "../gameobjects/cactus.js"
import dino from "../gameobjects/dino.js"
import Bird from "../gameobjects/bird.js"

let jumpAudio=document.getElementById("jump")
let gameoveraudio=document.getElementById("gameover")
export default class GameScene extends Phaser.Scene{    
    constructor(){
        super({key:"game"})
    }
    create(){
        //creating sprites
        this.ground=this.physics.add.image(355,500,"ground")
        this.ground2=this.physics.add.image(700,460,"ground")
        this.ground.setGravityY(1500)
        this.ground2.setGravityY(1500)
        this.puntos=0
        this.puntostext=this.add.text(120,0,"Score: ",{fontFamily:"Text menu",fontSize:30 })
        this.add.text(0,0,"Score: ",{fontFamily:"Text menu",fontSize:30 })
        this.puntosintervalos=setInterval(() => {this.puntos++;this.puntostext.setText(this.puntos)},200)
    
        this.dino=new dino (this,100,320,"dino",0)
        this.dino.setInteractive()
        let max=3000
        let min=2000
        this.jumping=false
        this.grupo=this.physics.add.group()
        this.bird=this.physics.add.group()

        this.interval=setInterval(
            ()=>{this.grupo.add(new Cactus (this,1000,385,"cactus").setScale(0.5))
                     this.timerbird=setTimeout(()=>{this.bird.add(new Bird (this ,1000 ,250 ,"bird"))},600)}
        , Math.floor((Math.random()* (max-min+1))) + min)    
        //animation
        

        this.anims.create({
            key:"walk",
            frames: this.anims.generateFrameNumbers("dino",{
                frames:[0,1,2,3,4,5]
            }),
            repeat:-1,
            frameRate: 10,
            duration:0
        })


        this.anims.create({
            key:"jump",
            frames: this.anims.generateFrameNumbers("dino",{
                frames:[6]
            }),
            repeat:-1,
            frameRate:1,
            duration:0
        })
        this.dino.anims.play("walk")
        //colision
        this.ground.setCollideWorldBounds(true)
        this.ground2.setCollideWorldBounds(true)
        this.colidecactus=this.physics.add.collider(this.ground, this.grupo.getChildren())
        this.colidecactus2=this.physics.add.collider(this.ground2, this.grupo.getChildren())
        this.gameover=this.physics.add.collider(this.dino, this.grupo.getChildren(),this.stop,null,this)
        this.gameover2=this.physics.add.collider(this.dino, this.bird.getChildren(),this.stop,null,this) 
        this.colide=this.physics.add.collider(this.ground,this.dino, () => {this.jumping = true} ,null,this.scene)
        this.cursorspace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

    }
    stop(){
        clearInterval(this.interval)
        clearInterval(this.puntosintervalos)
        clearTimeout(this.timerbird)
        this.scene.start("gameover",this.puntos)
        gameoveraudio.play("gameover")
        this.bird.clear(true,true)
        
    }
    update(){
        if(this.cursorspace.isDown && this.jumping===true){
            this.dino.body.setVelocityY(-500)
            this.dino.anims.play("jump")
            jumpAudio.play()
            let timer = setTimeout(()=>{
                this.jumping=false
                let timer2=setTimeout(()=>{this.dino.anims.play("walk")},400)
            },170)
        }
        if (this.jumping===true){
            this.dino.on("pointerup",()=>{
                this.dino.body.setVelocityY(-500)
                this.dino.anims.play("jump")
                jumpAudio.play()
                let timer = setTimeout(()=>{
                    this.jumping=false
                    let timer2=setTimeout(()=>{this.dino.anims.play("walk")},400)
                },170)

            })
        }
        switch(true){
            case this.puntos>100 &&this.puntos<300:
                this.grupo.setVelocityX(-400)
                this.bird.setVelocityX(-400)
                break;  
            
            case this.puntos>300 &&this.puntos<500:
                this.grupo.setVelocityX(-500)
                this.bird.setVelocityX(-500)
                break;  
                
            case this.puntos>500:
                this.grupo.setVelocityX(-700)
                this.bird.setVelocityX(-700)
                break;
                
            default:
                this.grupo.setVelocityX(-300)
                this.bird.setVelocityX(-300)
                break;


        }
    }
}