import React from 'react';
import { shallow } from 'enzyme';
import { Main, mapStateToProps } from './Main';
import { mockFetchImageReturnData } from '../../cleaners/mockData';

describe('Main', () => {
  const mockShows = { shows: mockFetchImageReturnData}

  it('should match the snapshot with props', () => {
    let wrapper = shallow(<Main props={mockShows}/>);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot', () => {
    let wrapper = shallow(<Main />);
    expect(wrapper).toMatchSnapshot();
  })

  it('should map state to props', () => {
    let wrapper = shallow(<Main />);
    const mockShows = { shows: { artist: 'someone' }};

    const mapped = mapStateToProps(mockShows);
    expect(mapped.shows).toEqual(mockShows.shows);
  });
});