import defaultImage from '../images/black-woven.jpg';

const moment = require('moment');
const eventfulApiKey = process.env.REACT_APP_EVENTFUL_KEY;

export class SimpleCleaners {
  time = time => {
    const startTime = moment(time).format('h:mm A');

    return startTime === '12:00 AM' ? '' : startTime;
  };

  image = (artistData, currentImage) => {
    if (!artistData.artist || !artistData.artist.image[4]) {
      return currentImage || defaultImage;
    }
    const artistImage = artistData.artist.image[4]['#text'];

    return artistImage;
  };

  bio = artistData => {
    if (artistData.artist) {
      return artistData.artist.bio.summary.split(' <a href=')[0];
    }
    return null;
  };

  artists = show => {
    if (!show.performers) {
      const name = show.title.replace(/ [(][0-9][0-9][+] Event[)]/gi, '');
      // remove any age event from title ex. (16+ Event)
      if (name.match(/\S- /i)) {
        // match any non-whitespace char followed by dash space
        return name.split('- ');
      }
      return [name];
    }

    if (show.performers.performer.name) {
      return [show.performers.performer.name];
    }

    return show.performers.performer.map(artist => artist.name);
  };

  tickets = (links, tickets) => {
    if (links) {
      const preferred = links.link.find(ticket =>
        ticket.url.includes('axs.com')
      );

      if (preferred) {
        return preferred.url;
      }
    }

    if (tickets) {
      return tickets.link[0].url;
    }

    return null;
  };

  date = () => {
    return {
      today: moment().format('YYYYMMDD00'),
      tommorrow: moment()
        .add(1, 'days')
        .format('YYYYMMDD00'),
      nextWeek: moment()
        .add(7, 'days')
        .format('YYYYMMDD00'),
      upcoming: moment()
        .add(8, 'days')
        .format('YYYYMMDD00'),
      upcomingEnd: moment()
        .add(3, 'months')
        .format('YYYYMMDD00')
    };
  };

  queryUrl = city => {
    const location = `&location=${city}`;
    const images = '&image_sizes=block250';
    const sortOrder = '&sort_order=popularity';
    const resultLength = '&page_size=25';
    const category = '&category=music';
    const includes = '&include=tickets,links';
    const proxyUrl = 'https://salty-waters-47393.herokuapp.com/';
    const rootUrl = 'http://api.eventful.com/json/events/search?';
    const query1 = `app_key=${eventfulApiKey}${location}${category}${images}`;
    const query2 = `${sortOrder}${resultLength}${includes}`;
    const url = `${proxyUrl}${rootUrl}${query1}${query2}`;

    return url;
  };
}
