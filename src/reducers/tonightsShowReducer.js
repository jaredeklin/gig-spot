const tonightsShowReducer = (state = [], action) => {
  switch(action.type) {
  case 'LOAD_TONIGHTS_SHOWS':
    return [...action.shows];

  default:
    return state;
  } 
};

export default tonightsShowReducer;