import { combineReducers } from 'redux';
import { 
  tonightsShowReducer, 
  thisWeeksShowsReducer, 
  upcomingShowsReducer,
  loadingReducer,
  errorReducer
} from './reducers';

export const appReducer = combineReducers({
  tonightsShows: tonightsShowReducer,
  thisWeeksShows: thisWeeksShowsReducer,
  upcomingShows: upcomingShowsReducer,
  loading: loadingReducer,
  error: errorReducer
});

export const rootReducer = (state, action) => {
  console.log(state, action)
  if(action.type === 'CLEAR_STORE') {
    state = undefined;  
  };

  return appReducer(state, action);
};

export default rootReducer;