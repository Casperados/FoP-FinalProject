export default class Platform {
  xPos;
  yPos;
  width;
  height;

  constructor(x, y, width, height) {
    this.xPos = x;
    this.yPos = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    noStroke();

    // 1. Earthy soil base
    fill("#7f5539");
    rect(this.xPos, this.yPos, this.width, this.height, 8);

    //  grass cap along the top (25% of the platform's height)
    fill("#6a994e");
    rect(this.xPos, this.yPos, this.width, this.height * 0.25, 8);
  }
}
