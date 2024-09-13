import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import party_drawing from '../../assets/party_drawing.png'

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">The Kingdom Campaign: From Waterdeep to Fireshallow</h1>
                <p>The journey of a small band of misfits, beginning as humble adventurers but evolving into powerful rulers capable of taking on the world's mightiest foes.</p>

                {/* <div className="gpt3__header-content__input">
                    <input type="email" placeholder="Your Email Address"></input>
                    <button type="button">Get Started</button>
                </div>

                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div> */}
            </div>

            <div className="gpt3__header-image">
                <img src={party_drawing} alt="Party Drawing"></img>
            </div>
            
        </div>
    )
}

export default Header