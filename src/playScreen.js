import Plant from "./objects/plant.js";
import NPC from "./objects/NPC.js";
import Craftable from "./objects/Craftable.js";


export default class playScreen extends Phaser.Scene {
    constructor() {
        super("playScreen");
    }

    create() {
        // CAMERA
        this.cameras.main.setBounds(0, 0, 600, 800);
        this.cameras.main.setZoom(1);
        this.cameras.main.centerOn(0, 0);

        /*
        this.input.on('pointerdown', function () {
            // Update to zoom in on button press to the mouse positions
            var cam = this.cameras.main;
    
                cam.pan(500, 500, 2000, 'Power2');
                cam.zoomTo(4, 3000);
    
        }, this);
        */

        // WORLD
        this.add.image(400, 400, "bg_sky").setDisplaySize(800, 800);
        const npc = new NPC(this, 400, 400, "npc_walkDown", 0, "happy");
        console.log(npc);
        const fiber = new Craftable(this, 100,500, "fiber", 0, "Fiber", "From a plant");
        const plant = new Plant(this, 200, 200, "grass1", 0, 3, ["seed", "fiber"]);
        //const plant1 = new Plant(this, 300, 200, "grass1", 0, 3, ["fiber"]);
        const tree = new Plant(this, 600,250, "tree_orange", 0, 5, ["wood", "fiber", "fiber"] );
        // CREATE TERRAIN
        const level = [
            [  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1 ],
            [  -1,  0,  0,  0,   -1,   -1,   -1,  0,  0,  0,   -1 ],
            [  -1,  0,  0,  0,   -1,   -1,   -1,  0,  0,  0,   -1 ],
            [  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1 ],
            [  -1,   -1,   -1, 0, 0, 0,   -1,   -1,   -1,   -1,   -1 ],
            [  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1 ],
            [  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1 ],
            [  -1,   -1, 0, 0, 0, 0, 0,   -1,   -1,   -1, 0 ],
            [  -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1,   -1, 0, 0 ],
            [0, 0, 0,   -1,   -1,   -1,   -1,   -1, 0, 0, 0 ],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
          ];
    }

    update() {
        //console.log(npc);
        //this.npc.update(time, delta);
    }

    generateStats() {

    }
}