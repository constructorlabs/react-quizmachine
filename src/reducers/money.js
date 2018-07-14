function money(state = 0, action) {

  // console.log("answer in reducer ", action.answer)

  switch (action.type) {
    case 'CORRECT_ANSWER':
      return state + 1000000
    case 'INCORRECT_ANSWER':
      return 0
    default:
      return state;
  }
}

export default money;