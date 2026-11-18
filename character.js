export default class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 35; // Character width
    this.h = 45; // Character height
  }

  draw() {
    rect(this.x, this.y, this.w, this.h);
  } // Is this supposed to be our character?

  jump() {
    this.y -= 20; // Move character up by 20 pixels
  }

  fall() {
    this.y += 20; // Move character down by 20 pixels
  }
}
