import { CleanArtists } from './cleanArtists';
import { Dates } from './Dates';
const moment = require('moment');

const cleanArtists = new CleanArtists();
const time = new Dates();

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

  return concerts.reduce((concertArray, show) => {
    const {
      id,
      popularity,
      tickets,
      description,
      image,
      start_time,
      categories,
      links
    } = show;

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
    const ticketUrl = cleanTickets(links, tickets);

    const date = moment(start_time).format('MMM D');
    const startTime = time.cleanTime(start_time);
    const concertData = {
      headlineArtist,
      supportArtists,
      description,
      venue,
      date,
      startTime,
      id,
      popularity,
      tickets: ticketUrl,
      image: !image ? null : image.block250.url,
      categories
    };

    return [...concertArray, concertData];
  }, []);
};

const cleanTickets = (links, tickets) => {
  if (links) {
    const preferred = links.link.find(ticket => ticket.url.includes('axs.com'));

    if (preferred) {
      return preferred.url;
    }
  }

  if (tickets) {
    return tickets.link[0].url;
  }

  return null;
};
