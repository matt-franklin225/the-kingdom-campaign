import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import Home from './Home';
import Characters from './Characters';
import CharacterDetail from './components/characters/CharacterDetail';

function App() {
    return (
    <Router>
        <nav>
            <ScrollToTop />
        </nav>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/characters/:loc" element={<CharacterDetail />} />
        </Routes>
    </Router>
    );
}

export default App;
