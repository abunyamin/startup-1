import React from 'react';
import './Contact.css'

const Contact = () => {
  return <>
  <div className="container">
  <div className="contact">
    <div className="contact__head">
      <div className="contact__head--top">CONTACT</div>
      <div className="contact__head--title">Contact Us</div>
      <div className="contact__list--desc">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </div>
    </div>

    <div className="contact__row-1">
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Name..." />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="Email..." />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" cols="30" rows="10"></textarea>
      <button className="button__contact">Submit</button>
      </form>
    </div>
    <div className="contact__row-2"></div>
    </div>
    </div>
  </>;
};

export default Contact;
