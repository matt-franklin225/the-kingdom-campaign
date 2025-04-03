import React from 'react'
import { Footer } from './containers';
import { Navbar, Map } from './components';
import './Home.css';

const Page = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
            </div>
            <Map />
            <Footer />
        </div>
    )
}

export default Page