import React from "react";
import '../style.css'
import grid from '../images/photo-grid.png'

function Hero()
{
    return(
        <div>
            <div className="only-grid">
                <img src={grid} alt="grid" className="grid"></img>
            </div>
            <div className="only-text">
                <p className="only-text-header">Online Experiences</p>
                <p className="only-text-para">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
            </div>
        </div>
    )
}

export default Hero