import React from 'react';
import { App, mapStateToProps } from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper, mockLocation;
  let mockTonightsShows, mockUpcomingShows, mockThisWeeksShows;

  beforeEach(() => {

    mockLocation = { pathname: '' };
    wrapper = shallow(
      <App
        location={mockLocation}
        tonightsShows={mockTonightsShows}
        thisWeeksShows={mockThisWeeksShows}
        upcomingShows={mockUpcomingShows}
        loading={false}
        error={false} 
      />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when path is /main', () => {
    mockLocation = { pathname: '/main' };
    wrapper = shallow(
      <App
        location={mockLocation}
        tonightsShows={mockTonightsShows}
        thisWeeksShows={mockThisWeeksShows}
        upcomingShows={mockUpcomingShows}
        loading={false}
        error={false} 
      />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when path includes /event-details', () => {
    mockLocation = { pathname: '/event-details' };
    wrapper = shallow(
      <App
        location={mockLocation}
        tonightsShows={mockTonightsShows}
        thisWeeksShows={mockThisWeeksShows}
        upcomingShows={mockUpcomingShows}
        loading={false}
        error={false} 
      />);
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when loading', () => {
    wrapper = shallow(
      <App
        location={mockLocation}
        tonightsShows={mockTonightsShows}
        thisWeeksShows={mockThisWeeksShows}
        upcomingShows={mockUpcomingShows}
        loading={true}
        error={false} 
      />);
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when there is an error', () => {
    wrapper = shallow(
      <App
        location={mockLocation}
        tonightsShows={mockTonightsShows}
        thisWeeksShows={mockThisWeeksShows}
        upcomingShows={mockUpcomingShows}
        loading={false}
        error={true} 
      />);
    
    expect(wrapper).toMatchSnapshot();
  });

  it('should map map state to props', () => {
    const mockStore =  {
      tonightsShows: [{artist: 'someone'}],
      thisWeeksShows: [{artist: 'someoneElse'}],
      upcomingShows: [{artist: 'someoneBetter'}],
      loading: false,
      error: false
    };
    

    const mapped = mapStateToProps(mockStore);
    expect(mapped.tonightsShows).toEqual([{artist: 'someone'}]);
  })
});

