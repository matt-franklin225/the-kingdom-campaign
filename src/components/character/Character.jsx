import React from 'react';
import './character.css';

const Character = ({ name, text, imgUrl }) => (
    <div className="gpt3__characters-container__character">
        <div className="gpt3__characters-container__character-title">
            <div />
            <h1>{name}</h1>
        </div>
        <div className="gpt3__characters-container__character-image">
            <img src={imgUrl} alt="Character"/>
        </div>
        <div className="gpt3__characters-container_character-text">
            <p>{text}</p>
        </div>
    </div>
);

export default Character;