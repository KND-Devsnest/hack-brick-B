class Ball{
    constructor(radius, color, startX, startY){
        this.radius = radius;
        this.color = color;
        this.x = startX;
        this.y = startY;
        this.xSpeed = 2;
        this.ySpeed = 4.8;

    }

    render(ctx){
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();
    }

    changeDirection(paddle){
        //change ball direction when it hits a wall or the paddle.
        if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
            this.xSpeed = -this.xSpeed;
        }

        if(this.y - this.radius < 0){
            this.ySpeed = -this.ySpeed;
        }
        if (
            this.x + this.radius >= pos - Math.floor(paddle.width/2) &&
            this.x - this.radius <= pos + Math.floor(paddle.width/2) &&
            this.y + this.radius >= paddle.y &&
            this.y + this.radius <= paddle.y + paddle.height
        ){
            this.ySpeed = -this.ySpeed;
        }
    }
}