import React from 'react';
import Logo from '../../Shared/Logo';
import style from './Footer.module.css';

// icons
import { IoLogoFacebook, IoLogoWhatsapp, IoLogoTwitter, IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
    return (
        <div className={style.footer__full__container}>
            <div className={style.footer__container}>

                <div className={style.action__container}>
                    <p>Looking for a Software Partner?</p>
                    <button>Start A Project</button>
                </div>

                <div className={style.footer__sub_container}>
                    <div className={style.footer__company__info}>
                        <Logo/>
                        <p>Get a fully stacked design team that will give you accessible design, exhaustive research, and an outstanding experience.</p>
                        <span>Email: info@softcent.eu</span>
                        <span>Phone: +(372) 57836500</span>
                        <div>
                            <IoLogoFacebook/>
                            <IoLogoWhatsapp/>
                            <IoLogoTwitter/>
                            <IoLogoInstagram/>
                        </div>
                    </div>

                    <div>
                        <h5>Company</h5>
                        <p>About us</p>
                        <p>Our portfolio</p>
                        <p>Our Product</p>
                        <p>Our Team</p>
                        <p>Our Priceing</p>
                        <p>Testimonials</p>
                        <p>Contact Us</p>
                    </div>

                    <div>
                        <h5>Our Service</h5>
                        <p>Marketing</p>
                        <p>UI/UX Design</p>
                        <p>Graphic Design (Branding)</p>
                        <p>Development</p>
                        <p>New Products</p>
                    </div>

                    <div>
                        <h5>Supports</h5>
                        <p>FAQs</p>
                        <p>Support Policy</p>
                        <p>Privacy Policy</p>
                        <p>Trams of Service</p>
                        <p>Refund Policy</p>
                    </div>
                </div>

                <hr className={style.horizontal__line} />

                <p className={style.copyright__text}>© 2022, Softcent EU, A European IT company</p>
            </div>
        </div>
    );
};

export default Footer;