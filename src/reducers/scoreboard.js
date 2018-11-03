function scoreboard(state = {name: "", scoreboard: []}, action) {
    switch(action.type){
        case 'RECEIVE_PLAYER_NAME':
          return {
              name: action.name
          }

        case 'RECEIVE_SCOREBOARD':
          return {
              scoreboard: action.scoreboard
          }
        default:
          return state;
    }
}

export default scoreboard;