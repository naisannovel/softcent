import React from 'react';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';
import SecondaryButton from '../../Shared/SecondaryButton/SecondaryButton';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import style from './Product.module.css';

const Product = (props) => {
    return (
        <div className={[style.product__full__container, props.class].join(' ')}>

            <div className={style.product__container}>
                <SectionTitle align='flex-start'>Our Products</SectionTitle>
                <div>
                    <p>We believe that great design should not be out of reach, so our services are less than half the price of a full-time designer.</p>
                    <PrimaryButton transform='capitalize'>See More</PrimaryButton>
                </div>
            </div>

            {/* SwipeXYZ Product */}
            <div className={style.SwipeXYZ__product_container}>
                <div className={style.SwipeXYZ__product__text_container}>
                    <h3>SwipeXYZ Product</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <SecondaryButton transform='capitalize'>View product</SecondaryButton>
                </div>
                <div className={style.SwipeXYZ__product__img_container}>
                    <img src={require('../../Assets/Images/i-1.png')} alt="iphone"/>
                    <img src={require("../../Assets/Images/i-4.png")} alt="iphone"/>
                </div>
            </div>

            {/* Cashback Product */}
            <div className={style.cashback__product_container}>
                <div className={style.SwipeXYZ__product__img_container}>
                    <img src={require('../../Assets/Images/i-2.png')} alt="iphone"/>
                    <img src={require("../../Assets/Images/i-3.png")} alt="iphone"/>
                </div>
                <div className={style.SwipeXYZ__product__text_container}>
                    <h3>Cashback Product</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <SecondaryButton transform='capitalize'>View product</SecondaryButton>
                </div>
            </div>

        </div>
    );
};

export default Product;