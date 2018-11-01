function reply(state = '', action) {

  switch (action.type) {
    case 'FRIEND_RESPONSE':
      return `"Umm, I'm really not that sure but I think the answer might be ${action.payload}"`;
    case 'RESET_FRIEND':
      return '';
    default:
      return state;
  }
}

export default reply;