import { combineReducers } from 'redux';
import showReducer from './showReducer';
import locationReducer from './locationReducer';

export const rootReducer = combineReducers({
  shows: showReducer,
  location: locationReducer
});

export default rootReducer;