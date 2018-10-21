import { combineReducers } from 'redux';
import { 
  tonightsShowReducer, 
  thisWeeksShowsReducer, 
  upcomingShowsReducer,
  tonightLoadingReducer,
  thisWeekLoadingReducer,
  upcomingLoadingReducer,
  errorReducer
} from './reducers';

export const appReducer = combineReducers({
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