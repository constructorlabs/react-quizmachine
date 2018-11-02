function score(state = 0, action){
  switch (action.type) {
    case 'CORRECT_ANSWER':
      state += action.points
      return state;
    case 'INCORRECT_ANSWER':
      if(state - action.points >=0){
        state -= action.points
        return state;
      } else {
        state = 0
        return state;
      }
    default:
      return state;
  }
}

export default score;
