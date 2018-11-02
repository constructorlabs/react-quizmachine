const initialState = { currentScore: 0, allScores: [], gameOver: false };

function scores(state = initialState, action) {
  switch (action.type) {
    case "CORRECT_ANSWER":
      state.currentScore += action.points;
      return state;
    case "INCORRECT_ANSWER":
      function compare(a, b) {
        return b.score - a.score;
      }
      if (state - action.points >= 0) {
        state.currentScore -= action.points;
        const allScores = state.allScores.concat([
          { name: action.name, score: state.currentScore }
        ]);
        const sortedAllScores = allScores.sort(compare);
        state = Object.assign({}, state, { allScores: sortedAllScores }, {gameOver: true});
        return state;
      } else {
        state.currentScore = 0;
        const allScores = state.allScores.concat([
          { name: action.name, score: state.currentScore }
        ]);
        const sortedAllScores = allScores;
        state = Object.assign({}, state, { allScores: sortedAllScores },  {gameOver: true});
        return state;
      }
    default:
      return state;
  }
}

export default scores;
