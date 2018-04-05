import React, { Component } from 'react';
import './App.css';
import { jambaseApiKey, lastFmApiKey } from './cleaners/apiKey';
import { connect } from 'react-redux';
import { loadShows } from './actions';
import { withRouter, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import { Main } from './Main';


export class App extends Component {

  getShows = async () => {
    try {
      const zipCode = 80203;
      const radius = 10
      const response = await fetch(`http://api.jambase.com/events?zipCode=${zipCode}&radius=${radius}&page=0&api_key=${jambaseApiKey}`);
      const eventData = await response.json();
      console.log(eventData)

        const concerts =  eventData.Events.reduce( async (array, show) => {
      const artistImage = await this.getImage(show.Artists[0].Name);
      console.log(artistImage)
      const venueName = show.Venue.Name;
      const date = show.Date;
      const artistName = show.Artists[0].Name;
      // console.log(artistName)
      const concertData = {
        artist: artistName,
        artistImage: artistImage,
        venue: venueName,
        date: date
      }
      console.log(concertData)
      return [...array, concertData]
    }, [])
    console.log(concerts)
    return concerts

    } catch (error) {
      throw error;
    }
  };



  getImage = async (artist) => {
    const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${lastFmApiKey}&format=json`);
    const artistData = await response.json();
    // console.log(artistData.artist.image)
    if (!artistData.artist.image[4][`#text`]) {
      return 'no image'
    } else {
      const artistImage = artistData.artist.image[4][`#text`];

      return artistImage
    }
  };

  componentDidMount = () => {

    this.props.loadShows([{name: 'shows!!!!!'}])
    // this.getShows() 
    // this.getImage()
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">     
          <h1 className="App-title">Welcome to Personal Project</h1>
        </header>

        <Route exact path = '/' render={ () => <LandingPage />} />
        <Route exact path = '/Main' render={ () => <Main />} />
      </div>
    );
  };
};

export const mapStateToProps = (state) => {
  return {
    shows: state.shows,
    location: state.location
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    loadShows: (shows) => (dispatch(loadShows(shows)))
  };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
