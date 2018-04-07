import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLocation, loadShows } from './actions';
import { fetchShows } from './cleaners/dataCleaner'

export class LocationForm extends Component {
  constructor() {
    super()
    this.state = { 
      zipCode: '',
      radius: ''
    }

    this.dirtyDate = "2018-04-20T21:00:00"
  }

  cleanDate = (dirtyDate) => {
    const currentDate = new Date()
    const splitString = dirtyDate.split('T')
    const date = splitString[0];
    const splitDate = date.split('-')
    const time = splitString[1];
    const splitTime = time.split(':')
    const cleanT = {
      hour: splitTime[0],
      minute: splitTime[1]
    }
    const cleanD = {
      day: splitDate[2],
      month: splitDate[1],
      year: splitDate[0]
    }
    
    console.log(cleanD, cleanT, currentDate)
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    this.cleanDate(this.dirtyDate)
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { loadShows, setLocation } = this.props;
    const shows = await fetchShows(this.state);

    loadShows(shows);
    setLocation(this.state);


    const path = './main';
    this.props.history.push(path);
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
