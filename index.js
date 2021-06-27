let x = 100;
let y = 100;
let xspeed = 1;
let yspeed = 2.8;
let pos = 20;
const canvas = document.getElementById("main");
const level1 = ["100", "110", "120", "130", "140", "150", "160", "170"];
ctx = canvas.getContext("2d");
function draw(evt) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBoard();

  x += xspeed;
  y += yspeed;
  ctx.beginPath();
  ctx.arc(x, y, 13, 0, 2 * Math.PI);
  ctx.fill();
  ctx.beginPath();
  ctx.rect(pos, 450, 50, 10);
  ctx.stroke();

  if (x > canvas.width || x < 0) {
    xspeed = xspeed * -1;
  }
  if (y < 0) {
    yspeed = yspeed * -1;
  }
  if (x >= pos && x <= pos + 50 && y >= 450 && y <= 460) {
    yspeed = yspeed * -1;
  }
}
setInterval(() => {
  draw();
}, 20);

canvas.addEventListener("mousemove", (e) => {
  pos = e.clientX;
});
function drawBoard() {
  for (let i of level1) {
    ctx.beginPath();
    ctx.rect(i, 30, 50, 10);
    ctx.stroke();
  }
}

function checkCollision() {}
