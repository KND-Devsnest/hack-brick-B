let x = 100;
let y = 100;
let xspeed = 1;
let yspeed = 2.8;
let pos = 20; // x position of mouse
const canvas = document.getElementById("main");
//const level1 = ["100", "110", "120", "130", "140", "150", "160", "170"];
const ctx = canvas.getContext("2d");
const paddle = new Paddle(150, 15, ctx, canvas);
const ball = new Ball(13, "black", x, y);
const bricks = drawBricks();

const draw = (evt) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  for(let i in bricks){
    if (bricks[i] !== 0){
      
      bricks[i].render();
      let collision = bricks[i].checkCollision(ball);
      if (collision != null){
        console.log("Collided")
        bricks[i] = 0;
        if(ball.xSpeed * collision[0] < 0)
          ball.xSpeed *= collision[0];
        if(ball.yspeed * collision[1] < 0)
          ball.ySpeed *= collision[1];
      }
    }
  }

  x += xspeed;
  y += yspeed;
  // ctx.beginPath();
  // ctx.arc(x, y, 13, 0, 2 * Math.PI);
  // ctx.fill();
  ball.render(ctx);

  paddle.render(pos);
  ball.changeDirection();

  
  
  // if (x > canvas.width || x < 0) {
  //   xspeed = xspeed * -1;
  // }
  // if (y < 0) {
  //   yspeed = yspeed * -1;
  // }
  // if (x >= pos && x <= pos + 50 && y >= 450 && y <= 460) {
  //   yspeed = yspeed * -1;
  // }
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
    bricks.push(new Brick(i * 50, 30, 50, 25, ctx));
  }
  return bricks;
}

function checkCollision() {}
