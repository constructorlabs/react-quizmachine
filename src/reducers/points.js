function points(state = 0, action){
    switch (action.type) {
        case 'CORRECT_ANSWER':
            const morePoints = state + 1;
            return morePoints;
        case 'INCORRECT_ANSWER':
            const lessPoints = state - 1;
            return lessPoints;
        default:
            return state;
    }
}

export default points;