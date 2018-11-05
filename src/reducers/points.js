const initialState = {
    points : 0,
    correct: ""
}


function points(state = initialState, action){
    const addOnePoint = state.points + 1;
    const addTwoPoints = state.points + 2;
    const addThreePoints = state.points + 3;
    switch (action.type) {
        case 'RECEIVE_QUESTION':
            return {
                points: state.points,
                correct: action.correct
            }
        case 'CORRECT_ANSWER':
            if (action.quizDifficulty !== "") {
                return {
                    points: addOnePoint,
                    correct: 'yes'
                }
            } else if (action.quizDifficulty === "") {
                if(action.questionDifficulty === "easy") {
                    return {
                        points: addOnePoint,
                        correct: 'yes'
                    }
                } else if (action.questionDifficulty === "medium") {
                    return {
                        points: addTwoPoints,
                        correct: 'yes'
                    }
                } else if (action.questionDifficulty === "hard") {
                    return {
                        points: addThreePoints,
                        correct: 'yes'
                    }
                }
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