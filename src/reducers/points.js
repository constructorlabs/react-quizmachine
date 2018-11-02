function points(state = 0, action){
    switch (action.type) {
        case 'CORRECT_ANSWER':
            const points = state + 1;
            return points;
        case 'INCORRECT_ANSWER':
            const points = state - 1;
            return points;
        default:
            return state;
    }
}

export default points;