import React from 'react';
import { shallow } from 'enzyme';
import { LocationForm } from './LocationForm';

describe('LocationForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LocationForm />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
