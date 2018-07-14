function question(state = [], action) {

  // console.log("action payload array", action.payload, "action.type", action.type);

  // if (action.payload !== undefined) {
  //   question = action.payload
  // }

  switch (action.type) {
    case 'RECEIVE_QUESTION':
      return action.payload
    case 'GAME_OVER':
    default:
      return [];
  }

}

export default question;