function score(state = 0, action) {
  switch (action.type) {
    case 'SET_SCORE':
      return action.score;
    case 'ADD_TO_SCORE':
      return state + action.score;
    default:
      return state;
  }
}

export default score;
