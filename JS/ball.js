class Ball {
  constructor(radius, color, startX, startY, powerUp, xSpeed = 2, ySpeed = -8) {
    this.radius = radius;
    this.color = color;
    this.x = startX;
    this.y = startY;
    this.xSpeed = xSpeed; //2
    this.ySpeed = ySpeed; //4.8
    this.powerUp = powerUp;
    this.isActive = true;
    this.isGoThrough = false;
    this.defaultColor = color;
    this.strength = 1;
  }

  render(ctx) {
    if (!this.isActive) return;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    ctx.beginPath();
    ctx.shadowColor = "black";
    ctx.shadowBlur = 10;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 0;
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  changeDirection(paddle, mainBall) {
    //change ball direction when it hits a wall or the paddle.
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.xSpeed = -this.xSpeed;
    }

    if (this.y - this.radius < 0) {
      this.ySpeed = -this.ySpeed;
    }

    if (this.y > 500 && this.powerUp == undefined) {
      gameStatus = "Game Over";
    }

    if (
      this.x + this.radius >= paddle.x &&
      this.x - this.radius <= paddle.x + paddle.width &&
      this.y + this.radius >= paddle.y &&
      this.y + this.radius <= paddle.y + paddle.height &&
      this.ySpeed > 0
    ) {
      playPaddleHit();
      if (this.powerUp == "paddleIncrease") {
        paddle.increase();
        return true;
      } else if (this.powerUp == "paddleDecrease") {
        paddle.decrease();
        return true;
      } else if (this.powerUp == "goThrough") {
        mainBall.becomeGoThrough();
        return true;
      } else if (this.powerUp == "powerBall") {
        mainBall.increaseStrength();
        return true;
      } else if (this.powerUp == "fastBall") {
        mainBall.increaseSpeed();
        return true;
      } else if (this.powerUp == "slowBall") {
        mainBall.decreaseSpeed();
        return true;
      }
      this.ySpeed = -this.ySpeed;
    }
  }

  becomeGoThrough() {
    if (this.isGoThrough) return;
    this.isGoThrough = true;
    this.color = "#69d2ff";
    setTimeout(() => {
      this.isGoThrough = false;
      this.color = this.defaultColor;
    }, 3000);
  }

  increaseStrength() {
    if (this.strength >= 3) return;
    this.strength += 2;
    this.color = "#ea69ff";
    setTimeout(() => {
      this.strength = 1;
      this.color = this.defaultColor;
    }, 5000);
  }

  increaseSpeed() {
    if (false) return;
    this.ySpeed = this.ySpeed < 0 ? -10 : 10;
    this.color = "#ff8a00";
    setTimeout(() => {
      this.ySpeed = this.ySpeed < 0 ? -8 : 8;
      this.color = this.defaultColor;
    }, 4000);
  }

  decreaseSpeed() {
    if (false) return;
    this.ySpeed = this.ySpeed < 0 ? -6 : 6;
    this.color = "#67dc65";
    setTimeout(() => {
      this.ySpeed = this.ySpeed < 0 ? -8 : 8;
      this.color = this.defaultColor;
    }, 4000);
  }
}
