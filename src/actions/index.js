export function fetchQuestionFromAPI() {
  return function(dispatch, getState) {
    // Quiz data fetch difficulty is dependent on how much money the contestant has won so far

    let difficulty;

    if (getState().money <= 300000) {
      difficulty = `difficulty=easy`;
    } else if (getState().money > 300000 && getState().money <= 600000) {
      difficulty = `difficulty=medium`;
    } else {
      difficulty = `difficulty=hard`;
    }

    return fetch(
      `https://opentdb.com/api.php?amount=1&category=9&${difficulty}&type=multiple&encode=url3986`
    )
      .then(response => response.json())
      .then(json => {
        //need to reset win status
        dispatch(endGame(""));

        dispatch(setQuestions(json.results));
      })
      .catch(error =>
        console.log("Oh no! There's a Gru in the code... ", error)
      );
  };
}

export function setQuestions(questionData) {
  return function(dispatch) {
    let currentQuestion,
      rightAnswer,
      incorrectAnswer1,
      incorrectAnswer2,
      incorrectAnswer3,
      quizData;
    if (questionData !== undefined) {
      questionData.map(quizItem => {
        currentQuestion = decodeURIComponent(quizItem.question);
        rightAnswer = decodeURIComponent(quizItem.correct_answer);
        incorrectAnswer1 = decodeURIComponent(quizItem.incorrect_answers[0]);
        incorrectAnswer2 = decodeURIComponent(quizItem.incorrect_answers[1]);
        incorrectAnswer3 = decodeURIComponent(quizItem.incorrect_answers[2]);

        //put the 4 answers in a random order
        quizData = [
          rightAnswer,
          incorrectAnswer1,
          incorrectAnswer2,
          incorrectAnswer3
        ].sort(function() {
          return 0.5 - Math.random();
        });

        quizData.unshift(rightAnswer, currentQuestion);

        //quizData is in the format[right answer,question,random 4 answers]
        dispatch(friendReset("RESET_FRIEND")); //remove any friend replies before displaying next set of 4 questions
        dispatch(receiveQuestion(quizData));
      });
    }
  };
}

// ------------------------------------------------------
export function receiveQuestion(questionData) {
  return {
    type: "RECEIVE_QUESTION",
    payload: questionData
  };
}
// ------------------------------------------------------
export function checkAnswer(endType) {
  return {
    type: endType
  };
}

// ------------------------------------------------------
export function endQuestions() {
  return function(dispatch, getState) {
    const questionData = getState().question;
    const rightAnswer = questionData[0];
    dispatch(showCorrect(rightAnswer));
  };
}
export function showCorrect(display) {
  return {
    type: "GAME_OVER",
    payload: display
  };
}
// ------------------------------------------------------
export function endGame(status) {
  return {
    type: status
  };
}
// ------------------------------------------------------
export function friend(help) {
  return {
    type: "FRIEND",
    payload: help
  };
}

export function friendline(help) {
  return function(dispatch, getState) {
    dispatch(friend("FRIEND"));

    const chance = Math.random();
    let randomAnswer;

    // If 50:50 has been used your friend has a probability of 75% chance of getting the answer right
    if (getState().fifty === "FIFTY") {
      if (chance < 0.75) {
        dispatch(friendAnswer(getState().question[0]));
      } else {
        // return a random other answer
        randomAnswer = getState()
          .question.slice(2)
          .sort(function() {
            return 0.5 - Math.random();
          });
        dispatch(friendAnswer(randomAnswer[0]));
      }
      // Your friend only has a 45% chance of getting the answer right
    } else {
      if (chance < 0.45) {
        dispatch(friendAnswer(getState().question[0]));
      } else {
        randomAnswer = getState()
          .question.slice(2)
          .sort(function() {
            return 0.5 - Math.random();
          });
        dispatch(friendAnswer(randomAnswer[0]));
      }
    }
  };
}

export function friendAnswer(reply) {
  return {
    type: "FRIEND_RESPONSE",
    payload: reply
  };
}
export function fiftyline(help) {
  return {
    type: "FIFTY",
    payload: help
  };
}

// ------------------------------------------------------
export function audienceline(help) {
  return {
    type: "AUDIENCE",
    payload: help
  };
}
//rewrite 50:50 questions so that the questions change IN state
export function fiftyQuestions(help) {
  return function(dispatch, getState) {
    let possibleAnswers = getState().question;
    const rightAnswer = possibleAnswers[0];

    const currentQuestion = possibleAnswers[1];
    possibleAnswers.splice(0, 2);

    //calculate index positions of correct answer and 1 random other answer
    let right = possibleAnswers.indexOf(rightAnswer);
    let keeper = Math.floor(Math.random() * 4);

    if (right === keeper && right !== 3) {
      keeper += 1;
    } else if (right === 3 && keeper === 3) {
      keeper = Math.floor(Math.random() * 2 + 1);
    }
    let answers = [possibleAnswers[right], possibleAnswers[keeper]].sort(
      function() {
        return 0.5 - Math.random();
      }
    );
    answers.unshift(possibleAnswers[right], currentQuestion);
    dispatch(fiftyline(help));
    dispatch(receiveFifty(answers));
  };
}

export function receiveFifty(questionData) {
  return {
    type: "FIFTY_QUESTION",
    payload: questionData
  };
}
// ------------------------------------------------------

//Initialise all states on new game
export function restart() {
  return function(dispatch, getState) {
    dispatch(audienceline(""));
    dispatch(friend(""));
    dispatch(fiftyline(""));
    dispatch(endGame(""));
    dispatch(friendReset(""));
    dispatch(checkAnswer("RESTART"));
  };
}

export function friendReset(reply) {
  return {
    type: "RESET_FRIEND",
    payload: reply
  };
}
