import React from "react";
import '../style.css'
import star from '../images/star.png'

function Card(props)
{
    return(
        <div className="card-section">
            
                <img src={`${process.env.PUBLIC_URL}/images/${props.img}`} alt="athlete"></img>
                <div className="starline-contents">
                    <img src={star} alt="star" className="star"></img>
                    <p className="rating">{props.rating}</p>
                    <p className="rating-rest">({props.reviewCount}) {props.country}</p>
                </div>
                <div>
                    <p>{props.title}</p>
                </div>
                <div>
                    <p><b>From ${props.price}</b> / person</p>
                </div>
            
        </div>
    )
}

export default Card