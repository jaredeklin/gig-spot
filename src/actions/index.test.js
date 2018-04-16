import * as actions from './index';
import { jambaseApiKey } from '../cleaners/apiKey';
import { fetchImage } from '../cleaners/fetchImage';
import { cleanConcertData } from '../cleaners/cleanConcertData';
import { filterDates } from '../cleaners/filterDates';
import { 
  mockFetchShowsData, 
  mockCleanConcertData,
  mockExpectedCleanConcertData,
  mockFetchImageCallData,
  mockReturnedCleanConcertData,
} from '../cleaners/mockData';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

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
      "showIsLoading": true, 
      "type": "SHOW_IS_LOADING"
    };

    expect(actions.showIsLoading(true)).toEqual(expected);
  });
});

describe('showHasErrored', () => {
  it('should return a type of SHOW_HAS_ERRORED and payload', () => {
    const expected = {
      "showHasErrored": false, 
      "type": "SHOW_HAS_ERRORED"
    };

    expect(actions.showHasErrored(false)).toEqual(expected);
  });
});

describe('fetchShows', () => {
  const mockLocation = { zipCode: 80218 }
  const { zipCode } = mockLocation;
  const store = mockStore({})

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
    const url = `${baseUrl}=${zipCode}&page=all&api_key=${jambaseApiKey}`;
 
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('cleanConcertData should be called with correct params', () => {

    expect(cleanConcertData).toHaveBeenCalledWith([mockExpectedCleanConcertData]);
  });

  it('fetchImage should be called with correct params', () => {

    expect(fetchImage).toHaveBeenCalledWith(mockFetchImageCallData);
  });

  it('should handle error if status is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false,
      statusText: 'you fucked up',
      json: () => Promise.resolve(mockFetchShowsData)
    }));

    const expectedActions = [ 
      { type: 'SHOW_IS_LOADING', showIsLoading: true },
      { type: 'SHOW_HAS_ERRORED', showHasErrored: true },
      { type: 'SHOW_IS_LOADING', showIsLoading: false },
      { type: 'LOAD_TONIGHTS_SHOWS', shows: 1 },
      { type: 'LOAD_THIS_WEEKS_SHOWS', shows: 2 },
      { type: 'LOAD_UPCOMING_SHOWS', shows: 3 } 
    ];

    store.clearActions();
    await store.dispatch(actions.fetchShows(zipCode));
    const actualActions = store.getActions();

    expect(actualActions).toEqual(expectedActions);

    // console.log(Error)
    // expect(store.dispatch(actions.fetchShows(zipCode))).toThrow('');
  })

  it('should throw an error if a bad response is returned', () => {
    window.fetch = jest.fn(() => Promise.reject({
      status: 404
    }));
    const expected = { 'status': 404 };

    expect(store.dispatch(actions.fetchShows(zipCode))).rejects.toEqual(expected);
  });

  it('actions should be called', () => {
    const expectedActions = [ 
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

