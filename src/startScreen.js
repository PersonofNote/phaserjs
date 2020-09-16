import Tree from "./objects/tree.js";
import treeSprite from "./assets/spr_treeOrangesheet.png";
import Plant from "./objects/plant.js";
import Grass1 from "./assets/spr_brush3.png";
import Bgsky from "./assets/bg_sky.png";
import Seed1 from "./assets/spr_seed_0.png";
import Wood from "./assets/spr_wood.png";
import Fiber from "./assets/spr_fiber_0.png";

import NPCSit from "./assets/spr_sit.png";
import NPCDown from "./assets/spr_walkDown.png";

const gSpeed = 20;

export default class startScreen extends Phaser.Scene {
    constructor() {
        super("startScreen");
    }

    preload() {
        this.load.image("grass1", Grass1);
        this.load.image("npc_sit", NPCSit);
        this.load.spritesheet("npc_walkDown", NPCDown, {frameWidth: 32, frameHeight: 28});
        this.load.image("bg_sky", Bgsky);
        this.load.image("seed1", Seed1);
        this.load.image("wood", Wood);
        this.load.image("fiber", Fiber);
        this.load.spritesheet("tree_orange", treeSprite, {frameWidth: 85, frameHeight: 76});
    }

    create() {
        // Can anims go in their own classes?
        this.anims.create({
            key: "grass1_anim",
            frames: this.anims.generateFrameNumbers("grass1"),
            frameRate: gSpeed,
            repeat: -1
          })
          this.anims.create({
            key: "playerDance",
            frames: this.anims.generateFrameNumbers("playerDance"),
            frameRate: gSpeed,
            repeat: -1
          })
        
        // Add stuff
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