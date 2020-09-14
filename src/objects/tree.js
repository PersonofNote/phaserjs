export default class Tree extends Phaser.GameObjects.Sprite{
    constructor( x, y, texture, health, scene = Phaser.Scene) {
        super( x, y, texture, health, scene);

        scene.add.existing(this);
        // On by default?
        this.setImmovable(true);
        // Add input and actions
        this.setInteractive();
        this.input.on('gameobjectdown', console.log("Clicked"));
        console.log("Tree created");
    }
}
