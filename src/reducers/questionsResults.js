
function questionsResults(state = {
  questions: {}
}, action){
    switch (action.type) {
      case 'RECEIVE_QUESTIONS':
      // console.log(action.questions);

      
      
      const newQuestions = Object.assign({}, state, { questions: action.questions});
      return newQuestions
    
        //return = action of returning the value of 'questions' in the action object.
  
      default:
        return state
    }
  }
  
  export default questionsResults;