import React from 'react';

const Header = () => {

  return(
    <>
    <div className="container">
    <section className="partner">
      <div className="partner__head">
        <div className="partner__title">PARTNERS</div>
        <h1 className="partner__main-text">Lorem ipsum dolor.</h1>
        <div className="partner__desc">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
    <div className="partner__list">
<img src="https://i.ibb.co/k9Jynhp/XMLID-24-google.png" alt="Google" />
<img src="https://i.ibb.co/YQDJwRT/XMLID-1-microsoft.png" alt="Microsoft" />
<img src="https://i.ibb.co/Gc1snCb/XMLID-1-airbnb.png" alt="Airbnb" />
<img src="https://i.ibb.co/mGTdZkv/Groupfacebook.png" alt="Facebook" />
<img src="https://i.ibb.co/QM4TS6T/XMLID-1-spotify.png" alt="Spotify" />
    </div>
    <button className="partner__button">Learn More</button>
    </section>
    </div>
    </>
  )
}

export default Header;