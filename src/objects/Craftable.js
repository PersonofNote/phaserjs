export default class Craftable extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, name, description){
        super(scene, x, y, texture, frame, name, description);
        this.name = name;
        this.description = description;
        this.scene = scene;
        this.pickedUp = false;
        scene.add.existing(this);
        this.setInteractive();
        // Toggle picked up state
        this.on('pointerdown', () => {this.pickedUp = !this.pickedUp; console.log(this.pickedUp);}, scene);
        if(this.pickedUp) {
            this.input.on(Phaser.Input.Events.POINTER_MOVE, function(pointer){
                console.log("moved");
                
            })
        }
    }
    
   update() {
       if (pickedUp) {
            console.log(pickedUp);
            // Attach to cursor
       }else{
            // Detach from cursor
       }
   }
    

}
