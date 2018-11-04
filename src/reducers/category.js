const initialState ={
  category: {9:'General Knowledge'},
  options: {9:'General Knowledge',
            11:'Entertainment: Film',
            18: 'Science: Computers',
      
            23: 'History',
            22: 'Geography',
            25: 'Art'
          }
}

function category(state=initialState , action){
  switch (action.type) {
    case 'SELECT_CATEGORY':
      // const selectedKey = Object.keys(state.options).find(key => state.options[key] === action.category)
      return Object.assign({}, state, {category: action.category})
    default:
      return state
  }
}

export default category;
