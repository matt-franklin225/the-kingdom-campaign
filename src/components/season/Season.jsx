import React from 'react';
import { Link } from 'react-router-dom';
import './season.css';

const Season = ({ title, text, imgUrl, page }) => (
    <div className="tkc__season">
        <div className="tkc__seasons-container__season-description">
            <div className="tkc__seasons-container__season-title">
                <h1><Link to={page}>{title}</Link></h1>
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