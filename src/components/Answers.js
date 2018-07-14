import React from 'react';

function Answers({ answers, isRightAnswer }) {

    const question_answers = answers
        ? [...answers.results[0].incorrect_answers, answers.results[0].correct_answer]
        : [];

    const shuffled_answers = question_answers.sort(() => 0.5 - Math.random());

    function verifyAnswer(answer) {
        if (answer === answers.results[0].correct_answer) {
            console.log("Right!");
            isRightAnswer(true);
        } else {
            console.log("Wrong!");
            isRightAnswer(false);
        }
    }
    return (
        <div>
            {shuffled_answers.map(answer => {
                return <button
                    onClick={() => verifyAnswer(answer)}
                    key={answer}>
                    {decodeURIComponent(answer)}
                </button>
            })}
        </div>
    )
}

export default Answers;
