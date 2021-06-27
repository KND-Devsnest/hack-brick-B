let x = 100;
let y = 100;
let pos = 20; // x position of mouse
const scoreField = document.getElementById('score');
const canvas = document.getElementById("main");
//const level1 = ["100", "110", "120", "130", "140", "150", "160", "170"];
const ctx = canvas.getContext("2d");
const paddle = new Paddle(150, 15, ctx, canvas);
const ball = new Ball(13, "black", x, y);
const bricks = drawBricks();

let totalBricks = bricks.length;

let totalScore = 0;


const draw = (evt) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if(totalBricks == 0){
    console.log("Khatam");
    return; 
  }
  
  for(let i in bricks){
    if (bricks[i] !== 0){
      
      bricks[i].render();
      let collision = bricks[i].checkCollision(ball);
      if (collision != null){
        totalBricks -= 1;
        totalScore += bricks[i].score;
        console.log(bricks[i])
        console.log(ball.xSpeed, ball.ySpeed)
        if(collision[0] === 'down' && ball.ySpeed < 0) {
          ball.ySpeed *= -1;
        } else if(collision[0] === 'up' && ball.ySpeed > 0) {
          ball.ySpeed *= -1;
        } else if(collision[0] === 'right' && ball.xSpeed < 0) {
          ball.xSpeed *= -1;
        } else if(collision[0] === 'left' && ball.xSpeed > 0) {
          ball.xSpeed *= -1;
        }
        if (collision[1] == 0)
          bricks[i] = 0;
      } 
    }
  }

  ball.render(ctx);
  paddle.render(pos);
  ball.changeDirection(paddle);
  scoreField.innerHTML = "Score :" + totalScore;
}

setInterval(() => {
  draw();
}, 20);

canvas.addEventListener("mousemove", (e) => {
  pos = e.clientX;
});

function drawBricks(){
  let bricks = []
  for (let i = 0; i < 10; i++) {
    bricks.push(new Brick(i * 50, 30, 50, 25, ctx, 'rock'));
  }
  return bricks;
}

function checkCollision() {}
