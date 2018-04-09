import searchLocationReducer from './searchLocationReducer';
import * as actions from '../actions'

describe('searchLocationReducer', () => {
  it('should return a default state', () => {
    expect(searchLocationReducer(undefined, {})).toEqual({});
  });

  it('should set a location', () => {
    const location = { radius: 10, zipCode: 80203 };

    expect(searchLocationReducer(undefined, actions.setLocation(location))).toEqual(location);
  })
});