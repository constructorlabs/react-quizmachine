import React from 'react';

function Answers({ answers }) {

    function createQuestionMarkup(question) {
        return { __html: question };
    };

    const question_answers = answers
        ? [...answers.results[0].incorrect_answers, answers.results[0].correct_answer]
        : [];
    const shuffled_questions = question_answers.sort(() => 0.5 - Math.random());
    return (
        <div>
            {shuffled_questions.map(answer => {
                return <button key={answer} dangerouslySetInnerHTML={createQuestionMarkup(answer)} />
            })}
        </div>
    )
}

export default Answers;
