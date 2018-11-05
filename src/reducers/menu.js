function menu(state = {difficulty: "&difficulty=easy"}, action) {
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