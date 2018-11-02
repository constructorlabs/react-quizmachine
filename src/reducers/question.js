function question(state = {}, action){
  switch (action.type) {
    case 'RECEIVE_QUESTION':
      console.log('Step 5 - setting question in state')
      return action.question
    default:
      return state
  }
}

export default question;
