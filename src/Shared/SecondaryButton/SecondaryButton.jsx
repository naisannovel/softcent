import React from 'react';
import style from './SecondaryButton.module.css';

const SecondaryButton = (props) => {
    return (
        <button className={style.Primary__button} style={{textTransform: props.transform}}> { props.children } </button>
    );
};

export default SecondaryButton;