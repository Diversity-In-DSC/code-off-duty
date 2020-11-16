import Symbol from "./Symbol";

class Stream {
  constructor(p5) {
    this.p5 = p5;
    this.symbols = []
    this.totalSymbols = p5.round(p5.random(5, 20))
    this.speed = p5.round(p5.random(5, 7))
  }

  generateSymbols = (x, y) => {
    const p5 = this.p5
    for (let i = 0; i < this.totalSymbols; i++) {
      let first = p5.round(p5.random(0, this.totalSymbols / 2)) === 1
      let symbol = new Symbol(p5, x, y, this.speed, first)
      symbol.getRandomLetter();
      this.symbols.push(symbol)
      y -= symbol.size
    }
  }

  render = () => {
    const p5 = this.p5
    const alpha = 80;
    this.symbols.forEach((symbol) => {
      if (symbol.first)
        p5.fill(180, 255, 180, alpha)
      else
        p5.fill(0, 255, 70, alpha);
      p5.textSize(symbol.size);
      p5.text(symbol.value, symbol.x, symbol.y)
      symbol.rain();
      symbol.getRandomLetter();
    });
  }

}

export default Stream;