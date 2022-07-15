import React from 'react';
import style from './SectionTitle.module.css';

const SectionTitle = (props) => {
    return (
        <div className={style.title__container} style={{alignItems: `${props.align}`}}>
            <h3>{ props.children }</h3>
            <img src="./Images/underline.png" alt="underline" />
        </div>
    );
};

export default SectionTitle;