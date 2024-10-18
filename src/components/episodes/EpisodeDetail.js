import React from 'react';
import { Footer } from '../../containers';
import { Break, Navbar } from '..';
import { useParams } from 'react-router-dom';
import { episodes } from './data/episodes';
import './episode_detail.css'

function EpisodeDetail() {
    // const { id } = useParams();
    // const episode = episodes.find((char) => char.id === parseInt(id));
    const { loc } = useParams();
    const episode = episodes.find((char) => char.loc === loc);

    if (!episode) {
        return <h2>Episode not found</h2>;
    }

    return (
        
        <div className="tkc__episode_detail section_margin">
            <div className="gradient__bg">
                <Navbar />
                <div className="tkc__episode_detail-info section__padding">
                    <div className="tkc__episode_detail-info-heading">
                        <div className="tkc__episode_detail-image">
                            <img src={episode.imgUrl} alt={episode.name}/>
                        </div>
                        <div className="tkc__episode_detail-title">
                            <h2>{episode.title}</h2>
                        </div>
                    </div>
                    <div className="tkc__episode_detail-description">
                        <h1>Description</h1>
                        <div className="tkc__episode_detail-description-text">
                            <h3>{episode.description}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <Break />
            <Footer />
        </div>
    );
}

export default EpisodeDetail;
