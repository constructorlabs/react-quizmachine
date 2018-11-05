function question(state = {}, action){
  switch (action.type) {
    case 'RECEIVE_QUESTION':

      console.log('Step 6. setting question in state')
    
      return action.currentQuestion;

    default:
      return state
  }
}

export default question;
