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
      line(
        this.x + 80,
        this.y + 15,
        this.x + 80 + cos(a) * 17,
        this.y + 15 + sin(a) * 17,
      );
    }

    //Character
    fill(0);
    noStroke();
    circle(this.x + 80, this.y + 15, 30);

    // Ethis.yes
    fill(255);
    circle(this.x + 76, this.y + 15, 5); //Ethis.ye-left
    circle(this.x + 84, this.y + 15, 5); //Ethis.ye-right

    fill(0);
    circle(this.x + 83, this.y + 15, 2); //Ethis.ye-right-pupil
    circle(this.x + 77, this.y + 15, 2); //Ethis.ye-left-pupil

    // Legs
    stroke(0);
    strokeWeight(1.5);
    noFill();

    //Left
    beginShape();
    vertex(this.x + 74, this.y + 28); // Begin
    vertex(this.x + 70, this.y + 34); // Knee
    vertex(this.x + 74, this.y + 40); // End
    endShape();

    //Right
    beginShape();
    vertex(this.x + 86, this.y + 28); // Begin
    vertex(this.x + 90, this.y + 34); // Knee
    vertex(this.x + 86, this.y + 40); // End
    endShape();
  } // Is this supposed to be our character?

  jump() {
    this.y -= 20; // Move character up bthis.y 20 pithis.xels
  }

  fall() {
    this.y += 20; // Move character down bthis.y 20 pithis.xels
  }
}
