import * as actions from './index';
import { jambaseApiKey } from '../cleaners/apiKey';
import { fetchImage } from '../cleaners/fetchImage';
import { cleanConcertData } from '../cleaners/cleanConcertData';
import { filterDates } from '../cleaners/filterDates';
import { 
  mockFetchShowsData, 
  mockFetchImageCallData,
  mockFilterDataCall
} from '../cleaners/mockData';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock('../cleaners/fetchImage');
jest.mock('../cleaners/cleanConcertData');
jest.mock('../cleaners/filterDates');

describe('loadTonightsShows', () => {
  it('should return a type of LOAD_TONIGHTS_SHOWS and payload', () => {
    const shows = [{artist: 'someArtist', venue: 'the vault'}];
    const expected = {
      type: 'LOAD_TONIGHTS_SHOWS',
      shows
    };

    expect(actions.loadTonightsShows(shows)).toEqual(expected);
  });
});

describe('loadThisWeeksShows', () => {
  it('should return a type of LOAD_THIS_WEEKS_SHOWS and payload', () => {
    const shows = [{artist: 'someArtist', venue: 'the vault'}];
    const expected = {
      type: 'LOAD_THIS_WEEKS_SHOWS',
      shows
    };

    expect(actions.loadThisWeeksShows(shows)).toEqual(expected);
  });
});

describe('loadUpcomingShows', () => {
  it('should return a type of LOAD_UPCOMING_SHOWS and payload', () => {
    const shows = [{artist: 'someArtist', venue: 'the vault'}];
    const expected = {
      type: 'LOAD_UPCOMING_SHOWS',
      shows
    };

    expect(actions.loadUpcomingShows(shows)).toEqual(expected);
  });
});

describe('showIsLoading', () => {
  it('should return a type of SHOW_IS_LOADING and payload', () => {
    const expected = { 
      type: "SHOW_IS_LOADING",
      showIsLoading: true
    };

    expect(actions.showIsLoading(true)).toEqual(expected);
  });
});

describe('showHasErrored', () => {
  it('should return a type of SHOW_HAS_ERRORED and payload', () => {
    const expected = {
      type: "SHOW_HAS_ERRORED",
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

describe('fetchShows', () => {
  const mockLocation = { zipCode: 80218 };
  const { zipCode } = mockLocation;
  const store = mockStore({});

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockFetchShowsData)
    }));

    store.clearActions();
    store.dispatch(actions.fetchShows(zipCode));
  });

  it('should call fetch with correct url', () => {
    const baseUrl = 'http://api.jambase.com/events?zipCode';
    const url = `${baseUrl}=${zipCode}&page=0&api_key=${jambaseApiKey}`;
 
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('cleanConcertData should be called with correct params', () => {

    expect(cleanConcertData).toHaveBeenCalled();
  });

  it('fetchImage should be called with correct params', () => {

    expect(fetchImage).toHaveBeenCalledWith(mockFetchImageCallData);
  });

  it('filterDates should be called with correct params', () => {
    expect(filterDates).toHaveBeenCalledWith(mockFilterDataCall);
  });

  it('should fire proper actions if status is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      json: () => Promise.resolve(mockFetchShowsData)
    }));

    const expectedActions = [ 
      {"type": "CLEAR_STORE"},
      { type: 'SHOW_HAS_ERRORED', showHasErrored: false },
      { type: 'SHOW_IS_LOADING', showIsLoading: true },
      { type: 'SHOW_HAS_ERRORED', showHasErrored: true },
      { type: 'SHOW_IS_LOADING', showIsLoading: false } 
    ];

    store.clearActions();
    await store.dispatch(actions.fetchShows(zipCode));
    const actualActions = store.getActions();

    expect(actualActions).toEqual(expectedActions);
  });

  it('should throw an error if a bad response is returned', async () => {
    window.fetch = jest.fn(() => Promise.resolve({
      ok: false,
      statusText: 'you have been a very bad boy'
    }));

    const expected = Promise.resolve(Error('you have been a very bad boy'));

    expect(store.dispatch(actions.fetchShows(zipCode))).toEqual(expected);
  });

  it('all actions should be called', () => {
    const expectedActions = [
      {"type": "CLEAR_STORE"},
      { type: 'SHOW_HAS_ERRORED', showHasErrored: false }, 
      { type: 'SHOW_IS_LOADING', showIsLoading: true },
      { type: 'SHOW_IS_LOADING', showIsLoading: false },
      { type: 'LOAD_TONIGHTS_SHOWS', shows: 1 },
      { type: 'LOAD_THIS_WEEKS_SHOWS', shows: 2 },
      { type: 'LOAD_UPCOMING_SHOWS', shows: 3 } 
    ];

    const actualActions = store.getActions();

    expect(actualActions).toEqual(expectedActions);
  });
});
