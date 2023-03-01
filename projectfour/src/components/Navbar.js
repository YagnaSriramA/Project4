import React from "react";
import '../style.css'
import logo from '../images/airbnb-logo.png'

function Navbar()
{
    return(
        <nav className="nav-bar">
            <img src={logo} alt="logo" className="logo"></img>
        </nav>
    )
}

export default Navbar