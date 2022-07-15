import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import style from './AboutUs.module.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const AboutUs = (props) => {

    const testimonials = [
        {
            author: 'Shuvo Roy',
            founder: 'Softcent Co-Founder',
            comment: 'We had a bit of a slow and bumpy start, but after changing the designer on their side everything went in a very good direction. The designers were talented and easy to work with.'
        },
        {
            author: 'Tamim Iqbal',
            founder: 'Softcent Co-Founder',
            comment: 'We had a bit of a slow and bumpy start, but after changing the designer on their side everything went in a very good direction. The designers were talented and easy to work with.'
        },
        {
            author: 'Taskin Ahmed',
            founder: 'Softcent Co-Founder',
            comment: 'We had a bit of a slow and bumpy start, but after changing the designer on their side everything went in a very good direction. The designers were talented and easy to work with.'
        },
    ]

    return (
        <div className={props.class}>
            <SectionTitle align='center'>Talk About Us!</SectionTitle>

            <div className={style.aboutUs__container}>
                <Swiper pagination={{clickable:true}} modules={[Pagination]} className={style.aboutUs__comment_container}>
                    {
                        testimonials?.map(item => (
                            <SwiperSlide className={style.swiperSlider__container}>
                                <p> { item?.comment } </p>
                                <div className={style.user__details}>
                                    <img src={require("../../Assets/Images/testi-1.png")} alt="image"/>
                                    <span>
                                        <h6> { item?.author } </h6>
                                        <p> { item?.founder } </p>
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className={style.aboutUs__img_container}>
                    <img src="./Images/circle.png" alt="image"/>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;