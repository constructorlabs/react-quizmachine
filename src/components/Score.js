import React from 'react';
import '../static/styles/score.scss';

function Score({ score }) {
    return (
        <div className="score">
            <span className="score__text">
                Points: {score}
            </span>
        </div>
    );
}

export default Score;