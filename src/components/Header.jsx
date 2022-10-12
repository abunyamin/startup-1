import React from 'react';
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {

  return(
    <>
      <header>
        <div className="logo"><NavLink href="/">
          <div className="logo__image"><img src="https://i.ibb.co/58Xtybs/Group-1logo.png" alt="Logo Start" /></div>
          <div className="logo__text">Start</div>
          </NavLink>
        </div>
        <ul className="nav-menu">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/about">Portofolio</NavLink></li>
          <li><NavLink href="/services">Services</NavLink></li>
          <li><NavLink href="/contact">Contact</NavLink></li>
        </ul>
        <div className="nav-bar">
  <FaBars />
        </div>
    </header>
    </>
  )
}

export default Header;