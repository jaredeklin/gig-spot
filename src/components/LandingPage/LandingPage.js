import React from 'react';
import LocationForm from '../../containers/LocationForm/LocationForm';

export const LandingPage = () => {
  return (
    <section className='landing-page-background'>
      <article className='landing-page'>
        <h1>Gig Spot</h1>
        <p>Enter a zipcode to find concerts in your area</p>
        <LocationForm />
      </article>
    </section>
  );
};