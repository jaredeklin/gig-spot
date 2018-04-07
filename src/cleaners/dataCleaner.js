import { lastFmApiKey, jambaseApiKey } from './apiKey'

export const cleanConcertData = (concerts) => {
  return concerts.reduce((array, show) => {
    const venue = show.Venue.Name;
    const date = cleanDate(show.Date);
    const artist = show.Artists[0].Name;
    const id = show.Id;
    const concertData = {
      artist,
      venue,
      date,
      id
    }
    return [...array, concertData]
  }, []); 
}

export const cleanDate = (date) => {
  const cleanEventDate = new Date(date).toString();
  const splitEventDate = cleanEventDate.split(' ');

  return {
    dayName: splitEventDate[0],
    day: splitEventDate[2],
    month: splitEventDate[1],
    year: splitEventDate[3],
    startTime: splitEventDate[4].split(':', 2).join(':')
  }
}

export const fetchShows = async (location) => {
  const { zipCode, radius } = location
  try {
    const response = await fetch(`http://api.jambase.com/events?zipCode=${zipCode}&radius=${radius}&page=0&api_key=${jambaseApiKey}`);
    const eventData = await response.json();
    const cleanConcert = await cleanConcertData(eventData.Events);
    const completedConcertObject = await addImage(cleanConcert);

    return completedConcertObject;
  } catch (error) {
    throw error;
  }
};

export const cleanImage = (artistData) => {
  if (!artistData.artist || !artistData.artist.image[4]) {

    return null; 
  } else {
    const artistImage = artistData.artist.image[4][`#text`];

    return artistImage
  }
}

export const addImage = (concerts) => {
  const promises = concerts.map( async (concert) => {
    const artist = concert.artist;
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${lastFmApiKey}&format=json`);
    const artistData = await response.json();

    return ({ ...concert, image: cleanImage(artistData) })
  })
  return Promise.all(promises)
}
