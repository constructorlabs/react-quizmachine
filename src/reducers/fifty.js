function fifty(reduxState = '', action) {

  // switch (action.type) {
  //   case 'FIFTY_QUESTION':
  //     console.log("reducer possibilities", action.payload)
  //     return action.payload
  //   case 'USEDFIFTY':
  //     return 'USEDFIFTY'
  //   default:
  //     return reduxState;
  // }


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