export default class dino extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,type,frame){
        super(scene,x,y,type,frame)
        this.scene.add.existing(this)
        this.scene.physics.world.enable(this)
        this.body.setCollideWorldBounds(true)
        this.body.setGravityY(1500)
        this.body.immovil=true
        

    }
}