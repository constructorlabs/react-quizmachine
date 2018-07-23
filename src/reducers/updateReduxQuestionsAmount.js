function updateReduxQuestionsAmount(
    state = 10, action) {
    switch (action.type) {
        case 'RECEIVE_QUESTION_AMOUNT':
            return action.updateReduxQuestionsAmount
        default:
            return state
    }
}

export default updateReduxQuestionsAmount;