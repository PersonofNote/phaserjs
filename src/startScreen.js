import Tree from "./objects/tree.js";
import treeSprite from "./assets/spr_treeOrangesheet.png";
import Plant from "./objects/plant.js";
import Bush1 from "./assets/spr_brush3.png"

import Test from "./assets/spr_sit.png";

export default class startScreen extends Phaser.Scene {
    constructor() {
        super("startScreen");
    }

    preload() {
        this.load.image("bush1", Bush1);
        this.load.image("sit", Test);
    }

    create() {
        this.add.text(20,20, "Loading game...");
        this.add.text(400,400, "Click anywhere to start");
        // Keyboard input for camera control
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.input.on('pointerdown', function (pointer) {
            console.log('down');
            this.scene.start("playScreen");
        }, this);
    }
}