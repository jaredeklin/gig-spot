import { jambaseApiKey } from '../cleaners/apiKey';
import { cleanConcertData } from '../cleaners/cleanConcertData';
import { fetchImage } from '../cleaners/fetchImage';
import { filterDates } from '../cleaners/filterDates'

export const loadTonightsShows = (shows) => ({
  type: "LOAD_TONIGHTS_SHOWS",
  shows
});

export const loadThisWeeksShows = (shows) => ({
  type: "LOAD_THIS_WEEKS_SHOWS",
  shows
});

export const loadUpcomingShows = (shows) => ({
  type: "LOAD_UPCOMING_SHOWS",
  shows
});

export const setLocation = (location) => ({
  type: "SET_LOCATION",
  location
});

export const showIsLoading = (bool) => ({
  type: 'SHOW_IS_LOADING',
  showIsLoading: bool
})
export const showHasErrored = (bool) => ({
  type: 'SHOW_HAS_ERRORED',
  showHasErrored: bool
})

export const fetchShows = (location) => {
  const { zipCode, radius } = location;

  return (dispatch) => {
    dispatch(showIsLoading(true))

    fetch(`http://api.jambase.com/events?zipCode=${zipCode}&radius=${radius}&page=0&api_key=${jambaseApiKey}`)
      .then(response => {
        if( !response.ok ) {
          throw new Error(response.statusText);
        }
        dispatch(showIsLoading(false));
        return response.json();
      })
      .then(showData => cleanConcertData(showData.Events))
      .then(cleanData => fetchImage(cleanData))
      .then(dataWithImage => filterDates(dataWithImage))
      .then(dates => {
        dispatch(loadTonightsShows(dates[0]))
        dispatch(loadThisWeeksShows(dates[1]))
        dispatch(loadUpcomingShows(dates[2]))
      })
      .catch(() => dispatch(showHasErrored(true)))
  }
}

// const filterDates = (shows) => {
//   const today = new Date().toDateString();
//   const tom = new Date().toDateString();
//   const tommorrow = new Date(tom);
//   const next = new Date().toDateString();
//   const nextWeek = new Date(next);
//   tommorrow.setDate(tommorrow.getDate() + 1);
//   nextWeek.setDate(nextWeek.getDate() + 7);

//   const todaysShows = shows.filter(event => {
//     const eventDate = new Date(event.date).toDateString();

//     return eventDate === today;
//   });

//   const thisWeeksShows = shows.filter(event => {
//     const eventDate = new Date(event.date);

//     return eventDate >= tommorrow && eventDate <= nextWeek;
//   });

//   const upcomingShows = shows.filter(event => {
//     const eventDate = new Date(event.date);

//     return eventDate > nextWeek;
//   });

//   return [todaysShows, thisWeeksShows, upcomingShows];
// };
