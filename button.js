export default class Button {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = width; // Character width
    this.h = height; // Character height
  }

  draw() {
    strokeWeight(0);
    fill("#aec3b0");
    rect(this.x, this.y, this.w, this.h);

    stroke(0);
    strokeWeight(0);
    fill(255);
    textSize(20);
    text("Click here", 205, 205);
  }
}
