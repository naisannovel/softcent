import React, { useState } from 'react';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../Shared/SecondaryButton/SecondaryButton';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import style from './Pricing.module.css';

// react icons
import { IoCheckmarkOutline } from "react-icons/io5";

const Pricing = (props) => {

    const [selectedItem, setSelectedItem] = useState(2);

    const service = [
        {
            id: 1,
            title: 'Merketing',
            price: '$899/ mo',
            offerItem: [
                'Dedicated Designer',
                'Unlimited requests',
                'Unlimited brand profiles',
                'Native source files',
                'Real-time collaboration',
                'Banner Ads',
                'Clothing & Merchandise Design',
                'Packaging & Label',
                'Logo & Brand Guide'
            ]
        },
        {
            id: 2,
            title: 'UI/UX Design',
            price: '$1000/ mo',
            offerItem: [
                'Dedicated Designer',
                'Unlimited requests',
                'Unlimited brand profiles',
                'Native source files',
                'Real-time collaboration',
                'Banner Ads',
                'Clothing & Merchandise Design',
                'Packaging & Label',
                'Logo & Brand Guide'
            ]
        },
        {
            id: 3,
            title: 'Development',
            price: '$1000/ mo',
            offerItem: [
                'Dedicated Designer',
                'Unlimited requests',
                'Unlimited brand profiles',
                'Native source files',
                'Real-time collaboration',
                'Banner Ads',
                'Clothing & Merchandise Design',
                'Packaging & Label',
                'Logo & Brand Guide'
            ]
        },
    ]

    const pricingCardUi = item => (
        <div className={style.pricing__card} key={item?.id} onClick={()=> setSelectedItem(item.id)} style={{backgroundColor: selectedItem === item?.id ? '#2D5BFF':'', color:selectedItem === item?.id ? '#fff':''}}>
            <div className={style.card__header}>
                <h4> { item?.title } </h4>
                <p> { item?.price } </p>
            </div>
            <div className={style.card__offer_items}>
                { item?.offerItem.map(serviceItem => <p><IoCheckmarkOutline/> <span> { serviceItem } </span> </p> )}
            </div>
            <button> { item?.price } </button>
        </div>
    )

    return (
        <div className={[style.pricing__container, props.class].join(' ')}>
            <SectionTitle align='center'>Pricing Package Choose Your Plan</SectionTitle>
            <div className={style.pricing__text__container}>
                <p>We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
                <div>
                    <SecondaryButton transform='capitalize'>Monthly</SecondaryButton>
                    <PrimaryButton transform='capitalize'>Yearly</PrimaryButton>
                </div>
            </div>
            <div className={style.pricing__card_container}>
                { service?.map(pricingCardUi) }
            </div>
        </div>
    );
};

export default Pricing;