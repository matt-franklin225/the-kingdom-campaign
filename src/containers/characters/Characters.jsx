import React from 'react';
import Character from '../../components/character/Character';
import {eugene, sarenia, berrian, ariah, opal, pluto, jewel, leg } from './imports'
import './characters.css';

const Whattkc = () => (
  <div className="tkc__characters section__margin" id="characters">
    <div className="tkc__characters-character">
      <h1>Characters</h1>
    </div>
    {/* <div className="tkc__characters-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div> */}
    <div className="tkc__characters-container">
      <Character name="Eugene Rider" imgUrl={eugene} text="High King of Fireshallow" />
      <Character name="Pluto Johnson" imgUrl={pluto} text="King of the Full Moon" />
      <Character name="Sarenia Valen" imgUrl={sarenia} text="The Sane One" />
      <Character name="Ariah Rhialla" imgUrl={ariah} text="Do You Like Magic?" />
      <Character name="Berrían Berevan" imgUrl={berrian} text="Lover of Trees" />
      <Character name="Opal Blade" imgUrl={opal} text="Victim of Mental Breakdowns" />
      <Character name="Jewel Dragoneere" imgUrl={jewel} text="Hater of Golden People" />
      <Character name="St. Lēg" imgUrl={leg} text="Champion of Avandra" />
    </div>
  </div>
);

export default Whattkc;