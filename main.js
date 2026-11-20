// Background - variable "backgroundImage"
let backgroundImage;
let x = 100;
let y = 600;
import Character from "./character.js";

// Overview of States available for Game
const gameState = {
  win: "gameWon",
  lose: "gameLose",
  intro: "gameIntro",
  active: "gameActive",
};

//  Sets the current gameState, "intro" means "gameIntro"
let currentGameState = gameState.intro;

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

  if (currentGameState === gameState.intro) {
    startButton.draw();
  } else if (currentGameState === gameState.active) {
    player.draw();
  }

  player.draw();
}
