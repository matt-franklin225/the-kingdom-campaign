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
        <div id="characters-list" className="characters-list">
            {characterEpisodes.length > 0 ? (
                characterEpisodes.map((character) => (
                    <div key={character.id} className="character" id="character">
                        <Character name={character.name} imgUrl={character.imgUrl} text={character.title} page={`characters/${character.loc}`}/>
                    </div>
                ))
            ) : (
                <p>No characters yet.</p>
            )}
          </div>
        </div>
      </div>
    );
  }

export default Characters;