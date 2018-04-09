const showReducer = (state = [], action) => {
  switch(action.type) {
  case 'LOAD_SHOWS':
    return [...action.shows];

  default:
    return state;
  } 
};

export default showReducer;