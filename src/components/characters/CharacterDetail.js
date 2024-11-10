import React from 'react';
import { Footer } from '../../containers';
import { Break, Navbar } from '../';
import { useParams } from 'react-router-dom';
import { characters } from './data/characters';
import './character_detail.css'

function CharacterDetail() {
    // const { id } = useParams();
    // const character = characters.find((char) => char.id === parseInt(id));
    const { loc } = useParams();
    const character = characters.find((char) => char.loc === loc);

    if (!character) {
        return <h2>Character not found</h2>;
    }

    return (
        
        <div className="tkc__character_detail section_margin">
            <div className="gradient__bg">
                <Navbar />
                <div className="tkc__character_detail-info section__padding">
                    <div className="tkc__character_detail-info-heading">
                        <div className="tkc__character_detail-name">
                            <h1>{character.name}</h1>
                        </div>
                        <div className="tkc__character_detail-image">
                            <img src={character.imgUrl} alt={character.name}/>
                        </div>
                        <div className="tkc__character_detail-title">
                            <h2>{character.title}</h2>
                        </div>
                    </div>
                    <div className="tkc__character_detail-info-details">
                        <div className="tkc__character_detail-trait">
                            <h2>{'Class:'}</h2>
                        </div>
                        <div className="tkc__character_detail-value">
                            <h3>{character.class}</h3>
                        </div>
                        <div className="tkc__character_detail-trait">
                            <h2>{'Race:'}</h2>
                        </div>
                        <div className="tkc__character_detail-value">
                            <h3>{character.race}</h3>
                        </div>
                        <div className="tkc__character_detail-trait">
                            <h2>{'Alignment:'}</h2>
                        </div>
                        <div className="tkc__character_detail-value">
                            <h3>{character.alignment}</h3>
                        </div>
                    </div>
                    <div className="tkc__character_detail-info-details">
                        <div className="tkc__character_detail-trait">
                            <h2>{'Age:'}</h2>
                        </div>
                        <div className="tkc__character_detail-value">
                            <h3>{character.age}</h3>
                        </div>
                        <div className="tkc__character_detail-trait">
                            <h2>{'Birthplace:'}</h2>
                        </div>
                        <div className="tkc__character_detail-value">
                            <h3>{character.birthplace}</h3>
                        </div>
                        <div className="tkc__character_detail-trait">
                            <h2>{'Other Title:'}</h2>
                        </div>
                        <div className="tkc__character_detail-value">
                            <h3>{character.otherTitle}</h3>
                        </div>
                    </div>
                </div>
                <div className="tkc__character_detail-description">
                    <h1>Description</h1>
                    <div className="tkc__character_detail-description-text">
                        <h3>{character.description}</h3>
                    </div>
                </div>
                <div className="tkc__character_detail-description">
                    <h1>Notable Accomplishments</h1>
                    <div className="tkc__character_detail-description-text">
                        <h3>{character.accomplishments}</h3>
                    </div>
                </div>
            </div>
            <Break />
            <Footer />
        </div>
    );
}

export default CharacterDetail;
