import { cleanImage } from './cleanImage';
import { mockFetchArtistImageReturnData } from './mockData';

describe('cleanImage', () => {

  const mockUrl = "https://lastfm-img2.akamaized.net/i/u/300x300/fa3db70a62ae49dbbbfbd4183d68289f.png";

  it('should return a single image', () => { 
    expect(cleanImage(mockFetchArtistImageReturnData)).toEqual(mockUrl);
  });

  it('if artist doesnt exist return null', () => {
    expect(cleanImage({})).toEqual(null);
  });
});