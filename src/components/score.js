import React, { Component } from 'react';
// this.props.match.params.score
import { Link } from "react-router-dom";
class Score extends Component {
    render() {
        return (
            <div style={{ width: window.innerWidth, height: window.innerHeight, backgroundColor: 'white' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>

                    <h1>
                        Your Score: {this.props.match.params.score} 
                        <br />
                        <Link className="nav-link" to={"/hide-game/game/"}>RESTART</Link>
                    </h1>
                    
                </div>
            </div >
        )
    }
}

export default Score;