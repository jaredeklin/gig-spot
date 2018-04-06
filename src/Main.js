import React from 'react';
import { TonightCard } from './TonightCard';

export const Main = (props) => {
  const { zipCode, radius } = props.location

  return (
    <div className='main'>
      <header className="App-header">     
        <h1 className="App-title">Welcome to Personal Project</h1>
        <h3>Location: { zipCode }</h3>
        <h3>Radius: { radius }</h3>
      </header>
      <h3>hello, i'm Main, where tonights cards are going to go</h3>
      <TonightCard />
      <h3>i'm where upcoming show cards might go</h3>
    </div>
  );
};