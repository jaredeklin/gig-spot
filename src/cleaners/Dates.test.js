import { Dates } from './Dates';

describe('Dates cleanTime method', () => {
  const date = new Dates();

  it('should return a time in 12hr format', () => {
    const mockTime = '2018-04-24T20:00:00';
    expect(date.cleanTime(mockTime)).toEqual('8:00 PM');
  });
});
