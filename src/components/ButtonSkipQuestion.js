import React from 'react';
import "../static/styles/buttonSkipQuestion.scss";

function ButtonSkipQuestion({ requestQuestion, isRightAnswer, scoreUpdate, score, category, difficulty }) {
    return (
        <div className="skip-question">
            <button
                className="skip-question-button"
                onClick={() => { requestQuestion(category, difficulty); isRightAnswer(false); scoreUpdate(score - 20) }}>
                Skip Question
        </button>
        </div >
    );
}

export default ButtonSkipQuestion;