import React from 'react';
import { Link } from 'react-router-dom';
import './character.css';

const Character = ({ name, text, imgUrl, page }) => (
    <div className="tkc__characters-container__character">
        <div className="tkc__characters-container__character-title">
            <div />
            <h1><Link to={page}>{name}</Link></h1>
        </div>
        <div className="tkc__characters-container__character-image">
            <Link to={page}><img src={imgUrl} alt="Character"/></Link>
        </div>
        <div className="tkc__characters-container_character-text">
            <p>{text}</p>
        </div>
    </div>
);

export default Character;