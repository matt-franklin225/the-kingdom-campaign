import React from 'react';
import Npc from '../../components/npc/NpcSimple.jsx';
import { npcs } from '../../components/npc/data/npcs.js';
import './npcs.css';

function PartialNpcs() {

  const getRandomNpcs = (n) => {
    const shuffled = [...npcs].sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, n); // Return the first n items
  };

  // Select 4 random NPCs
  const randomNpcs = getRandomNpcs(4);

    return (
      <div className="npcs section__margin" id="npcs">
        <div className="npcs-npc">
          <h1><a href="/npcs">Npcs</a></h1>
        </div>
        <div className="npcs-container">
        <div id="npcs-list" className="npcs-list">
            {randomNpcs.length > 0 ? (
                randomNpcs.map((npc) => (
                    <div key={npc.id} className="npc" id="npc">
                        <Npc name={npc.name} imgUrl={npc.imgUrl} text={npc.title} page={`npcs/${npc.loc}`}/>
                    </div>
                ))
            ) : (
                <p>No NPCs yet.</p>
            )}
          </div>
        </div>
        <div className="npcs-npc">
          <h2><a href="/npcs">See all</a></h2>
        </div>
      </div>
    );
  }

export default PartialNpcs;