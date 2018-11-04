function session(state = {}, action) {
  switch (action.type) {
    case 'SET_SESSION_ID':
      return Object.assign({}, state, { id: action.id });
    case 'RESET_SESSION':
      return {};
    default:
      return state;
  }
}

export default session;
