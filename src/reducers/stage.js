function stage(state = 'login', action) {
  switch (action.type) {
    case 'SET_STAGE':
      return action.stage;
    default:
      return state;
  }
}

export default stage;
