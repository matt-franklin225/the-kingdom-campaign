import React from 'react';
import Season from '../../components/season/Season';
import {s1_img, s2_img, s3_img } from './imports'
import './seasons.css';

const Whattkc = () => (
    <div className="tkc__seasons section__margin" id="seasons">
        <div className="tkc__seasons-season">
            <h1>Seasons</h1>
        </div>
        <div className="tkc__seasons-container">
            <Season name="S1: Waterdeep Dragon Heist" imgUrl={s1_img} text="The adventurers meet for the first time in Waterdeep and quickly become caught up in an investigation of deep corruption in the city. However, their priorities become more complex when they learn of a vault hidden under the city containing a huge fortune..." />
            <Season name="S2: Conquest of Fireshallow" imgUrl={s2_img} text="The party escapes Waterdeep and discovers their destiny to free a nation from its corrupt ruler. With some new allies added and some old allies fallen, the adventurers set out to liberate and take control of the kingdom of Fireshallow..." />
            <Season name="S3: The War on Thara" imgUrl={s3_img} text="With Fireshallow under threat from the powerful, arrogant Thara Kingdom, the adventurers seek any means to preserve their kingdom. With options running low, the party members negotiate, infiltrate, and dungeon-crawl with the mission of protecting Fireshallow..." />
        </div>
    </div>
);

export default Whattkc;