import React from 'react';
import Character from '../../components/character/Character.jsx';
import { characters } from '../../components/characters/data/characters.js';
import './characters.css';

function Characters() {

    return (
      <div className="tkc__characters section__margin" id="characters">
        <div className="tkc__characters-character">
          <h1><a href="/characters">Characters</a></h1>
        </div>
        <div className="tkc__characters-container">
        <div id="characters-list" className="characters-list">
            {characters.length > 0 ? (
                characters.map((character) => (
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