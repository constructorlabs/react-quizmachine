function quizQuestion(state = '', action) {
  switch (action.type) {
    case 'RECEIVE_QUESTION':
      return action.quizQuestion
    default:
      return state
  }
}

export default quizQuestion;
