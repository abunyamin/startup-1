import React from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {

  return(
    <>
      <header>
        <div className="logo">
          <div className="logo__image"><img src="https://i.ibb.co/58Xtybs/Group-1logo.png" alt="Logo Start" /></div>
          <div className="logo__text">Start</div>
        </div>
        <ul className="nav-menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">Portofolio</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
        <div className="nav-bar">
<FaBars />
        </div>
    </header>
    </>
  )
}

export default Header;