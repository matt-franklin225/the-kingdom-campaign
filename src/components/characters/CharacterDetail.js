import React from 'react';
import { Footer } from '../../containers';
import { Break, Navbar } from '../';
import { useParams } from 'react-router-dom';
import { characters } from './data/characters';

function CharacterDetail() {
    // const { id } = useParams();
    // const character = characters.find((char) => char.id === parseInt(id));
    const { loc } = useParams();
    const character = characters.find((char) => char.loc === loc);

    if (!character) {
        return <h2>Character not found</h2>;
    }

    return (
        
        <div className="character_detail section_margin">
            <div className="gradient__bg">
                <Navbar />
                <div className="character_detail-info section__padding">
                    <div className="character_detail-info-heading">
                        <h1>{character.name}</h1>
                        <h2>{character.title}</h2>
                    </div>
                    
                </div>
            </div>
            <Break />
            <Footer />
        </div>
    );
}

export default CharacterDetail;
