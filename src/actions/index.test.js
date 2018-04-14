import * as actions from './index';

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

