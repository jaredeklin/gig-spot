import * as actions from './index';

describe('loadShows', () => {
  it('should return a type of LOAD_SHOWS and payload', () => {
    const shows = [{artist: 'someArtist', venue: 'the vault'}];
    const expected = {
      type: 'LOAD_SHOWS',
      shows
    };
    expect(actions.loadShows(shows)).toEqual(expected);
  })
})

describe('setLocation', () => {
  it('should return a type of SET_LOCATION and payload', () => {
    const location = { zipCode: 80203, radius: 10 };
    const expected = {
      type: 'SET_LOCATION',
      location
    };
    expect(actions.setLocation(location)).toEqual(expected);
  });
});