import React from 'react';
import { Link } from 'react-router-dom';
import Character from '../../components/character/Character';
import {eugene, sarenia, berrian, ariah, opal, pluto, jewel, leg } from './imports'
import './characters.css';

const Characters = () => (
  <div className="tkc__characters section__margin" id="characters">
    <div className="tkc__characters-character">
      <h1><Link to="/characters">Characters</Link></h1>
    </div>
    <div className="tkc__characters-container">
      <Character name="Eugene Rider" imgUrl={eugene} text="High King of Fireshallow" page="/characters/eugene_rider"/>
      <Character name="Pluto Johnson" imgUrl={pluto} text="Lord of the Golden Order" page="/characters"/>
      <Character name="Ariah Rhialla" imgUrl={ariah} text="Architect of the EmberWild" page="/characters"/>
      <Character name="Opal Blade" imgUrl={opal} text="Weapon of the High King" page="/characters"/>
      <Character name="Sarenia Valen" imgUrl={sarenia} text="The Bardic Ambassador" page="/characters"/>
      <Character name="Berrían Berevan" imgUrl={berrian} text="Elder of Ashenveil Forest" page="/characters"/>
      <Character name="Jewel Dragoneere" imgUrl={jewel} text="Survivor of Thara" page="/characters"/>
      <Character name="St. Lēg" imgUrl={leg} text="Champion of Avandra" page="/characters"/>
    </div>
  </div>
);

export default Characters;