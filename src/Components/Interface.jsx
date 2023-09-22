import React from "react";
import { useState } from "react";
import '../css/interface.css'
import logo from '../images/portfolio-png.png';
import { NavLink, Outlet } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";


function Interface() {
    const [isVisible, setIsVisible] = useState(false)
    const [ambuVisible, setAmbuVisible] = useState(true)
    const navClass = isVisible ? "navClass" : "hide"
    const amburger = ambuVisible ? "amburger" : "hide"
    const handleClick = () => {
        setIsVisible(!isVisible)
        setAmbuVisible(!ambuVisible)
    }
    return (
        <div className="body">
            <header>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="navigation">
                    <ul>
                        <li><NavLink to="/">Accueil</NavLink></li>
                        <li><NavLink to="about">À propos</NavLink></li>
                        <li><NavLink to="project">Résumé</NavLink></li>
                        <li><NavLink to="contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className={navClass}>
                    <ul>
                        <li onClick={()=>handleClick()}><NavLink to="/">Accueil</NavLink></li>
                        <li onClick={()=>handleClick()}><NavLink to="about">À propos</NavLink></li>
                        <li onClick={()=>handleClick()}><NavLink to="project">Résumé</NavLink></li>
                        <li onClick={()=>handleClick()}><NavLink to="contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className={amburger} onClick={()=>handleClick()}>
                    <IconContext.Provider value={{ size: 30 }}>
                        <RxHamburgerMenu />
                    </IconContext.Provider>
                </div>
            </header>
            <main>
                <div className="container-fluid">
                    <Outlet />
                </div>
            </main>
            <footer>
                <div className="footer">
                    <h6>NahRaj copyright© 2023 </h6>
                </div>
            </footer>
        </div>
    )
}

export default Interface