function highScores(state = [], action) {
  switch (action.type) {
    case 'SET_HIGH_SCORES':
      return action.table;
    default:
      return state;
  }
}

export default highScores;
