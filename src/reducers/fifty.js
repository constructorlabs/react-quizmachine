function fifty(reduxState = '', action) {

  switch (action.type) {
    case 'FIFTY':
      return 'FIFTY'
    default:
      return reduxState;
  }
}

export default fifty;