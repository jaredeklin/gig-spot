

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
})

export const setLocation = (location) => ({
  type: "SET_LOCATION",
  location
});

// export const fetchShows = (location) => {
//   const { zipCode, radius } = location;

//   return (dispatch) => {
//     fetch(`http://api.jambase.com/events?zipCode=${zipCode}&radius=${radius}&page=0&api_key=${jambaseApiKey}`)
//       .then(response => response.json())
//       .then(data => dispatch(loadTonightsShows(data.Events)))
//   }
// }


//   try {
//     // const response = await fetch(`http://api.jambase.com/events?zipCode=${zipCode}&radius=${radius}&page=0&api_key=${jambaseApiKey}`);
//     const eventData = await response.json();
//     // const cleanConcert = await cleanConcertData(eventData.Events);
//     // const completedConcertObject = await fetchImage(cleanConcert);

//     // return completedConcertObject;
//     return eventData
//   } catch (error) {
//     throw error;
//   }
// };