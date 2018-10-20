import { cleanConcertData } from '../cleaners/cleanConcertData';
import { fetchImage } from '../cleaners/fetchImage';
import { Dates } from '../cleaners/Dates';
import { Query } from '../cleaners/Query';
const dates = new Dates();
const query = new Query();

export const loadTonightsShows = (shows) => ({
  type: 'LOAD_TONIGHTS_SHOWS',
  shows
});

export const loadThisWeeksShows = (shows) => ({
  type: 'LOAD_THIS_WEEKS_SHOWS',
  shows
});

export const loadUpcomingShows = (shows) => ({
  type: 'LOAD_UPCOMING_SHOWS',
  shows
});

export const showIsLoading = (bool) => ({
  type: 'SHOW_IS_LOADING',
  showIsLoading: bool
});

export const showHasErrored = (bool) => ({
  type: 'SHOW_HAS_ERRORED',
  showHasErrored: bool
});

export const clearStore = () => ({
  type: 'CLEAR_STORE'
});

export const fetchShows = (city) => {
  const date = dates.getDates();

  if (localStorage.events) {
    const events = getStorage();
    const match = date.today === events.date && city === events.city;
    
    if (match) {
      return (dispatch) => {
        try {
          dispatch(clearStore());
          dispatch(showHasErrored(false));
          dispatch(showIsLoading(true));
          dispatch(loadTonightsShows(events.tonightsShows));
          dispatch(loadThisWeeksShows(events.thisWeeksShows));
          dispatch(loadUpcomingShows(events.upcomingShows));
          dispatch(showIsLoading(false));
        } catch (error) {
          if (error) {
            dispatch(showHasErrored(true));
            dispatch(showIsLoading(false));
          }
        }
      };
    }
  }
  
  return async (dispatch) => {
    try {
      dispatch(clearStore());
      dispatch(showHasErrored(false));
      dispatch(showIsLoading(true));

      const url = query.getUrl(city);

      const todaysEvents = await getTodaysEvents(url);
      dispatch(showIsLoading(false));
      dispatch(loadTonightsShows(todaysEvents));
      
      const thisWeekEvents = await getThisWeeksEvents(url, date);
      dispatch(loadThisWeeksShows(thisWeekEvents));
      
      const upcomingEvents = await getUpcomingEvents(url, date);      
      dispatch(loadUpcomingShows(upcomingEvents));
      
      const events = {
        tonightsShows: todaysEvents,
        thisWeeksShows: thisWeekEvents,
        upcomingShows: upcomingEvents,
        date: date.today,
        city
      };

      addToStorage(events);

    } catch (error) {
      if (error) {
        dispatch(showHasErrored(true));
        dispatch(showIsLoading(false));
      }
    }
  };
};
 
const cleanData = async (response) => {
  const concertData = await response.json();
  const cleanData = cleanConcertData(concertData.events.event);

  return await fetchImage(cleanData);
};

const getTodaysEvents = async (url) => {
  const response = await fetch(`${url}&date=Today`);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  return await cleanData(response);
};

const getThisWeeksEvents = async (url, { tommorrow, nextWeek }) => {
  const date = `date=${tommorrow}-${nextWeek}`;
  const response = await fetch(`${url}&${date}`);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  return await cleanData(response);
};

const getUpcomingEvents = async (url, { upcoming, upcomingEnd }) => {
  const date = `date=${upcoming}-${upcomingEnd}`;
  const response = await fetch(`${url}&${date}`);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  return await cleanData(response);
};

const addToStorage = (events) => {
  if (localStorage.events) {
    localStorage.removeItem('events');
  }

  const stringifiedEvents = JSON.stringify(events);
  localStorage.setItem('events', stringifiedEvents);
};

export const getStorage = () => {
  const retrievedEvents = localStorage.getItem('events');
  return JSON.parse(retrievedEvents);
};



