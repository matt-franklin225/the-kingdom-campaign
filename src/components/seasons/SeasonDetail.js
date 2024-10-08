import React from 'react';
import { Footer } from '../../containers';
import { Break, Navbar } from '..';
import { useParams } from 'react-router-dom';
import { seasons } from './data/seasons';
import './season_detail.css'

function SeasonDetail() {
    const { loc } = useParams();
    const season = seasons.find((char) => char.loc === loc);

    if (!season) {
        return <h2>Season not found</h2>;
    }

    return (
        <div className="tkc__season_detail section_margin">
            <div className="gradient__bg">
                <Navbar />
                <div className="tkc__season_detail-info section__padding">
                    <div className="tkc__season_detail-info-heading">
                        <div className="tkc__season_detail-name">
                            <h1>{season.name}</h1>
                        </div>
                        <div className="tkc__season_detail-image">
                            <img src={season.imgUrl} alt={season.name}/>
                        </div>
                        <div className="tkc__season_detail-title">
                            <h2>{season.title}</h2>
                        </div>
                    </div>
                </div>
                <div className="tkc__season_detail-description">
                    <h1>Description</h1>
                    <div className="tkc__season_detail-description-text">
                        <h3>{season.description}</h3>
                    </div>
                </div>
            </div>
            <Break />
            <Footer />
        </div>
    );
}

export default SeasonDetail;
