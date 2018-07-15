import React from 'react';
import '../static/styles/score.scss';

function Score({ score, categoryName, difficulty }) {
    return (
        <div className="score">
            <div className="category">
                <span>Category: {categoryName !== "" ? categoryName : "All"}</span>
                <span>Difficulty: {difficulty !== "" ? difficulty : "Easy"}</span>
            </div>
            <span className="score__text">
                Points: {score}
            </span>
        </div>
    );
}

export default Score;