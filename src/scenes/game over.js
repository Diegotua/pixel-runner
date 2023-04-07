export default class Gameover extends Phaser.Scene{
    
    constructor(){
        super({key:"gameover",})
    
    }
    init(data){
        this.puntos=data

    }
    create(){
        const configText={
            x:170,
            y:200,
            text: "Game Over",
            style:{
                fontFamily:"courier",
                color: "#FF3349 ",
                fontSize:96
            
        }
    }

        this.make.text(configText)

        const configTextpoints={
            x:400,
            y:300,
            text: "Your Score Was:",
            style:{
                fontFamily:"text menu",
                color: 0xfffff,
                fontSize:20
            
        }
    }
        this.make.text(configTextpoints)
        
        this.totalpoints=this.add.text(590,300,"0",{fontFamily:"Text menu",fontSize:20})
        this.totalpoints.setText(this.puntos)
       
        
        this.button= this.add.sprite(490,400,"gameover")
        this.button.setInteractive()
        this.button.on("pointerdown",()=>{
            this.scene.start("gameover")
            
            this.scene.launch("game")
            this.scene.stop()
        })


    }

}