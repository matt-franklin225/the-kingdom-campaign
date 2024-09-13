import React from 'react';
import Feature from '../../components/character/Character';
import {eugene, sarenia, berrian, ariah, opal, pluto, jewel, leg } from './imports'
import './characters.css';

const WhatGPT3 = () => (
  <div className="gpt3__characters section__margin" id="characters">
    <div className="gpt3__characters-feature">
      <h1>Characters</h1>
    </div>
    {/* <div className="gpt3__characters-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div> */}
    <div className="gpt3__characters-container">
      <Feature name="Eugene Rider" imgUrl={eugene} text="High King of Fireshallow" />
      <Feature name="Sarenia Valen" imgUrl={sarenia} text="The Sane One" />
      <Feature name="Ariah Rhialla" imgUrl={ariah} text="Do You Like Magic?" />
      <Feature name="Berrían Berevan" imgUrl={berrian} text="Lover of Trees" />
      <Feature name="Opal Blade" imgUrl={opal} text="Unstable Mental Faculties" />
      <Feature name="Pluto Johnson" imgUrl={pluto} text="King of the Full Moon" />
      <Feature name="Jewel Dragoneere" imgUrl={jewel} text="Hater of Golden People" />
      <Feature name="St. Lēg" imgUrl={leg} text="Champion of Avandra" />
    </div>
  </div>
);

export default WhatGPT3;