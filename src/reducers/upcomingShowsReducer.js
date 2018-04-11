const upcomingShowsReducer = (state = [], action) => {
  switch(action.type) {
    case 'LOAD_UPCOMING_SHOWS':
     return [...action.shows];

    default:
      return state;
  };
};

export default upcomingShowsReducer;