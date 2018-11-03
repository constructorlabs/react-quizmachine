function allCategories(state = {}, action) {
  switch (action.type) {
    case 'SET_ALL_CATEGORIES':
      return action.allCategories;
    default:
      return state;
  }
}

export default allCategories;
