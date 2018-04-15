import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchShows } from '../../actions';

export class LocationForm extends Component {
  constructor() {
    super()
    this.state = { 
      zipCode: ''
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
    const { fetchShows, history } = this.props;
    
    fetchShows(this.state.zipCode)
    history.push('./main');
    this.setState({
      zipCode: ''
    });
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
        <button>Submit</button>
      </form>
    );
  };
};

export const mapDispatchToProps = (dispatch) => ({
  fetchShows: (shows) => (dispatch(fetchShows(shows)))
});

export default withRouter(connect(null, mapDispatchToProps)(LocationForm));
