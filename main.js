// Background - variable "backgroundImage"
let backgroundImage;
let x = 100;
let y = 600;
import Character from "./character.js";
import Button from "./button.js";
import Platform from "./Platform.js";

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
const startButton = new Button(105, 295, 150, 50); // Create a new button instance - (x, y) klopt nog niet volgens mij
const platform = new Platform(50, 500, 200, 20); // Create a new platform instance
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
    platform.draw();
  }
}

// This ONLY runs at the exact moment you click your mouse
function mouseClicked() {
  if (currentGameState === gameState.intro && startButton.mouseClicked()) {
    currentGameState = gameState.active;
  }
}
