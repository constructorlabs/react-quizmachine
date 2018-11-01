function endGame(state = '', action) {

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