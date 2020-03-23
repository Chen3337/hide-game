import React, { Component } from 'react';
import Mainchar from './mainchar';
import Shooter from './shooter';
import Bullet from './bullets';
class Game extends Component {
    constructor() {
        super();
        this.state = {
            screenWidth: window.innerWidth,
            screenHeight: window.innerHeight,
            context: null,
            x: window.innerWidth / 2,
            y: window.innerHeight - 30,
            mainchar: new Mainchar(),
            shootertank: new Shooter(),
            bullet: [],
            timer: null,
        }
    }
    componentDidMount() {
        const context = this.refs.canvas.getContext('2d');
        window.addEventListener('touchmove', ev => {
            ev.preventDefault();
            ev.stopImmediatePropagation();
            var clientX = ev.touches[0].clientX;
            var clientY = ev.touches[0].clientY;
            if (25 > Math.sqrt((this.state.x - clientX) * (this.state.x - clientX) + (this.state.y - clientY) * (this.state.y - clientY))) {
                this.setState({ x: clientX, y: clientY });
            }
        }, { passive: false });
        window.addEventListener('touchstart', ev => {
            ev.preventDefault();
            ev.stopImmediatePropagation();
        }, { passive: false });
        window.addEventListener('touchforcechange', ev => {
            ev.preventDefault();
            ev.stopImmediatePropagation();
        }, { passive: false });
        this.setState({ context: context, timer: setInterval(() => { this.makeBullet(); }, 201) });
        requestAnimationFrame(() => { this.update() });
    }
    update = () => {
        if (this.state.context) {
            this.state.context.clearRect(0, 0, this.state.screenWidth, this.state.screenHeight);
            this.state.mainchar.render(this.state);
            this.state.shootertank.render(this.state);
            for (var a = 0; a < this.state.bullet.length; a++) {
                this.state.bullet[a].render(this.state);
                var hitchar = this.state.bullet[a].hit(this.state);
                if (this.state.bullet[a].y > this.state.screenHeight) {
                    this.delete(a);
                }
                if(hitchar){
                    window.location.href = '/hide-game/';
                }
            }
           
        }
        requestAnimationFrame(() => { this.update() });
    }
    delete = (number) => {
        var refreshBullet = this.state.bullet.slice();
        refreshBullet.splice(number, 1);
        this.setState({
            bullet: refreshBullet
        })
    }
    makeBullet = () => {
        var bullet = new Bullet(this.state.shootertank.degrees * Math.PI / 180);
        var joined = this.state.bullet.concat(bullet);
        this.setState({ bullet: joined });
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