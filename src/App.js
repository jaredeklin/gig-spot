import React, { Component } from 'react';
import './App.css';
import { apiKey } from './cleaners/apiKey';
import { connect } from 'react-redux';
import { loadShows } from './actions';
import { withRouter } from 'react-router-dom'

export class App extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   shows: []
    // }
  }

  getShows = async () => {
    const response = await fetch(`http://api.jambase.com/events?zipCode=80216&radius=10&page=0&api_key=${apiKey}`)
    const eventData = await response.json();
    console.log(eventData.Events)
    // this.setState({ shows: eventData})
    // this.props.loadShows(eventData);
  };


  componentDidMount = () => {
    // console.log(this.props)
    // this.props.loadShows('shows!!!!!!')
    // this.getShows() 
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">     
          <h1 className="App-title">Welcome to Personal Project</h1>
        </header>
        
      </div>
    );
  };
};

// export const mapStateToProps = (state) => {
//   return {
//     shows: state.shows
//   };
// };

export const mapDispatchToProps = (dispatch) => {
  return {
    loadShows: (shows) => (dispatch(loadShows(shows)))
  };
};


export default withRouter(connect(null, mapDispatchToProps)(App));
