function score(score = 0, action) {
    switch (action.type) {
        case 'RECEIVE_SCORE':
            return action.score
        default:
            return score
    }
}

export default score;