import { fetchImage } from './fetchImage';
import {
  mockFetchImageConcertData,
  mockFetchArtistImageReturnData
} from './mockData';
import { SimpleCleaners } from './SimpleCleaners';

const lastFmApiKey = 12345;
const clean = new SimpleCleaners();

describe('fetchImage', () => {
  xit('fetch should be called with correct params', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockFetchArtistImageReturnData)
      })
    );

    const artist = mockFetchImageConcertData[0].headlineArtist.Name;
    const base = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&';
    const url = `${base}artist=${artist}&api_key=${lastFmApiKey}&format=json`;

    fetchImage(mockFetchImageConcertData);
    expect(window.fetch).toHaveBeenCalledWith(url);
  });

  xit('should call clean.image with correct params', () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockFetchArtistImageReturnData)
      })
    );
    clean.image = jest.fn();

    fetchImage(mockFetchImageConcertData);
    expect(clean.image).toHaveBeenCalledWith(mockFetchArtistImageReturnData);
  });

  xit('should throw an error if response is bad', async () => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.reject({
        status: 404
      })
    );

    const expected = { status: 404 };
    expect(fetchImage(mockFetchImageConcertData)).rejects.toEqual(expected);
  });
});
