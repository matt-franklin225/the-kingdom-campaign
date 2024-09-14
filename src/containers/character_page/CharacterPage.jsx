import React from 'react';
import { Navbar } from '../../components';
import './character_page.css';

const CharacterPage = ({ name, text, imgUrl }) => (
    <div className="tkc__character_page section-padding">
        <Navbar />
        <div className="tkc__character_page__character-title">
            <div />
            <h1>{name}</h1>
        </div>
        <div className="tkc__character_page__character-image">
            <img src={imgUrl} alt="Character"/>
        </div>
        <div className="tkc__character_page__character-text">
            <p>{text}</p>
        </div>
    </div>
);

export default CharacterPage;