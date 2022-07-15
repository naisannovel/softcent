import React from 'react';
import style from './hero.module.css';

const Hero = () => {
    return (
        <div className={style.hero__container}>
            <div className={style.hero__text_container}>
                <h2>Software services for startups without limits..</h2>
                <p>We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
            </div>
            <div className={style.hero__video_container}>
                <img src="./Images/video.png" alt="video" />
            </div>
        </div>
    );
};

export default Hero;