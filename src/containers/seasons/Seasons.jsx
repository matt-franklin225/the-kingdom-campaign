import React from 'react';
import Season from '../../components/season/Season';
import {s1_img, s2_img, s3_img, s4_img } from './imports'
import './seasons.css';

const Page = () => (
    <div className="seasons section__margin" id="seasons">
        <div className="seasons-season">
            <h1>Seasons</h1>
        </div>
        <div className="seasons-container">
            <Season title="S1: Waterdeep Dragon Heist" imgUrl={s1_img} page='/seasons/season_1' text="The adventurers meet for the first time in Waterdeep and quickly become caught up in an investigation of deep corruption in the city. However, their priorities become more complex when they learn of a vault hidden under the city containing a huge fortune..." />
            <Season title="S2: Conquest of Fireshallow" imgUrl={s2_img} page='/seasons/season_2' text="The party escapes Waterdeep and discovers their destiny to free a nation from its corrupt ruler. With some new allies added and some old allies fallen, the adventurers set out to liberate and take control of the kingdom of Fireshallow..." />
            <Season title="S3: The War on Thara" imgUrl={s3_img} page='/seasons/season_3' text="With Fireshallow under threat from the powerful, arrogant Thara Kingdom, the adventurers seek any means to preserve their kingdom. With options running low, the party members negotiate, infiltrate, and dungeon-crawl with the mission of protecting Fireshallow..." />
            <Season title="S4: Shattered Crowns" imgUrl={s4_img} page='/seasons/season_4' text="With the Thara Kingdom finally defeated, the adventurers seek to restore order to Fireshallow and the surrounding area. However, when one member of the party vanishes with ominous prophesies swirling around them, the adventurers are forced to make difficult decisions..." />
        </div>
    </div>
);

export default Page;