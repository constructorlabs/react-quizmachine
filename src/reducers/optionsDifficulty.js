function optionsDifficulty(
    state = '', action) {
    switch (action.type) {
        case 'RECEIVE_OPTIONS_DIFFICULTY':
            return action.optionsDifficulty
        default:
            return state
    }
}

export default optionsDifficulty;