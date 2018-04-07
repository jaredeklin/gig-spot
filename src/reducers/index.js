import { combineReducers } from 'redux';
import showReducer from './showReducer';
import searchLocationReducer from './searchLocationReducer';

export const rootReducer = combineReducers({
  shows: showReducer,
  searchLocation: searchLocationReducer
});

export default rootReducer;