import Phaser from "phaser";
// Global frames per second
const gSpeed = 8;
import startScreen from "./startScreen.js";
import playScreen from "./playScreen.js";

// See if you can do a fs.open for each in the folder and just have your sprites
// In labelled folders/add them to a an array based on object type.

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: [startScreen, playScreen]
};

const game = new Phaser.Game(config);




