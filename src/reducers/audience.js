function audience(reduxState = '', action) {

  switch (action.type) {
    case 'AUDIENCE':
      return 'AUDIENCE'
    default:
      return reduxState;
  }
}

export default audience;