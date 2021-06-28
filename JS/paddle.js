class Paddle {
  constructor(width, height, radius, ctx, canvas, color) {
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.canvas = canvas;
    this.color = color;
    this.radius = radius;
    this.defaultColor = color;
    this.x = 175;
    this.y = 450;
  }

  roundRect = function (x, y, width, height, radius) {
    return this;
  };

  render(pos, ctx) {
    // move paddle on mouse change -> access pos variable
    let paddleXPos = pos - Math.floor(this.width / 2);
    if (paddleXPos < 0) this.x = 0;
    else if (paddleXPos + this.width > canvas.width) {
      this.x = canvas.width - this.width;
    } else {
      this.x = paddleXPos;
    }
    if (this.width < 2 * this.radius) this.radius = this.width / 2;
    if (this.height < 2 * this.radius) this.radius = this.height / 2;
    ctx.beginPath();
    ctx.moveTo(this.x + this.radius, this.y);
    ctx.arcTo(
      this.x + this.width,
      this.y,
      this.x + this.width,
      this.y + this.height,
      this.radius
    );
    ctx.arcTo(
      this.x + this.width,
      this.y + this.height,
      this.x,
      this.y + this.height,
      this.radius
    );
    ctx.arcTo(this.x, this.y + this.height, this.x, this.y, this.radius);
    ctx.arcTo(this.x, this.y, this.x + this.width, this.y, this.radius);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();

    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.x, this.y, this.width, this.height); // create rectangle for paddle
  }

  increase() {
    this.width += 30;
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
