let x = 250;
let y = 400;
let pos = 20; // x position of mouse
const scoreField = document.getElementById("score");
var canvas = document.getElementById("main");
let current_level = 1;
const level1 = ["100", "110", "120", "130", "140", "150", "160", "170"];
const ctx = canvas.getContext("2d");
const paddle = new Paddle(150, 15, ctx, canvas);
const ball = new Ball(13, "black", x, y);
const currentLevels = 2;
const bricks = drawBricks(current_level);
canvas.style.backgroundSize = "500px 500px";
const canvasBoundRect = canvas.getBoundingClientRect();
// Make sure the image is loaded first otherwise nothing will draw.

// Draw whatever else over top of it on the canvas.
let totalBricks = bricks.length;

let totalScore = 0;

setTimeout(() => {
  playBackroundMusic();
}, 200);

const draw = (evt) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (totalBricks == 0) {
    console.log("Khatam");
    pauseBackgroundMusic();
    playLevelComplete();
    clearInterval(game);
    return;
  }
  for (let i in bricks) {
    if (bricks[i] !== 0) {
      bricks[i].render();
      let collision = bricks[i].checkCollision(ball);
      if (collision != null) {
        totalBricks -= 1;
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
        if (collision[1] == 0) bricks[i] = 0;
      }
    }
  }

  ball.render(ctx);
  paddle.render(pos);
  ball.changeDirection(paddle);
  scoreField.innerHTML = "Score :" + totalScore;
};

const game = setInterval(() => {
  draw();
}, 20);

canvas.addEventListener("mousemove", (e) => {
  pos = e.clientX - canvasBoundRect.x;
});

function drawBricks(current_level) {
  let bricks = level[current_level].getBricks();
  return bricks;
}
