import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import style from './DesignTech.module.css';

const DesignTech = (props) => {
    return (
        <div className={props.class}>
            <SectionTitle align='center'>Our Design Technology</SectionTitle>
            <div className={style.designTech__item_container}>
                    <img src={require("../../Assets/Images/design-1.png")} alt="AI"/>    
                    <img src={require("../../Assets/Images/design-2.png")} alt="In"/>
                    <img src={require("../../Assets/Images/design-3.png")} alt="Xd"/>
                    <img src={require("../../Assets/Images/design-4.png")} alt="Xd"/>
                    <img src={require("../../Assets/Images/design-5.png")} alt="Ps"/>
            </div>
        </div>
    );
};

export default DesignTech;