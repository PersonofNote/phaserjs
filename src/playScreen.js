import Plant from "./objects/plant.js";
import NPC from "./objects/NPC.js";
import Craftable from "./objects/Craftable.js";


export default class playScreen extends Phaser.Scene {
    constructor() {
        super("playScreen");
    }

    create() {
        this.add.image(400, 400, "bg_sky").setDisplaySize(800, 800);
        const npc = new NPC(this, 400, 400, "npc_walkDown", 0, "happy");
        console.log(npc);
        const fiber = new Craftable(this, 100,500, "fiber", 0, "Fiber", "From a plant");
        const plant = new Plant(this, 200, 200, "grass1", 0, 3, [fiber, fiber]);
        //const plant1 = new Plant(this, 300, 200, "grass1", 0, 3, ["fiber"]);
        const tree = new Plant(this, 600,250, "tree_orange", 0, 5, ["wood", "wood", "fiber"] );
        tree.animations.add('wobble', [0,1,0,2,0,1,0,2,0], 24);
 
    }

    update() {

    }

    generateStats() {

    }
}