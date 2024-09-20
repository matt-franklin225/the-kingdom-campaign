import React from 'react'
import logo from '../../assets/tkc_logo.png'
import './footer.css'

const Footer = () => {
    return (
        <div className="tkc__footer section__padding">
            <div className="tkc__footer-links">
                <div className="tkc__footer-links_logo">
                    <img src={logo} alt="logo" />
                    <p>Brought to you by Lil G</p>
                </div>
                <div className="tkc__footer-links_div">
                    <h4>Links</h4>
                    <p>Characters</p>
                    <p>Seasons</p>
                    <p>Artwork</p>
                    <p>Map</p>
                </div>
                <div className="tkc__footer-links_div">
                    <h4>Seasons</h4>
                    <p>S1: Waterdeep Dragon Heist</p>
                    <p>S2: Conquest of Fireshallow</p>
                    <p>S3: The War on Thara</p>
                </div>
                <div className="tkc__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>madeupemail@gmail.com</p>
                </div>
            </div>
            <div className="tkc__footer-copyright">
                <p>Website developed by Matt Franklin (AKA Eugene Rider)</p>
            </div>
        </div>
    )
}

export default Footer
