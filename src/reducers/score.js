
function score(state = 0, action){
      switch (action.type) {
        // case 'SCORE_FETCH':
        // // console.log(action.questions);
  
        // const currentScore = {score: action.score}
        
        // return currentScore;
        
          //return = action of returning the value of 'questions' in the action object.
        case 'SCORE_ADD':
        console.log(action)
        return action.answerIsCorrect ? state + 1 : state -1

        default:
          return state
      }
    }
    
    export default score;