function content(state = {view: "menu"}, action){
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