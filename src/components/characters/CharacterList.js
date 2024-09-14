import React from 'react';
import { Link } from 'react-router-dom';
import { characters } from './data/characters';

function CharacterList() {
    return (
        <div>
            <h1>Characters</h1>
            <ul>
                {characters.map((character) => (
                    <li key={character.loc}>
                        <Link to={`/characters/${character.loc}`}>{character.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CharacterList;
