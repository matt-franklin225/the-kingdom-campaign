import React from 'react'
// import { Link } from 'react-router-dom';
import { FullNpcs, Footer } from './containers';
import { Break, Navbar } from './components';
import './Home.css';

const Page = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <FullNpcs />
            </div>
            <Break />
            <Footer />
        </div>
    )
}

export default Page