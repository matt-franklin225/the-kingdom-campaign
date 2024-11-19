import React from 'react';
import './npc.css';

const Npc = ({ name, text, imgUrl, page }) => (
    <div className="tkc__npcs-container__npc">
        <div className="tkc__npcs-container__npc-title">
            <div />
            <h1><a href={page}>{name}</a></h1>
        </div>
        <div className="tkc__npcs-container__npc-image">
            <a href={page}><img src={imgUrl} alt="Npc"/></a>
        </div>
        <div className="tkc__npcs-container_npc-text">
            <p>{text}</p>
        </div>
    </div>
);

export default Npc;