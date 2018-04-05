import { combineReducers } from 'redux';
import showReducer from './showReducer';

export const rootReducer = combineReducers({
  shows: showReducer
});

export default rootReducer;