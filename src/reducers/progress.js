function progress(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_PROGRESS':
      return state + 1;
    case 'RESET_PROGRESS':
      return 0;
    default:
      return state;
  }
}

export default progress;
