export class Storage {
  addEventsTo = events => {
    if (localStorage.events) {
      localStorage.removeItem('events');
    }

    const stringifiedEvents = JSON.stringify(events);
    localStorage.setItem('events', stringifiedEvents);
  };

  getEventsFrom = () => {
    const retrievedEvents = localStorage.getItem('events');
    return JSON.parse(retrievedEvents);
  };
}
