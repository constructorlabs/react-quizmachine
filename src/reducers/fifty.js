function fifty(reduxState = '', action) {

  switch (action.type) {
    case 'FIFTY':
      return 'FIFTY'
    case 'USEDFIFTY':
      return 'USEDFIFTY'
    default:
      return reduxState;
  }
}

export default fifty;