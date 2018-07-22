import React from "react";

function Questions({ quizData, correctAnswerFn, incorrectAnswerFn, fifty, fiftyLine, response }) {
  //response at end of render is the reply when Phone a Friend is clicked

  let currentQuestion, letters, rightAnswer, possibleAnswers;

  //Have re-used quizData object to hold either all quiz info as array OR the correct answer STRING

  // setting conditional rendering parameters
  if (typeof quizData === "string") {
    possibleAnswers = quizData;
  } else {
    possibleAnswers = [...quizData];
    letters = ["Minion", "A: ", "B: ", "C: ", "D: "];
    rightAnswer = possibleAnswers[0];
    currentQuestion = possibleAnswers[1];
    possibleAnswers.splice(0, 2);
  }

  //Now quizData is an array of rightAnswer, Question, random answers
  // check if selected answer is right or not and call appropriate dispatch function
  function checkAnswer(answer) {
    event.preventDefault();
    if (answer === rightAnswer) {
      correctAnswerFn('WIN')

    } else {
      incorrectAnswerFn('LOSE')
    }
    if (fifty === "FIFTY") {
      fiftyLine('USEDFIFTY')
    }
  }

  return (
    <section className="questions">
      <h3> {currentQuestion}</h3>
      {typeof possibleAnswers !== "string" ?
        possibleAnswers.map((currentAnswer, index) => {

          letters.shift()
          return (

            <button
              className="questions__buttons"
              id={index}
              key={currentAnswer}
              value={currentAnswer}
              onClick={event => { checkAnswer(event.target.value) }}>

              {letters[0]} {currentAnswer}</button>
          )

        }) :
        <span>
          Correct answer:
          <button
            className="questions__buttons"
            value={possibleAnswers}>
            {possibleAnswers}
          </button>
        </span>
      }
      <br />
      <div className="questions__response">
        {response}
      </div>
    </section>
  )
}

export default Questions;

