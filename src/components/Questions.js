import React from "react";

function Questions({ quizData, correctAnswerFn, incorrectAnswerFn, fifty, fiftyLine }) {

  let possibleAnswers = [...quizData]
  // //Now quizData is an array of rightAnswer, Question, random answers

  let letters = ["Minion", "A: ", "B: ", "C: ", "D: "];
  const rightAnswer = possibleAnswers[0];
  const currentQuestion = possibleAnswers[1];
  possibleAnswers.splice(0, 2);

  // check if selected answer is right or not and call appropriate dispatch function
  function checkAnswer(answer) {
    event.preventDefault();
    if (answer === rightAnswer) {
      correctAnswerFn('WIN')

    } else {
      incorrectAnswerFn('LOSE')
      // Display Correct Answer HERE
    }
    if (fifty === "FIFTY") {
      fiftyLine('USEDFIFTY')
    }
  }

  return (
    <section className="questions">
      <h3> {currentQuestion}</h3>

      {possibleAnswers.map((currentAnswer, index) => {
        // {quizData.map((currentAnswer, index) => {

        letters.shift()
        return (

          <button
            className="questions__buttons"
            // className={letters[0]}
            id={index}
            key={currentAnswer}
            value={currentAnswer}
            onClick={event => { checkAnswer(event.target.value) }}>
            {/* {currentAnswer}</button> */}
            {letters[0]} {currentAnswer}</button>
        )
      })
      }
    </section>
  )
}

export default Questions;

