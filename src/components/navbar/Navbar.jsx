import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/tkc_logo.png'
import './navbar.css';

const Menu = () => (
    <>
    <p><a href="/characters">Characters</a></p>
    <p><a href="/seasons">Seasons</a></p>
    <p><a href="#map">Map</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="tkc__navbar">
            <div className="tkc__navbar-links">
                <div className="tkc__navbar-links_logo">
                    <a href="/"><img src={logo} alt="logo"></img></a>
                </div>
                <div className="tkc__navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="tkc__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="fff" size = {27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="fff" size = {27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu &&(
                    <div className="tkc__navbar-menu_container scale-up-center">
                        <div className="tkc__navbar-menu_container-links">
                            <Menu />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
