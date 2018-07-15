import React from "react";

function Questions({ quizData, correctAnswerFn, incorrectAnswerFn, fifty }) {

  let possibleAnswers = [...quizData]
  //Now quizData is an array of rightAnswer, Question, random answers

  let letters = ["Minion", "A: ", "B: ", "C: ", "D: "];
  const rightAnswer = possibleAnswers[0];
  const currentQuestion = possibleAnswers[1];
  possibleAnswers.splice(0, 2);

  let buttonId;

  //calculate index positions of correct answer and 1 random other answer

  console.log("answers", possibleAnswers)
  let right = possibleAnswers.indexOf(rightAnswer);
  let keeper = Math.floor(Math.random() * 4);

  console.log("before  ", right, keeper);

  if (right === keeper && right !== 3) {
    keeper += 1
  } else if (right === 3 && keeper === 3) {
    keeper = (Math.floor((Math.random() * 2) + 1))
  }

  // check if selected answer is right or not and call appropriate dispatch function
  function checkAnswer(answer) {
    event.preventDefault();

    if (answer === rightAnswer) {
      correctAnswerFn('WIN')
    } else {
      incorrectAnswerFn('LOSE')
    }
  }

  return (
    <section className="questions">
      <h3> {currentQuestion}</h3>

      {(fifty === "FIFTY") ?

        possibleAnswers.map((currentAnswer, index) => {
          (index === keeper || index === right) ?
            buttonId = index :
            buttonId = "hidden";

          return (
            <button
              className="questions__buttons"
              id={buttonId}
              key={currentAnswer}
              value={currentAnswer}
              onClick={event => { checkAnswer(event.target.value) }}>
              {currentAnswer}</button>
          )
        })
        :
        possibleAnswers.map((currentAnswer, index) => {

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

