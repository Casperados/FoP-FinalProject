// Background - variable
let backgroundImage;

function preload() {
  backgroundImage = loadImage("assets/game_background.jpg");
}

// Game
function setup() {
  createCanvas(360, 640);
}

function draw() {
  background(backgroundImage);
}
