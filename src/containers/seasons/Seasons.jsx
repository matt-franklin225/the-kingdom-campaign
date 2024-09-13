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
            <Season name="S1: Waterdeep Dragon Heist" imgUrl={s1_img} text="Epic text" />
            <Season name="S2: Conquest of Fireshallow" imgUrl={s2_img} text="Epic text" />
            <Season name="S3: The War on Thara" imgUrl={s3_img} text="Epic text" />
        </div>
    </div>
);

export default Whattkc;