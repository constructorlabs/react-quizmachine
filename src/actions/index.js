export function fetchQuestionFromAPI() {
  return function(dispatch) {
    fetch(`https://opentdb.com/api.php?amount=1`)
      .then(response => response.json())
      .then(result => {
        dispatch(receiveQuestion(result));
      });
  };
}

export function receiveQuestion(question) {
  console.log(question);
  return {
    type: "RECEIVE_QUESTION",
    question: question,
  };
}

export function setAnswer(answer) {
  return {
    type: "RECEIVE_ANSWER",
    answer: answer,
  };
}
