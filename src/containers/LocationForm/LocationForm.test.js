import React from 'react';
import { shallow } from 'enzyme';
import { LocationForm, mapDispatchToProps } from './LocationForm';
import { fetchShows } from '../../cleaners/fetchShows';
import { mockTonightCardData } from '../../cleaners/mockData';

jest.mock('../../cleaners/fetchShows');

describe('LocationForm', () => {
  let wrapper;
  let mockEvent, mockLoadShows, mockSetLocation, mockHistory, mockState;

  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn() };
    mockLoadShows = jest.fn();
    mockSetLocation = jest.fn();
    mockHistory = { push: jest.fn() };
    mockState = { zipCode: 80203, radius: 10 };


    wrapper = shallow(
      <LocationForm 
      loadShows={mockLoadShows} 
      setLocation={mockSetLocation}
      history={mockHistory}
      />) ;     
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('handleChange should set the state', () => {
    let mockEvent = { target: { value: 80203, name: 'zipCode' }};
    const expected = { zipCode: 80203, radius: ''};
    
    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state()).toEqual(expected);
  });

  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.loadShows();
    mapped.setLocation();
    expect(mockDispatch).toHaveBeenCalled();
  });

  describe('handleSubmit', () => {

    it('expect fetchShows to have been called with correct params', () => {
      wrapper.setState(mockState);
      wrapper.instance().handleSubmit(mockEvent);
      expect(fetchShows).toHaveBeenCalledWith(mockState);
    });

    it('expect loadShows to have been called with correct params', async () => {
      await wrapper.instance().handleSubmit(mockEvent);
      expect(mockLoadShows).toHaveBeenCalledWith(mockTonightCardData);
    });

    it('expect setLocation to have been called with correct params', async () => {
      wrapper.setState(mockState);
      await wrapper.instance().handleSubmit(mockEvent);
      expect(mockSetLocation).toHaveBeenCalledWith(mockState);
    });

    it('expect history.push() to have been called', async () => {
      await wrapper.instance().handleSubmit(mockEvent);
      expect(mockHistory.push).toHaveBeenCalled();
    });
  });
});
