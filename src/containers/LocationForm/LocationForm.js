import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { 
  setLocation, 
  loadUpcomingShows, 
  loadTonightsShows, 
  loadThisWeeksShows 
} from '../../actions';
import { fetchShows } from '../../cleaners/fetchShows';
import loadingGif from '../../images/loader.gif';

import {cleanConcertData} from '../../cleaners/cleanConcertData'
import { fetchImage } from '../../cleaners/fetchImage'
import {mockFetchData} from '../../cleaners/mockFetchData'

export class LocationForm extends Component {
  constructor() {
    super()
    this.state = { 
      zipCode: '',
      radius: '',
      loading: false
    }  
  };


    
    filterTodaysShows = (shows) => shows.filter(event => {
      const today = (new Date()).toISOString().slice(0, 10);
      const eventDate = event.Date.slice(0, 10)

      return eventDate == today
    })
    // console.log('today:', todaysEvents)

    filterThisWeeksShows = (shows) => shows.filter(event => {
      const tommorrow = new Date();
      let nextWeek = new Date();

      tommorrow.setDate(tommorrow.getDate() + 1);
      nextWeek.setDate(nextWeek.getDate() + 7);

      const nextWeekDate = nextWeek.toISOString();
      const tommorrowDate = tommorrow.toISOString().slice(0, 10);
      
      return event.Date >= tommorrowDate && event.Date < nextWeekDate
    })
    // console.log('thisWeek', thisWeek)

    filterUpcomingShows = (shows) => shows.filter(event => {
      const today = (new Date()).toISOString();
      let nextWeek = new Date();

      nextWeek.setDate(nextWeek.getDate() + 7);
      const nextWeekEvents = nextWeek.toISOString();

      return event.Date > nextWeekEvents
    });


    handleTodaysShows = async (shows) => {
      const todaysShows = this.filterTodaysShows(shows);
      const cleanConcert = cleanConcertData(todaysShows)
      const completedConcertObject = await fetchImage(cleanConcert)
      console.log(completedConcertObject)
      this.props.loadTonightsShows(completedConcertObject)
      // return completedConcertObject
    }

    handleThisWeeksShows = async (shows) => {
      const thisWeeksShows = this.filterThisWeeksShows(shows);
      const cleanConcert = cleanConcertData(thisWeeksShows);
      const completedConcertObject = await fetchImage(cleanConcert);
      this.props.loadThisWeeksShows(completedConcertObject);
    }

    handleUpcomingShows = async (shows) => {
      const upcomingShows = this.filterUpcomingShows(shows);
      const cleanConcert = cleanConcertData(upcomingShows);
      const completedConcertObject = await fetchImage(cleanConcert);
      this.props.loadUpcomingShows(completedConcertObject);
    }
  

  handleChange = (event) => {

    // console.log(today)


    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const { loadTonightsShows, loadUpcomingShows, setLocation, history } = this.props;
    const shows = await fetchShows(this.state);
    this.handleTodaysShows(shows.Events)
    this.handleThisWeeksShows(shows.Events)
    this.handleUpcomingShows(shows.Events)

    // const todaysShows = this.filterTodaysShows(mockFetchData);
    // console.log(todaysShows)
    // loadTonightsShows(todaysShows);

    // const thisWeeksShows = this.filterThisWeeksShows(shows);
    // loadThisWeeksShows(thisWeeksShows);

    // const upcomingShows = this.filterUpcomingShows(shows);
    // loadUpcomingShows(upcomingShows);

    setLocation(this.state);
    history.push('./main');
    this.setState({
      zipCode: '',
      radius: '',
      loading: false
    });
  };

  render() {
    return (
      <section>
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
        {
          this.state.loading && 
            <img src={ loadingGif } className='loading-gif'/>
        }
      </section>
    );
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (location) => (dispatch(setLocation(location))),
    loadUpcomingShows: (shows) => (dispatch(loadUpcomingShows(shows))),
    loadTonightsShows: (shows) => (dispatch(loadTonightsShows(shows))),
    loadThisWeeksShows: (shows) => (dispatch(loadThisWeeksShows(shows)))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(LocationForm));
