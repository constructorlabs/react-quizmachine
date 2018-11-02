function trivia(state = {}, action) {
  switch (action.type) {
    case 'SET_TRIVIA':
      return action.trivia;
    case 'RESET_TRIVIA':
      return {};
    default:
      return state;
  }
}

export default trivia;
