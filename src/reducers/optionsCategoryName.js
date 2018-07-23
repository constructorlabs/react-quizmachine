function optionsCategoryName(
    state = '', action) {
    switch (action.type) {
        case 'RECEIVE_OPTIONS_CATEGORY_NAME':
            return action.optionsCategoryName
        default:
            return state
    }
}

export default optionsCategoryName;