function scoreboard(state = {name: "", scoreboard: [], formVisible: "yes"}, action) {
    switch(action.type){
        case 'RECEIVE_PLAYER_NAME':
          return {
              name: action.name,
              scoreboard: state.scoreboard,
              formVisible: state.formVisible
          }

        case 'RECEIVE_SCOREBOARD':
          return {
              name: state.name,
              scoreboard: action.scoreboard,
              formVisible: action.formVisible
          }
        default:
          return state;
    }
}

export default scoreboard;