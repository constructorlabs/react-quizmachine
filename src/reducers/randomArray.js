function randomArray(
    state = [0, 1, 2, 3], action) {
    switch (action.type) {
        case 'ARRAY_RECEIVE':
            return action.randomArray
        default:
            return state
    }
}

export default randomArray;