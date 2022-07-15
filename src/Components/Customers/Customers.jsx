import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

// style
import style from './Customers.module.css';

// customer image
import customer1 from '../../Assets/Images/customer/customer-1.png';
import customer2 from '../../Assets/Images/customer/customer-2.png';
import customer3 from '../../Assets/Images/customer/customer-3.png';
import customer4 from '../../Assets/Images/customer/customer-4.png';

const Customers = (props) => {

    const customer = [
        { id: 1, img: customer1 },
        { id: 2, img: customer2 },
        { id: 3, img: customer3 },
        { id: 4, img: customer4 },
    ]

    return (
        <div className={`${props.class}`}>
            <SectionTitle align='center'>Our Customers</SectionTitle>
            <div className={style.customer__container}>
                { customer?.map(item => <img src={item.img} alt="customer" key={item.id} />) }
            </div>
        </div>
    );
};

export default Customers;