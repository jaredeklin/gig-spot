import { Storage } from './Storage';

describe('Storage', () => {
  const storage = new Storage();
  const mockEvents = { event: [] };
  const mockStringifiedEvents = JSON.stringify(mockEvents);

  it('Storage method addEventsTo should add events to local storage', () => {
    localStorage.clear();
    localStorage.setItem('events', mockStringifiedEvents);
    storage.addEventsTo(mockEvents);

    expect(localStorage.events).toEqual(mockStringifiedEvents);
  });

  it('Storage method getEventsFrom should retrun correct values', () => {
    localStorage.clear();
    localStorage.setItem('events', mockStringifiedEvents);

    expect(storage.getEventsFrom()).toEqual(mockEvents);
  });
});
