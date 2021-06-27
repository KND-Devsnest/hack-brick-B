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
    this.defaultColor = "black";
    this.strength = 1;
  }

    }

  render(ctx) {
    if (!this.isActive) return;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  changeDirection(paddle, mainBall) {
    //change ball direction when it hits a wall or the paddle.
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.xSpeed = -this.xSpeed;
    }

        if(this.y - this.radius < 0){
            this.ySpeed = -this.ySpeed;
        }

        if(this.y > 500 && this.powerUp == undefined){
            gameStatus = "Game Over";
        }

        if (
            this.x + this.radius >= pos - Math.floor(paddle.width/2) &&
            this.x - this.radius <= pos + Math.floor(paddle.width/2) &&
            this.y + this.radius >= paddle.y &&
            this.y + this.radius <= paddle.y + paddle.height
        ){
            playPaddleHit();
            if (this.powerUp == "paddleIncrease"){
                paddle.increase();
                return true;
            }
            else if (this.powerUp == "paddleDecrease"){
                paddle.decrease();
                return true;
            }
            else if(this.powerUp == "goThrough"){
                mainBall.becomeGoThrough();
                return true;
            }
            else if(this.powerUp == "powerBall"){
                mainBall.increaseStrength();
                return true;
            }
            this.ySpeed = -this.ySpeed;
            
        }
    }
    if (
      this.x + this.radius >= pos - Math.floor(paddle.width / 2) &&
      this.x - this.radius <= pos + Math.floor(paddle.width / 2) &&
      this.y + this.radius >= paddle.y &&
      this.y + this.radius <= paddle.y + paddle.height
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
      }
      this.ySpeed = -this.ySpeed;
    }
  }

  becomeGoThrough() {
    if (this.isGoThrough) return;
    this.isGoThrough = true;
    let color = this.color;
    this.color = "red";
    setTimeout(() => {
      this.isGoThrough = false;
      this.color = this.defaultColor;
    }, 3000);
  }

  increaseStrength() {
    if (this.strength >= 3) return;
    this.strength += 2;
    this.color = "grey";
    console.log(this.strength);
    setTimeout(() => {
      this.strength = 1;
      this.color = this.defaultColor;
    }, 5000);
  }
}

