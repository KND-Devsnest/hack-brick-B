let powerUps = [
  "paddleIncrease",
  "paddleDecrease",
  "goThrough",
  "powerBall",
  "fastBall",
  "slowBall",
];
let powerCount = [null, 8, 8, 12, 12, 16, 16];

class Brick {
  constructor(x, y, width, height, ctx, type, currentLevel) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
    this.type = type;
    this.hit = brickTypes[type]["hits"];
    this.MAXHITS = brickTypes[type]["hits"];
    this.score = brickTypes[type]["score"];
    this.color = brickTypes[type]["color"];
    this.src = brickTypes[type]["src"];
    this.soundFx = brickTypes[type]["soundFx"];
    this.powerType = (function () {
      //return powerUps[Math.floor(Math.random() * 2) + 1];
      if (powerCount[currentLevel] > 0 && Math.random() - 0.5 > 0) {
        //Provide   a powerUp
        --powerCount[currentLevel];
        //console.log(x, y);
        return powerUps[Math.floor(Math.random() * 4)];
      }
      // Else return
      return null;
    })();
  }

  render() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, this.y, this.width, this.height);
    // let bg = new Image();
    // bg.src = this.src;
    // this.ctx.drawImage(bg, this.x, this.y);
    // bg.onload = function () {

    // };
    this.ctx.fillStyle = `rgba(${this.color.r},${this.color.g},${
      this.color.b
    },${this.hit / this.MAXHITS})`;
    this.ctx.strokeStyle = "black";
    this.ctx.lineWidth = 0;
    this.ctx.stroke();
    this.ctx.fill();
  }

  checkCollision(ball) {
    //console.log(ball);

    if (
      ball.y - ball.radius <= this.y + this.height && //(down)
      ball.y + ball.radius >= this.y && //(upar)
      ball.x + ball.radius >= this.x && //(left)
      ball.x - ball.radius <= this.x + this.width //(right)
    ) {
      this.hit -= ball.strength;
      playBrickHit(this.soundFx);
      if (ball.isGoThrough) return ["no change", 0];
      if (ball.y - ball.radius >= this.y + this.height - 20)
        return ["down", this.hit];
      if (ball.y + ball.radius <= this.y + 20) return ["up", this.hit];
      if (ball.x + ball.radius <= this.x + 20) return ["left", this.hit];
      if (ball.x - ball.radius >= this.x + this.width - 20)
        return ["right", this.hit];
    } else return null;
  }
}

const brickTypes = {
  wood: {
    color: { r: 193, g: 154, b: 108 },
    score: 1,
    hits: 1,
    src: "./images/texture/wood_1.png",
    soundFx: "./sounds/gameSounds/woodBrickHit.wav",
  },
  rock: {
    color: { r: 173, g: 35, b: 54 },
    score: 2,
    hits: 3,
    src: "./images/texture/stone_1.jpg",
    soundFx: "./sounds/gameSounds/rockBrickHit1.wav",
  },
  iron: {
    color: { r: 192, g: 192, b: 192 },
    score: 3,
    hits: 4,
    src: "./images/texture/iron_1.png",
    soundFx: "./sounds/gameSounds/ironBrickHit.wav",
  },
};
