import Craftable from "./Craftable.js";

export default class Plant extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, health, inventory ){
        super(scene, x, y, texture, frame, health, inventory);
        this.health = health;
        this.inventory = inventory;
        scene.add.existing(this);
        this.setInteractive();
        this.on('pointerdown', this.onClicked.bind(this), scene);
        this.scene = scene;
        this.tween = this.scene.tweens.add({
            targets: this,
            scaleX: { from: 1, to: 1.01 },
            scaleY: {from: 1, to: 1.05},
            ease: 'Linear',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
            duration: 3,
            repeat: 0,            // -1: infinity
            yoyo: true
        });

    }
    
    onClicked() { 
        this.tween.play();
        this.health--;
        //this.scene.add.tween(this).to( { alpha: 0 }, 2000, "Linear", true);
        if (this.health <= 0) {
            for (let i = 0; i < this.inventory.length; i++) {
                this.scene.add.text((this.x + Math.random()* 100), ( this.y + Math.random() * 100), this.inventory[i]);
                var drop = new Craftable(this.scene, (this.x + Math.random()*50), (this.y + Math.random() * 50), this.inventory[i], 0, "Fiber", "From a plant");  
            }
            this.destroy();
        }
    }

    genStats(inventory) {
        //For each item, generate a variable name and a plant of that type with stats. Will probably need to add
        // A description to items with a name or something.
    }

}
