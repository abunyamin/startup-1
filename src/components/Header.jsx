import React from 'react';
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {

  return(
    <>
      <header><NavLink href="/">
        <div className="logo">
          <div className="logo__image"><img src="https://i.ibb.co/58Xtybs/Group-1logo.png" alt="Logo Start" /></div>
          <div className="logo__text">Start</div>
        </div>
        </NavLink>
        <ul className="nav-menu">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/about">Portofolio</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        <div className="nav-bar">
  <FaBars />
        </div>
    </header>
    </>
  )
}

export default Header;