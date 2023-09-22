import React from "react";
import '../css/about.css';
import flagMada from '../images/flagMADA.png';
import flagFR from '../images/flagFR.png';
import flagANG from '../images/flagANG.png';
import basket from '../images/basket2.png';
import foot from '../images/foot.png';
import man from '../images/man.png';
import babi from '../images/babyfoot.png'
import { IconContext } from "react-icons";
import { BsFillTelephoneFill, BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import {
    SiMicrosoftoffice,
    SiMicrosoftword,
    SiMicrosoftexcel,
    SiMicrosoftpowerpoint,
    SiAdobe,
    SiAdobephotoshop,
    SiAdobedreamweaver,
    SiCanva
} from 'react-icons/si';

function About() {
    return (
        <div className="about">
            <div className="info col-md-4">
                <div className="info1">
                    <div className="about-jsuis">
                        <h2>Je suis,</h2>
                    </div>
                    <div className="about-name">
                        <h3>RAJAONA NANDRANDRAINA</h3>
                    </div>
                    <div className="about-fname">
                        <h3>Anjara Antra</h3>
                    </div>
                    <div className="about-situation">
                        <p>29 ans, Marié, Malagasy</p>
                    </div>
                </div>
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
            <div className=" col-md-4  competence">
                <h3>Compétences en informatique</h3>
                <p className="mt-3">
                    <IconContext.Provider value={{ size: 30 }}>
                        <SiMicrosoftoffice />
                    </IconContext.Provider>
                    <b className="margin">Microsoft Office :</b>
                    <br />
                    <IconContext.Provider value={{ size: 20 }}>
                        <SiMicrosoftword className="world" />
                    </IconContext.Provider>
                    <span className="span">Microsoft Word</span>
                    <br />
                    <IconContext.Provider value={{ size: 20 }}>
                        <SiMicrosoftexcel className="world" />
                    </IconContext.Provider>
                    <span className="span">Microsoft Excel</span>
                    <br />
                    <IconContext.Provider value={{ size: 20 }}>
                        <SiMicrosoftpowerpoint className="world" />
                    </IconContext.Provider>
                    <span className="span">Microsoft Powerpoint</span>
                    <br />
                    <br />
                    <IconContext.Provider value={{ size: 30 }}>
                        <SiAdobe />
                    </IconContext.Provider>
                    <b className="margin">Adobe Master Collection :</b>
                    <br />
                    <IconContext.Provider value={{ size: 20 }}>
                        <SiAdobephotoshop className="world" />
                    </IconContext.Provider>
                    <span className="span">Photoshop</span>
                    <br />
                    <IconContext.Provider value={{ size: 20 }}>
                        <SiAdobedreamweaver className="world" />
                    </IconContext.Provider>
                    <span className="span">Dreamweaver</span>
                    <br />
                    <br />
                    <IconContext.Provider value={{ size: 30 }}>
                        <SiCanva />
                    </IconContext.Provider>
                    <b className="margin">Canva</b>
                </p>
            </div>
            <div className="col-md-3  langue-loisir">
                <div className="langue">
                    <h3>Langues</h3>
                    <p>
                        <img src={flagMada} alt="flag" className="flag" /> : Très bien : Parlé et écrit
                        <br />
                        <img src={flagFR} alt="flag" className="flag" /> : Bien : Parlé et écrit
                        <br />
                        <img src={flagANG} alt="flag" className="flag" /> : Passable : Parlé et écrit
                    </p>
                </div>
                <div className="loisir">
                    <h3>Centre de loisir</h3>
                    <p>
                        <img src={man} alt="chanter" className="sport" /> Chanter <br />
                        <img src={basket} alt="basket" className="sport" /> Jouer au Bascketball <br />
                        <img src={foot} alt="foot" className="sport" /> Jouer au FootBall <br />
                        <img src={babi} alt="babi" className="sport" /> Jouer au BabiFoot
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About