import React from 'react';
import Season from '../../components/season/Season';
import {s1_img, s2_img, s3_img, s4_img, s5_img } from './imports'
import './seasons.css';

const Page = () => (
    <div className="seasons section__margin" id="seasons">
        <div className="seasons-season">
            <h1>Seasons</h1>
        </div>
        <div className="seasons-container">
            <Season title="S1: Waterdeep Dragon Heist" imgUrl={s1_img} page='/seasons/season_1' text="The adventurers meet for the first time in Waterdeep and quickly become caught up in an investigation of deep corruption in the city. However, their priorities become more complex when they learn of a vault hidden under the city containing a huge fortune..." />
            <Season title="S2: Conquest of Fireshallow" imgUrl={s2_img} page='/seasons/season_2' text="The party escapes Waterdeep and discovers their destiny to free a nation from its corrupt ruler. With some new allies added and some old allies fallen, the adventurers set out to liberate and take control of the kingdom of Fireshallow..." />
            <Season title="S3: The War on Thara" imgUrl={s3_img} page='/seasons/season_3' text="With Fireshallow under threat from the powerful, arrogant Thara Kingdom, the adventurers seek any means to preserve their kingdom. With options running low, the party members negotiate, infiltrate, and dungeon-crawl with the mission of protecting their kingdom..." />
            <Season title="S4: The Shattered Crown" imgUrl={s4_img} page='/seasons/season_4' text="As the adventurers attempt to rebuild after the war, a fateful prophecy and a sudden kidnapping send them back into the fray, forcing them to fight through the dangerous Underdark. Awaiting them are a powerful crime syndicate, a familiar foe, and even Death himself..." />
            <Season title="S5: Civil War" imgUrl={s5_img} page='/seasons/season_5' text="Fireshallow’s government has been overthrown, and the party has been exiled. Damaged and disgraced, the adventurers desparately fight to keep their loved ones alive and reclaim their kingdom--but first they must struggle for their own survival..." />
        </div>
    </div>
);

export default Page;