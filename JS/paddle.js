class Paddle {
  constructor(width, height, ctx, canvas, color) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.canvas = canvas;
    this.color = color;
    this.x = 175;
    this.y = 450;
  }

  render(pos, ctx) {
    // move paddle on mouse change -> access pos variable
    let paddleXPos = pos - Math.floor(this.width / 2);
    if (paddleXPos < 0) this.x = 0;
    else if (paddleXPos + this.width > canvas.width) {
      this.x = canvas.width - this.width;
    } else {
      this.x = paddleXPos;
    }

    ctx.fillStyle = this.color;
    console.log(this.color);
    ctx.fillRect(this.x, this.y, this.width, this.height); // create rectangle for paddle
    //ctx.fill();
  }

  increase() {
    this.width += 30;
    console.log(this.width);
    setTimeout(() => {
      this.width -= 30;
    }, 10000);
  }

  decrease() {
    this.width -= 30;
    setTimeout(() => {
      this.width += 30;
    }, 10000);
  }
}
