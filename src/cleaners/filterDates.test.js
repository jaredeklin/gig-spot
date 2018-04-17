import { filterDates } from './filterDates';
import { 
  mockFilterDatesData, 
  mockExpectedFilterDates 
} from './mockData';

var MockDate = require('mockdate');


describe('filterDates', () => {
  it('should filter the shows into date categories', () => {
    MockDate.set('4/16/2018')
    expect(filterDates(mockFilterDatesData)).toEqual(mockExpectedFilterDates);
  });
});

