const thisWeeksShowsReducer = (state = [], action) => {
  switch(action.type) {
  case 'LOAD_THIS_WEEKS_SHOWS':
    return [...action.shows]
  default:
    return state;
  }
}

export default thisWeeksShowsReducer;