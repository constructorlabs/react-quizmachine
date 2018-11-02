function lives(state = 3, action) {
  switch (action.type) {
    case 'SET_LIVES':
      return action.lives;
    case 'INCREMENT_LIVES':
      return state + 1;
    case 'DECREMENT_LIVES':
      return state - 1;
    default:
      return state;
  }
}

export default lives;
