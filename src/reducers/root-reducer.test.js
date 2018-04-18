import rootReducer from './root-reducer';
import * as actions from '../actions';

describe('rootReducer', () => {

  it('should return appReducer with current action', () => {
    const expected = {
      "error": false, 
      "loading": true, 
      "thisWeeksShows": [], 
      "tonightsShows": [], 
      "upcomingShows": []
    };

    expect(rootReducer({}, actions.showIsLoading(true))).toEqual(expected);
  });

  it('should clear the store when clearStore is fired', () => {
    const expected = {
      "error": false, 
      "loading": false, 
      "thisWeeksShows": [], 
      "tonightsShows": [], 
      "upcomingShows": []
    };

    const currentStore = {
      "error": true, 
      "loading": true, 
      "thisWeeksShows": [{name: 'jared'}], 
      "tonightsShows": [], 
      "upcomingShows": []
    };

    expect(rootReducer(currentStore, actions.clearStore())).toEqual(expected);
  });
});