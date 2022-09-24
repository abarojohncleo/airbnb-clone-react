import React from "react";
import './Navbar.css';
import logo from '../assets/airbnb 1.png';

export default function Navbar(){
    return(
        <nav className="header">
            <img src={logo} alt=""/>
        </nav>
    )
}