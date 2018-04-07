import React from 'react';
import { shallow } from 'enzyme';
import { TonightCard } from './TonightCard';
import { 
  mockTonightCardData, 
  mockTonightCardDataWOImage 
} from '../../cleaners/mockData.js';

describe('TonightCard', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<TonightCard show={mockTonightCardData} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot', () => {
    let wrapper = shallow(<TonightCard show={mockTonightCardDataWOImage} />);
    expect(wrapper).toMatchSnapshot();
  });
});