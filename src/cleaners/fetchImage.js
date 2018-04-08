import { lastFmApiKey } from './apiKey';
import { cleanImage } from './cleanImage';

// export const fetchImage = (concerts) => {
//   try {
//     const promises = concerts.map( async (concert) => {
//       const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${concert.artist}&api_key=${lastFmApiKey}&format=json`);
//       const artistData = await response.json();

//       return ({ ...concert, image: cleanImage(artistData) });
//     });

//     return Promise.all(promises);
    
//   } catch (error) {
//     console.log(error)
//     throw error
//   } 
// };


export const fetchImage = (concerts) => {
 
    const promises = concerts.map( async (concert) => {
      try {
        const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${concert.artist}&api_key=${lastFmApiKey}&format=json`);
        const artistData = await response.json();

        return ({ ...concert, image: cleanImage(artistData) });
      
      } catch (error) {
        console.log(error)
        throw error
      } 
    });
     
    return Promise.all(promises); 
};