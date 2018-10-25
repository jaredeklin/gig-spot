import { SimpleCleaners } from './SimpleCleaners';
import { cleanConcertData } from './cleanConcertData';

const lastFmApiKey = process.env.REACT_APP_LASTFM_KEY;
const clean = new SimpleCleaners();

export class ApiCalls {
  getLastFmData = concerts => {
    const promises = concerts.map(async concert => {
      const artist = concert.headlineArtist.replace(/&/gi, 'and');
      const baseUrl = 'http://ws.audioscrobbler.com/2.0/?method=artist.getinfo';
      const keyUrl = `&artist=${artist}&api_key=${lastFmApiKey}&format=json`;

      try {
        const response = await fetch(`${baseUrl}${keyUrl}`);
        const artistData = await response.json();
        const image = clean.image(artistData, concert.image);
        const bio = clean.bio(artistData);

        return { ...concert, image, bio };
      } catch (Error) {
        console.log(Error); //eslint-disable-line
        return { ...concert, bio: null };
      }
    });

    return Promise.all(promises);
  };

  getEvents = async (type, url, date) => {
    const dateRange = this.getDateRange(type, date);
    const response = await fetch(`${url}&date=${dateRange}`);

    if (!response.ok) {
      throw Error(response.statusText);
    }

    return await this.cleanData(response);
  };

  cleanData = async response => {
    const concertData = await response.json();
    const cleanData = cleanConcertData(concertData.events.event);

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
