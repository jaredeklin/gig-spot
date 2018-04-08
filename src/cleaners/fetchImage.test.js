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

  it('fetch should be called', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockFetchArtistImageReturnData)
    }));
    
    const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${mockFetchImageConcertData[0].artist}&api_key=${lastFmApiKey}&format=json`
    const artistData = await fetchImage(mockFetchImageConcertData);

    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  it('should call cleanImage with correct params', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockFetchArtistImageReturnData)
    }));

    await fetchImage(mockFetchImageConcertData);
    expect(cleanImage).toHaveBeenCalledWith(mockFetchArtistImageReturnData)
  });
});