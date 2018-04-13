import { combineReducers } from 'redux';
import { 
  tonightsShowReducer, 
  thisWeeksShowsReducer, 
  upcomingShowsReducer,
  loadingReducer,
  errorReducer,
  searchLocationReducer
} from './reducers';


export const rootReducer = combineReducers({
  tonightsShows: tonightsShowReducer,
  searchLocation: searchLocationReducer,
  thisWeeksShows: thisWeeksShowsReducer,
  upcomingShows: upcomingShowsReducer,
  loading: loadingReducer,
  error: errorReducer
});

export default rootReducer;