import React from 'react'
import { Footer} from './containers';
import { Break, Navbar, Map } from './components';
import { Link } from 'react-router-dom';
import './Home.css';
import { eugene } from '../../containers/characters/imports'
import CharacterPage from '../../containers/character_page/CharacterPage';

const EugeneRider = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <CharacterPage name="Eugene Rider" text="" imgUrl={eugene} />
            </div>
            <Break />
            <Footer />
        </div>
    )
}

export default EugeneRider