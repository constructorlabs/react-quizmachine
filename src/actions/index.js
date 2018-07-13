
export function receiveQuestion(result) {
  return {
    type: 'RECEIVE_QUESTION',
    quizQuestion: result
  }
}

export function isRightAnswer(questionAnswer) {
  return {
    type: 'RECEIVE_ANSWER',
    questionAnswer
  }
}

export function fetchQuestion() {
  return function (dispatch) {
    fetch(`https://opentdb.com/api.php?amount=1&type=multiple`)
      .then(response => response.json())
      .then(result => {
        dispatch(receiveQuestion(result));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}