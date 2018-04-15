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

export const loadingReducer = (state = false, action) => {
  switch(action.type) {

  case 'SHOW_IS_LOADING':
    return action.showIsLoading;

  default:
    return state;
  }
};

export const errorReducer = (state = false, action) => {
  switch(action.type) {

  case 'SHOW_HAS_ERRORED':
    return action.showHasErrored;

  default:
    return state;
  }
};





