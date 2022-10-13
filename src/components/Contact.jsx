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

<div className="contact__row">
<div className="contact__row-1">
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" placeholder="Name..." />
        <label htmlFor="email">Email</label>
        <input type="text" name="email" placeholder="Email..." />
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message"></textarea>
      <button className="contact__button">Submit</button>
      </form>
    </div>
    <div className="contact__row-2">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.2541403318883!2d107.91851571431641!3d-6.860114969022125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68d10cffffffff%3A0x3195814444157c42!2sAlun-alun%20Sumedang!5e0!3m2!1sen!2sid!4v1665621517763!5m2!1sen!2sid" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</div>

    </div>
    </div>
  </>;
};

export default Contact;
