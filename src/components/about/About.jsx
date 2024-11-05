import React from 'react';
import { about_campaign, about_designer, github_icon, linkedin_icon } from './imports'
import './about.css';

const About = () => (
    <div className="about section__margin">
        <div className="about__campaign">
            <div className="about__campaign__title">
                <h1>About The Kingdom Campaign</h1>
            </div>
            <div className="about__campaign__description">
                <div className="about__campaign__text">
                    <p>The Kingdom Campaign was created in June 2023 by a small group of friends who are passionate about Dungeons & Dragons. Over the past year and a half, it has developed into an intricate, complex campaign with a rich lore, detailed characters, and several story arcs. We hope that you enjoy learning about our adventures through this website!</p>
                </div>
                <div className="about__campaign__image">
                    <img src={about_campaign} alt="Eugene and Pluto in action"/>
                </div>
            </div>
        </div>
        <div className="about__campaign">
            <div className="about__campaign__title">
                <h1>About The Website Designer</h1>
            </div>
            <div className="about__campaign__description">
                <div className="about__author__details">
                    <div className="about__campaign__text">
                        <p>Hi y'all! :) My name is Matt Franklin, and I'm a Computer Science student at the University of California, Irvine. I built this website in order to develop my skills in Javascript and React.js, and most importantly to capture the memories of this awesome campaign. Being a part of this group and getting ideas from them for this site has been a huge pleasure, and I'm looking forward to expanding it further!</p>
                    </div>
                    <div className="about__author__links">
                        <a href={"https://github.com/matt-franklin225"}><img src={github_icon} alt="GitHub Logo"/></a>
                        <a href={"https://www.linkedin.com/in/mattfranklin225/"}><img src={linkedin_icon} alt="LinkedIn Logo"/></a>
                    </div>
                </div>
                <div className="about__campaign__image">
                    <img src={about_designer} alt="Matt Franklin"/>
                </div>
            </div>
        </div>
    </div>
);

export default About;