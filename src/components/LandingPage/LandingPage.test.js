import React from 'react';
import { LandingPage } from './LandingPage';
import { shallow } from 'enzyme';

describe('LandingPage', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<LandingPage />);

    expect(wrapper).toMatchSnapshot();
  });
});