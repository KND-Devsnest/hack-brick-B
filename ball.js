class Ball{
    constructor(radius, color, startX, startY){
        this.radius = radius;
        this.color = color;
        this.x = startX;
        this.y = startY;
        this.xSpeed = 0;
        this.ySpeed = 2.8;

    }

    render(ctx){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    changeDirection(){
        //change ball direction when it hits a wall or the paddle.
        if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
            this.xSpeed = -this.xSpeed;
        }

        if(this.y - this.radius < 0){
            this.ySpeed = -this.ySpeed;
        }
        if (
            this.x + this.radius >= pos - paddle.width &&
            this.x - this.radius <= pos + paddle.width &&
            this.y + this.radius >= paddle.y &&
            this.y + this.radius <= paddle.y + paddle.height
        ){
            this.ySpeed = -this.ySpeed;
        }
    }
}