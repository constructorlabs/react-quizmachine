export function fetchQuestionFromAPI() {
  console.log("Step 3: calling fetch")

  return function (dispatch, getState) {
    console.log("Step 3.5: inside fetch")

    return fetch(`https://opentdb.com/api.php?amount=1&difficulty=medium&type=multiple&encode=url3986`)
      .then(response => response.json())
      .then(json => {
        // console.log(json.results);
        dispatch(receiveQuestion(json.results));

      })
      .catch(error => console.log("Something went wrong: ", error));
  }
};

export function receiveQuestion(questionData) {
  console.log("Step 4 - creating RECEIVE_QUESTION question ARRAY")
  return {
    type: 'RECEIVE_QUESTION',
    payload: questionData
  }
}

export function correctAnswer() {

  return {
    type: 'CORRECT_ANSWER'

  }
}
export function incorrectAnswer() {

  return {
    type: 'INCORRECT_ANSWER'

  }
}
