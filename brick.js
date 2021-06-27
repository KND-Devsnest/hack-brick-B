let powerUps = ["paddleIncrease", "paddleDecrease", "goThrough", "powerBall"]
let powerCount = 5;

class Brick{
    constructor(x, y, width, height, ctx, type){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.type = type;
        this.hit = brickTypes[type]['hits']
        this.score = brickTypes[type]['score']
        this.color = brickTypes[type]['color']
        this.powerType = (function() {
            // if(powerCount > 0 && Math.random()-0.5 > 0) {//Provide   a powerUp
            //    --powerCount;
            //    return powerUps[Math.floor(Math.random()*4)];
            //  }
               // Else return
             return powerUps[3];
          })();
    }

    render(){
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = this.color;
        this.ctx.strokeStyle =  "black";
        this.ctx.lineWidth =  4;
        this.ctx.stroke();
        this.ctx.fill();
    }

    checkCollision(ball){
        //console.log(ball);

        if (
            ball.y - ball.radius <= this.y + this.height &&//(down)
            ball.y + ball.radius >= this.y  &&//(upar)
            ball.x + ball.radius >= this.x &&//(left)
            ball.x - ball.radius <= this.x + this.width //(right)
        ){
            this.hit -= ball.strength;
            if (ball.isGoThrough) return ['no change', 0];
            if(ball.y - ball.radius >= this.y + this.height - 20) return ['down', this.hit];
            if(ball.y + ball.radius <= this.y + 20) return ['up', this.hit];
            if(ball.x + ball.radius <= this.x + 20) return ['left', this.hit];
            if(ball.x - ball.radius >= this.x + this.width - 20) return ['right', this.hit];
        } else return null;
    }
}

const brickTypes = {
    "normal" : {"color":"yellow", "score":1, "hits": 1},
    "rock" : {"color":"orange", "score": 2, "hits": 3}
}