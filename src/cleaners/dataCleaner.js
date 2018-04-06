import { lastFmApiKey } from './apiKey'

export const cleanConcertData = (concerts) => {
  return concerts.reduce((array, show) => {
    const venue = show.Venue.Name;
    const date = show.Date;
    const artist = show.Artists[0].Name;
    console.log(artist)
    // const image = getImage(artist);
    // console.log(image)
    const concertData = {
      artist,
      venue,
      date,
      // image
    }
    return [...array, concertData]
  }, []); 
}



  // export const
  
  
