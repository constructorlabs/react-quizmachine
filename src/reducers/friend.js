function friend(reduxState = '', action) {

  switch (action.type) {
    case 'FRIEND':
      return 'FRIEND'
    default:
      return reduxState;
  }
}

export default friend;