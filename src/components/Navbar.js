import React, { useState } from "react";
import "./Navbar.css";
import logo from '../asset/images/logo.svg'
import hamburger from '../asset/images/icon-hamburger.svg'
export const Navbar = () => {
  const [navphone,setNavphone]= useState(false);

  return (
    <nav className="navbar">
      <img src={hamburger} className="hamburger" alt="hamburger"/>
      <img className="logo" src={logo} alt="room" />
      <ul className="nav-items">
        <li className="item">Home</li>
        <li className="item">Shop</li>
        <li className="item">About</li>
        <li className="item">Contact</li>
      </ul>
      
      {navphone && <ul className="navphone">
        <li className="item-phone"></li>
        <li className="item-phone">Home</li>
        <li className="item-phone">Shop</li>
        <li className="item-phone">About</li>
        <li className="item-phone">Contact</li>
      </ul>}
    </nav>
  );
};
