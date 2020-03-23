
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
        context.arc(0, 0, 12, 0, 2 * Math.PI);
        context.fillStyle = "skyblue";
        context.fill();
        context.stroke();
        context.closePath();
        context.beginPath();
        context.arc(0, -30, 12, 0, 2 * Math.PI);
        context.fillStyle = "red";
        context.fill();
        context.closePath();
        context.restore();
    }
}
export default MainChar