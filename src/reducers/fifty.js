function fifty(reduxState = '', action) {

  switch (action.type) {
    case 'FIFTY':
      return 'FIFTY'
    // case 'RESET':
    //   return 'FIFTYUSED'
    default:
      return reduxState;
  }
}

export default fifty;