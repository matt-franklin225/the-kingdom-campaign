import React from 'react';
import './map.css';
import map_img from '../../assets/world_map.webp'

const Map = () => (
    <div className="tkc__map" id="map">
        <h1>World Map</h1>
        <img src={map_img} alt="Map of the world of The Kingdom Campaign" />
    </div>
);

export default Map;