import React from "react";
// import { lookupService } from "dns";

function Questions({ quizItem, correctAnswerFn, incorrectAnswerFn, result }) {

  let letters = ["Minion", "A: ", "B: ", "C: ", "D: "];
  const currentQuestion = decodeURIComponent(quizItem.question);
  const rightAnswer = decodeURIComponent(quizItem.correct_answer);
  const incorrectAnswer1 = decodeURIComponent(quizItem.incorrect_answers[0]);
  const incorrectAnswer2 = decodeURIComponent(quizItem.incorrect_answers[1]);
  const incorrectAnswer3 = decodeURIComponent(quizItem.incorrect_answers[2]);


  const possibleAnswers = [rightAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3].sort(function () { return 0.5 - Math.random() })

  function checkAnswer(answer) {
    event.preventDefault();

    if (answer === rightAnswer) {
      correctAnswerFn()
      result(true)
    } else {
      incorrectAnswerFn()
      result(false)
    }

  }

  return (
    <section className="questions">
      <h3> {currentQuestion}</h3>

      {possibleAnswers.map(currentAnswer => {
        letters.shift()
        return (
          <button
            className="questions__buttons"
            key={currentAnswer}
            value={currentAnswer}
            onClick={event => { checkAnswer(event.target.value) }}>

            {letters[0]} {currentAnswer}</button>
        )
      })}

    </section>
  )
}

export default Questions;

