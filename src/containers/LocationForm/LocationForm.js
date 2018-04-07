import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLocation, loadShows } from '../../actions';
import { fetchShows } from '../../cleaners/dataCleaner'

export class LocationForm extends Component {
  constructor() {
    super()
    this.state = { 
      zipCode: '',
      radius: ''
    }  
  };

  // cleanDate = () => {
  //   const dirtyISODate = "2018-04-20T21:00:00"
  //   const currentDateISO = new Date().toISOString()
  // }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { loadShows, setLocation, history } = this.props;
    const shows = await fetchShows(this.state);

    loadShows(shows);
    setLocation(this.state);
    history.push('./main');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='location-form' id={this.props.id}>
      <input 
        type='text'
        name='zipCode'
        value={this.state.zipCode}
        onChange={this.handleChange}
        placeholder='Zip-code'
      />
      <input
        type='text'
        name='radius'
        value={this.state.radius}
        onChange={this.handleChange}
        placeholder='Radius'
      />
      <button>Submit</button>
      </form>
    );
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (location) => (dispatch(setLocation(location))),
    loadShows: (location) => (dispatch(loadShows(location)))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(LocationForm));