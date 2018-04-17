import { filterDates } from './filterDates';
import { 
    mockFilterDatesData, 
    mockExpectedFilterDates 
} from './mockData';


describe('filterDates', () => {
  it('should filter the shows into date categories', () => {
    expect(filterDates(mockShows)).toEqual(expected)
  })
})

