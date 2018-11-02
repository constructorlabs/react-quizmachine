const initialState = {
    points : 0,
    correct: ""
}


function points(state = initialState, action){
    switch (action.type) {
        case 'RECEIVE_QUESTION':
            return {
                points: state.points,
                correct: action.correct
            }
        case 'CORRECT_ANSWER':
            const addOnePoint = state.points + 1;
            return {
                points: addOnePoint,
                correct: 'yes'
            }
            
        case 'INCORRECT_ANSWER':
            return {
               points: state.points,
               correct: 'no'
            } 
        default:
            return state;
    }
}

export default points;