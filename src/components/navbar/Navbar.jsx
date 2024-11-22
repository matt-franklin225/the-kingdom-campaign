import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/tkc_logo.png'
import './navbar.css';

const Menu = () => (
    <>
    <p><a href="/characters">Characters</a></p>
    <p><a href="/seasons">Seasons</a></p>
    <p><a href="/map">Map</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links_logo">
                    <a href="/"><img src={logo} alt="logo"></img></a>
                </div>
                <div className="navbar-links_container">
                    <Menu />
                </div>
            </div>
            <div className="navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="fff" size = {27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="fff" size = {27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu &&(
                    <div className="navbar-menu_container scale-up-center">
                        <div className="navbar-menu_container-links">
                            <Menu />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
