export default class NPC extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, mood){
        super(scene, x, y, texture, frame, mood);
        console.log(mood);
        /*
        this.anims.create({
            key: "playerWalkdown",
            frames: this.anims.generateFrameNumbers(texture),
            frameRate: gSpeed,
            repeat: -1
          })
        this.anims.play('playerWalkdown');
        */
        this.scene.add.existing(this);
    }


}