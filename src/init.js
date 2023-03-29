import  bootloaded  from "./bootloaded.js"
import GameScene from "./scenes/game.js"
import menu from "./scenes/menu.js"
import Gameover from "./scenes/game over.js"

const config={
    with:710,
    height:500,
    parent:"contenedor",
    backgroundColor:0x33E9FF,
    physics: {

        default:"arcade",
        arcade:{
          debug:true
        }

    },
    scene: [
        bootloaded,
        menu,
        GameScene,
        Gameover,


    ],
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    }   
}
new Phaser.Game(config)

