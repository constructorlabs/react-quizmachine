function endGame(state = '', action) {

  // console.log("answer in reducer ", action.answer)
  // console.log("action type", action.type)
  switch (action.type) {
    case 'WALK':
      return 'walk'
    case 'LOSE':
      return 'lose'
    case 'WIN':
      return 'win'
    case '':
      return ''
    default:
      return state;
  }
}

export default endGame;