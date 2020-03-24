import React from 'react';
import { Link } from "react-router-dom";
function Manu () {
    return (
        <div style={{width: window.innerWidth, height: window.innerHeight, backgroundColor: 'black'}}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh',width: "80%", margin: "auto", textAlign:"center"}}>
                <h1><Link style={{ textDecoration: 'none', backgroundColor: 'white'}} to={"/hide-game/game/"}>START</Link>
                <br />
                <b style={{color: 'white',fontSize:"16px"}}>There is two cirle, the red one is the main charater and the circle below it is the where you control it the main charater. 
                    hide from the bullets and score is on the bottom.
                </b>
                </h1>
            </div>
        </div>
    )
}

export default Manu;