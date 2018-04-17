import { cleanTime } from './cleanTime';

export const cleanConcertData = (concerts) => {

  return concerts.reduce((concertArray, show) => {
    const venue = {
      name: show.Venue.Name,
      id: show.Venue.Id,
      url: show.Venue.Url,
      address: show.Venue.Address,
      city: show.Venue.City
    };
    const headlineArtist = show.Artists[0]
    const supportArtists = show.Artists.filter(artist => artist.Id !== show.Artists[0].Id);
    const tickets = show.TicketUrl
    const id = show.Id;
    const date = new Date(show.Date).toLocaleDateString([], {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });  

    const startTime = cleanTime(show.Date)
    const concertData = {
      headlineArtist,
      supportArtists,
      venue,
      date,
      startTime,
      id,
      tickets
    };

    return [...concertArray, concertData];
  }, []); 
};