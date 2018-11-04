
function scoreFetch(state = {
    score: 0
  }, action){
      switch (action.type) {
        case 'SCORE_FETCH':
        // console.log(action.questions);
  
        const currentScore = {score: action.score}
        return currentScore;
        
          //return = action of returning the value of 'questions' in the action object.
    
        default:
          return state
      }
    }
    
    export default scoreFetch;