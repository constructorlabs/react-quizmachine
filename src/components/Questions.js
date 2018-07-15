import React from "react";

function Questions({ quizItem, correctAnswerFn, incorrectAnswerFn, fifty, friend }) {

  let possibleAnswers;
  let letters = ["Minion", "A: ", "B: ", "C: ", "D: "];
  const currentQuestion = decodeURIComponent(quizItem.question);
  const rightAnswer = decodeURIComponent(quizItem.correct_answer);
  const incorrectAnswer1 = decodeURIComponent(quizItem.incorrect_answers[0]);
  const incorrectAnswer2 = decodeURIComponent(quizItem.incorrect_answers[1]);
  const incorrectAnswer3 = decodeURIComponent(quizItem.incorrect_answers[2]);

  //put answers in random order in an array

  possibleAnswers = [rightAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3].sort(function () { return 0.5 - Math.random() })


  function fiftyfifty() {
    let buttonId;
    let buttonString;
    console.log("answers", possibleAnswers)
    let right = possibleAnswers.indexOf(rightAnswer);
    console.log("right", right)
    let keeper = Math.floor(Math.random() * 4);

    console.log("before  ", right, keeper);

    if (right === keeper && right !== 3) {
      keeper += 1
    } else if (right === 3 && keeper === 3) {
      keeper = (Math.floor((Math.random() * 2) + 1))
    }

    buttonString = possibleAnswers.map((currentAnswer, index) => {
      letters.shift();
      debugger;
      (index === keeper || index === right) ?
        buttonId = index :
        buttonId = "hodden";
      debugger
      return
      <button
        className="questions__buttons"
        id={buttonId}
        key={currentAnswer}
        value={currentAnswer}
        onClick={event => { checkAnswer(event.target.value) }}>
        {currentAnswer}</button>
      debugger

    })
    console.log("buttonString", buttonString)
    return buttonString;

  }


  // check if selected answer is right or not and call appropriate dispatch function
  function checkAnswer(answer) {
    event.preventDefault();

    if (answer === rightAnswer) {
      correctAnswerFn()
    } else {
      incorrectAnswerFn()
    }
  }

  return (
    <section className="questions">
      <h3> {currentQuestion}</h3>

      {(fifty === "FIFTY") ?
        fiftyfifty()
        // possibleAnswers = possibleAnswers.slice(0, 2) 
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
              {currentAnswer}</button>
            // {letters[0]} {currentAnswer}</button>

          )

        })
      }

    </section>
  )
}

export default Questions;

