class Brick{
    constructor(x, y, width, height, ctx){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.ctx = ctx;
    }

    render(){
        this.ctx.beginPath();
        this.ctx.rect(this.x, this.y, this.width, this.height);
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
            if(ball.y - ball.radius <= this.y + this.height) return [1, 1]
            if(ball.y + ball.radius >= this.y) return [1, -1]
            if(ball.x + ball.radius >= this.x) return [-1, 1]
            if(ball.x - ball.radius <= this.x + this.width) return [-1, 1]
        }else return null;
    }
}