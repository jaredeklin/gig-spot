import { cleanImage } from './cleanImage';
import { mockFetchArtistImageReturnData } from './mockData';

describe('cleanImage', () => {

  const mockUrl = "https://lastfm-img2.akamaized.net/i/u/300x300/ef281d679fd4707227ec33aaa633ca95.png"

  it('should return a single image', () => { 
    expect(cleanImage(mockFetchArtistImageReturnData)).toEqual(mockUrl)
  });

  it('if artist doesnt exist return null', () => {
    expect(cleanImage({})).toEqual(null);
  })
})