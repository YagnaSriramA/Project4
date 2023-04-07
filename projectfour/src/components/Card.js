import React from "react";
import '../style.css'
import star from '../images/star.png'

function Card(props)
{
    let badgeText
    
    if(props.openspots === 0)
    {
        badgeText="SOLD OUT"
    }
    else if(props.location === "Online")
    {
        badgeText="ONLINE"
    }
    return(
        <div className="card-section">
        {badgeText && <div className="card--badge">{badgeText}</div>}    
                <img src={`${process.env.PUBLIC_URL}/images/${props.coverImg}`} alt="athlete"></img>
                <div className="starline-contents">
                    <img src={star} alt="star" className="star"></img>
                    <p className="rating">{props.stats.rating}</p>
                    <p className="rating-rest">({props.stats.reviewCount}) {props.location}</p>
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