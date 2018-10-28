import {
  mockReturnedCleanConcertData,
  mockLastFmReturnData,
  mockGetLastFmReturnData,
  mockInitialReturnEventData
} from './mockData';
// import { SimpleCleaners } from './SimpleCleaners';
import { ApiCalls } from './ApiCalls';
import { cleanConcertData } from './cleanConcertData';

const lastFmApiKey = process.env.REACT_APP_LASTFM_KEY;

jest.mock('./cleanConcertData');

describe('ApiCalls', () => {
  const api = new ApiCalls();
  const date = new Date();

  describe('getLastFmData', () => {
    const mockConcert = mockReturnedCleanConcertData[0];

    beforeEach(() => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockLastFmReturnData)
        })
      );
    });

    it('fetch should be called with correct params', () => {
      const artist = mockConcert.headlineArtist;
      const base = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&';
      const url = `${base}artist=${artist}&api_key=${lastFmApiKey}&format=json`;

      api.getLastFmData(mockReturnedCleanConcertData);
      expect(window.fetch).toHaveBeenCalledWith(url);
    });

    it('should return the correct value', async () => {
      expect(await api.getLastFmData(mockReturnedCleanConcertData)).toEqual(
        mockGetLastFmReturnData
      );
    });

    it('should return original obj + bio: null if response is bad', async () => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve({
          ok: false,
          statusText: 'Bad Request'
        })
      );

      expect(await api.getLastFmData(mockReturnedCleanConcertData)).toEqual([
        {
          ...mockConcert,
          bio: null
        }
      ]);
    });
  });

  describe('getEvents', () => {
    const url = 'www.test.com/';

    beforeEach(() => {
      api.getLastFmData = jest.fn();

      window.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockInitialReturnEventData)
        })
      );

      api.getEvents('today', url, date);
    });

    it('fetch should be called with the correct params', async () => {
      const expected = 'www.test.com/&date=Today';

      expect(window.fetch).toHaveBeenCalledWith(expected);
    });

    it('should call cleanConcertData and getLastFmData with correct params', () => {
      expect(cleanConcertData).toHaveBeenCalledWith(
        mockInitialReturnEventData.events.event
      );
      expect(api.getLastFmData).toHaveBeenCalledWith(
        mockReturnedCleanConcertData
      );
    });

    it('should throw an error if response is bad', async () => {
      window.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false,
          statusText: 'Bad Request'
        })
      );

      expect.assertions(1);

      try {
        await await api.getEvents('today', url, date);
      } catch (error) {
        expect(error.message).toEqual('Bad Request');
      }
    });
  });

  describe('getDateRange', () => {
    const mockDate = {
      tommorrow: 2018120100,
      nextWeek: 2018120700,
      upcoming: 2018120800,
      upcomingEnd: 2018123100
    };

    it('should return the correct value with today param', () => {
      expect(api.getDateRange('today', mockDate)).toEqual('Today');
    });

    it('should return the correct value with week param', () => {
      const expected = '2018120100-2018120700';

      expect(api.getDateRange('week', mockDate)).toEqual(expected);
    });

    it('should return the correct value with upcoming param', () => {
      const expected = '2018120800-2018123100';

      expect(api.getDateRange('upcoming', mockDate)).toEqual(expected);
    });

    it('should return undefined in invalid param', () => {
      expect(api.getDateRange('', mockDate)).toEqual(undefined);
    });
  });
});
