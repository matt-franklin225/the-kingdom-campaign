import React from 'react';
import './map.css';
import map_img from '../../assets/world_map.webp'

const Map = () => (
    <div className="map" id="map">
        <a href="/map"><h1>Map of Dranith</h1></a>
        <img src={map_img} alt="Map of the world of The Kingdom Campaign" />
    </div>
);

export default Map;