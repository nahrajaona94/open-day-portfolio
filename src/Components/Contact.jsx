import React from "react";
import '../css/contact.css';
import { BsFillTelephoneFill, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { IconContext } from "react-icons";

function Contact() {
    return (
        <div className="contact">
            <h3>Pour me contacter</h3>
            <div className="info2 mt-3">
                <div className="tel">
                    <BsFillTelephoneFill />  <a href="tel:+261325261573" className="orange">+261 32 52 615 73</a> / <a href="tel:+261341871296" className="telma">+261 34 18 712 96</a>
                </div>
                <div className="mail">
                    <AiFillMail /> <a href="mailto:nahrajaona.contact@gmail.com">nahrajaona.contact@gmail.com</a>
                </div>
                <div className="adresse">
                    <BiMap /> Lot F3LyTerE Antsahameva, Andraisoro
                </div>
            </div>
            <div className="info3 mt-5">
                <a href="https://www.facebook.com/jud.as.5876" className="facebook">
                    <IconContext.Provider value={{ size: 30 }}>
                        <BsFacebook />
                    </IconContext.Provider>
                    <span className="span">Facebook</span>
                </a>
                <a href="https://www.linkedin.com/in/anjara-antra-rajaona-572618257/" className="linkedin offset-md-1">
                    <IconContext.Provider value={{ size: 30 }}>
                        <BsLinkedin />
                    </IconContext.Provider>
                    <span className="span">Linkedin</span>
                </a>
            </div>
        </div>
    )
}

export default Contact