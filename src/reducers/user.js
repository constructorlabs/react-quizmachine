function user(state = { username: '', password: '', loggedIn: false }, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      return Object.assign({}, state, { username: action.username });
    case 'SET_PASSWORD':
      return Object.assign({}, state, { password: action.password });
    case 'SET_LOGGED_IN':
      return Object.assign({}, state, { loggedIn: true });
    default:
      return state;
  }
}

export default user;
