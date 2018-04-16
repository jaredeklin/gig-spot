import { cleanConcertData } from './cleanConcertData';
import { 
  mockCleanConcertData,
  mockReturnedCleanConcertData
} from './mockData';
import { cleanTime } from './cleanTime';

jest.mock('./cleanTime');

describe('cleanConcertData', () => {

    it('should return clean concert data', () => { 
      expect(cleanConcertData(mockCleanConcertData))
        .toEqual(mockReturnedCleanConcertData);
    });

    it('should call cleanTime with correct params', () => {
      cleanConcertData(mockCleanConcertData);

      expect(cleanTime).toHaveBeenCalledWith(mockCleanConcertData[0].Date)
    })
}); 