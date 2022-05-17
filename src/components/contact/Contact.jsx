import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tam8vzn', 'template_vlqgems', form.current, 'o0oyJofgvCEdUmcoX')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get in touch!</h5>
      <h2>Contact me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>p.wyrebek@outlook.com</h5>
            <a href="mailto:p.wyrebek@outlook.com" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>PW</h5>
            <a href="https://m.me/piotr.wyrebek" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Phone</h4>
            <h5>+48 737 690 397</h5>
            <div className='call__me'>Call me!</div>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your name' required />
          <input type="email" name="email" placeholder='Your email' required />
          <textarea name="message" rows="10" placeholder='Your message' required></textarea>
          <button type='submit' className="btn btn-full">Send</button>
        </form>


      </div>
    </section>
  )
}

export default Contact