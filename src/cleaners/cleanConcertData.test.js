import { cleanConcertData } from './cleanConcertData';
import { mockCleanConcertData, mockReturnedCleanConcertData } from './mockData';
import { SimpleCleaners } from './SimpleCleaners';

const clean = new SimpleCleaners();

describe('cleanConcertData', () => {
  it('should return clean concert data', () => {
    expect(cleanConcertData(mockCleanConcertData)).toEqual(
      mockReturnedCleanConcertData
    );
  });

  it('should call cleanTime with correct params', () => {
    cleanConcertData(mockCleanConcertData);
    clean.time = jest.fn();

    expect(clean.time).toHaveBeenCalledWith(mockCleanConcertData[0].Date);
  });
});
