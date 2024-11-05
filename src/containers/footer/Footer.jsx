import React from 'react'
import logo from '../../assets/tkc_logo.png'
import './footer.css'

const Footer = () => {
    return (
        <div className="tkc__footer section__padding">
            <div className="tkc__footer-links">
                <div className="tkc__footer-links_logo">
                    <a href="/"><img src={logo} alt="logo"></img></a>
                    <p>Brought to you by Lil G</p>
                </div>
                <div className="tkc__footer-links_div">
                    <h4>Pages</h4>
                    <p><a href="/characters">Characters</a></p>
                    <p><a href="/seasons">Seasons</a></p>
                    <p><a href="/map">Map</a></p>
                </div>
                <div className="tkc__footer-links_div">
                    <h4>Seasons</h4>
                    <p><a href="/seasons/season_1">S1: Waterdeep Dragon Heist</a></p>
                    <p><a href="/seasons/season_2">S2: Conquest of Fireshallow</a></p>
                    <p><a href="/seasons/season_3">S3: The War on Thara</a></p>
                    <p><a href="/seasons/season_4">S4: Shattered Crowns</a></p>
                </div>
                <div className="tkc__footer-links_div">
                    <h4>About</h4>
                    <p><a href="/about">About Us</a></p>
                </div>
            </div>
        </div>
    )
}

export default Footer
