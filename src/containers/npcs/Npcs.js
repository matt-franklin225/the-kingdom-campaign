import React from 'react';
import Npc from '../../components/npc/NpcSimple.jsx';
import { npcs } from '../../components/npc/data/npcs.js';
import './npcs.css';

function Npcs() {

    return (
      <div className="tkc__npcs section__margin" id="npcs">
        <div className="tkc__npcs-npc">
          <h1><a href="/npcs">Npcs</a></h1>
        </div>
        <div className="tkc__npcs-container">
        <div id="npcs-list" className="npcs-list">
            {npcs.length > 0 ? (
                npcs.map((npc) => (
                    <div key={npc.id} className="npc" id="npc">
                        <Npc name={npc.name} imgUrl={npc.imgUrl} text={npc.title} page={`npcs/${npc.loc}`}/>
                    </div>
                ))
            ) : (
                <p>No NPCs yet.</p>
            )}
          </div>
        </div>
      </div>
    );
  }

export default Npcs;