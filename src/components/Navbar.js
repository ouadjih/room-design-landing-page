import React from "react";
import "./Navbar.css";
import logo from '../asset/images/logo.svg'
export const Navbar = () => {
  return (
    <nav class="navbar">
      <img class="logo" src={logo} alt="room" />
      <ul class="nav-items">
        <li class="item">Home</li>
        <li class="item">Shop</li>
        <li class="item">About</li>
        <li class="item">Contact</li>
      </ul>
    </nav>
  );
};
