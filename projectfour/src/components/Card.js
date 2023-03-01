import React from "react";
import '../style.css'
import star from '../images/star.png'
import swimmer from '../images/katie-zaferes.png'

function Card()
{
    return(
        <div className="card-section">
            <div className="image-holder">
                <label>SOLD OUT</label>
            </div>
            <div>
                <div className="starline-contents">
                    <img src={star} alt="star" className="star"></img>
                    <p className="rating">5.0</p>
                    <p className="rating-rest">(6) USA</p>
                </div>
                <div>
                    <p>Life lessons with Katie Safares</p>
                </div>
                <div>
                    <p><b>From $136</b> / person</p>
                </div>
            </div>
        </div>
    )
}

export default Card