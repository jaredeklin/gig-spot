export const tonightsShowReducer = (state = [], action) => {
  switch(action.type) {
    
  case 'LOAD_TONIGHTS_SHOWS':
    return [...action.shows];

  default:
    return state;
  }
};

export const thisWeeksShowsReducer = (state = [], action) => {
  switch(action.type) {

  case 'LOAD_THIS_WEEKS_SHOWS':
    return [...action.shows];

  default:
    return state;
  }
};

export const upcomingShowsReducer = (state = [], action) => {
  switch(action.type) {

  case 'LOAD_UPCOMING_SHOWS':
    return [...action.shows];

  default:
    return state;
  }
};

