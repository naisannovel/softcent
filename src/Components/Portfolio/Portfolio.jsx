import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import style from './Portfolio.module.css';

// image
import port1 from '../../Assets/Images/portfolio-1.png';
import port2 from '../../Assets/Images/portfolio-2.png';
import port3 from '../../Assets/Images/portfolio-3.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// icon
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const Portfolio = (props) => {

    const portfolioData = [
        {
            img: port2,
            title: 'Color System Design'
        },
        {
            img: port1,
            title: 'Logo Design'
        },
        {
            img: port3,
            title: 'UI/UX Design'
        },
        {
            img: port2,
            title: 'Logo Design'
        },
        {
            img: port3,
            title: 'Color System Design'
        },
        {
            img: port1,
            title: 'Logo Design'
        },
    ]

    const swiperRef = React.useRef(null);

    return (
        <div className={props.class}>

            <div className={style.portfolio__title_container}>
                <SectionTitle align='flex-start'>Our Portfolio</SectionTitle>
                <div className={style.next__prev_container}>
                    <span id="previousButton" onClick={() => swiperRef.current.swiper.slidePrev()}> <IoArrowBack/> </span>
                    <span id="nextButton" onClick={() => swiperRef.current.swiper.slideNext()} > <IoArrowForward/> </span>
                </div>
            </div>

            <Swiper
             slidesPerView={3}
             ref={swiperRef}
             pagination={{
                clickable: true,
              }}
             >
                {
                    portfolioData?.map(item =>(
                        <SwiperSlide className={style.swiperSlide__container}>
                            <img src={item?.img} alt="portfolio"/>
                            <p> { item?.title } </p>
                        </SwiperSlide>
                    ))
                }
            </Swiper>

            <div className={style.all__portfolio_btn}>
                <PrimaryButton>See All Protfolio</PrimaryButton>
            </div>
        </div>
    );
};

export default Portfolio;