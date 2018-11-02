export function fetchQuestionFromAPI() {
  return function(dispatch) {
    console.log("Step 3: calling fetch");
    fetch(`https://opentdb.com/api.php?amount=1&type=boolean`)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        dispatch(receiveQuestion(result));
      });
  };
}

export function receiveQuestion(question) {
  console.log("Step 4 - creating RECEIVE_QUESTION question object");
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
