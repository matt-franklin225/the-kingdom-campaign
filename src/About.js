import React from 'react'
import { Footer } from './containers';
import { Break, Navbar, About } from './components';
import './Home.css';

const Page = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <About />
            </div>
            <Break />
            <Footer />
        </div>
    )
}

export default Page