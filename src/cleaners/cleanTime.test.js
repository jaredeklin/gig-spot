import { cleanTime } from './cleanTime';

describe('cleanTime', () => {
  it('should return a time in 12hr format', () => {
    const mockTime = '2018-04-24T20:00:00';
    expect(cleanTime(mockTime)).toEqual('20:00');
  });
});
