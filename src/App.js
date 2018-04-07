import React, { Component } from 'react';
import './App.css';
// import { jambaseApiKey, lastFmApiKey } from './cleaners/apiKey';
import { connect } from 'react-redux';
import { loadShows } from './actions';
import { withRouter, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import  Main from './Main';


export class App extends Component {







  render() {
  
    return (
      <div className="App">
        <header className="App-header">     
          <h1 className="App-title">Welcome to Personal Project</h1>
        </header>
        <Route exact path = '/' render={ () => <LandingPage />} />
        <Route exact path = '/main' render={ () => <Main />} />
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
