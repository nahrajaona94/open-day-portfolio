import React from "react";
import '../css/home.css'
import Typewriter from "typewriter-effect";
import profil from '../images/pdpPNG2.png';
import react from '../images/react2.png';
import symfony from '../images/symfony2.png';
import html from '../images/html.png';
import css from '../images/css.png';
import bootstrap from '../images/bootstrap.png';
import python from '../images/python.png';

function Home() {

    return (
        <div className="home">
            <div className="name">
                <h3>RAJAONA NANDRANDRAINA</h3>
                <h3>Anjara Antra</h3>
            </div>
            <div className="pdp">
                <img src={profil} alt="pdp" />
            </div>
            <div className="typewriter">
                <Typewriter
                    options={
                        {
                            autoStart: true,
                            loop: true,
                            delay: 40,
                            strings: [
                                "<b>What matters is inside.</b>",
                                "<b>Développeur web.</b>",
                                "<b>React Js</b>",
                                "<b>Symfony</b>",
                                "<b>HTML</b>",
                                "<b>CSS</b>",
                                "<b>Bootstrap</b>",
                                "<b>Python</b>",
                            ],
                        }
                    } />
            </div>
            <div className="specialite">
                <ul>
                    <li><img src={react} alt="" className="taille" /></li>
                    <li><img src={symfony} alt="" className="taille" /></li>
                    <li><img src={html} alt="" className="taille" /></li>
                    <li><img src={css} alt="" className="taille" /></li>
                    <li><img src={bootstrap} alt="" className="taille" /></li>
                    <li><img src={python} alt="" className="taille" /></li>
                </ul>
            </div>
        </div>
    )
}


export default Home