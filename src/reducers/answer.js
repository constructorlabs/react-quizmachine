function quizAnswer(state = '', action) {
    switch (action.type) {
        case 'RECEIVE_QUESTION':
            return action.questionAnswer
        default:
            return state
    }
}

export default quizQuestion;