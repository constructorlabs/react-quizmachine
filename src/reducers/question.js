function question(state = [], action) {

  switch (action.type) {
    case 'RECEIVE_QUESTION':

      return action.payload;
    case 'FIFTY_QUESTION':
      console.log("reducer possibilities", action.payload)
      return action.payload
    case 'GAME_OVER':
      // return [];
      return '';
    default:
      return state;
  }

}

export default question;