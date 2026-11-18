// Background - variable "backgroundImage"
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

  // Spikes
  stroke(0);
  for (let a = 0; a < TWO_PI; a += 0.18) {
    line(180, 615, 180 + cos(a) * 17, 615 + sin(a) * 17);
  }

  //Character
  fill(0);
  noStroke();
  circle(180, 615, 30);

  // Eyes
  fill(255);
  circle(176, 615, 5); //Eye-left
  circle(184, 615, 5); //Eye-right

  fill(0);
  circle(183, 615, 2); //Eye-right-pupil
  circle(177, 615, 2); //Eye-left-pupil

  // Legs
  stroke(0);
  strokeWeight(1.5);
  noFill();

  //Left
  beginShape();
  vertex(174, 628); // Begin
  vertex(170, 634); // Knee
  vertex(174, 640); // End
  endShape();

  //Right
  beginShape();
  vertex(186, 628); // Begin
  vertex(190, 634); // Knee
  vertex(186, 640); // End
  endShape();
}
