import React from 'react';
import './npc_simple.css';

const Npc = ({ name, imgUrl, page }) => (
    <div className="npcs-container__npc">
        <div className="npcs-container__npc-title">
            <div />
            <h1><a href={page}>{name}</a></h1>
        </div>
        <div className="npcs-container__npc-image">
            <a href={page}><img src={imgUrl} alt="Npc"/></a>
        </div>
    </div>
);

export default Npc;