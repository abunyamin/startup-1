import React from 'react';
import { FaBars } from "react-icons/fa";

const Header = () => {

  return(
    <>
      <header>
        <div className="logo">
          <div className="logo__image"><img src="https://i.ibb.co/58Xtybs/Group-1logo.png" alt="Logo Start" /></div>
          <div className="logo__text">Start</div>
        </div>
        <ul className="nav-menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">Portofolio</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div className="nav-bar">
<FaBars />
        </div>
    </header>
    </>
  )
}

export default Header;