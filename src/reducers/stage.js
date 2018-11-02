function stage(state = 'newGame', action) {
  switch (action.type) {
    case 'SET_STAGE':
      return action.stage;
    default:
      return state;
  }
}

export default stage;
