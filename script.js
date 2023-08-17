'use strict';

const PI2 = 2 * Math.PI
function map(s, a1, a2, b1, b2) {
  return (b1 + (s - a1) * (b2 - b1) / (a2 - a1));
}

class Connect {
  constructor() {
    ctx.lineWidth = 0.1

    this.connectArea = {
      maxConnectionLength: 80,
      connectAreaRadius: 130,
      x: 0,
      y: 0,
      destX: 0,
      destY: 0
    };

    this.bounds = {
      top: 2,
      left: 2,
      right: 0,
      bottom: 0
    };

    this.dots = []

    this.resize()
    this.connectArea.x = this.centerX
    this.connectArea.y = this.centerY

  }
}