import { lastFmApiKey } from './apiKey';
import { cleanImage } from './cleanImage';

export const fetchImage = (concerts) => {
  const promises = concerts.map( async (concert) => {

    const artist = concert.headlineArtist;
    const baseUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo';
    const keyUrl = `&artist=${artist}&api_key=${lastFmApiKey}&format=json`;

    try {
      const response = await fetch(`${baseUrl}${keyUrl}`);
      const artistData = await response.json();

      return ({ ...concert, image: cleanImage(artistData, concert.image) });
      
    } catch (error) {
      throw error;
    } 
    
  });

  return Promise.all(promises); 
};
