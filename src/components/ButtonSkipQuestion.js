import React from 'react';
import cx from 'classnames';
import "../static/styles/buttonSkipQuestion.scss";

function ButtonSkipQuestion({
    requestQuestion,
    isRightAnswer,
    scoreUpdate,
    score,
    category,
    difficulty,
    currentQuestion,
    incrementCurrentQuestion,
    totalQuestions
}) {
    return (
        <div className={cx('skip-question', {
            "skip-question--hidden": currentQuestion === totalQuestions
        })}>
            <button
                className="skip-question-button"
                onClick={() => {
                    requestQuestion(category, difficulty);
                    isRightAnswer(false);
                    scoreUpdate(score - 20);
                    incrementCurrentQuestion(currentQuestion + 1)
                }}>
                Skip Question
        </button>
        </div >
    );
}

export default ButtonSkipQuestion;