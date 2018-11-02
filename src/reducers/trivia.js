function trivia(state = '', action) {
  switch (action.type) {
    case 'SET_TRIVIA':
      return action.trivia;
    default:
      return state;
  }
}

export default trivia;
