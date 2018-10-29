import React from 'react';
import { shallow } from 'enzyme';
import { LocationForm, mapDispatchToProps } from './LocationForm';

describe('LocationForm', () => {
  let wrapper;
  let mockEvent;
  let mockFetchShows;
  let mockHistory;
  let mockState;

  beforeEach(() => {
    mockEvent = { preventDefault: jest.fn() };
    mockFetchShows = jest.fn();
    mockHistory = { push: jest.fn() };
    mockState = { location: 'Denver' };

    wrapper = shallow(
      <LocationForm fetchShows={mockFetchShows} history={mockHistory} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot if current city is defined', () => {
    wrapper = shallow(<LocationForm currentLocation={'Denver'} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('handleChange should set the state', () => {
    mockEvent = { target: { value: 'Denver', name: 'location' } };
    const expected = { location: 'Denver' };

    wrapper.instance().handleChange(mockEvent);
    expect(wrapper.state()).toEqual(expected);
  });

  it('should map dispatch to props', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.fetchShows();
    expect(mockDispatch).toHaveBeenCalled();
  });

  describe('handleSubmit', () => {
    it('expect fetchShows to have been called with correct params', () => {
      wrapper.setState(mockState);
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockFetchShows).toHaveBeenCalledWith(mockState.location);
    });

    it('expect history.push() to have been called', () => {
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockHistory.push).toHaveBeenCalled();
    });

    it('should reset state to default', () => {
      const expected = { location: '' };

      wrapper.setState(mockState);
      wrapper.instance().handleSubmit(mockEvent);
      expect(wrapper.state()).toEqual(expected);
    });
  });
});
