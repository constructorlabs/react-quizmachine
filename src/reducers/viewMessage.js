function viewMessage(state = false, action) {
    switch (action.type) {
        case 'RECEIVE_VIEW_MESSAGE':
            return action.viewMessage
        default:
            return state
    }
}

export default viewMessage;