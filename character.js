export default class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 35; // Character width
    this.h = 45; // Character height
  }

  draw() {
    // Spikes
    stroke(0);
    for (let a = 0; a < TWO_PI; a += 0.18) {
      line(x + 80, y + 15, x + 80 + cos(a) * 17, y + 15 + sin(a) * 17);
    }

    //Character
    fill(0);
    noStroke();
    circle(x + 80, y + 15, 30);

    // Eyes
    fill(255);
    circle(x + 76, y + 15, 5); //Eye-left
    circle(x + 84, y + 15, 5); //Eye-right

    fill(0);
    circle(x + 83, y + 15, 2); //Eye-right-pupil
    circle(x + 77, y + 15, 2); //Eye-left-pupil

    // Legs
    stroke(0);
    strokeWeight(1.5);
    noFill();

    //Left
    beginShape();
    vertex(x + 74, y + 28); // Begin
    vertex(x + 70, y + 34); // Knee
    vertex(x + 74, y + 40); // End
    endShape();

    //Right
    beginShape();
    vertex(x + 86, y + 28); // Begin
    vertex(x + 90, y + 34); // Knee
    vertex(x + 86, y + 40); // End
    endShape();
  } // Is this supposed to be our character?

  jump() {
    this.y -= 20; // Move character up by 20 pixels
  }

  fall() {
    this.y += 20; // Move character down by 20 pixels
  }
}
