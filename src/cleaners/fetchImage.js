import { SimpleCleaners } from './SimpleCleaners';

const lastFmApiKey = process.env.REACT_APP_LASTFM_KEY;
const clean = new SimpleCleaners();

export const fetchImage = concerts => {
  const promises = concerts.map(async concert => {
    const artist = concert.headlineArtist.replace(/&/gi, 'and');
    const baseUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo';
    const keyUrl = `&artist=${artist}&api_key=${lastFmApiKey}&format=json`;

    try {
      const response = await fetch(`${baseUrl}${keyUrl}`);
      const artistData = await response.json();
      const image = clean.image(artistData, concert.image);
      const bio = clean.bio(artistData);

      return { ...concert, image, bio };
    } catch (error) {
      console.log(error); //eslint-disable-line
      return { ...concert, bio: null };
    }
  });

  return Promise.all(promises);
};
