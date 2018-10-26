import React from 'react';
import { shallow } from 'enzyme';
import { EventDetails } from './EventDetails';
import { mockConcertProps } from '../../cleaners/mockData';

describe('EventDetails', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<EventDetails concert={mockConcertProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should handle image loading error', () => {
    const wrapper = shallow(<EventDetails concert={mockConcertProps} />);
    const mockEvent = { target: { src: 'someImage.jpg' } };
    const expected = 'black-woven.jpg';

    expect(
      wrapper
        .find('img')
        .props()
        .onError(mockEvent)
    ).toEqual(expected);
  });
});
