import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/tkc_logo.png'
import './navbar.css';

const Menu = () => (
    <>
    <p><a href="#characters">Characters</a></p>
    <p><a href="#seasons">Seasons</a></p>
    <p><a href="#map">Map</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="tkc__navbar">
            <div className="tkc__navbar-links">
                <div className="tkc__navbar-links_logo">
                    <Link to="/"><img src={logo} alt="logo"></img></Link>
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
                            {/* <div className=".tkc__navbar-menu_container-links-sign">
                                <p>Sign in</p>
                                <button type="button">Sign up</button>
                            </div> */}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
