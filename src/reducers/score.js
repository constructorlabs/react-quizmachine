function score(state = 50, action) {
    switch (action.type) {
        case 'RECEIVE_SCORE':
            return action.score
        default:
            return state
    }
}

export default score;