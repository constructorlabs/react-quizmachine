function content(state = {view: "quiz"}, action){
    switch(action.type) {
        case 'RECEIVE_VIEW':
            return {
                view: action.view
            }
        default: 
            return state;
    }
}

export default content;