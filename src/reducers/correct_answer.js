
function correct_answer(state = {
    correct_answer: ``
  }, action){
      switch (action.type) {
        case 'CORRECT_ANSWER':
        // console.log(action.questions);
  
        
        
        const newAnswer = Object.assign({}, state, { correct_answer: action.correct_answer});
        return newAnswer
      
          //return = action of returning the value of 'questions' in the action object.
    
        default:
          return state
      }
    }
    
    export default correct_answer;