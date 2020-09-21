const moods = ["happy", "sad"];
//const states = [wander, eat, sleep, leisure, craft, harvest];
const states = [0,1]

export default class NPC extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, texture, frame, mood){
        super(scene, x, y, texture, frame, mood);
        this.mood = moods[0];
        console.log(this.mood);
        this.activity = states["wander"];
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
        
        //Simulated loop
        setInterval( () => {this.activity = states[Math.floor(Math.random()*moods.length)]; this.chooseActivity(this.activity)}, 2000);
    }


    chooseActivity(activity) {
        switch(activity){
            case 0:
                console.log("wandering");
                break;
            case 1:
                console.log("eating");
                break;
        }
    }

}