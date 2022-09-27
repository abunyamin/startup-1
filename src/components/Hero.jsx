import React from 'react';

const Hero = () => {

  return(
    <>
    <div className="hero">
      <div className="col-1">
        <div className="hero__welcome">WELCOME</div>
        <div className="hero__title">Lorem ipsum dolor sit amet consectetur.
        </div>
        <div className="hero__desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint qui doloribus mollitia commodi nostrum, quas debitis. Et alias autem laudantium!</div>
        <button className="hero__button">Explore</button>
      </div>
      <div className="col-2">
        <img src="https://i.ibb.co/pLMCnQV/hero-image.png" alt="Hero Image" />
      </div>

    </div>
    </>
  )
}

export default Hero;