// import { jambaseApiKey } from './apiKey';
// import { fetchImage } from './fetchImage';
// import { cleanConcertData } from './cleanConcertData';

// export const fetchShows = async (location) => {
//   const { zipCode, radius } = location;
//   try {
//     const response = await fetch(`http://api.jambase.com/events?zipCode=${zipCode}&radius=${radius}&page=0&api_key=${jambaseApiKey}`);
//     const eventData = await response.json();
//     // const cleanConcert = await cleanConcertData(eventData.Events);
//     // const completedConcertObject = await fetchImage(cleanConcert);

//     // return completedConcertObject;
//     return eventData
//   } catch (error) {
//     throw error;
//   }
// };
