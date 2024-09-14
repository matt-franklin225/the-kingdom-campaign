import React from 'react'
import { Footer, Characters, Header, Seasons } from './containers';
import { Break, Navbar, Map } from './components';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Break />
            <div className="gradient__bg">
                <Characters />
            </div>
            <Seasons />
            <Map />
            <Footer />
        </div>
    )
}

export default Home