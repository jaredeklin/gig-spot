import { cleanTime } from './cleanTime';

export const cleanConcertData = (concerts) => {
  return concerts.reduce((array, show) => {
    const venue = show.Venue.Name;
    const artist = show.Artists[0].Name;
    const id = show.Id;
    const date = new Date(show.Date).toLocaleDateString([], {
      month: 'short',
      day: 'numeric'
    });
    console.log(date)
    console.log(show.Date)
    const startTime = cleanTime(show.Date)
    const concertData = {
      artist,
      venue,
      date,
      startTime,
      id
    };

    return [...array, concertData];
  }, []); 
};