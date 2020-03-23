import React from 'react';
import { Link } from "react-router-dom";
function Manu () {
    return (
        <div style={{width: window.innerWidth, height: window.innerHeight, backgroundColor: 'black'}}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <h1><Link className="nav-link" to={"/hide-game/game/"}>START</Link></h1>
            </div>
        </div>
    )
}

export default Manu;