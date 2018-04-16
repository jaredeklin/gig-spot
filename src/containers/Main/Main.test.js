import React from 'react';
import { shallow } from 'enzyme';
import { Main, mapStateToProps } from './Main';
import { mockFetchImageReturnData } from '../../cleaners/mockData';

describe('Main', () => {
  const mockTonightsShows = [
    mockFetchImageReturnData   
  ]

  const mockUpcomingShows = [
    mockFetchImageReturnData
  ]

  const mockThisWeeksShows = [
    mockFetchImageReturnData
  ]

  it('should match the snapshot with props', () => {
    let wrapper = shallow(
      <Main 
        tonightsShows={mockTonightsShows}
        thisWeeksShows={mockThisWeeksShows}
        upcomingShows={mockUpcomingShows}
      />);
    expect(wrapper).toMatchSnapshot();
  });

  // it('should match the snapshot', () => {
  //   let wrapper = shallow(<Main />);
  //   expect(wrapper).toMatchSnapshot();
  // })

  it('should map state to props', () => {
    let wrapper = shallow(
      <Main 
        tonightsShows={mockTonightsShows}
        thisWeeksShows={mockThisWeeksShows}
        upcomingShows={mockUpcomingShows}
      />);
    const mockStore = { 
      tonightsShows: [{artist: 'someone'}],
      thisWeeksShows: [{artist: 'someoneElse'}],
      upcomingShows: [{artist: 'someoneBetter'}]
    }
    const mapped = mapStateToProps(mockStore);

    expect(mapped.tonightsShows).toEqual([{artist: 'someone'}]);
    expect(mapped.thisWeeksShows).toEqual([{artist: 'someoneElse'}]);
    expect(mapped.upcomingShows).toEqual([{artist: 'someoneBetter'}]);
  });
});