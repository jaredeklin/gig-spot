import React from 'react';
import { shallow } from 'enzyme';
import { LocationForm } from './LocationForm';

describe('LocationForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LocationForm />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('handleChange should set the state', () => {
    let mockEvent = { target: { value: 80203, name: 'zipCode'}};
    wrapper.instance().handleChange(mockEvent);
    const expected = { zipCode: 80203, radius: ''};
    expect(wrapper.state()).toEqual(expected);
  });

  it('handleSubmit', () => {

  })
});
