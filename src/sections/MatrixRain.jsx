import React, {Component} from 'react';
import p5  from 'p5';
import Stream from "../rain/Stream";

let streams = [];

const P5 = p5;

// Code Off Duty MatrixRain Section with Matrix Effect
class MatrixRain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p5: null,
    }
    this.setup = this.setup.bind(this)
    this.draw = this.draw.bind(this)
    this.windowResized = this.windowResized.bind(this)
  }

  componentDidMount() {
    new P5(this.sketch)
  }

  createStreams = (p5) => {
    let x = 0;
    for (let i = 0; i < p5.width / 60; i++) {
      let stream = new Stream(p5);
      stream.generateSymbols(x, p5.round(p5.random(-1000, 0)));
      streams.push(stream)
      x += 60
    }
  }

  setup = (p5) => {
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    let scrollWidth = Math.max(
      document.body.scrollWidth, document.documentElement.scrollWidth,
      document.body.offsetWidth, document.documentElement.offsetWidth,
      document.body.clientWidth, document.documentElement.clientWidth
    )
    const canvas = p5.createCanvas(scrollWidth, scrollHeight)
    p5.fullscreen();
    canvas.parent('sketch-holder')
    canvas.position(0,0)
    p5.background(0)
    this.createStreams(p5)
    this.setState({p5})
  }

  draw = (p5) => {
    p5.background(0);
    streams.forEach(s => {
      s.render();
    })
  }

  windowResized = (p5) => {
    let scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    let scrollWidth = Math.max(
      document.body.scrollWidth, document.documentElement.scrollWidth,
      document.body.offsetWidth, document.documentElement.offsetWidth,
      document.body.clientWidth, document.documentElement.clientWidth
    )
    p5.resizeCanvas(scrollWidth, scrollHeight);
  }

  sketch = (p5) => {
    p5.setup = () => this.setup(p5)
    p5.draw = () => this.draw(p5)
    p5.windowResized = () => this.windowResized(p5)
  }

  render() {
    return (
      <div id="sketch-holder">

      </div>
    );
  }
}

export default MatrixRain;