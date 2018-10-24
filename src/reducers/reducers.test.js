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

describe('tonightLoadingReducer', () => {
  it('should return a default state', () => {
    expect(reducer.tonightLoadingReducer(undefined, {})).toEqual(false);
  });

  it('should update with a boolean', () => {
    const bool = true;

    expect(
      reducer.tonightLoadingReducer(undefined, actions.tonightIsLoading(bool))
    ).toEqual(bool);
  });
});

describe('thisWeekLoadingReducer', () => {
  it('should return a default state', () => {
    expect(reducer.thisWeekLoadingReducer(undefined, {})).toEqual(false);
  });

  it('should update with a boolean', () => {
    const bool = true;

    expect(
      reducer.thisWeekLoadingReducer(undefined, actions.thisWeekIsLoading(bool))
    ).toEqual(bool);
  });
});

describe('upcomingLoadingReducer', () => {
  it('should return a default state', () => {
    expect(reducer.upcomingLoadingReducer(undefined, {})).toEqual(false);
  });

  it('should update with a boolean', () => {
    const bool = true;

    expect(
      reducer.upcomingLoadingReducer(undefined, actions.upcomingIsLoading(bool))
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
