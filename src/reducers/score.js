
function score(state = 0, action){
      switch (action.type) {
      
        case 'SCORE_ADD':
        console.log(action)
        return action.answerIsCorrect ? state + 1 : state -1

        default:
          return state
      }
    }
    
    export default score;