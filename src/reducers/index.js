import { combineReducers } from 'redux';
import tonightsShowReducer from './tonightsShowReducer';
import searchLocationReducer from './searchLocationReducer';
import thisWeeksShowsReducer from './thisWeeksShowsReducer';
import upcomingShowsReducer from './upcomingShowsReducer';

export const rootReducer = combineReducers({
  tonightsShows: tonightsShowReducer,
  searchLocation: searchLocationReducer,
  thisWeeksShows: thisWeeksShowsReducer,
  upcomingShows: upcomingShowsReducer
});

export default rootReducer;