import React from 'react';
import style from './primaryButton.module.css';

const PrimaryButton = (props) => {
    return (
        <button className={style.Primary__button} style={{textTransform: props.transform}}> { props.children } </button>
    );
};

export default PrimaryButton;