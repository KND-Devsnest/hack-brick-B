function level1Bricks() {
  canvas.style.background = "url('images/levels/lvl-2.jpg')no-repeat";
  let bricks = [],
    space = 0;
  for (let i = 0; i < 5; ++i) {
    for (let j = 0; j < 10; ++j) {
      bricks.push(new Brick(j * 50, i * 25 + space, 50, 25, ctx, "normal"));
    }
    space += 5;
  }
  //0, 25, 50, 75, 100
  return bricks;
}

function level2Bricks() {
  canvas.style.background = "url('images/levels/lvl-1.jpg')no-repeat";
}

function level3Bricks() {
  canvas.style.background = "url('images/levels/lvl-3.jpg')no-repeat";
}

function level4Bricks() {
  canvas.style.background = "url('images/levels/lvl-4.jpg')no-repeat";
}

function level5Bricks() {
  canvas.style.background = "url('images/levels/lvl-6.jpg')no-repeat";
}

const level = [
  {},
  { getBricks: level1Bricks },
  { getBricks: level1Bricks },
  { getBricks: level1Bricks },
  { getBricks: level1Bricks },
  { getBricks: level1Bricks },
];
