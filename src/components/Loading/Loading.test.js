import React from 'react';
import { shallow } from 'enzyme';
import { Loading } from './Loading';

describe('Loading component', () => {
  it('should match the snapshot', () => {
    const mockMessage = 'Oh Snaps!';
    const wrapper = shallow(<Loading message={mockMessage} />);

    expect(wrapper).toMatchSnapshot();
  });
});
