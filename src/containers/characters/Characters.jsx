import React from 'react';
import Character from '../../components/character/Character';
import {eugene, sarenia, berrian, ariah, opal, pluto, jewel, leg } from './imports'
import './characters.css';

const Characters = () => (
  <div className="tkc__characters section__margin" id="characters">
    <div className="tkc__characters-character">
      <h1><a href="/characters">Characters</a></h1>
    </div>
    <div className="tkc__characters-container">
      {/* <div id="episodes-list">
        {seasonEpisodes.length > 0 ? (
            seasonEpisodes.map((character) => (
                <div key={episode.id} className="episode">
                    <h3>{episode.episode_num}: {episode.title}</h3>
                    <p>{episode.description}</p>
                </div>
            ))
        ) : (
            <p>No episode descriptions yet.</p>
        )}
      </div> */}
      <Character name="Eugene Rider" imgUrl={eugene} text="High King of Fireshallow" page="/characters/eugene_rider"/>
      <Character name="Pluto Johnson" imgUrl={pluto} text="Lord of the Golden Order" page="/characters/pluto_johnson"/>
      <Character name="Ariah Rhialla" imgUrl={ariah} text="Architect of the EmberWild" page="/characters/ariah_rhialla"/>
      <Character name="Opal Blade" imgUrl={opal} text="Brightcandle of Fireshallow" page="/characters/opal_blade"/>
      <Character name="Sarenia Valen" imgUrl={sarenia} text="Exalted Singbird of Fireshallow" page="/characters/sarenia_valen"/>
      <Character name="Berrían Berevan" imgUrl={berrian} text="Elder of Ashenveil Forest" page="/characters/berrian_berevan"/>
      <Character name="Jewel Dragoneere" imgUrl={jewel} text="Avenger of the Dragonborn" page="/characters/jewel_dragoneere"/>
      <Character name="Lēg Corrunpo" imgUrl={leg} text="Champion of Avandra" page="/characters/st_leg"/>
    </div>
  </div>
);

export default Characters;