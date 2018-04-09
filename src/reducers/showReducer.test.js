import showReducer from './showReducer';
import * as actions from '../actions';

describe('showReducer', () => {
  it('should return a default state', () => {
    expect(showReducer(undefined, {})). toEqual([]);
  });

  it('should load shows', () => {
    const shows = [{artist: 'someArtist', venue: 'the vault'}];

    expect(showReducer(undefined, actions.loadShows(shows))).toEqual(shows);
  });
});