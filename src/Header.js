import React, { Component } from "react";

import { avatar } from "./images/images.js";

import {
  NavLink
} from "react-router-dom";

class Header extends Component {
  render() {
    return (

<div id="header">
<div className="top">
    
        <div id="logo">
            <span className="image avatar48"><img src={avatar} alt="" /></span>
            <h1 id="title">Your Name</h1>
            <p>Example Portfolio</p>
        </div>

        <nav id="nav">
            <ul>
                <li><NavLink exact to="/" id="top-link"><span className="icon solid fa-home">Intro</span></NavLink></li>
                <li><NavLink to="/portfolio" id="portfolio-link"><span className="icon solid fa-th">Portfolio</span></NavLink></li>
                <li><NavLink to="/about" id="about-link"><span className="icon solid fa-user">About Me</span></NavLink></li>
                <li><NavLink to="/contact" id="contact-link"><span className="icon solid fa-envelope">Contact</span></NavLink></li>
            </ul>
        </nav>
    </div>

    <div className="bottom">

        <ul className="icons">
            <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
            <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
            <li><a href="#" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
        </ul>

    </div>
</div>
);
  }
}
 
export default Header;