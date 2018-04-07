import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLocation, loadShows } from './actions';
import { fetchShows } from './cleaners/dataCleaner'

export class LandingPage extends Component {
  constructor() {
    super()
    this.state = { 
      zipCode: '',
      radius: ''
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const shows = await fetchShows(this.state)
    this.props.loadShows(shows);
    this.props.setLocation(this.state);
    // console.log(shows)

    const path = './main';
    this.props.history.push(path);
  }



  render() {
    return (
      <section className='landing-page'>
        <form onSubmit={this.handleSubmit} className='location-form'>
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
      </section>
    )
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    setLocation: (location) => (dispatch(setLocation(location))),
    loadShows: (location) => (dispatch(loadShows(location)))
  };
};

export default withRouter(connect(null, mapDispatchToProps)(LandingPage));
