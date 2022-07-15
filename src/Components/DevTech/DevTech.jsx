import React, { useState } from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import style from './DevTech.module.css';

const DevTech = (props) => {

    const [selectedItem, setSelectedItem] = useState(1)

    let selectedUI = 
            <div className={style.tech__container}>
                <img src={require("../../Assets/Images/tech-1.png")} alt="php"/>
                <img src={require("../../Assets/Images/tech-2.png")} alt="js"/>
                <img src={require("../../Assets/Images/tech-3.png")} alt="html"/>
                <img src={require("../../Assets/Images/tech-4.png")} alt="css"/>
                <img src={require("../../Assets/Images/tech-5.png")} alt="css"/>    
            </div>

        if(selectedItem === 2){
            selectedUI = 
                <div className={style.tech__container}>
                    <img src={require("../../Assets/Images/tech-5.png")} alt="css"/>    
                    <img src={require("../../Assets/Images/tech-3.png")} alt="html"/>
                    <img src={require("../../Assets/Images/tech-2.png")} alt="js"/>
                    <img src={require("../../Assets/Images/tech-1.png")} alt="php"/>
                    <img src={require("../../Assets/Images/tech-4.png")} alt="css"/>
                </div>
        }else if(selectedItem === 3) {
            selectedUI = 
                <div className={style.tech__container}>
                    <img src={require("../../Assets/Images/tech-2.png")} alt="js"/>
                    <img src={require("../../Assets/Images/tech-4.png")} alt="css"/>
                    <img src={require("../../Assets/Images/tech-3.png")} alt="html"/>
                    <img src={require("../../Assets/Images/tech-5.png")} alt="css"/>    
                    <img src={require("../../Assets/Images/tech-1.png")} alt="php"/>
                </div>
        }else if(selectedItem === 4) {
            selectedUI = 
                <div className={style.tech__container}>
                    <img src={require("../../Assets/Images/tech-5.png")} alt="css"/>    
                    <img src={require("../../Assets/Images/tech-2.png")} alt="js"/>
                    <img src={require("../../Assets/Images/tech-1.png")} alt="php"/>
                    <img src={require("../../Assets/Images/tech-4.png")} alt="css"/>
                    <img src={require("../../Assets/Images/tech-3.png")} alt="html"/>
                </div>
        }

    return (
        <div className={props.class}>
            <SectionTitle align='center'>Our Dev Technology</SectionTitle>
            <div className={style.devTech__title_container}>
                <h5 onClick={()=> setSelectedItem(1)} style={{borderBottom: selectedItem === 1 ? "4px solid #3088FF" : ''}}>Programming Languages</h5>
                <h5  onClick={()=> setSelectedItem(2)} style={{borderBottom: selectedItem === 2 ? "4px solid #3088FF" : ''}}>Frameworks</h5>
                <h5  onClick={()=> setSelectedItem(3)} style={{borderBottom: selectedItem === 3 ? "4px solid #3088FF" : ''}}>Databases</h5>
                <h5  onClick={()=> setSelectedItem(4)} style={{borderBottom: selectedItem === 4 ? "4px solid #3088FF" : ''}}>Mobile Platforms</h5>
            </div>
            <div>
                { selectedUI }
            </div>
        </div>
    );
};

export default DevTech;