const initialState = {
  username: '',
  password: '',
  loggedIn: false,
  userType: 'existing',
  id: '',
};

function user(state = initialState, action) {
  switch (action.type) {
    case 'SET_USERNAME':
      return Object.assign({}, state, { username: action.username });
    case 'SET_PASSWORD':
      return Object.assign({}, state, { password: action.password });
    case 'SET_LOGGED_IN':
      return Object.assign({}, state, { loggedIn: true });
    case 'SET_USER_TYPE':
      return Object.assign({}, state, { userType: action.userType });
    case 'SET_USER_ID':
      return Object.assign({}, state, { id: action.id });
    default:
      return state;
  }
}

export default user;
