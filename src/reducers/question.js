function question(state = [], action) {

  console.log("Step 5 - setting question in state.");
  // console.log("action payload array", action.payload, "action.type", action.type);

  // if (action.payload !== undefined) {
  //   question = action.payload
  // }

  switch (action.type) {
    case 'RECEIVE_QUESTION':
      return action.payload
    default:
      return state;
  }

}

export default question;