import { cleanImage } from './cleanImage';

const lastFmApiKey = process.env.REACT_APP_LASTFM_KEY;

export const fetchImage = (concerts) => {
  const promises = concerts.map( async (concert) => {

    const artist = concert.headlineArtist.replace(/&/gi, 'and');
    const baseUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo';
    const keyUrl = `&artist=${artist}&api_key=${lastFmApiKey}&format=json`;

    try {
      const response = await fetch(`${baseUrl}${keyUrl}`);
      const artistData = await response.json();
      const image = cleanImage(artistData, concert.image);
      const cleanBio = (artistData) => {
        if (artistData.artist) {
          return artistData.artist.bio.content.split(' <a href=')[0];
        }
        return null;
      };
      const bio = cleanBio(artistData);

      return ({ ...concert, image, bio });

    } catch (error) {
      console.log(error); //eslint-disable-line
      return concert;
    }   
  });

  return Promise.all(promises); 
};


