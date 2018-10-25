import { SimpleCleaners } from './SimpleCleaners';
import { mockLastFmReturnData } from './mockData';

describe('SimpleCleaners', () => {
  const clean = new SimpleCleaners();

  describe('SimpleCleaners time method', () => {
    it('should return a time in 12hr format', () => {
      const mockTime = '2018-04-24T20:00:00';

      expect(clean.time(mockTime)).toEqual('8:00 PM');
    });
  });

  describe('SimpleCleaners artist method', () => {
    const mock1 = { title: 'Jared- Bob (16+ Event)', performers: null };
    const mock2 = { title: 'Jared and Bob', performers: null };
    const mock3 = { title: '', performers: { performer: { name: 'Jared' } } };
    const mock4 = {
      title: '',
      performers: { performer: [{ name: 'Jared' }, { name: 'Bob' }] }
    };

    it('It should return a cleaned correct value without performers', () => {
      const expected = ['Jared', 'Bob'];
      expect(clean.artists(mock1)).toEqual(expected);
    });

    it('It should return a correct value without performers', () => {
      const expected = ['Jared and Bob'];
      expect(clean.artists(mock2)).toEqual(expected);
    });

    it('It should return a correct value with a single performer', () => {
      const expected = ['Jared'];
      expect(clean.artists(mock3)).toEqual(expected);
    });

    it('It should return a correct value with multiple performers', () => {
      const expected = ['Jared', 'Bob'];
      expect(clean.artists(mock4)).toEqual(expected);
    });
  });

  describe('SimpleCleaners image method', () => {
    it('should return a single image', () => {
      const expected =
        'https://lastfm-img2.akamaized.net/i/u/300x300/fa3db70a62ae49dbbbfbd4183d68289f.png';
      expect(clean.image(mockLastFmReturnData, 'image.jpg')).toEqual(expected);
    });

    it('if artist doesnt exist return default image or current image', () => {
      expect(clean.image({}, null)).toEqual('black-woven.jpg');
      expect(clean.image({}, 'currentImage.jpg')).toEqual('currentImage.jpg');
    });
  });

  describe('SimpleCleaners queryUrl', () => {
    it('should return correct query url', () => {
      const expected = 'https://salty-waters-47393.herokuapp.com/http://api.eventful.com/json/events/search?app_key=fXn9D3Xfj44jjsj7&location=Denver&category=music&image_sizes=block250&sort_order=popularity&page_size=25&include=tickets,links'; //eslint-disable-line
      expect(clean.queryUrl('Denver')).toEqual(expected);
    });
  });
});
