import { lastFmApiKey } from './apiKey';
import { cleanImage } from './cleanImage';

export const fetchImage = (concerts) => {
 
  const promises = concerts.map( async (concert) => {
    const artist = concert.headlineArtist.Name

    try {
      const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${lastFmApiKey}&format=json`);
      const artistData = await response.json();

      return ({ ...concert, image: cleanImage(artistData) });
      
    } catch (error) {
      throw error;
    } 
  });

  return Promise.all(promises); 
};