let x,
  y,
  pos,
  scoreField,
  canvas,
  ctx,
  paddle,
  ball,
  currentLevels,
  bricks,
  gameStatus,
  powerUpBalls,
  canvasBoundRect,
  totalBricks,
  totalScore,
  game,
  backgroundImages = [
    null,
    "url('images/levels/lvl-1.jpg')",
    "url('images/levels/lvl-2.jpg')",
    "url('images/levels/lvl-3.jpg')",
    "url('images/levels/lvl-4.jpg')",
    "url('images/levels/lvl-5.jpg')",
    "url('images/levels/lvl-6.jpg')",
  ],
  paddle_ball_color = [
    null,
    "white",
    "white",
    "white",
    "white",
    "white",
    "white",
  ];
initialize();

function initialize() {
  x = 250;
  y = 400;
  pos = 250; // x position of mouse
  scoreField = document.getElementById("score"); // reference to score Field
  canvas = document.getElementById("main"); //reference to canvas
  ctx = canvas.getContext("2d");

  current_level = window.localStorage.getItem("current_level");
  console.log(window.localStorage.getItem("current_level"));
  current_level = current_level == null ? 1 : Number(current_level);

  paddle = new Paddle(150, 15, ctx, canvas, paddle_ball_color[current_level]);
  ball = new Ball(13, paddle_ball_color[current_level], x, y);

  currentLevels = 3;
  bricks = drawBricks(current_level);
  gameStatus = "Playing";
  powerUpBalls = [];
  canvasBoundRect = canvas.getBoundingClientRect();
  totalBricks = bricks.length;
  canvas.style.background = backgroundImages[current_level];
  canvas.style.backgroundSize = "500px 500px";
  totalScore = 0;
  setTimeout(() => {
    playBackroundMusic();
  }, 200);

  canvas.addEventListener("click", () => {
    game = setInterval(() => {
      draw();
    }, 20);
  });

  draw();
}

function draw(evt) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (totalBricks == 0 || gameStatus === "Game Over") {
    if (totalBricks == 0) {
      window.localStorage.setItem("current_level", String(current_level + 1));
      window.localStorage.getItem("current_level");
    }
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
