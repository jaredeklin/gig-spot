import React from 'react';
import { shallow } from 'enzyme';
import { TonightCard } from './TonightCard';
import { mockConcertProps } from '../../cleaners/mockData.js';

describe('TonightCard', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<TonightCard show={mockConcertProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle image loading error', () => {
    const wrapper = shallow(<TonightCard show={mockConcertProps} />);
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
