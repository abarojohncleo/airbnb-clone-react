import React from "react";
import './Card.css';
import star from '../assets/star.svg';

export default function Cards(props){
    let badgeText
    if(props.openSpot === 0){
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img src={props.coverImg} alt="" className="card-image"/>
            <div className="card-stat">
                <img src={star} alt="" width="20px" className="card-star"/>
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount})*</span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card-title">{props.title}</p>
            <p> <span className="bold">From {props.price}</span> / person</p>
        </div>
    )
}