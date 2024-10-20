import React from 'react'
import { Seasons, Footer } from './containers';
import { Break, Navbar } from './components';
import './Home.css';

const Page = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Seasons />
            </div>
            <Break />
            <Footer />
        </div>
    )
}

export default Page