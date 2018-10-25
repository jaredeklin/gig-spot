import { SimpleCleaners } from '../cleaners/SimpleCleaners';
import { ApiCalls } from '../cleaners/ApiCalls';
import { Storage } from '../cleaners/Storage';

const clean = new SimpleCleaners();
const api = new ApiCalls();
const storage = new Storage();

export const loadTonightsShows = shows => ({
  type: 'LOAD_TONIGHTS_SHOWS',
  shows
});

export const loadThisWeeksShows = shows => ({
  type: 'LOAD_THIS_WEEKS_SHOWS',
  shows
});

export const loadUpcomingShows = shows => ({
  type: 'LOAD_UPCOMING_SHOWS',
  shows
});

export const updateLocation = city => ({
  type: 'UPDATE_LOCATION',
  city
});

export const tonightIsLoading = bool => ({
  type: 'TONIGHT_IS_LOADING',
  tonightIsLoading: bool
});

export const thisWeekIsLoading = bool => ({
  type: 'THIS_WEEK_IS_LOADING',
  thisWeekIsLoading: bool
});

export const upcomingIsLoading = bool => ({
  type: 'UPCOMING_IS_LOADING',
  upcomingIsLoading: bool
});

export const showHasErrored = bool => ({
  type: 'SHOW_HAS_ERRORED',
  showHasErrored: bool
});

export const clearStore = () => ({
  type: 'CLEAR_STORE'
});

export const fetchShows = city => {
  const date = clean.date();

  if (localStorage.events) {
    const events = storage.getEventsFrom();
    const match = date.today === events.date && city === events.city;

    if (match) {
      return dispatch => {
        try {
          dispatch(clearStore());
          dispatch(showHasErrored(false));
          dispatch(updateLocation(city));
          dispatch(loadTonightsShows(events.tonightsShows));
          dispatch(loadThisWeeksShows(events.thisWeeksShows));
          dispatch(loadUpcomingShows(events.upcomingShows));
        } catch (error) {
          if (error) {
            dispatch(showHasErrored(true));
          }
        }
      };
    }
  }

  return async dispatch => {
    try {
      dispatch(clearStore());
      dispatch(showHasErrored(false));
      dispatch(tonightIsLoading(true));
      dispatch(updateLocation(city));

      const url = clean.queryUrl(city);
      const todaysEvents = await api.getEvents('today', url, date);
      dispatch(tonightIsLoading(false));
      dispatch(loadTonightsShows(todaysEvents));

      dispatch(thisWeekIsLoading(true));
      const thisWeekEvents = await api.getEvents('week', url, date);
      dispatch(thisWeekIsLoading(false));
      dispatch(loadThisWeeksShows(thisWeekEvents));

      dispatch(upcomingIsLoading(true));
      const upcomingEvents = await api.getEvents('upcoming', url, date);
      dispatch(upcomingIsLoading(false));
      dispatch(loadUpcomingShows(upcomingEvents));

      const events = {
        tonightsShows: todaysEvents,
        thisWeeksShows: thisWeekEvents,
        upcomingShows: upcomingEvents,
        date: date.today,
        city
      };

      storage.addEventsTo(events);
    } catch (error) {
      if (error) {
        dispatch(showHasErrored(true));
        dispatch(tonightIsLoading(false));
        dispatch(thisWeekIsLoading(false));
        dispatch(upcomingIsLoading(false));
      }
    }
  };
};
