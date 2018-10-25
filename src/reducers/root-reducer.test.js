import rootReducer from './root-reducer';
import * as actions from '../actions';

describe('rootReducer', () => {
  it('should return appReducer with current action', () => {
    const expected = {
      error: false,
      tonightLoading: true,
      upcomingLoading: false,
      thisWeekLoading: false,
      thisWeeksShows: [],
      tonightsShows: [],
      upcomingShows: [],
      location: ''
    };

    expect(rootReducer({}, actions.tonightIsLoading(true))).toEqual(expected);
  });

  it('should clear the store when clearStore is fired', () => {
    const expected = {
      location: '',
      error: false,
      tonightLoading: false,
      thisWeekLoading: false,
      upcomingLoading: false,
      thisWeeksShows: [],
      tonightsShows: [],
      upcomingShows: []
    };

    const currentStore = {
      location: 'Denver',
      error: true,
      tonightLoading: true,
      thisWeekLoading: false,
      upcomingLoading: false,
      thisWeeksShows: [{ name: 'jared' }],
      tonightsShows: [],
      upcomingShows: []
    };

    expect(rootReducer(currentStore, actions.clearStore())).toEqual(expected);
  });
});
