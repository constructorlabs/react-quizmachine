function optionsCategory(
    state = '', action) {
    switch (action.type) {
        case 'RECEIVE_OPTIONS_CATEGORY':
            return action.optionsCategory
        default:
            return state
    }
}

export default optionsCategory;