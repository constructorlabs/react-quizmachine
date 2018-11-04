const initialState = {
  difficulty: 'easy',
  triviaType: 'any',
  category: 'any',
  score: 0,
  progress: 0,
  lives: 3,
};

function session(state = initialState, action) {
  switch (action.type) {
    case 'SET_SESSION_ID':
      return Object.assign({}, state, { id: action.id });
    case 'SET_DIFFICULTY':
      return Object.assign({}, state, { difficulty: action.difficulty });
    case 'SET_TRIVIA_TYPE':
      return Object.assign({}, state, { triviaType: action.triviaType });
    case 'SET_CATEGORY':
      return Object.assign({}, state, { category: action.category });
    case 'ADD_TO_SCORE':
      return Object.assign({}, state, { score: state.score + action.score });
    case 'INCREMENT_LIVES':
      return Object.assign({}, state, { lives: state.lives + 1 });
    case 'DECREMENT_LIVES':
      return Object.assign({}, state, { lives: state.lives - 1 });
    case 'INCREMENT_PROGRESS':
      return Object.assign({}, state, { progress: state.progress + 1 });
    case 'RESET_PROGRESS':
      return Object.assign({}, state, { progress: 0 });
    case 'RESET_SESSION':
      return initialState;
    default:
      return state;
  }
}

export default session;
