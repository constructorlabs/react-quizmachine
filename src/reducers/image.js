function image(state = '', action){
    switch (action.type) {
    
      case 'SAVE_PHOTO_URL':
      console.log(action.image)
      return action.image

      default:
        return state
    }
  }
  
  export default image;