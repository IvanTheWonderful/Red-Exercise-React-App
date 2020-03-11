import React from "react";
import "./Div-Hero.css";
import Logo from "./Div-Hero-Logo/Div-Hero-Logo.js";
import Contact from "./Div-Hero-Contact/Div-Hero-Contact.js"

const Hero = () => {
    return (
        <div className="Div-Hero">
            <Logo />
            <Contact />
        </div>
    )
}

export default Hero;