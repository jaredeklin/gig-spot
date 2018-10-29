import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { mockGetLastFmReturnData } from '../../cleaners/mockData';
import { Storage } from '../../cleaners/Storage';
import 'jest-localstorage-mock';
import { EventDetails } from '../../components/EventDetails/EventDetails';

const storage = new Storage();

describe('App', () => {
  let wrapper;
  let mockLocation;
  let mockTonightsShows;
  let mockUpcomingShows;
  let mockThisWeeksShows;

  beforeEach(() => {
    mockTonightsShows = [{ id: 1 }];
    mockUpcomingShows = [{ id: 2 }];
    mockThisWeeksShows = [{ id: 3 }];
    mockLocation = { pathname: '' };
    wrapper = shallow(
      <App
        location={mockLocation}
        tonightsShows={mockTonightsShows}
        thisWeeksShows={mockThisWeeksShows}
        upcomingShows={mockUpcomingShows}
      />
    );
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
      />
    );

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
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when there is an error', () => {
    wrapper = shallow(
      <App
        location={mockLocation}
        tonightsShows={mockTonightsShows}
        thisWeeksShows={mockThisWeeksShows}
        upcomingShows={mockUpcomingShows}
        error
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when loading', () => {
    wrapper = shallow(
      <App
        location={mockLocation}
        tonightsShows={mockTonightsShows}
        thisWeeksShows={mockThisWeeksShows}
        upcomingShows={mockUpcomingShows}
        tonightLoading
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  describe('findMatch', () => {
    it('findMatch should return a match if true', () => {
      const mockMatch = { params: { id: 1 } };
      const expected = { id: 1 };

      expect(wrapper.instance().findMatch(mockMatch)).toEqual(expected);
    });

    it('findMatch should return undefined if no match', () => {
      const mockMatch = { params: { id: 7 } };

      expect(wrapper.instance().findMatch(mockMatch)).toEqual(undefined);
    });
  });

  it('should return EventDetails with concert props when there is a match', () => {
    mockLocation = { pathname: '/event-details/1' };
    const mockRenderProps = {
      match: { params: { id: 1 } }
    };
    const mockConcert = { name: 'concert found' };
    wrapper = shallow(
      <App
        location={mockLocation}
        tonightsShows={mockTonightsShows}
        thisWeeksShows={mockThisWeeksShows}
        upcomingShows={mockUpcomingShows}
      />
    );
    wrapper.instance().findMatch = jest.fn().mockReturnValue(mockConcert);

    expect(
      wrapper
        .find('Route')
        .at(2)
        .props()
        .render(mockRenderProps)
    ).toEqual(<EventDetails concert={mockConcert} />);
  });

  it('should return null when there is not a match', () => {
    mockLocation = { pathname: '/event-details/1' };
    const mockRenderProps = {
      match: { params: { id: 1 } }
    };
    wrapper = shallow(
      <App
        location={mockLocation}
        tonightsShows={mockTonightsShows}
        thisWeeksShows={mockThisWeeksShows}
        upcomingShows={mockUpcomingShows}
      />
    );
    wrapper.instance().findMatch = jest.fn(() => undefined);

    expect(
      wrapper
        .find('Route')
        .at(2)
        .props()
        .render(mockRenderProps)
    ).toEqual(null);
  });

  describe('mapStateToProps', () => {
    it('should map map state to props', () => {
      const mockStore = {
        tonightsShows: [{ artist: 'someone' }],
        thisWeeksShows: [{ artist: 'someoneElse' }],
        upcomingShows: [{ artist: 'someoneBetter' }],
        loading: false,
        error: false
      };

      const mapped = mapStateToProps(mockStore);
      expect(mapped.tonightsShows).toEqual([{ artist: 'someone' }]);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch when fetchShows is called', () => {
      const mockDispatch = jest.fn();
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.fetchShows();

      expect(mockDispatch).toHaveBeenCalled();
    });
  });

  describe('componentDidMount', () => {
    it('should call fetch shows when there are events in local storage', () => {
      const mockFetchShows = jest.fn();
      const mockEvents = {
        date: '2018120100',
        city: 'Denver',
        tonightsShows: mockGetLastFmReturnData,
        thisWeeksShows: mockGetLastFmReturnData,
        upcomingShows: mockGetLastFmReturnData
      };
      const expected = mockEvents.city;

      wrapper = shallow(
        <App location={mockLocation} fetchShows={mockFetchShows} />
      );

      storage.addEventsTo(mockEvents);
      wrapper.instance().componentDidMount();
      expect(mockFetchShows).toHaveBeenCalledWith(expected);
    });
  });
});
