// Background - variable "backgroundImage"
let backgroundImage;
let x = 100;
let y = 600;
import Character from "./character.js";

function preload() {
  backgroundImage = loadImage("assets/game_background.jpg");
}

const player = new Character(x, y); // Create a new character instance

// Game
function setup() {
  createCanvas(360, 640);
}

function draw() {
  background(backgroundImage);
  player.draw();
}
