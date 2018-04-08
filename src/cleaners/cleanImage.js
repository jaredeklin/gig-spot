export const cleanImage = (artistData) => {
  console.log(artistData)
  if (!artistData.artist || !artistData.artist.image[4]) {

    return null; 
  } else {
    const artistImage = artistData.artist.image[4][`#text`];

    return artistImage;
  }
};