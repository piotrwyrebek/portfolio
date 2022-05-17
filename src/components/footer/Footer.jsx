import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaFacebook} from 'react-icons/fa'
import logo from '../../assets/JK JA ffffff.png'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"><img src={logo} alt="" /></a>

      <ul className="navlinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <ul className="footer__socials">
        <a href="https://facebook.com"><FaFacebook /></a>
        <a href="https://linkedin.com"><BsLinkedin /></a>
      </ul>
    </footer>
  )
}

export default Footer