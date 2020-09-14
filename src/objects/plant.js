export default class Plant extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, health, inventory ){
        super(scene, x, y, texture, frame, health, inventory);
        this.health = health;
        this.inventory = inventory;
        console.log(this.health);
        scene.add.existing(this);
        this.setInteractive();
        this.on('pointerdown', this.onClicked.bind(this), scene);
        console.log(scene);
        this.scene = scene;
    }
    
    onClicked() {
        console.log(this.health);
        console.log(this.inventory);
        this.health--;
        if (this.health <= 0) {
            for (let i = 0; i < this.inventory.length; i++) {
                this.scene.add.text((this.x + Math.random()* 100), ( this.y + Math.random() * 100), this.inventory[i]);
            }
            this.destroy();
        }
    }
}
