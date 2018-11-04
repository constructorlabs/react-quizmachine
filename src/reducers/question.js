function questionReducer(
  state = {
    question: [],
    correctAnswer: "",
    score: 0,
    userAnswer: "",
    questionCount: 0,
  },
  action
) {
  function scoreEasyQuestion(answer) {
    if (answer == state.correctAnswer) {
      return Object.assign({}, state, {
        userAnswer: answer,
        score: state.score + 1,
      });
    } else if (answer !== state.correctAnswer && state.score > 0) {
      return Object.assign({}, state, {
        userAnswer: action.answer,
        score: state.score - 1,
      });
    } else {
      return Object.assign({}, state, {
        userAnswer: action.answer,
        score: 0,
      });
    }
  }

  function scoreMediumQuestion(answer) {
    if (answer == state.correctAnswer) {
      return Object.assign({}, state, {
        userAnswer: action.answer,
        score: state.score + 2,
      });
    } else if (answer !== state.correctAnswer && state.score > 0) {
      return Object.assign({}, state, {
        userAnswer: action.answer,
        score: state.score - 1,
      });
    } else {
      return Object.assign({}, state, {
        userAnswer: action.answer,
        score: 0,
      });
    }
  }

  function scoreHardQuestion(answer) {
    if (answer == state.correctAnswer) {
      return Object.assign({}, state, {
        userAnswer: action.answer,
        score: state.score + 3,
      });
    } else if (answer !== state.correctAnswer && state.score > 0) {
      return Object.assign({}, state, {
        userAnswer: action.answer,
        score: state.score - 1,
      });
    } else {
      return Object.assign({}, state, {
        userAnswer: action.answer,
        score: 0,
      });
    }
  }

  switch (action.type) {
    case "RECEIVE_QUESTION":
      if (state.questionCount < 10)
        return Object.assign(
          {},
          state,
          { question: action.question.results },
          { correctAnswer: action.question.results[0].correct_answer },
          { userAnswer: "" },
          { questionCount: state.questionCount + 1 }
        );
    case "RECEIVE_ANSWER":
      if (state.question[0].difficulty == "easy") {
        return scoreEasyQuestion(action.answer);
      } else if (state.question[0].difficulty == "medium") {
        return scoreMediumQuestion(action.answer);
      } else {
        return scoreHardQuestion(action.answer);
      }
    default:
      return state;
  }
}

export default questionReducer;
