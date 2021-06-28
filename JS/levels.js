function level1Bricks() {
  const level1 = [
    [0, 0],
    [50, 0],
    [100, 0],
    [150, 0],
    [200, 0],
    [250, 0],
    [300, 0],
    [350, 0],
    [400, 0],
    [450, 0],
    [0, 25],
    [50, 25],
    [100, 25],
    [150, 25],
    [200, 25],
    [250, 25],
    [300, 25],
    [350, 25],
    [400, 25],
    [450, 25],
    [0, 50],
    [50, 50],
    [100, 50],
    [150, 50],
    [200, 50],
    [250, 50],
    [300, 50],
    [350, 50],
    [400, 50],
    [450, 50],
    [0, 75],
    [50, 75],
    [100, 75],
    [150, 75],
    [200, 75],
    [250, 75],
    [300, 75],
    [350, 75],
    [400, 75],
    [450, 75],
    [0, 100],
    [50, 100],
    [100, 100],
    [150, 100],
    [200, 100],
    [250, 100],
    [300, 100],
    [350, 100],
    [400, 100],
    [450, 100],
  ];
  let bricks = [];
  for (let i = 0; i < level1.length; ++i) {
    bricks.push(new Brick(level1[i][0], level1[i][1], 45, 20, ctx, "wood"));
  }
  //0, 25, 50, 75, 100
  return bricks;
}

function level2Bricks() {
  type = ["wood", "stone"];
  const level2 = [
    [0, 0],
    [50, 0],
    [100, 0],
    [150, 0],
    [200, 0],
    [250, 0],
    [300, 0],
    [350, 0],
    [400, 0],
    [450, 0],
    [0, 25],
    [50, 25],
    [100, 25],
    [150, 25],
    [200, 25],
    [250, 25],
    [300, 25],
    [350, 25],
    [400, 25],
    [450, 25],
    [0, 50],
    [50, 50],
    [100, 50],
    [150, 50],
    [200, 50],
    [250, 50],
    [300, 50],
    [350, 50],
    [400, 50],
    [450, 50],
    [0, 75],
    [50, 75],
    [100, 75],
    [150, 75],
    [200, 75],
    [250, 75],
    [300, 75],
    [350, 75],
    [400, 75],
    [450, 75],
    [0, 100],
    [50, 100],
    [100, 100],
    [150, 100],
    [250, 100],
    [300, 100],
    [350, 100],
    [400, 100],
    [450, 100],
    [50, 125],
    [100, 125],
    [150, 125],
    [250, 125],
    [300, 125],
    [350, 125],
    [400, 125],
    [450, 125],
    [50, 150],
    [100, 150],
    [150, 150],
    [250, 150],
    [300, 150],
    [350, 150],
    [400, 150],
    [50, 175],
    [150, 175],
    [250, 175],
    [300, 175],
    [400, 175],
    [50, 200],
    [150, 200],
    [250, 200],
    [300, 200],
    [400, 200],
    [150, 225],
    [300, 225],
    [400, 225],
  ];
  let bricks = [];
  for (let i = 0; i < level2.length; ++i) {
    bricks.push(
      new Brick(
        level2[i][0],
        level2[i][1],
        45,
        20,
        ctx,
        type[Math.floor(Math.random() * 2)]
      )
    );
  }
  //0, 25, 50, 75, 100
  return bricks;
}

function level3Bricks() {
  type = ["wood", "rock"];
  const level3 = [
    [0, 0],
    [50, 0],
    [100, 0],
    [150, 0],
    [300, 0],
    [350, 0],
    [400, 0],
    [450, 0],
    [0, 25],
    [50, 25],
    [100, 25],
    [350, 25],
    [400, 25],
    [450, 25],
    [0, 50],
    [50, 50],
    [200, 50],
    [250, 50],
    [400, 50],
    [450, 50],
    [0, 75],
    [150, 75],
    [200, 75],
    [250, 75],
    [300, 75],
    [450, 75],
    [100, 100],
    [150, 100],
    [200, 100],
    [250, 100],
    [300, 100],
    [350, 100],
    [50, 125],
    [100, 125],
    [150, 125],
    [200, 125],
    [250, 125],
    [300, 125],
    [350, 125],
    [400, 125],
    [0, 150],
    [50, 150],
    [100, 150],
    [150, 150],
    [300, 150],
    [350, 150],
    [400, 150],
    [450, 150],
    [0, 175],
    [50, 175],
    [100, 175],
    [350, 175],
    [400, 175],
    [450, 175],
    [0, 200],
    [50, 200],
    [400, 200],
    [450, 200],
    [0, 225],
    [450, 225],
  ];
  let bricks = [];
  for (let i = 0; i < level3.length; ++i) {
    bricks.push(
      new Brick(
        level3[i][0],
        level3[i][1],
        45,
        20,
        ctx,
        type[Math.floor(Math.random() * 2)]
      )
    );
  }
  //0, 25, 50, 75, 100
  return bricks;
}

function level4Bricks() {
  type = ["wood", "rock", "iron"];
  const level4 = [
    [150, 0],
    [200, 0],
    [250, 0],
    [300, 0],
    [100, 25],
    [150, 25],
    [200, 25],
    [250, 25],
    [300, 25],
    [350, 25],
    [50, 50],
    [100, 50],
    [150, 50],
    [300, 50],
    [350, 50],
    [400, 50],
    [0, 75],
    [50, 75],
    [200, 75],
    [250, 75],
    [400, 75],
    [450, 75],
    [0, 100],
    [150, 100],
    [200, 100],
    [250, 100],
    [300, 100],
    [450, 100],
    [0, 125],
    [150, 125],
    [200, 125],
    [250, 125],
    [300, 125],
    [450, 125],
    [0, 150],
    [50, 150],
    [200, 150],
    [250, 150],
    [400, 150],
    [450, 150],
    [50, 175],
    [100, 175],
    [150, 175],
    [300, 175],
    [350, 175],
    [400, 175],
    [100, 200],
    [150, 200],
    [200, 200],
    [250, 200],
    [300, 200],
    [350, 200],
    [150, 225],
    [200, 225],
    [250, 225],
    [300, 225],
  ];
  let bricks = [];
  for (let i = 0; i < level4.length; ++i) {
    bricks.push(
      new Brick(
        level4[i][0],
        level4[i][1],
        45,
        20,
        ctx,
        type[Math.floor(Math.random() * 3)]
      )
    );
  }
  //0, 25, 50, 75, 100
  return bricks;
}

function level5Bricks() {
  type = ["wood", "rock", "iron"];
  const level5 = [
    [0, 0],
    [150, 0],
    [200, 0],
    [300, 0],
    [350, 0],
    [450, 0],
    [0, 25],
    [150, 25],
    [200, 25],
    [300, 25],
    [350, 25],
    [450, 25],
    [0, 50],
    [50, 50],
    [150, 50],
    [200, 50],
    [300, 50],
    [350, 50],
    [450, 50],
    [0, 75],
    [50, 75],
    [100, 75],
    [150, 75],
    [200, 75],
    [300, 75],
    [350, 75],
    [400, 75],
    [0, 100],
    [50, 100],
    [100, 100],
    [150, 100],
    [200, 100],
    [250, 100],
    [300, 100],
    [350, 100],
    [400, 100],
    [0, 125],
    [50, 125],
    [100, 125],
    [150, 125],
    [200, 125],
    [250, 125],
    [300, 125],
    [350, 125],
    [400, 125],
    [0, 150],
    [100, 150],
    [150, 150],
    [200, 150],
    [250, 150],
    [300, 150],
    [350, 150],
    [400, 150],
    [0, 175],
    [100, 175],
    [150, 175],
    [200, 175],
    [300, 175],
    [350, 175],
    [450, 175],
    [0, 200],
    [150, 200],
    [200, 200],
    [300, 200],
    [350, 200],
    [450, 200],
    [0, 225],
    [150, 225],
    [200, 225],
    [300, 225],
    [350, 225],
    [450, 225],
  ];

  let bricks = [];
  for (let i = 0; i < level5.length; ++i) {
    bricks.push(
      new Brick(
        level5[i][0],
        level5[i][1],
        45,
        20,
        ctx,
        type[Math.floor(Math.random() * 3)]
      )
    );
  }
  //0, 25, 50, 75, 100
  return bricks;
}

function level6Bricks() {
  type = ["wood", "rock", "iron"];
  let bricks = [];
  for (let i = 0; i < 10; i++) {
    let k = Math.floor(Math.random() * 10) + 1;
    for (let j = 0; j < k; j++) {
      bricks.push(
        new Brick(
          i * 50,
          j * 25,
          45,
          20,
          ctx,
          type[Math.floor(Math.random() * 3)]
        )
      );
    }
  }
  return bricks;
}

const level = [
  {},
  { getBricks: level1Bricks },
  { getBricks: level2Bricks },
  { getBricks: level3Bricks },
  { getBricks: level4Bricks },
  { getBricks: level5Bricks },
  { getBricks: level6Bricks },
];
