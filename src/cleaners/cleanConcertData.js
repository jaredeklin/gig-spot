import { cleanTime } from './cleanTime';
import { CleanArtists } from "./cleanArtists";

const cleanArtists = new CleanArtists();

export const cleanConcertData = (concerts) => {

  concerts = concerts.filter(concert => {
    const { title, performers } = concert;

    if (title.includes("Tickets") && !performers) {
      return false;
    }

    if (title.includes("Parking")) {
      return false;
    }
    return true;
  });    

  return concerts.reduce((concertArray, show) => {
    
    const venue = {
      name: show.venue_name,
      id: show.venue_id,
      url: show.venue_url,
      address: show.venue_address,
      city: show.city_name,
      state: show.region_abbr,
      zip: show.postal_code
    };
    const artists = cleanArtists.clean(show);
    const headlineArtist = artists[0];
    const supportArtists = artists.filter(artist => artist !== artists[0]);
    const description = show.description;
    const image = !show.image ? null : show.image.block250.url;
    const tickets = show.url;
    const id = show.id;
    const date = new Date(show.start_time).toLocaleDateString([], {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });  
    const startTime = cleanTime(show.start_time);
    const concertData = {
      headlineArtist,
      supportArtists,
      description,
      venue,
      date,
      startTime,
      id,
      tickets,
      image
    };

    return [...concertArray, concertData];
  }, []); 
};


