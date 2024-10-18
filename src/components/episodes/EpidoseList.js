import React from 'react';
import { Link } from 'react-router-dom';
import { episodes } from './data/episodes';

function EpisodeList() {
    return (
        <div>
            <h1>Episodes</h1>
            <ul>
                {episodes.map((episode) => (
                    <li key={episode.loc}>
                        <Link to={`/episodes/${episode.loc}`}>{episode.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default EpisodeList;
