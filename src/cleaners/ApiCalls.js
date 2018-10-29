import { SimpleCleaners } from './SimpleCleaners';
import { cleanConcertData } from './cleanConcertData';

const lastFmApiKey = process.env.REACT_APP_LASTFM_KEY;

class ApiCalls {
  constructor() {
    this.clean = new SimpleCleaners();
  }

  getLastFmData = concerts => {
    const promises = concerts.map(async concert => {
      const artist = concert.headlineArtist.replace(/&/gi, 'and');
      const baseUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo';
      const keyUrl = `&artist=${artist}&api_key=${lastFmApiKey}&format=json`;

      const response = await fetch(`${baseUrl}${keyUrl}`);

      if (!response.ok) {
        console.log(response.statusText, concert.headlineArtist); //eslint-disable-line
        return { ...concert, bio: null };
      }

      const artistData = await response.json();
      const image = this.clean.image(artistData, concert.image);
      const bio = this.clean.bio(artistData);

      return { ...concert, image, bio };
    });

    return Promise.all(promises);
  };

  getEvents = async (type, url, date) => {
    const dateRange = this.getDateRange(type, date);
    const response = await fetch(`${url}&date=${dateRange}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const eventData = await response.json();
    const cleanData = cleanConcertData(eventData.events.event);

    return await this.getLastFmData(cleanData);
  };

  getDateRange = (type, date) => {
    const { tommorrow, nextWeek, upcoming, upcomingEnd } = date;
    switch (type) {
      case 'today':
        return 'Today';

      case 'week':
        return `${tommorrow}-${nextWeek}`;

      case 'upcoming':
        return `${upcoming}-${upcomingEnd}`;

      default:
        console.log('Invalid type param'); //eslint-disable-line
        break;
    }
  };
}

export default ApiCalls;
