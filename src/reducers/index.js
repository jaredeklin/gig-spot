import { combineReducers } from 'redux';
import { 
  tonightsShowReducer, 
  thisWeeksShowsReducer, 
  upcomingShowsReducer
} from './showReducers';

import searchLocationReducer from './searchLocationReducer';

export const rootReducer = combineReducers({
  tonightsShows: tonightsShowReducer,
  searchLocation: searchLocationReducer,
  thisWeeksShows: thisWeeksShowsReducer,
  upcomingShows: upcomingShowsReducer
});

export default rootReducer;