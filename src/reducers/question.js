function question(state = {question: {}, numberOfQuestions: 0}, action){
  switch (action.type) {
    case 'RECEIVE_QUESTION':
      const incrementNumberOfQuestions = state.numberOfQuestions + 1;
      return{
        question: action.question,
        numberOfQuestions: incrementNumberOfQuestions
      } 
    default:
      return state
  }
}

export default question;
