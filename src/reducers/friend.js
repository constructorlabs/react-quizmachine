function friend(reduxState = '', action) {

  switch (action.type) {
    case 'FRIEND':
      return action.payload
    default:
      return reduxState;
  }
}

export default friend;