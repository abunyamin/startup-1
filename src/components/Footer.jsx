import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest, FaTiktok, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Footer = () => {

  return(
    <>
    <footer>
      <div className="socmed">
<FaFacebookF />
<FaInstagram />
<FaTwitter />
<FaPinterest />
<FaTiktok />
<FaWhatsapp />
<FaYoutube />
      </div>
      <div className="copyright">
      © Start, 2022. All rights reserved.
      </div>
    </footer>
    </>
  )
}

export default Footer;