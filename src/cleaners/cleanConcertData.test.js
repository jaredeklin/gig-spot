import { cleanConcertData } from './cleanConcertData';
import { mockConcertData, mockReturnedCleanConcertData } from './mockData';

describe('cleanConcertData', () => {
  it('should return clean concert data', () => {
    expect(cleanConcertData(mockConcertData)).toEqual(
      mockReturnedCleanConcertData
    );
  });
});
