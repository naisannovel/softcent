import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import style from "./WhatWeDo.module.css";

// image of icon
import icon1 from "../../Assets/Images/we-do-1.png";
import icon2 from "../../Assets/Images/we-do-2.png";

const WhatWeDo = (props) => {

  const service = [
    {
      id: 1,
      icon: icon1,
      title: "Branding",
      service: ["Brand Strategy", "Social media", "Marketing Assets", "Presentations", "Build MVP Version", "Pitch Deck"],
    },
    {
      id: 2,
      icon: icon2,
      title: "UI/UX Design",
      service: ["User Interface", "User Experience", "Design System", "Wireframe", "Prototype", "Website & Mobile App", "IOS + Android"],
    },
    {
      id: 3,
      icon: icon2,
      title: "Development",
      service: ["Front End (HTML, CSS, React)", "Backend (Node.js, MongoDB)", "iOS (Swift)", "Android (Kotlin, Flutter)", "Blockchain Development (NFT)"],
    },
  ];

  const serviceItemUI = serviceItem => (
    <div className={style.serviceItemUI__container}>
      <div>
        <img src={serviceItem.icon} alt="icon" />
        <h4>{serviceItem?.title}</h4>
      </div>
      {serviceItem?.service?.map(item =>  <p>{item}</p> )}
    </div>
  );

  return (
    <div className={`${props.class}`}>
      <SectionTitle align="flex-start">What We Do</SectionTitle>
      <div className={style.whatWeDo__container}>
        {service?.map(serviceItemUI)}
      </div>
    </div>
  );
};

export default WhatWeDo;
