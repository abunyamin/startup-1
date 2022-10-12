import React from 'react'
import { RiCheckFill } from 'react-icons/ri'
import './Services.css'

const Services = () => {

  const card = [
    {title: 'Basic', price: 100},
    {title: 'Plus', price: 250},
    {title: 'Pro', price: 400}
  ]

  return(<>
  <div className="container">
  <div className="services">
    <div className="service__head">
      <div className="service__head--top">PLANS</div>
      <div className="service__head--title">Our Services</div>
      <div className="service__list--desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </div>
    </div>
  
  <div className="service__list">
    <div className="service__card">
      <div className="service__card--head">
        <div className="service__card--head-title">Basic</div>
        <div className="service__card--head-price">
          <span>$100</span>
          <span>/month</span>
        </div>
        <div className="service__card--head-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet quod odio eligendi dignissimos eveniet alias.
          </div>
      </div>
    <ul className="service__card--features">
      <li>
        <div className="icon__features"><RiCheckFill /></div>
        <span>Lorem ipsum dolor sit.</span>
      </li>
      <li>
        <div className="icon__features"><RiCheckFill /></div>
        <span>Lorem ipsum dolor sit.</span>
      </li>
      <li>
        <div className="icon__features"><RiCheckFill /></div>
        <span>Lorem ipsum dolor sit.</span>
      </li>
      <li>
        <div className="icon__features"><RiCheckFill /></div>
        <span>Lorem ipsum dolor sit.</span>
      </li>
      <li>
        <div className="icon__features"><RiCheckFill /></div>
        <span>Lorem ipsum dolor sit.</span>
      </li>
    </ul> 
    
<div className="service__button learnmore__button">Learn More</div> 
    </div>
  </div>

    </div>
    </div>
    </>)
}

export default Services;