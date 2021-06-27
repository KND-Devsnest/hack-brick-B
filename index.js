let x = 250;
let y = 400;
let pos = 250; // x position of mouse
const scoreField = document.getElementById("score");
const canvas = document.getElementById("main");
let current_level = 5;
const level1 = ["100", "110", "120", "130", "140", "150", "160", "170"];
const ctx = canvas.getContext("2d");
const paddle = new Paddle(150, 15, ctx, canvas);
const ball = new Ball(13, "black", x, y);
const currentLevels = 1;
const bricks = drawBricks(current_level);
let gameStatus = "Playing";
const powerUpBalls = [];

const canvasBoundRect = canvas.getBoundingClientRect();

console.log(bricks);
let totalBricks = bricks.length;

let totalScore = 0;

setTimeout(() => {
  playBackroundMusic();
}, 200);

let game;
canvas.addEventListener("click", () => {
  game = setInterval(() => {
    draw();
  }, 20);
});

draw();

function draw(evt) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (totalBricks == 0 || gameStatus === "Game Over") {
    console.log("Khatam");
    pauseBackgroundMusic();
    playLevelComplete();
    clearInterval(game);
    ctx.font = "48px sans-serif";
    ctx.fillText(totalBricks == 0 ? "Game Won!" : "Game Over!", 125, 250);
    return;
  }

  for (let i in bricks) {
    if (bricks[i] !== 0) {
      bricks[i].render();
      let collision = bricks[i].checkCollision(ball);
      if (collision != null) {
        totalScore += bricks[i].score;

        if (collision[0] === "down" && ball.ySpeed < 0) {
          ball.ySpeed *= -1;
        } else if (collision[0] === "up" && ball.ySpeed > 0) {
          ball.ySpeed *= -1;
        } else if (collision[0] === "right" && ball.xSpeed < 0) {
          ball.xSpeed *= -1;
        } else if (collision[0] === "left" && ball.xSpeed > 0) {
          ball.xSpeed *= -1;
        }
        if (collision[1] <= 0) {
          if (bricks[i].powerType != null) {
            powerUpBalls.push(
              new Ball(
                10,
                "blue",
                bricks[i].x + Math.floor(bricks[i].width / 2),
                bricks[i].y + bricks[i].height,
                bricks[i].powerType,
                0,
                4
              )
            );
          }
          totalBricks -= 1;
          bricks[i] = 0;
        }
      }
    }
  }

  ball.render(ctx);
  paddle.render(pos, ctx);
  ball.changeDirection(paddle);

  for (let i in powerUpBalls) {
    if (!powerUpBalls[i].isActive) continue;
    powerUpBalls[i].render(ctx);
    if (powerUpBalls[i].changeDirection(paddle, ball)) {
      powerUpBalls[i].isActive = false;
    }
  }

  scoreField.innerHTML = totalScore;
}

canvas.addEventListener("mousemove", (e) => {
  pos = e.clientX - canvasBoundRect.x;
});

function drawBricks(current_level) {
  let bricks = level[current_level].getBricks();
  return bricks;
}
