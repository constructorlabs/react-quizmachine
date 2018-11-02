function triviaType(state = 'any', action) {
  switch (action.type) {
    case 'SET_TRIVIA_TYPE':
      return action.triviaType;
    default:
      return state;
  }
}

export default triviaType;
