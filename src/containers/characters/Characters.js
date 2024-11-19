import React from 'react';
import Character from '../../components/character/Character.jsx';
// import {eugene, sarenia, berrian, ariah, opal, pluto, jewel, leg } from './imports'
import { characters } from '../../components/characters/data/characters.js';
import { useParams } from 'react-router-dom';
import './characters.css';

function Characters() {

  const { loc } = useParams();
  const character = characters.find((char) => char.id === loc);

  if (!character) {
    // return <h2>Character not found</h2>;
  }

    // const characterEpisodes = characters.filter(character => character.id === season.id);
    const characterEpisodes = characters;
  
    return (
      <div className="tkc__characters section__margin" id="characters">
        <div className="tkc__characters-character">
          <h1><a href="/characters">Characters</a></h1>
        </div>
        <div className="tkc__characters-container">
          <div id="characters-list">
            {characterEpisodes.length > 0 ? (
                characterEpisodes.map((character) => (
                    <div key={character.id} className="character">
                        <Character name={character.name} imgUrl={character.imgUrl} text={character.title} page={character.loc}/>
                    </div>
                ))
            ) : (
                <p>No characters yet.</p>
            )}
          </div>
        </div>
      </div>
    );

      {/* <Character name="Eugene Rider" imgUrl={eugene} text="High King of Fireshallow" page="/characters/eugene_rider"/>
      <Character name="Pluto Johnson" imgUrl={pluto} text="Lord of the Golden Order" page="/characters/pluto_johnson"/>
      <Character name="Ariah Rhialla" imgUrl={ariah} text="Architect of the EmberWild" page="/characters/ariah_rhialla"/>
      <Character name="Opal Blade" imgUrl={opal} text="Brightcandle of Fireshallow" page="/characters/opal_blade"/>
      <Character name="Sarenia Valen" imgUrl={sarenia} text="Exalted Singbird of Fireshallow" page="/characters/sarenia_valen"/>
      <Character name="Berrían Berevan" imgUrl={berrian} text="Elder of Ashenveil Forest" page="/characters/berrian_berevan"/>
      <Character name="Jewel Dragoneere" imgUrl={jewel} text="Avenger of the Dragonborn" page="/characters/jewel_dragoneere"/>
      <Character name="Lēg Corrunpo" imgUrl={leg} text="Champion of Avandra" page="/characters/st_leg"/> */}
}
export default Characters;