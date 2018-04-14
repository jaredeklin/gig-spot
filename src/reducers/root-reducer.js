import { combineReducers } from 'redux';
import { 
  tonightsShowReducer, 
  thisWeeksShowsReducer, 
  upcomingShowsReducer,
  loadingReducer,
  errorReducer
} from './reducers';

export const rootReducer = combineReducers({
  tonightsShows: tonightsShowReducer,
  thisWeeksShows: thisWeeksShowsReducer,
  upcomingShows: upcomingShowsReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default rootReducer;