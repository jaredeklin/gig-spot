import defaultImage from '../images/black-woven.jpg';

export const cleanImage = (artistData, currentImage) => {
  if (!artistData.artist || !artistData.artist.image[4]) {
    return currentImage || defaultImage;
  }
  const artistImage = artistData.artist.image[4]['#text'];

  return artistImage;
};
