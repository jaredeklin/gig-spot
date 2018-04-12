import { jambaseApiKey } from '../cleaners/apiKey';
import { cleanConcertData } from '../cleaners/cleanConcertData';
import { fetchImage } from '../cleaners/fetchImage';
import { filterDates } from '../cleaners/filterDates';

import { mockFetchData } from '../cleaners/mockFetchData';

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
});

export const showHasErrored = (bool) => ({
  type: 'SHOW_HAS_ERRORED',
  showHasErrored: bool
});

// export const fetchShows = (location) => {
//   const { zipCode, radius } = location;

//   return (dispatch) => {
//     dispatch(showIsLoading(true))

//     // fetch(mockFetchData)
//     fetch(`http://api.jambase.com/events?zipCode=${zipCode}&radius=${radius}&page=0&api_key=${jambaseApiKey}`)
//       .then(response => {
//         if( !response.ok ) {
//           throw new Error(response.statusText);
//         }
//         dispatch(showIsLoading(false));
//         return response.json();
//       })
//       .then(showData => cleanConcertData(showData.Events))
//       .then(cleanData => fetchImage(cleanData))
//       .then(dataWithImage => filterDates(dataWithImage))
//       .then(dates => {
//         dispatch(loadTonightsShows(dates[0]))
//         dispatch(loadThisWeeksShows(dates[1]))
//         dispatch(loadUpcomingShows(dates[2]))
//       })
//       .catch(() => dispatch(showHasErrored(true)))
//   }
// }

export const fetchShows = (location) => {
  const { zipCode, radius } = location;

  return async (dispatch) => {
    // dispatch(showIsLoading(true));
    // const response = await fetch(`http://api.jambase.com/events?zipCode=${zipCode}&radius=${radius}&page=0&api_key=${jambaseApiKey}`);
    // if( !response.ok ) {
    //   throw new Error(response.statusText);
    // }
    // dispatch(showIsLoading(false));
    const response = mockFetchData
    const cleanData = cleanConcertData(response.Events);
    const dataWithImage = await fetchImage(cleanData);
    const dates = filterDates(dataWithImage);
    
    dispatch(loadTonightsShows(dates[0]));
    dispatch(loadThisWeeksShows(dates[1]));
    dispatch(loadUpcomingShows(dates[2]));
  }
}

