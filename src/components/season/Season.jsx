import React from 'react';
import './season.css';

const Season = ({ title, text, imgUrl, page }) => (
    <div className="season">
        <div className="seasons-container__season-description">
            <div className="seasons-container__season-title">
                <h1><a href={page}>{title}</a></h1>
            </div>
            <div className="seasons-container__season-text">
                <p>{text}</p>
            </div>
        </div>
        <div className="seasons-container__season-image">
            <img src={imgUrl} alt="season"/>
        </div>
    </div>
);

export default Season;