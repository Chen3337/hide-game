
class Shooter {
    constructor() {
        this.degrees = 0;
        this.direction = 'add';
    }

    render(state) {
        if(this.direction === 'add'){
            this.degrees += 1;
            if(this.degrees === 85){
                this.direction = 'minus';
            }
        }
        if(this.direction === 'minus'){
            this.degrees -= 1;
            if(this.degrees === -85){
                this.direction = 'add';
            }
        }
        const context = state.context;
        context.save();
        context.translate(state.screenWidth / 2, 0);
        context.beginPath();
        context.arc(0, 0, 15, 0, 2 * Math.PI);
        context.fillStyle = "black";
        context.fill();
        context.closePath();
        context.beginPath();
        context.rotate((this.degrees) * Math.PI / 180); 
        context.lineWidth = "6";
        context.moveTo(0, 0);
        context.lineTo(0, 40);
        context.stroke();
        context.restore();
    }
}
export default Shooter