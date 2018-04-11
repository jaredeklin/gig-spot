export const filterDates = (shows) => {
  const today = new Date().toDateString();
  const tom = new Date().toDateString();
  const tommorrow = new Date(tom);
  const next = new Date().toDateString();
  const nextWeek = new Date(next);
  tommorrow.setDate(tommorrow.getDate() + 1);
  nextWeek.setDate(nextWeek.getDate() + 7);

  const todaysShows = shows.filter(event => {
    const eventDate = new Date(event.date).toDateString();

    return eventDate === today;
  });

  const thisWeeksShows = shows.filter(event => {
    const eventDate = new Date(event.date);

    return eventDate >= tommorrow && eventDate <= nextWeek;
  });

  const upcomingShows = shows.filter(event => {
    const eventDate = new Date(event.date);

    return eventDate > nextWeek;
  });

  return [todaysShows, thisWeeksShows, upcomingShows];  
}