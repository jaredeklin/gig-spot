import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './index';
import {
  mockGetLastFmReturnData,
  mockDate,
  mockUrl
} from '../cleaners/mockData';
import { Storage } from '../cleaners/Storage';

const moment = require('moment');
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const MockDate = require('mockdate');

let mockGetEvents;
jest.mock('../cleaners/ApiCalls', () => {
  return jest.fn().mockImplementation(() => {
    return { getEvents: mockGetEvents };
  });
});

describe('loadTonightsShows', () => {
  it('should return a type of LOAD_TONIGHTS_SHOWS and payload', () => {
    const shows = [{ artist: 'someArtist', venue: 'the vault' }];
    const expected = {
      type: 'LOAD_TONIGHTS_SHOWS',
      shows
    };

    expect(actions.loadTonightsShows(shows)).toEqual(expected);
  });
});

describe('loadThisWeeksShows', () => {
  it('should return a type of LOAD_THIS_WEEKS_SHOWS and payload', () => {
    const shows = [{ artist: 'someArtist', venue: 'the vault' }];
    const expected = {
      type: 'LOAD_THIS_WEEKS_SHOWS',
      shows
    };

    expect(actions.loadThisWeeksShows(shows)).toEqual(expected);
  });
});

describe('loadUpcomingShows', () => {
  it('should return a type of LOAD_UPCOMING_SHOWS and payload', () => {
    const shows = [{ artist: 'someArtist', venue: 'the vault' }];
    const expected = {
      type: 'LOAD_UPCOMING_SHOWS',
      shows
    };

    expect(actions.loadUpcomingShows(shows)).toEqual(expected);
  });
});

describe('tonightIsLoading', () => {
  it('should return a type of TONIGHT_IS_LOADING and payload', () => {
    const expected = {
      type: 'TONIGHT_IS_LOADING',
      tonightIsLoading: true
    };

    expect(actions.tonightIsLoading(true)).toEqual(expected);
  });
});

describe('thisWeekIsLoading', () => {
  it('should return a type of THIS_WEEK_IS_LOADING and payload', () => {
    const expected = {
      type: 'THIS_WEEK_IS_LOADING',
      thisWeekIsLoading: true
    };

    expect(actions.thisWeekIsLoading(true)).toEqual(expected);
  });
});

describe('upcomingIsLoading', () => {
  it('should return a type of UPCOMING_IS_LOADING and payload', () => {
    const expected = {
      type: 'UPCOMING_IS_LOADING',
      upcomingIsLoading: true
    };

    expect(actions.upcomingIsLoading(true)).toEqual(expected);
  });
});

describe('showHasErrored', () => {
  it('should return a type of SHOW_HAS_ERRORED and payload', () => {
    const expected = {
      type: 'SHOW_HAS_ERRORED',
      showHasErrored: false
    };

    expect(actions.showHasErrored(false)).toEqual(expected);
  });
});

describe('clearStore', () => {
  it('should return a type of CLEAR_STORE', () => {
    const expected = {
      type: 'CLEAR_STORE'
    };

    expect(actions.clearStore()).toEqual(expected);
  });
});

describe('updateLocation', () => {
  it('should return a type of UPDATE_LOCATION and a payload', () => {
    const expected = {
      type: 'UPDATE_LOCATION',
      city: 'Denver'
    };

    expect(actions.updateLocation('Denver')).toEqual(expected);
  });
});

describe('fetchShows', () => {
  MockDate.set(moment('20181201'));

  const location = 'Denver';
  const store = mockStore({});
  const storage = new Storage();

  const mockEvents = {
    date: '2018120100',
    city: location,
    tonightsShows: mockGetLastFmReturnData,
    thisWeeksShows: mockGetLastFmReturnData,
    upcomingShows: mockGetLastFmReturnData
  };

  beforeEach(() => {
    localStorage.clear();
    store.clearActions();
    mockGetEvents = jest.fn().mockReturnValue(mockGetLastFmReturnData);
  });

  it('should fire correct actions when local storage matches', () => {
    storage.addEventsTo(mockEvents);
    store.dispatch(actions.fetchShows(location));

    const expectedActions = [
      { type: 'CLEAR_STORE' },
      { showHasErrored: false, type: 'SHOW_HAS_ERRORED' },
      { city: 'Denver', type: 'UPDATE_LOCATION' },
      { shows: mockGetLastFmReturnData, type: 'LOAD_TONIGHTS_SHOWS' },
      { shows: mockGetLastFmReturnData, type: 'LOAD_THIS_WEEKS_SHOWS' },
      { shows: mockGetLastFmReturnData, type: 'LOAD_UPCOMING_SHOWS' }
    ];
    const actualActions = store.getActions();

    expect(actualActions).toEqual(expectedActions);
  });

  it('should fire correct actions when there is no local storage', async () => {
    await store.dispatch(actions.fetchShows(location));

    const expectedActions = [
      { type: 'CLEAR_STORE' },
      { type: 'SHOW_HAS_ERRORED', showHasErrored: false },
      { type: 'TONIGHT_IS_LOADING', tonightIsLoading: true },
      { type: 'UPDATE_LOCATION', city: 'Denver' },
      { type: 'LOAD_TONIGHTS_SHOWS', shows: mockGetLastFmReturnData },
      { type: 'TONIGHT_IS_LOADING', tonightIsLoading: false },
      { type: 'THIS_WEEK_IS_LOADING', thisWeekIsLoading: true },
      { type: 'LOAD_THIS_WEEKS_SHOWS', shows: mockGetLastFmReturnData },
      { type: 'THIS_WEEK_IS_LOADING', thisWeekIsLoading: false },
      { type: 'UPCOMING_IS_LOADING', upcomingIsLoading: true },
      { type: 'LOAD_UPCOMING_SHOWS', shows: mockGetLastFmReturnData },
      { type: 'UPCOMING_IS_LOADING', upcomingIsLoading: false }
    ];

    const actualActions = store.getActions();

    expect(actualActions).toEqual(expectedActions);
  });

  it('should call api.getEvents 3 times with correct params', async () => {
    await store.dispatch(actions.fetchShows(location));

    expect(mockGetEvents).toHaveBeenCalledTimes(3);
    expect(mockGetEvents).toHaveBeenCalledWith(
      expect.stringContaining('today' || 'week' || 'upcoming'),
      mockUrl,
      mockDate
    );
  });

  it('should fire proper actions if ther is an error', async () => {
    mockGetEvents = jest.fn().mockImplementationOnce(() => Promise.reject());

    const expectedActions = [
      { type: 'CLEAR_STORE' },
      { type: 'SHOW_HAS_ERRORED', showHasErrored: false },
      { type: 'TONIGHT_IS_LOADING', tonightIsLoading: true },
      { type: 'UPDATE_LOCATION', city: 'Denver' },
      // Error is thrown here with rejected promise in getEvents
      // Next two actions are fired after error
      { type: 'CLEAR_STORE' },
      { type: 'SHOW_HAS_ERRORED', showHasErrored: true }
    ];

    await store.dispatch(actions.fetchShows('Denver'));

    const actualActions = store.getActions();

    expect(actualActions).toEqual(expectedActions);
  });
});
