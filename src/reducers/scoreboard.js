function scoreboard(state = {name: ""}, action) {
    switch(action.type){
        case 'RECEIVE_PLAYER_NAME':
          return {
              name: action.name
          }
        default:
          return state;
    }
}

export default scoreboard;