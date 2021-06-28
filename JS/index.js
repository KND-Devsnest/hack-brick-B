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
  gameWonDiv,
  nextLvlBttn,

  highestScore,
  highestScorePlayer,
  
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
    "red",
    "white",
    "white",
    "white",
    "black",
    "white",
  ],
  paddle_color = [null, "black", "black", "white", "white", "white", "white"],
  powerUpBallColors = {
    paddleIncrease: "pink",
    paddleDecrease: "purple",
    goThrough: "blue",
    powerBall: "grey",
    fastBall: "red",
    slowBall: "yellow",
  };
initialize();

function initialize() {
  x = 250;
  y = 400;
  pos = 250; // x position of mouse
  scoreField = document.getElementById("score"); // reference to score Field
  canvas = document.getElementById("main"); //reference to canvas
  gameWonDiv = document.querySelector('.game-won-wrapper');
  nextLvlBttn = document.getElementById('next-lvl-btn');
  ctx = canvas.getContext("2d");
  currentLevels = 6;
  //current_level = window.localStorage.getItem("current_level");
  current_level = parseInt(window.location.search[1]);
  if( isNaN(current_level) || current_level < 1 || current_level > currentLevels){
    current_level = 1;
  }
  console.log(current_level);
  current_level = current_level == null ? 1 : Number(current_level);

  highestScore = window.localStorage.getItem("highestScore"+current_level);
  if(highestScore == null)  highestScore = "N/A";

  highestScorePlayer = window.localStorage.getItem("highestScore"+current_level+"Player");
  if(highestScorePlayer == null) highestScorePlayer = "N/A";

  paddle = new Paddle(150, 15, 10, ctx, canvas, paddle_color[current_level]);
  ball = new Ball(13, paddle_ball_color[current_level], x, y);

  bricks = drawBricks(current_level);
  gameStatus = "Playing";
  powerUpBalls = [];
  canvasBoundRect = canvas.getBoundingClientRect();
  totalBricks = bricks.length;
  canvas.style.background = backgroundImages[current_level];
  canvas.style.backgroundSize = "cover";
  canvas.style.backgroundRepeat = "no-repeat";
  totalScore = 0;
  setTimeout(() => {
    playBackroundMusic();
  }, 200);

  function startGame() {
    game = setInterval(() => {
      canvas.removeEventListener("click", startGame);
      draw();
    }, 20);
  }

  canvas.addEventListener("click", startGame);

  draw();
}

function draw(evt) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (totalBricks == 0 || gameStatus === "Game Over") {
    pauseBackgroundMusic();

    if(totalScore > highestScore) {
      // Save highestScore for this level
      window.localStorage.setItem("highestScore"+current_level, String(totalScore));

      //Save name of player
      window.localStorage.setItem("highestScore"+current_level+"Player", window.localStorage.getItem("currentPlayer"))
    }

    if (totalBricks == 0) {
      console.log(totalScore);
      document.getElementById('ttl-score').innerHTML = totalScore;
      window.localStorage.setItem("current_level", String(current_level + 1));
      window.localStorage.getItem("current_level");
      nextLvlBttn.href = ++current_level > 6 ? "./index.html?game_won" : "./home.html?" + current_level;
      gameWonDiv.style.display = "block";
      playLevelComplete();
    } else {
      playLevelFail();
    }
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
                powerUpBallColors[bricks[i].powerType],
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
  paddle.render(pos, ctx, canvasBoundRect.width);
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
