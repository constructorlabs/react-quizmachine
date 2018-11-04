function gif(state = {}, action) {
  switch (action.type) {
    case 'SET_CORRECT_GIF':
      return Object.assign({}, state, { correctGif: action.correctGif });
    case 'SET_INCORRECT_GIF':
      return Object.assign({}, state, { incorrectGif: action.incorrectGif });
    case 'USE_CORRECT_GIF':
      return state.correctGif;
    case 'USE_INCORRECT_GIF':
      return state.incorrectGif;
    case 'RESET_GIF':
      return {};
    default:
      return state;
  }
}

export default gif;
