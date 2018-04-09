import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setLocation, loadShows } from '../../actions';
import { fetchShows } from '../../cleaners/fetchShows';
import loadingGif from '../../images/loader.gif';

export class LocationForm extends Component {
  constructor() {
    super()
    this.state = { 
      zipCode: '',
      radius: '',
      loading: false
    }  
  };

  handleChange = (event) => {
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
