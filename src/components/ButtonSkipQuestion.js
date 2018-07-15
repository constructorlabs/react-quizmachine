import React from 'react';
import "../static/styles/buttonSkipQuestion.scss";

function ButtonSkipQuestion({ requestQuestion, isRightAnswer, scoreUpdate, score }) {
    return (
        <div className="skip-question">
            <button
                className="skip-question-button"
                onClick={() => { requestQuestion(); isRightAnswer(false); scoreUpdate(score - 20) }}>
                Skip Question
        </button>
        </div >
    );
}

export default ButtonSkipQuestion;