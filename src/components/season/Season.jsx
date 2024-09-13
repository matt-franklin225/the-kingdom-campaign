import React from 'react';
import './season.css';

const Season = ({ name, text, imgUrl }) => (
    <div className="tkc__season section__margin">
        <div className="tkc__seasons-container__season-description">
            <div className="tkc__seasons-container__season-title">
                <h1>{name}</h1>
            </div>
            <div className="tkc__seasons-container__season-text">
                <p>{text}</p>
            </div>
        </div>
        <div className="tkc__seasons-container__season-image">
            <img src={imgUrl} alt="season"/>
        </div>
    </div>
);

export default Season;