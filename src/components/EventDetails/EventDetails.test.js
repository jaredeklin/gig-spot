import React from 'react';
import { shallow } from 'enzyme';
import { EventDetails } from './EventDetails';
import { mockConcertProps } from '../../cleaners/mockData';

describe('EventDetails', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<EventDetails concert={mockConcertProps} />);

    expect(wrapper).toMatchSnapshot();
  });
});
