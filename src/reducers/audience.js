function audience(reduxState = '', action) {

  switch (action.type) {
    case 'AUDIENCE':
      return action.payload
    default:
      return reduxState;
  }
}

export default audience;