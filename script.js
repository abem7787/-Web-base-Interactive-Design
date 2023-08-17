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

  resize() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.centerX = this.width / 2 | 0
    this.centerY = this.height / 2 | 0

    canvas.width = this.width
    canvas.height = this.height

    this.connectArea.destX = this.centerX
    this.connectArea.destY = this.centerY

    this.bounds.right = this.width - 2
    this.bounds.bottom = this.height - 2

    this.colorCounter = 0
    this.dotCount = this.width * this.height / 3000 | 0

    if (this.dotCount > this.dots.length) {
      for (let i = this.dotCount - this.dots.length; i > 0; i--) {
        this.dots.push(
          new Dot(
            this.width,
            this.height,
            (((this.colorCounter += 2) < 360) ? this.colorCounter : this.colorCounter = 0)
          )
        )
      }
    } else if (this.dotCount < this.dots.length) {

      this.dots.splice(0, this.dotCount - this.dots.length)

      for (let i = 0; i < this.dotCount; i++) {
        if (this.dots[i].y < this.bounds.top ||
          this.dots[i].y > this.bounds.bottom ||
          this.dots[i].x < this.bounds.left ||
          this.dots[i].x > this.bounds.right) {
          this.dots[i].x = Math.random() * this.width | 0
          this.dots[i].y = Math.random() * this.height | 0
        }
      }
    }

  }
}