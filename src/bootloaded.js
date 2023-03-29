export default class bootloaded extends Phaser.Scene{
    constructor(){
        super({key:"bootloaded"})
    }
    preload(){
        this.load.on("complete",()=>{
            this.scene.start("menu")
        })
        this.load.spritesheet("dino","../assets/R3.png",{frameWidth:33,frameHeight:62})
        this.load.image("ground","../assets/rect262.png")
        this.load.image("start","../assets/bitmap.png")
        this.load.image("cactus","../assets/path1855.png")
        this.load.image("bird","../assets/paloma.png",{frameHeight:50,frameWidth:40})
        
    }
}                                               