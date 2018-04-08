import React from 'react';
import { TonightCard } from '../../components/TonightCard/TonightCard';
import { connect } from 'react-redux';

export const Main = (props) => {
  let tonightCards;

  if (props.shows) {
    tonightCards = props.shows.map(show => {
      return(<TonightCard show={show} key={show.id} />)
    });
  };

  return (
    <div className='main'>
      <section className='tonights-shows'>
        <div className='tonight-inner'>
          <h4>Tonight:</h4>
          { tonightCards }
        </div>
      </section>
    </div>
  );
};

export const mapStateToProps = (state) => ({
  shows: state.shows
});

export default connect(mapStateToProps)(Main);