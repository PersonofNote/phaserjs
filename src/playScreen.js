import Plant from "./objects/plant.js";

export default class playScreen extends Phaser.Scene {
    constructor() {
        super("playScreen");
    }

    create() {
        this.add.text(20,20, "Playing Game...");
        const plant = new Plant(this, 200, 200, "bush1", 0, 5, ["fiber", "fiber", "seed"]);
        const testImg = this.add.image(100,100, "sit").setInteractive();
        testImg.on('pointerdown', function (pointer) {
            console.log("Clicked");
        }, this);
    }
}