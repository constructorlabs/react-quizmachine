import React from 'react';

function Answers({ answers, isRightAnswer }) {

    function createAnswerMarkup(answer) {
        return { __html: answer };
    };

    const question_answers = answers
        ? [...answers.results[0].incorrect_answers, answers.results[0].correct_answer]
        : [];
    const shuffled_answers = question_answers.sort(() => 0.5 - Math.random());

    function verifyAnswer(answer) {
        if (answer === answers.results[0].correct_answer) {
            // console.log(answers.results[0].correct_answer);
            // console.log(answer);
            console.log("Right!");
            isRightAnswer(true);
        } else {
            // console.log(answers.results[0].correct_answer);
            // console.log(answer);
            console.log("Wrong!");
            isRightAnswer(false);
        }
    }
    return (
        <div>
            {shuffled_answers.map(answer => {
                return <button
                    onClick={() => verifyAnswer(answer)}
                    key={answer}
                    dangerouslySetInnerHTML={createAnswerMarkup(answer)} />
            })}
        </div>
    )
}

export default Answers;
