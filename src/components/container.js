import React, { Component } from 'react';
import Mainchar from './mainchar';
class Game extends Component {
    constructor() {
        super();
        this.state = {
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            context: null,
            x: 0,
            y: 0,
            mainchar: new Mainchar(),
        }
    }
    componentDidMount() {
        const context = this.refs.canvas.getContext('2d');
        window.addEventListener('touchmove', ev => {
            ev.preventDefault();
            ev.stopImmediatePropagation();
            var clientX = ev.touches[0].clientX;
            var clientY = ev.touches[0].clientY;
            this.setState({ x: clientX , y: clientY });
        }, { passive: false });
        window.addEventListener('touchstart', ev => {
            ev.preventDefault();
            ev.stopImmediatePropagation();
        }, { passive: false });
        window.addEventListener('touchforcechange', ev => {
            ev.preventDefault();
            ev.stopImmediatePropagation();
        }, { passive: false });
        this.setState({ context: context });
        requestAnimationFrame(() => { this.update() });
    }
    update = () => {
        if (this.state.context) {
            this.state.context.clearRect(0, 0, this.state.screenWidth, this.state.screenHeight);
            console.log(this.state.x + " " + this.state.y);
            this.state.mainchar.render(this.state);

        }
        requestAnimationFrame(() => { this.update() });
    }
    render() {
        return (
            <div >
                <canvas ref="canvas"
                    width={this.state.screenWidth}
                    height={this.state.screenHeight}
                    style={{ backgroundColor: "skyblue" }}
                />
            </div>
        );
    }
}

export default Game;