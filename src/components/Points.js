import React from 'react';

function Points({ points }) {

    return(
        <div className="points__container">
            <p className="points__number">POINTS: {points} </p>
        </div>
    )
}

export default Points;