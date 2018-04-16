import defaultImage from '../images/black-woven.jpg';

export const cleanImage = (artistData) => {
  if (!artistData.artist || !artistData.artist.image[4]) {

    return defaultImage; 
  } else {
    const artistImage = artistData.artist.image[4][`#text`];

    return artistImage;
  }
};