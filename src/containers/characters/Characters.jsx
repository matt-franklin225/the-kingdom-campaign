import React from 'react';
import Character from '../../components/character/Character';
import {eugene, sarenia, berrian, ariah, opal, pluto, jewel, leg } from './imports'
import './characters.css';

const Characters = () => (
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
      <Character name="Pluto Johnson" imgUrl={pluto} text="Lord of the Golden Order" />
      <Character name="Ariah Rhialla" imgUrl={ariah} text="Architect of the EmberWild" />
      <Character name="Sarenia Valen" imgUrl={sarenia} text="The Bard Ambassador" />
      <Character name="Berrían Berevan" imgUrl={berrian} text="Elder of Ashenveil Forest" />
      <Character name="Opal Blade" imgUrl={opal} text="Victim of Mental Breakdowns" />
      <Character name="Jewel Dragoneere" imgUrl={jewel} text="Survivor of Thara" />
      <Character name="St. Lēg" imgUrl={leg} text="Champion of Avandra" />
    </div>
  </div>
);

export default Characters;