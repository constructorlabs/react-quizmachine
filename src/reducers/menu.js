function menu(state = {difficulty: ""}, action) {
    switch(action.type) {
        case 'RECEIVE_DIFFICULTY':
            return {
                difficulty: action.difficulty
            }
        default: 
            return state;
    }
}

export default menu;