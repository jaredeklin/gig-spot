import { fetchShows } from '../fetchShows';
import { jambaseApiKey } from './apiKey';
import { fetchImage } from './fetchImage';
import { cleanConcertData } from './cleanConcertData';
import { 
  mockFetchShowsData, 
  mockCleanConcertData,
  mockFetchImageConcertData
} from './mockData';

jest.mock('./fetchImage');
jest.mock('./cleanConcertData');

describe('fetchShows', () => {
  const mockLocation = { zipCode: 80218 }
  const { zipCode } = mockLocation;

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockFetchShowsData)
    }));
  });

  it('should call fetch with correct url', () => {
    const url = `http://api.jambase.com/events?zipCode=${zipCode}&page=all&api_key=${jambaseApiKey}`;
    
    fetchShows(mockLocation);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('cleanConcertData should be called with correct params', () => {
    fetchShows(mockLocation);
    expect(cleanConcertData).toHaveBeenCalledWith(mockCleanConcertData);
  });

  it('fetchImage should be called with correct params', () => {
    fetchShows(mockLocation);
    expect(fetchImage).toHaveBeenCalledWith(mockFetchImageConcertData);
  });

  it('should throw an error if a bad response is returned', () => {
    window.fetch = jest.fn(() => Promise.reject({
      status: 404
    }));
    const expected = { 'status': 404 };

    expect(fetchShows(mockLocation)).rejects.toEqual(expected);
  })
});