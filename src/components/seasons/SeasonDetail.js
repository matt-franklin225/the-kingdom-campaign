import React from 'react';
import { Footer } from '../../containers';
import { Break, Navbar } from '..';
import { useParams } from 'react-router-dom';
import { seasons } from './data/seasons';
import { episodes } from '../episodes/data/episodes.js';
import './season_detail.css'


function SeasonDetail() {
    const { loc } = useParams();
    const season = seasons.find((char) => char.loc === loc);

    if (!season) {
        return <h2>Season not found</h2>;
    }

    const seasonEpisodes = episodes.filter(episode => episode.season === season.id);

    return (
        <div className="season_detail section_margin">
            <div className="gradient__bg">
                <Navbar />
                <div className="season_detail-info section__padding">
                    <div className="season_detail-info-heading">
                        <div className="season_detail-title">
                            <h1>Season {season.id}: {season.title}</h1>
                        </div>
                        <div className="season_detail-image">
                            <img src={season.imgUrl} alt={season.name}/>
                        </div>
                    </div>
                </div>
                <div className="season_detail-description">
                    <h1>Description</h1>
                    <div className="season_detail-description-text">
                        <h3>{season.description}</h3>
                    </div>
                </div>
                <div className="season_detail-episodes">
                    <h1>Episodes</h1>
                    <div className="episode_detail-description-text">
                        <div id="episodes-list">
                                {seasonEpisodes.length > 0 ? (
                                    seasonEpisodes.map((episode) => (
                                        <div key={episode.id} className="episode">
                                            <h3>Episode {episode.episode_num}: {episode.title}</h3>
                                            <p>{episode.description}</p>
                                            {/* <a href={episode.loc}>Read more</a> */}
                                        </div>
                                    ))
                                ) : (
                                    <p>No episode descriptions yet.</p>
                                )}
                        </div>
                    </div>
                </div>
            </div>
            <Break />
            <Footer />
        </div>
    );
}

export default SeasonDetail;
