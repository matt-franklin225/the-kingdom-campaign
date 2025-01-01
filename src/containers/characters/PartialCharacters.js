import React from 'react';
import Character from '../../components/character/Character.jsx';
import { characters } from '../../components/characters/data/characters.js';
import './characters.css';

function PartialCharacters() {

    const getRandomChars = (n) => {
        const shuffled = [...characters].sort(() => 0.5 - Math.random()); // Shuffle the array
        return shuffled.slice(0, n); // Return the first n items
    };
    
    // Select 3 random characters
    const randomChars = getRandomChars(3);

    return (
      <div className="characters section__margin" id="characters">
        <div className="characters-character">
          <h1><a href="/characters">Characters</a></h1>
        </div>
        <div className="characters-container">
        <div id="characters-list" className="characters-list">
            {randomChars.length > 0 ? (
                randomChars.map((character) => (
                    <div key={character.id} className="character" id="character">
                        <Character name={character.name} imgUrl={character.imgUrl} text={character.title} page={`characters/${character.loc}`}/>
                    </div>
                ))
            ) : (
                <p>No characters yet.</p>
            )}
          </div>
        </div>
        <div className="characters-character">
          <h2><a href="/characters">See all</a></h2>
        </div>
      </div>
    );
  }

export default PartialCharacters;