import {SYMBOL_SIZE} from "./constants";

class Symbol {
  constructor(p5, x, y, speed, first) {
    this.p5 = p5;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.value = "";
    this.switchInterval = p5.round(p5.random(2, 50))
    this.size = SYMBOL_SIZE;
    this.first = first;
  }

  getRandomLetter = () => {
    const p5 = this.p5;
    if (p5.frameCount % this.switchInterval === 0) {
      this.value = String.fromCharCode(
        0x30A0 + p5.round(p5.random(0, 92))
      );
    }
  }

  rain = () => {
    const p5 = this.p5;
    this.y = this.y >= p5.height ? 0 : this.y + this.speed
  }

}

export default Symbol;