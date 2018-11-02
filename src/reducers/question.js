function questionReducer(state = { question: [], correctAnswer: "" }, action) {
  console.log("Step 5 - setting question in state");
  switch (action.type) {
    case "RECEIVE_QUESTION":
      return Object.assign(
        {},
        state,
        { question: action.question.results },
        { correctAnswer: action.question.results[0].correct_answer }
      );
    case "RECEIVE_ANSWER":
      return Object.assign({}, state, { userAnswer: action.answer });
    default:
      return state;
  }
}

export default questionReducer;
