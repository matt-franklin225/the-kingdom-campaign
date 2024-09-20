import React from 'react';
import { Link } from 'react-router-dom';
import { seasons } from './data/seasons';

function SeasonList() {
    return (
        <div>
            <h1>Seasons</h1>
            <ul>
                {seasons.map((season) => (
                    <li key={season.loc}>
                        <Link to={`/seasons/${season.loc}`}>{season.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SeasonList;
