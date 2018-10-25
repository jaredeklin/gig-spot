import { SimpleCleaners } from './SimpleCleaners';

const moment = require('moment');
const clean = new SimpleCleaners();

export const cleanConcertData = concerts => {
  concerts = concerts.filter(concert => {
    const { title, performers } = concert;

    if (title.includes('Tickets') && !performers) {
      return false;
    }

    if (title.includes('Parking')) {
      return false;
    }
    return true;
  });
  // console.log(concerts);

  return concerts.reduce((concertArray, show) => {
    const { id, image, start_time, links } = show;

    const venue = {
      name: show.venue_name,
      id: show.venue_id,
      url: show.venue_url,
      address: show.venue_address,
      city: show.city_name,
      state: show.region_abbr,
      zip: show.postal_code
    };
    const artists = clean.artists(show);
    const headlineArtist = artists[0];
    const supportArtists = artists.filter(artist => artist !== artists[0]);
    const tickets = clean.tickets(links, show.tickets);
    const date = moment(start_time).format('MMM D');
    const startTime = clean.time(start_time);
    const concertData = {
      headlineArtist,
      supportArtists,
      venue,
      date,
      startTime,
      id,
      tickets,
      image: !image ? null : image.block250.url
    };

    return [...concertArray, concertData];
  }, []);
};
