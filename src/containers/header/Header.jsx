import React from 'react'
import './header.css'
// import people from '../../assets/people.png'
import party_drawing from '../../assets/party_drawing.png'

const Header = () => {
    return (
        <div className="header section__padding" id="home">
            <div className="header-content">
                <h1 className="gradient__text">The Kingdom Campaign: From Waterdeep to Fireshallow</h1>
                <p>The journey of a small band of misfits, beginning as humble adventurers but evolving into powerful rulers capable of taking on the world's mightiest foes.</p>
            </div>

            <div className="header-image">
                <img src={party_drawing} alt="Party Drawing"></img>
            </div>
            
        </div>
    )
}

export default Header