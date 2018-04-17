import React from 'react';
import { shallow } from 'enzyme';
import { TonightCard } from './TonightCard';
import { 
  mockConcertProps 
} from '../../cleaners/mockData.js';

describe('TonightCard', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<TonightCard show={mockConcertProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});