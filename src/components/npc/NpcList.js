import React from 'react';
import { Link } from 'react-router-dom';
import { npcs } from './data/npcs';

function NpcList() {
    return (
        <div>
            <h1>Npcs</h1>
            <ul>
                {npcs.map((npc) => (
                    <li key={npc.loc}>
                        <Link to={`/npcs/${npc.loc}`}>{npc.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NpcList;
