import React from 'react';

function Manu () {
    return (
        <div style={{width: window.innerWidth, height: window.innerHeight, backgroundColor: 'black'}}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
                <h1><a href="/hide-game/game/">Start</a></h1>
            </div>
        </div>
    )
}

export default Manu;