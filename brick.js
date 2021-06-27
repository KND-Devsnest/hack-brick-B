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
    }

    render(){
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
        this.ctx.fillStyle = this.color
        this.ctx.stroke(); 
    }

    checkCollision(ball){
        //console.log(ball);
        if (
            ball.y - ball.radius <= this.y + this.height &&//(down)
            ball.y + ball.radius >= this.y  &&//(upar)
            ball.x + ball.radius >= this.x &&//(left)
            ball.x - ball.radius <= this.x + this.width //(right)
        ){
            this.hit--;
            if(ball.y - ball.radius <= this.y + this.height) return ['down', this.hit];
            if(ball.y + ball.radius >= this.y) return ['up', this.hit];
            if(ball.x + ball.radius >= this.x) return ['left', this.hit];
            if(ball.x - ball.radius <= this.x + this.width) return ['right', this.hit];
        } else return null;
    }
}

const brickTypes = {
    "normal" : {"color":"black", "score":1, "hits": 1},
    "rock" : {"color":"orange", "score": 2, "hits": 3}
}