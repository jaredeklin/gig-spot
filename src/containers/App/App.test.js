import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot when path is ./main', () => {
    const mockLocation = { history: { pathname: './main' }};
    wrapper = shallow(<App location={mockLocation} />);
    expect(wrapper).toMatchSnapshot();
  });
});

