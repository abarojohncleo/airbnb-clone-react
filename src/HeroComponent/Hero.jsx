import React from "react";
import './Hero.css';
import photo_grid from '../assets/photogrid airbnb.png';

export default function Hero() {
    return(
        <section className="hero">
            <img src={photo_grid} alt="" className="hero_photo_grid"/>
            <h1 className="hero_banner">Online Experiences</h1>
            <p className="hero_tag">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}