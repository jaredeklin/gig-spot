import { eventfulApiKey } from '../cleaners/apiKey';
import { cleanConcertData } from '../cleaners/cleanConcertData';
import { fetchImage } from '../cleaners/fetchImage';

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

  return async (dispatch) => {
    try {
      dispatch(clearStore());
      dispatch(showHasErrored(false));
      dispatch(showIsLoading(true));
      
      const tommorrow = new Date();
      const nextWeek = new Date();
      const upcoming = new Date();
      const upcomingEnd = new Date();
      tommorrow.setDate(tommorrow.getDate() + 1);
      nextWeek.setDate(nextWeek.getDate() + 7);
      upcoming.setDate(upcoming.getDate() + 8);
      upcomingEnd.setMonth(upcomingEnd.getMonth() + 3);
      
      const tommorrowDate = formatDate(tommorrow);
      const nextWeekDate = formatDate(nextWeek);
      const upcomingDate = formatDate(upcoming);
      const upcomingEndDate = formatDate(upcomingEnd);
      
      const location = `location=${city}`;
      const images = 'image_sizes=large,block250';
      const sortOrder = 'sort_order=popularity';
      const resultLength = 'page_size=50';
      const category = 'category=music';
      const rootUrl = `http://api.eventful.com/json/events/search?app_key=${eventfulApiKey}`;
      const query = `${location}&${category}&${images}&${sortOrder}&${resultLength}`;
      const url = `${rootUrl}&${query}`;

      const today = await getTodaysEvents(url);
      dispatch(showIsLoading(false));
      dispatch(loadTonightsShows(today));
     
      const thisWeekEvents = await getThisWeeksEvents(url, tommorrowDate, nextWeekDate);
      dispatch(loadThisWeeksShows(thisWeekEvents));

      const upcomingEvents = await getUpcomingEvents(url, upcomingDate, upcomingEndDate);      
      dispatch(loadUpcomingShows(upcomingEvents));

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

  const todayData = await cleanData(response);

  return todayData;
};

const getThisWeeksEvents = async (url, tommorrow, nextWeek) => {
  const date = `date=${tommorrow}-${nextWeek}`;
  const response = await fetch(`${url}&${date}`);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  const weekData = await cleanData(response);

  return weekData;
};

const getUpcomingEvents = async (url, upcomingDate, upcomingEndDate) => {


  const date = `date=${upcomingDate}-${upcomingEndDate}`;
 
  const response = await fetch(`${url}&${date}`);

  if (!response.ok) {
    throw Error(response.statusText);
  }

  const upcomingData = await cleanData(response);

  return upcomingData;
};


const formatDate = (date) => {
  return date
    .toISOString()
    .substr(0, 10)
    .replace(/[-]/gi, '') + '00';
};

