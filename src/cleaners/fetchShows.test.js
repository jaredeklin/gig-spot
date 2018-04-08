import { fetchShows } from './fetchShows';
import { jambaseApiKey } from './apiKey';
import { fetchImage } from './fetchImage';
import { cleanConcertData } from './cleanConcertData';

jest.mock('./fetchImage');
jest.mock('./cleanConcertData');

describe('fetchShows', () => {
  const mockLocation = {
    zipCode: 80218,
    radius: 10
  }
  const {zipCode, radius} = mockLocation;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve()
    }));
  });

  // it('should call fetch with correct url', () => {
  //   const url = `http://api.jambase.com/events?zipCode=${zipCode}&radius=${radius}&page=0&api_key=${jambaseApiKey}`;
    
  //   fetchShows(mockLocation);
  //   expect(window.fetch).toHaveBeenCalledWith(url);
  // });

  // it('cleanConcertData should be called with correct params', async () => {
  //   await fetchShows(mockLocation);
  //   expect(cleanConcertData).toHaveBeenCalledWith();
  // });

  // it('fetchImage should be called with correct params', () => {

  // });
});