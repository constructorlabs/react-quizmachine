function question(state = [], action) {

  switch (action.type) {
    case 'RECEIVE_QUESTION':
      return action.payload;
    case 'FIFTY_QUESTION':
      return action.payload
    case 'GAME_OVER':
      return action.payload;
    default:
      return state;
  }
}

export default question;