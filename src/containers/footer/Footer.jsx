import React from 'react'
import logo from '../../assets/tkc_logo.png'
import './footer.css'

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            {/* <div className="gpt3__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others?</h1>
            </div>
            <div className="gpt3__footer-btn">
                <p>Request Early Access</p>
            </div> */}
            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={logo} alt="logo" />
                    <p>Brought to you by Lil G</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <p>Characters</p>
                    <p>Seasons</p>
                    <p>Artwork</p>
                    <p>Map</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Seasons</h4>
                    <p>S1: Waterdeep Dragon Heist</p>
                    <p>S2: Conquest of Fireshallow</p>
                    <p>S3: The War on Thara</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <p>madeupemail@gmail.com</p>
                </div>
            </div>
            <div className="gpt3__footer-copyright">
                <p>© 2024 The Kingdom Campaign. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
