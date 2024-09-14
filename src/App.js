import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
// import About from './About';
// import Contact from './Contact';

function App() {
    return (
    <Router>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li> */}
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        </Router>
    );
}

export default App;
