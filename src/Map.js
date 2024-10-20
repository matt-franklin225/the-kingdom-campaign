import React from 'react'
import { Footer } from './containers';
import { Break, Navbar, Map } from './components';
import './Home.css';

const Page = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
            </div>
            <div className="dark__bg">
                <Map />
            </div>
            <Break />
            <Footer />
        </div>
    )
}

export default Page