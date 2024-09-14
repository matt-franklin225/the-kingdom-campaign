import React from 'react'
// import { Footer, Characters, Header, Seasons } from './containers';
// import { Break, Navbar, Map } from './components';
import { DetailedCharacters, Footer } from './containers';
import { Break, Navbar } from './components';
import './Home.css';

const Page = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <DetailedCharacters />
            </div>
            <Break />
            <Footer />
        </div>
    )
}

export default Page