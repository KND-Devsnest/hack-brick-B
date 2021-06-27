class Paddle {
    constructor(width, height, ctx, canvas) {
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.canvas = canvas;

        this.x = 450;
        this.y = 450;

        console.log();

        ctx.fillStyle = 'black';
    }

    render(pos) {
 
        // move paddle on mouse change -> access pos variable
        let paddleXPos = pos - Math.floor(this.width/2);
        if(paddleXPos < 0)
            this.x = 0;
        else if(paddleXPos > canvas.width)
            this.x = canvas.width- Math.floor(this.width/2);
        else
            this.x = paddleXPos;

        ctx.fillRect(this.x, this.y, this.width, this.height); // create rectangle
        ctx.fill();
    }
}