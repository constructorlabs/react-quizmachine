function gifUrl(state = '', action) {
  switch (action.type) {
    case 'SET_GIF_URL':
      return action.gifUrl;
    default:
      return state;
  }
}

export default gifUrl;
