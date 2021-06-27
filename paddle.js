class Paddle {
    constructor(width, height, ctx, canvas) {
        this.width = width;
        this.height = height;
        this.ctx = ctx;
        this.canvas = canvas;

        this.x = 450;
        this.y = 450;
    }

    render(pos) {
        // move paddle on mouse change -> access pos variable
        let paddleXPos = pos - Math.floor(this.width/2);
        if(paddleXPos < 0)
            this.x = 0;
        else if(paddleXPos + this.width > canvas.width) {
            this.x = canvas.width - this.width;
        } else {
            this.x = paddleXPos;
        }

        this.ctx.beginPath();

        this.ctx.fillRect(this.x, this.y, this.width, this.height); // create rectangle
        this.ctx.fillStyle = 'black';
        this.ctx.fill();
    }
}