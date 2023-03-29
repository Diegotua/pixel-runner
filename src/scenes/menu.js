let bgMusic=document.getElementById("bg")
export default class menu extends Phaser.Scene{
    
    constructor(){
        super({key:"menu",activate:true})
    
    }
    create(){
        const configText={
            x:170,
            y:200,
            text: "Pixel Runner",
            style:{
                fontFamily:"courier",
                color: "#ffffff",
                fontSize:96
            
        }
    }

    //create(){
        this.make.text(configText)
        //titulo y boton
        //this.add.text(130, 200,"Pixel Runner",{font: '96px courier',fil:"#ffffff"})
        this.button= this.add.sprite(490,400,"start")
        //titulo y boton
        this.button.setInteractive()
        this.button.on("pointerdown",()=>{
            this.scene.launch("game")
            bgMusic.loop=true
            bgMusic.play()
            this.scene.stop()
        })


    }

}