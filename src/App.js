import React from 'react'

// import { Footer, Blog, Possibility, Features, Characters, Header } from './containers';
// import { CTA, Break, Navbar, Map } from './components';

import { Footer, Characters, Header } from './containers';
import { Break, Navbar, Map } from './components';

import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Break />
            <Characters />
            {/* <Features /> */}
            <Map />
            {/* <Possibility /> */}
            {/* <CTA /> */}
            {/* <Blog /> */}
            <Footer />
        </div>
    )
}

export default App
