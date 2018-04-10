import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLocation, loadShows } from '../../actions';
import { fetchShows } from '../../cleaners/fetchShows';
import loadingGif from '../../images/loader.gif';

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

  // testData = () =>{
  //   const test = mockFetchData.Events.reduce((concertArray, show) => {
  //     const venue = {
  //       name: show.Venue.Name,
  //       id: show.Venue.Id,
  //       url: show.Venue.Url,
  //       address: show.Venue.Address,
  //       city: show.Venue.City
  //     }
  //     const headlineArtist = show.Artists[0]
  //     const supportArtists = show.Artists.filter(artist => artist.Id !== show.Artists[0].Id);
  //     const tickets = show.TicketUrl
  //     const id = show.Id;
  //     const date = new Date(show.Date).toLocaleDateString([], {
  //       month: 'short',
  //       day: 'numeric'
  //     });  
  //     // const startTime = cleanTime(show.Date)
  //     const concertData = {
  //       headlineArtist,
  //       supportArtists,
  //       venue,
  //       date,
  //       // startTime,
  //       id,
  //       tickets
  //     };

  //     return [...concertArray, concertData];
  //   }, []);
  //   console.log(test)
  // }

  handleChange = (event) => {
    // this.testData()
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    this.setState({ loading: true });
    const { loadShows, setLocation, history } = this.props;
    const shows = await fetchShows(this.state);

    loadShows(shows);
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
    loadShows: (location) => (dispatch(loadShows(location)))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(LocationForm));
