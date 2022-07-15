import React, { useState } from "react";
import Logo from "../../Shared/Logo";
import PrimaryButton from "../../Shared/PrimaryButton/PrimaryButton";
import style from "./navbar.module.css";

const Navbar = () => {

  const [navScroll,setNavScroll] = useState(false)

  const scrollHandler = ()=>{
    if(window.scrollY >= 80){
        setNavScroll(true)
    }else{
        setNavScroll(false)
    }
  }

  window.addEventListener('scroll',scrollHandler)

  return (
    <div className={style.navbar__full_container} style={{backgroundColor:navScroll ? 'white':''}}>
        <div className={style.navbar__container}>
        <Logo />
        <ul className={style.nav__item_container}>
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
          <li>
            <a href="#">work</a>
          </li>
          <li>
            <a href="#">premium products</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <PrimaryButton transform='uppercase'>Start a project</PrimaryButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
