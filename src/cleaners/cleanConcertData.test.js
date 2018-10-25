import { cleanConcertData } from './cleanConcertData';
import { mockCleanConcertData, mockReturnedCleanConcertData } from './mockData';
import { Dates } from './Dates';

describe('cleanConcertData', () => {
  const date = new Dates();

  it('should return clean concert data', () => {
    expect(cleanConcertData(mockCleanConcertData)).toEqual(
      mockReturnedCleanConcertData
    );
  });

  it('should call cleanTime with correct params', () => {
    cleanConcertData(mockCleanConcertData);
    date.cleanTime = jest.fn();

    expect(date.cleanTime).toHaveBeenCalledWith(mockCleanConcertData[0].Date);
  });
});
