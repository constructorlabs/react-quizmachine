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
        dispatch(receiveQuestion(json.results));
      })
      .catch(error => console.log("Oh no! There's a Gru in the code... ", error));
  }
};
// ------------------------------------------------------
export function receiveQuestion(questionData) {
  return {
    type: 'RECEIVE_QUESTION',
    payload: questionData
  }
}
// ------------------------------------------------------
export function correctAnswer() {
  return {
    type: 'CORRECT_ANSWER'
  }
}
// ------------------------------------------------------
export function incorrectAnswer() {
  return {
    type: 'INCORRECT_ANSWER'
  }
}
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
    type: help
  }
}
// ------------------------------------------------------
export function audienceline(help) {
  return {
    type: help
  }
}
// ------------------------------------------------------
export function fiftyline(help) {
  return {
    type: help
  }
}