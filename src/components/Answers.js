import React from 'react';
import cx from 'classnames';

function Answers({ answers, isRightAnswer, score, scoreUpdate }) {

    const question_answers = answers
        ? [...answers.results[0].incorrect_answers, answers.results[0].correct_answer]
        : [];

    const shuffled_answers = question_answers.sort(() => 0.5 - Math.random());

    function verifyAnswer(e, answer) {
        if (answer === answers.results[0].correct_answer) {
            console.log("Right!");
            isRightAnswer(true);
            scoreUpdate(score + 10);
            e.target.classList.add('correct-answer');
        } else {
            console.log("Wrong!");
            isRightAnswer(false);
            scoreUpdate(score - 10);
            e.target.classList.add('disabled');
        }
    }
    return (
        <div>
            {shuffled_answers.map(answer => {
                return <button
                    onClick={(e) => verifyAnswer(e, answer)}
                    key={answer}
                    className={cx('credit-card__field', {
                        "credit-card__field--error": false
                    })}>
                    {decodeURIComponent(answer)}
                </button>
            })}
        </div>
    )
}

export default Answers;
