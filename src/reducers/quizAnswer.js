function quizAnswer(state = '', action) {
    switch (action.type) {
        case 'RECEIVE_ANSWER':
            return action.questionAnswer
        default:
            return state
    }
}

export default quizAnswer;