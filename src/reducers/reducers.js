export const tonightsShowReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_TONIGHTS_SHOWS':
      return [...action.shows];

    default:
      return state;
  }
};

export const thisWeeksShowsReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_THIS_WEEKS_SHOWS':
      return [...action.shows];

    default:
      return state;
  }
};

export const upcomingShowsReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_UPCOMING_SHOWS':
      return [...action.shows];

    default:
      return state;
  }
};

export const updateLocationReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return action.city;

    default:
      return state;
  }
};

export const tonightLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'TONIGHT_IS_LOADING':
      return action.tonightIsLoading;

    default:
      return state;
  }
};

export const thisWeekLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'THIS_WEEK_IS_LOADING':
      return action.thisWeekIsLoading;

    default:
      return state;
  }
};

export const upcomingLoadingReducer = (state = false, action) => {
  switch (action.type) {
    case 'UPCOMING_IS_LOADING':
      return action.upcomingIsLoading;

    default:
      return state;
  }
};

export const errorReducer = (state = false, action) => {
  switch (action.type) {
    case 'SHOW_HAS_ERRORED':
      return action.showHasErrored;

    default:
      return state;
  }
};
