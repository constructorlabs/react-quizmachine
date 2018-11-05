function gifs(state = '', action){
    switch (action.type) {
    
      case 'GIF':
      console.log(action)
      return action.answerIsCorrect ? state + 1 : state -1

      default:
        return state
    }
  }
  
  export default gifs;