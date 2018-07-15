function currentQuestion(
    state = 1, action) {
    switch (action.type) {
        case 'RECEIVE_CURRENT_QUESTION':
            return action.currentQuestion
        default:
            return state
    }
}

export default currentQuestion;