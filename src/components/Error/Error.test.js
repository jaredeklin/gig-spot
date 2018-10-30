import React from 'react';
import { shallow } from 'enzyme';
import { Error } from './Error';

describe('Error component', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<Error />);

    expect(wrapper).toMatchSnapshot();
  });
});
