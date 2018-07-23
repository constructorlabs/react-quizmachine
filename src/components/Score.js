import React from 'react';
import '../static/styles/score.scss';

function Score({ score, categoryName, difficulty, totalQuestions, currentQuestion }) {
    return (
        <div className="score">
            <div className="category">
                <span>Category: {categoryName !== "" ? categoryName : "All"}</span>
                <span>Difficulty: {difficulty !== "" ? difficulty : "Easy"}</span>
            </div>
            <span className="score__text">
                <span>Points: {score}</span>
                <span>{currentQuestion}/{totalQuestions}</span>

            </span>
        </div>
    );
}

export default Score;