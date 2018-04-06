import React, { Component } from 'react';
import './App.css';
import { jambaseApiKey, lastFmApiKey } from './cleaners/apiKey';
import { connect } from 'react-redux';
import { loadShows } from './actions';
import { withRouter, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import { Main } from './Main';
import { cleanConcertData } from './cleaners/dataCleaner'


export class App extends Component {

  getShows = async () => {
    try {
      // const { zipCode, radius } = this.props.location
      const zipCode = 80218;
      const radius = 10;
      const response = await fetch(`http://api.jambase.com/events?zipCode=${zipCode}&radius=${radius}&page=0&api_key=${jambaseApiKey}`);
      const eventData = await response.json();
      const cleanConcert = await cleanConcertData(eventData.Events);
      const completedConcertObject = await this.addImage(cleanConcert);
      this.props.loadShows(completedConcertObject);
    } catch (error) {
      throw error;
    }
  };

  cleanImage = (artistData) => {
    if (!artistData.artist || !artistData.artist.image[4 ]) {
      return './black-woven.jpg'
    } else {
      const artistImage = artistData.artist.image[4][`#text`];

      return artistImage
    }
  }

  addImage = (concerts) => {
    const promises = concerts.map( async (concert) => {
      const artist = concert.artist
      const response = await fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=${lastFmApiKey}&format=json`);
      const artistData = await response.json();
      return ({ ...concert, image: this.cleanImage(artistData) })
    })
    return Promise.all(promises)
  }





  componentDidMount = () => {
    // this.getShows() 
    

    // this.props.loadShows([{name: 'shows!!!!!'}])
    // this.getImage()
  };

  render() {
    // const { zipCode, radius } = this.props.location
    return (
      <div className="App">
        <Route exact path = '/' render={ () => <LandingPage />} />
        <Route exact path = '/main' render={ () => <Main location={this.props}/>} />
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
