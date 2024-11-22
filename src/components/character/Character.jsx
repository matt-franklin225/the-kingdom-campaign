import React from 'react';
import './character.css';

const Character = ({ name, text, imgUrl, page }) => (
    <div className="characters-container__character">
        <div className="characters-container__character-title">
            <div />
            <h1><a href={page}>{name}</a></h1>
        </div>
        <div className="characters-container__character-image">
            <a href={page}><img src={imgUrl} alt="Character"/></a>
        </div>
        <div className="characters-container_character-text">
            <p>{text}</p>
        </div>
    </div>
);

export default Character;