import {
  mockReturnedCleanConcertData,
  mockLastFmReturnData,
  mockGetLastFmReturnData
} from './mockData';
// import { SimpleCleaners } from './SimpleCleaners';
import { ApiCalls } from './ApiCalls';

const lastFmApiKey = process.env.REACT_APP_LASTFM_KEY;
// const clean = new SimpleCleaners();
const api = new ApiCalls();

jest.mock('../cleaners/cleanConcertData');

describe('ApiCalls', () => {
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
        Promise.reject({
          status: 400
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
});
