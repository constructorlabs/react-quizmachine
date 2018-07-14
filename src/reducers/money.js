function money(state = 0, action) {

  // console.log("answer in reducer ", action.answer)

  switch (action.type) {
    case 'CORRECT_ANSWER':
      return state + 100000
    case 'INCORRECT_ANSWER':
      //Implement breakpoints
      if (state < 300000) {
        return 0
      }
      else if (state >= 300000 && state < 500000) {
        return 300000
      } else {
        return 500000
      }
    default:
      return state;
  }
}

export default money;