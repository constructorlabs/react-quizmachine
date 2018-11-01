function fifty(reduxState = '', action) {

  switch (action.type) {
    case 'FIFTY':
      return action.payload
    case 'USEDFIFTY':
      return action.payload
    default:
      return reduxState;
  }
}

export default fifty;