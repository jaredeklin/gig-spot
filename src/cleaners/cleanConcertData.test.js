import { cleanConcertData } from './cleanConcertData';
import { 
  mockCleanConcertData,
  mockReturnedCleanConcertData
} from './mockData';

describe('cleanConcertData', () => {
  it('should return clean concert data', () => {   
    expect(cleanConcertData(mockCleanConcertData)).toEqual(mockReturnedCleanConcertData);
  });
});