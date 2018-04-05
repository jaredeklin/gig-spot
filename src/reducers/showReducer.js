const showReducer = (state = [], action) => {
  console.log(action.type)
  switch(action.type) {
  case 'LOAD_SHOWS':
    return [...action.shows];

  default:
    return state;
  }
}

export default showReducer;