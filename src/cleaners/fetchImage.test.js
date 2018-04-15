import { fetchImage } from './fetchImage';
import { cleanImage } from './cleanImage';
import { lastFmApiKey } from './apiKey';
import { 
  mockFetchImageConcertData,  
  mockFetchImageReturnData,
  mockFetchArtistImageReturnData 
} from './mockData';

jest.mock('./cleanImage');

describe('fetchImage', () => {

  it('fetch should be called with correct params', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockFetchArtistImageReturnData)
    }));


    const artist = mockFetchImageConcertData[0].headlineArtist.Name
    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${lastFmApiKey}&format=json`
    
    fetchImage(mockFetchImageConcertData);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });


  it('should call cleanImage with correct params', () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockFetchArtistImageReturnData)
    }));

    fetchImage(mockFetchImageConcertData);
    expect(cleanImage).toHaveBeenCalledWith(mockFetchArtistImageReturnData)
  });

  it('should throw an error if response is bad', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      status: 404
    }));

    const expected = { 'status': 404 }
    expect(fetchImage(mockFetchImageConcertData)).rejects.toEqual(expected)
  })
});