class Bullet {
    constructor(angle) {
        this.x = window.innerWidth /2;
        this.y = 0;
        this.speed = 40;
        this.angle = angle - Math.PI;
        this.bounceX = false;
        this.bounceY = false;
    }
    hit(state) {
        if (15 > Math.sqrt((state.x - this.x) * (state.x - this.x) + (state.y-40 - this.y) * (state.y-40 - this.y))) {
            return true;
        }
        return false;
    }
    moving() {
        var vx = this.speed * Math.cos(this.angle - (Math.PI / 2));
        var vy = this.speed * Math.sin(this.angle - (Math.PI / 2));
        this.speed = 3;
        if(this.bounceX){
            this.x -= vx;
        }else{
            this.x += vx;
        }
        if(this.bounceY){
            this.y -= vy;
        }else{
            this.y += vy;
        }
        
    }

    render(state) {
        this.moving();
        if(this.x < 0 || this.x > window.innerWidth){
            this.bounceX = !this.bounceX;
        }
        if(this.y < 0){
            this.bounceY = !this.bounceY;
        }
        const context = state.context;
        context.save();
        context.translate(this.x, this.y);
        context.beginPath();
        context.arc(0, 0, 3, 0, 2 * Math.PI);
        context.fillStyle = "black";
        context.fill();
        context.closePath();
        context.restore();
    }
}
export default Bullet