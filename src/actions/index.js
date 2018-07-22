export function fetchQuestionFromAPI() {
  return function (dispatch, getState) {

    // Quiz data fetch difficulty is dependent on how much money the contestant has won so    far

    let difficulty;

    if (getState().money <= 300000) {
      difficulty = `difficulty=easy`
    }
    else if (getState().money > 300000 && getState().money < 600000) {
      difficulty = `difficulty=medium`
    }
    else {
      difficulty = `difficulty=hard`
    }

    return fetch(`https://opentdb.com/api.php?amount=1&category=9&${difficulty}&type=multiple&encode=url3986`)
      .then(response => response.json())
      .then(json => {
        //need to reset win status 
        dispatch(endGame(''));
        dispatch(setQuestions(json.results));
      })
      .catch(error => console.log("Oh no! There's a Gru in the code... ", error));
  }
};

export function setQuestions(questionData) {
  return function (dispatch, getState) {
    let currentQuestion,
      rightAnswer,
      incorrectAnswer1,
      incorrectAnswer2,
      incorrectAnswer3,
      quizData
    if (questionData !== undefined) {
      (questionData).map(quizItem => {
        currentQuestion = decodeURIComponent(quizItem.question);
        rightAnswer = decodeURIComponent(quizItem.correct_answer);
        incorrectAnswer1 = decodeURIComponent(quizItem.incorrect_answers[0]);
        incorrectAnswer2 = decodeURIComponent(quizItem.incorrect_answers[1]);
        incorrectAnswer3 = decodeURIComponent(quizItem.incorrect_answers[2]);

        quizData = [rightAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3].sort(function () { return 0.5 - Math.random() });

        quizData.unshift(rightAnswer, currentQuestion);
        //quizData is in the format[right answer,question,random 4 answers]
        dispatch(receiveQuestion(quizData))
      })
    }
  }
}

// ------------------------------------------------------
export function receiveQuestion(questionData) {
  return {
    type: 'RECEIVE_QUESTION',
    payload: questionData
  }
}
// ------------------------------------------------------
export function checkAnswer(endType) {
  return {
    type: endType
  }
}
// ------------------------------------------------------
// export function incorrectAnswer(endType) {
//   return {
//     type: endType
//   }
// }
// ------------------------------------------------------
export function endQuestions() {
  return {
    type: 'GAME_OVER'
  }
}
// ------------------------------------------------------
export function endGame(status) {
  return {
    type: status
  }
}
// ------------------------------------------------------
export function friendline(help) {
  return {
    type: 'FRIEND',
    payload: help
  }
}

// export function friendline(help) {
//   return function (dispatch, getState) {
//     console.log("getstate ", getState().question);
//     console.log(getState().question[0])
//     console.log("fifty ", getState().fifty)

//     const chance = Math.random();
//     // If 50:50 has been used your friend has a 70% chance of getting the answer right
//     if (getState().fifty === "FIFTY") {
//       if (chance < 0.75) {
//         dispatch(friendAnswer(getState().question[0]))
//       } else {
//         dispatch(friendAnswer(getState().question[0]))
//       }
//       dispatch(friendAnswer("FIFTY"))
//     } else {
//       dispatch(friendAnswer("RND"))
//     }
//   }
// }

export function friendAnswer(chances) {
  return {
    type: chances
  }
}
export function fiftyline(help) {
  return {
    type: 'FIFTY',
    payload: help
  }
}

// ------------------------------------------------------
export function audienceline(help) {
  return {
    type: 'AUDIENCE',
    payload: help
  }
}
//rewrite 50:50 questions so that the questions change IN state
export function fiftyQuestions(help) {
  return function (dispatch, getState) {
    let possibleAnswers = getState().question;
    const rightAnswer = possibleAnswers[0];

    const currentQuestion = possibleAnswers[1];
    possibleAnswers.splice(0, 2);
    //calculate index positions of correct answer and 1 random other answer
    // console.log("answers", possibleAnswers)
    let right = possibleAnswers.indexOf(rightAnswer);
    let keeper = Math.floor(Math.random() * 4);
    // console.log("before  ", right, keeper);
    if (right === keeper && right !== 3) {
      keeper += 1
    } else if (right === 3 && keeper === 3) {
      keeper = (Math.floor((Math.random() * 2) + 1))
    }
    let answers = [possibleAnswers[right], possibleAnswers[keeper]].sort(function () { return 0.5 - Math.random() });
    answers.unshift(possibleAnswers[right], currentQuestion);
    dispatch(fiftyline(help));
    dispatch(receiveFifty(answers))
  }
}

export function receiveFifty(questionData) {
  return {
    type: 'FIFTY_QUESTION',
    payload: questionData
  }
}
// ------------------------------------------------------


//Initialise all states
export function restart() {
  return function (dispatch, getState) {
    dispatch(audienceline(''));
    dispatch(friendline(''));
    dispatch(fiftyline(''));
    dispatch(checkAnswer('RESTART'));


  }
}