function level1Bricks() {
    let bricks = [], space = 0;
    for(let i = 0; i < 5; ++i) {
        for(let j = 0; j < 10; ++j) {
            bricks.push(new Brick(j*50, i*25+space, 50, 25, ctx, 'normal'));
        }
        space+=5;
    }
    return bricks;
}

function level2Bricks() {
    
}

function level3Bricks() {
    
}

function level4Bricks() {
    
}

function level5Bricks() {
    
}

const level = [{}, {getBricks: level1Bricks}, {getBricks: level1Bricks}, {getBricks: level1Bricks}, {getBricks: level1Bricks}, {getBricks: level1Bricks}];