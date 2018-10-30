import { cleanConcertData } from './cleanConcertData';
import { mockConcertData, mockReturnedCleanConcertData } from './mockData';

describe('cleanConcertData', () => {
  it('should return clean concert data', () => {
    expect(cleanConcertData(mockConcertData)).toEqual(
      mockReturnedCleanConcertData
    );
  });

  it('should return clean concert data if image is null', () => {
    const concertWOImage = [{ ...mockConcertData[0], image: null }];
    const expected = [{ ...mockReturnedCleanConcertData[0], image: null }];
    expect(cleanConcertData(concertWOImage)).toEqual(expected);
  });
});
