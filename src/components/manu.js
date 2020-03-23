import React from 'react';

function Manu () {
    return (
        <div style={{width: window.innerWidth, height: window.innerHeight, backgroundColor: 'black'}}>
            <div style={{position: 'absolute',top: "50%",left: "50%", transform: 'translate("-50%", "-50%")',}}>
                <h1><a href="/game">Start</a></h1>
            </div>
        </div>
    )
}

export default Manu;