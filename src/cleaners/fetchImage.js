export const fetchImage = (concerts) => {
  const promises = concerts.map( async (concert) => {
    const artist = concert.artist;
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${lastFmApiKey}&format=json`);
    const artistData = await response.json();

    return ({ ...concert, image: cleanImage(artistData) })
  })
  return Promise.all(promises)
}

export const cleanImage = (artistData) => {
  if (!artistData.artist || !artistData.artist.image[4]) {

    return null; 
  } else {
    const artistImage = artistData.artist.image[4][`#text`];

    return artistImage
  }
}