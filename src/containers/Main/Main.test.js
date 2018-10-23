import React from 'react';
import { shallow } from 'enzyme';
import { Main, mapStateToProps } from './Main';
import { mockFetchImageReturnData } from '../../cleaners/mockData';

describe('Main', () => {
  let mockTonightsShows = [mockFetchImageReturnData];
  const mockUpcomingShows = [mockFetchImageReturnData];
  const mockThisWeeksShows = [mockFetchImageReturnData];

  it('should match the snapshot with props', () => {
    const wrapper = shallow(
      <Main
        tonightsShows={mockTonightsShows}
        thisWeeksShows={mockThisWeeksShows}
        upcomingShows={mockUpcomingShows}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot with more than 2 items tonightsShows', () => {
    mockTonightsShows = [{}, {}, {}, {}, {}];
    const wrapper = shallow(
      <Main
        tonightsShows={mockTonightsShows}
        thisWeeksShows={mockThisWeeksShows}
        upcomingShows={mockUpcomingShows}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should map state to props', () => {
    const mockStore = {
      tonightsShows: [{ artist: 'someone' }],
      thisWeeksShows: [{ artist: 'someoneElse' }],
      upcomingShows: [{ artist: 'someoneBetter' }]
    };
    const mapped = mapStateToProps(mockStore);

    expect(mapped.tonightsShows).toEqual([{ artist: 'someone' }]);
    expect(mapped.thisWeeksShows).toEqual([{ artist: 'someoneElse' }]);
    expect(mapped.upcomingShows).toEqual([{ artist: 'someoneBetter' }]);
  });
});
