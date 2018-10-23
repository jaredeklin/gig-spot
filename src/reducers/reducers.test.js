import * as actions from '../actions';
import * as reducer from './reducers';

describe('tonightsShowReducer', () => {
  it('should return a default state', () => {
    expect(reducer.tonightsShowReducer(undefined, {})).toEqual([]);
  });

  it('should load tonights shows', () => {
    const shows = [{ artist: 'someArtist', venue: 'the vault' }];

    expect(
      reducer.tonightsShowReducer(undefined, actions.loadTonightsShows(shows))
    ).toEqual(shows);
  });
});

describe('thisWeeksShowsReducer', () => {
  it('should return a default state', () => {
    expect(reducer.thisWeeksShowsReducer(undefined, {})).toEqual([]);
  });

  it('should load thisWeeks shows', () => {
    const shows = [{ artist: 'someArtist', venue: 'the vault' }];

    expect(
      reducer.thisWeeksShowsReducer(
        undefined,
        actions.loadThisWeeksShows(shows)
      )
    ).toEqual(shows);
  });
});

describe('upcomingShowsReducer', () => {
  it('should return a default state', () => {
    expect(reducer.upcomingShowsReducer(undefined, {})).toEqual([]);
  });

  it('should load upcoming shows', () => {
    const shows = [{ artist: 'someArtist', venue: 'the vault' }];

    expect(
      reducer.upcomingShowsReducer(undefined, actions.loadUpcomingShows(shows))
    ).toEqual(shows);
  });
});

describe('loadingReducer', () => {
  it('should return a default state', () => {
    expect(reducer.loadingReducer(undefined, {})).toEqual(false);
  });

  it('should update with a boolean', () => {
    const bool = true;

    expect(
      reducer.loadingReducer(undefined, actions.showIsLoading(bool))
    ).toEqual(bool);
  });
});

describe('errorReducer', () => {
  it('should return a default state', () => {
    expect(reducer.errorReducer(undefined, {})).toEqual(false);
  });

  it('should update with a boolean', () => {
    const bool = true;

    expect(
      reducer.errorReducer(undefined, actions.showHasErrored(bool))
    ).toEqual(bool);
  });
});
