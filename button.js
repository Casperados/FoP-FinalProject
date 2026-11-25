export default class Button {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.w = width; // Character width
    this.h = height; // Character height
  }

  draw() {
    strokeWeight(0);
    fill("#f4f1de");
    strokeWeight(2.5);
    fill("#6b9080");
    rect(this.x, this.y, this.w, this.h, 20);

    stroke(0);
    strokeWeight(0);
    fill("#f4f1de");
    textFont("Georgia");
    textSize(20);
    textAlign(CENTER, CENTER); // Centers the text both horizontally and vertically
    text("Start Game", this.x + this.w / 2, this.y + this.h / 2);
  }

  mouseClicked() {
    if (
      mouseX > this.x &&
      mouseX < this.x + this.w &&
      mouseY > this.y &&
      mouseY < this.y + this.h
    ) {
      return true;
    }
    return false;
  }
}
