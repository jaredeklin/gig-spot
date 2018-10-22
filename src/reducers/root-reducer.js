import { combineReducers } from 'redux';
import { 
  tonightsShowReducer, 
  thisWeeksShowsReducer, 
  upcomingShowsReducer,
  tonightLoadingReducer,
  thisWeekLoadingReducer,
  upcomingLoadingReducer,
  errorReducer,
  updateLocationReducer
} from './reducers';

export const appReducer = combineReducers({
  location: updateLocationReducer,
  tonightsShows: tonightsShowReducer,
  thisWeeksShows: thisWeeksShowsReducer,
  upcomingShows: upcomingShowsReducer,
  tonightLoading: tonightLoadingReducer,
  thisWeekLoading: thisWeekLoadingReducer,
  upcomingLoading: upcomingLoadingReducer,
  error: errorReducer
});

export const rootReducer = (state, action) => {

  if (action.type === 'CLEAR_STORE') {
    state = undefined;  
  }

  return appReducer(state, action);
};

export default rootReducer;