
class MainChar {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    
    render(state) {
        const context = state.context;
        context.save();
        context.translate(state.x, state.y);
        context.beginPath();
        context.arc(0, 0, 10, 0, 2 * Math.PI);
        context.fillStyle = "green";
        context.fill();
        context.closePath();
        context.restore();
    }
}
export default MainChar