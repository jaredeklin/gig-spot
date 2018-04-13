import * as actions from '../actions';
import {
  showReducer,
  searchLocationReducer,
} from './showReducer';

describe('showReducer', () => {

  describe('tonightsShowReducer', () => {
    it('should return a default state', () => {
      expect(showReducer(undefined, {})). toEqual([]);
    });

    it('should load tonights shows', () => {
      const shows = [{artist: 'someArtist', venue: 'the vault'}];

      expect(showReducer(undefined, actions.loadShows(shows))).toEqual(shows);
    });
  })

  describe('searchLocationReducer', () => {
    it('should return a default state', () => {
      expect(searchLocationReducer(undefined, {})).toEqual({});
    });

    it('should set a location', () => {
      const location = { radius: 10, zipCode: 80203 };

      expect(searchLocationReducer(undefined, actions.setLocation(location))).toEqual(location);
    })
  });
  
});