import React from 'react';
import { shallow } from 'enzyme';
import { LandingPage } from './LandingPage';

describe('LandingPage', () => {
  it('should match the snapshot', () => {
    const wrapper = shallow(<LandingPage />);

    expect(wrapper).toMatchSnapshot();
  });
});
