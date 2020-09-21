export default class Craftable extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, name, description){
        super(scene, x, y, texture, frame, name, description);
        this.name = name;
        this.description = description;
        this.scene = scene;
        this.pickedUp = false;
        // Call update function, commented out for now
        //this.scene.events.on('update', (time, delta) => { this.update(time, delta)} );
        //TWEENS
        var bounce = this.scene.tweens.createTimeline();

        bounce.add({
            targets: this,
            x: x + (50*Math.floor(Math.random()*2) == 1 ? 1 : -1),
            y: y + 25,
            ease: 'EaseOutIn',
            duration: 250
        });

        bounce.add({
            targets: this,
            x: x + (100*Math.floor(Math.random()*2) == 1 ? 1 : -1),
            y: {from: y - 2, to: y},
            ease: 'Bounce',
            duration: 150,
            yoyo: false
        });
        bounce.add({
            targets: this,
            x: x + (4*Math.floor(Math.random()*2) == 1 ? 1 : -1),
            y: {from: y - 2, to: y},
            ease: 'Bounce',
            duration: 50,
            yoyo: false
        });

        // METHODS
        scene.add.existing(this);
        this.setInteractive();
        bounce.play();
        // Toggle picked up state for theoretical non-drag movement
        this.on('pointerdown', () => {this.pickedUp = !this.pickedUp }, scene);  

        this.drag = this.scene.plugins.get('rexdragplugin').add(this);
        this.drag.drag();

        this.on('dragend', ()=> { Phaser.Math.Snap.To(this.x, 16); console.log( Phaser.Math.Snap.To(8, 16)) }, this); //Callback to snap
    }
    
    /*   
    update() {

    if (this.pickedUp === true) {
        this.on('pointermove', (pointer) => {this.x = pointer.position.x; this.y = pointer.position.y}, this.scene);
    }else{
        this.on('pointermove', (pointer) => {this.x = this.x; this.y = this.y}, this.scene); //This seems like it could get out of hand and crash the game.
    }


   }
*/    

}
