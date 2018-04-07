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
    console.log(currentDate)
    // const splitCurrent = currentDate.split(" ")
    // const otherDate = new Date(currentDate)
    const splitString = dirtyDate.split('T')
    const date = splitString[0];
    const splitDate = date.split('-')
    const time = splitString[1];
    const splitTime = time.split(':')
    const cleanTime = {
      hour: splitTime[0],
      minute: splitTime[1]
    }
    const cleanD = {
      day: splitDate[2],
      month: splitDate[1],
      year: splitDate[0]
    }
    // const monthConv = this.convertMonth(splitCurrent[1])
    
    // console.log(currentDate, monthConv)
  }

  convertMonth = (month) => {
    switch(month) {
    case '1':
      return 'Jan';

    case 'Jan':
      return '1';

    case '2':
      return 'Feb';

    case 'Feb':
      return '2';

    case '3':
      return 'Mar';

    case 'Mar':
      return '3';

    case '4':
      return 'Apr';

    case 'Apr':
      return '4';

    case '5':
      return 'May';

    case 'May':
      return '5';

    case '6':
      return 'Jun';

    case 'Jun':
      return '6';

    case '7':
      return 'Jul';

    case 'Jul':
      return '7';

    case '8':
      return 'Aug';

    case 'Aug':
      return '8';

    case '9':
      return 'Sep';

    case 'Sep':
      return '9';

    case '10':
      return 'Oct';

    case 'Oct':
      return '10';

    case '11':
      return 'Nov'; 

    case 'Nov':
      return '11';

    case '12':
      return 'Dec';

    case 'Dec':
      return '12';

    default:
      return
    }
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
