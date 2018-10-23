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
    mockState = { zipCode: 80203 };

    wrapper = shallow(
      <LocationForm fetchShows={mockFetchShows} history={mockHistory} />
    );
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('handleChange should set the state', () => {
    mockEvent = { target: { value: 80203, name: 'zipCode' } };
    const expected = { zipCode: 80203 };

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
      expect(mockFetchShows).toHaveBeenCalledWith(mockState.zipCode);
    });

    it('expect history.push() to have been called', () => {
      wrapper.instance().handleSubmit(mockEvent);
      expect(mockHistory.push).toHaveBeenCalled();
    });

    it('should reset state to default', () => {
      const expected = { zipCode: '' };

      wrapper.setState(mockState);
      wrapper.instance().handleSubmit(mockEvent);
      expect(wrapper.state()).toEqual(expected);
    });
  });
});
